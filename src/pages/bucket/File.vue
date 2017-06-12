<template>
    <div @keyup.enter="searchValue !== '' && searchFile(searchValue)">
        <div class="layout-bsc-toolbar">
            <bsc-breadcrumb>
                <bsc-breadcrumb-item href="/">{{$t("STORAGE.TITLE")}}</bsc-breadcrumb-item>
                <bsc-breadcrumb-item :href="getUrl('noprefix')">{{bucket}}</bsc-breadcrumb-item>
                <bsc-breadcrumb-item v-for="bc in breadcrumb" :href="getUrl(bc.prefix)" :key="bc.text">{{bc.text}}</bsc-breadcrumb-item>
            </bsc-breadcrumb>
        </div>
        <Row class="toolbar-nav">
            <Col span="10">
                <div>
                    <Button type="primary" @click="upload">{{$t("STORAGE.UPLOAD_FILE")}}</Button>
                    <Button type="primary" @click="createFolderModal = true">{{$t("STORAGE.CREATE_FOLDER")}}</Button>
                    <Button type="primary" @click="batchDownload" :disabled="!selectedFileList.length > 0">{{$t("STORAGE.DOWNLOAD_FILES")}}</Button>
                    <Button @click="batchDeleteFileConfirm" :disabled="!selectedFileList.length > 0">{{$t("STORAGE.DELETE_FILES")}}</Button>
                </div>
            </Col>
            <Col span="14" style="text-align:right">
                <div class="section-search">
                    <span class="bsc-input">
                        <span class="input-append-before">{{prefix}}</span>
                        <input type="text" @focus="searchInputFocus = true" v-model="searchValue" />
                        <Button type="text" size="small" @click="searchFile(searchValue)"><Icon type="search" :size="iconSize"></Icon></Button>
                    </span>
                </div>
            </Col>
        </Row>
        <Modal v-model="copyModal">
            <div style="text-align:left">
                {{$t("STORAGE.COPY_LINK_CONFIRM",{selectedFileKey})}}
            </div>
            <div slot="footer" class="copy-modal-footer">
                <Button type="text" @click="copyModal = false">
                    <span>{{$t("PUBLIC.CANCLE")}}</span>
                </Button>
                <Button type="info" @click='copyModal = false;$Message.success($t("STORAGE.COPIED"))' :data-clipboard-text="clipUrl" v-clip>{{$t("PUBLIC.COPY")}}</Button>
            </div>
        </Modal>
        <Modal v-model="createFolderModal" :title='$t("STORAGE.ADD_FOLDER")' @on-ok="addFolder" @on-cancel="createFolderValue = ''">
            <Input v-model="createFolderValue" @on-change="check" :placeholder='$t("STORAGE.FOLDER_PLACEHOLDER")'></Input>
            <span class="info-input-error">{{inputCheck ? $t("STORAGE.FOLDER_CHECKINFO") : ''}}</span>
        </Modal>
        <Modal v-model="showImageModal" :title='selectedFileKey || $t("STORAGE.NO_TITLE")'  width="900">
            <div class="section-img">
                <img :src="clipUrl" />
            </div>
            <div slot="footer"></div>
        </Modal>
        <Modal v-model="showPermissonModal" :title='$t("STORAGE.FILE_PERMISSIONS")' width="700">
            <file-permission v-if="showPermissonModal" v-on:permissionSuccess="showPermissonModal = false" :bucket="bucket" :filePrefix="prefix" :itemKey="permissionKey" :show-modal="showPermissonModal"></file-permission>
            <div slot="footer" class="copy-modal-footer">
                 <Button style="visibility:hidden"
                    type="primary">{{$t("STORAGE.SAVE_PERMISSIONS")}}</Button>
            </div>
        </Modal>
        <a download id="element-download" style="display:none"><span id="span-download"></span></a>
        <Table :show-header="showHeader" :stripe="true" :context="self" :highlight-row="true" :columns="fileHeader" :data="fileList" @on-selection-change="select" :no-data-text='$t("STORAGE.NO_FILE")'></Table>
        <div class="section-paging">
            <Tooltip :content='$t("STORAGE.HOME_PAGE")' placement="top"><Button v-show="makerArray.length > 0" @click="getData('',searchValue);makerArray.length = 0" type="ghost"><Icon type="home" size="18"></Icon></Button></Tooltip>
            <Tooltip :content='$t("STORAGE.PRE_PAGE")' placement="top"><Button v-show="makerArray.length > 0" @click="previousPage()" type="ghost"><Icon type="arrow-left-b" size="18"></Icon></Button></Tooltip>
            <Tooltip :content='$t("STORAGE.NEXT_PAGE")' placement="top"><Button v-show="nextMarker" @click="nextPage()" type="ghost"><Icon type="arrow-right-b" size="18"></Icon></Button></Tooltip>
        </div>
    </div>
</template>
<script>
import { getAWS, handler } from '@/service/Aws'
import { bytes, keyFilter, convertPrefix2Router } from '@/service/bucketService'
import bscBreadcrumb from '@/components/breadcrumb'
import Clipboard from 'clipboard'
import moment from 'moment'
import filePermission from './FilePermissions'
export default {
    data () {
        return {
            clipUrl: '',
            searchValue: '',
            copyModal: false,
            nextMarker: '',
            makerArray: [],
            showImageModal: false,
            showPermissonModal: false,
            createFolderModal: false,
            searchMode: false,
            createFolderValue: '',
            selectedFileKey: '',
            selectedFileList: [],
            inputCheck: false,
            fileList: [],
            self: this,
            showHeader: true,
            iconSize: 18,
            fileHeader: fileHeaderSetting,
            permissionKey: '',
            searchInputFocus: false
        }
    },
    components: {
        filePermission, bscBreadcrumb, bscBreadcrumbItem: bscBreadcrumb.Item
    },
    computed: {
        bucket: function () {
            return this.$route.params.bucket
        },
        prefix: function () {
            return this.$route.params.prefix === 'noprefix' ? '' : this.$route.params.prefix
        },
        breadcrumb: function () {
            return convertPrefix2Router(this.prefix)
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        async getData (nextMarker, searchValue = '') {
            this.$Loading.start()
            // this.setLoading(true)
            try {
                let self = this
                let res = await handler('listObjects', {
                    Bucket: this.bucket,
                    Delimiter: '/',
                    MaxKeys: 100,
                    Marker: nextMarker || this.prefix,
                    Prefix: this.prefix + searchValue
                })
                this.nextMarker = res.NextMarker
                this.fileList = await _.forEach(res.CommonPrefixes, (foler) => {
                    foler.Key = keyFilter(foler.Prefix, self.prefix)
                    foler.Type = 'folder'
                    foler.LastModified = ''
                    foler.convertSize = ''
                }).concat(_.forEach(res.Contents, (item) => {
                    item.Key = keyFilter(item.Key, self.prefix)
                    item.convertSize = bytes(item.Size)
                    item.Type = 'file'
                    item.isImage = isImage(item)
                    item.LastModified = moment(item.LastModified).format('YYYY-MM-DD HH:mm')
                }))
                document.querySelector('#app').scrollTop = 0
                this.$Loading.finish()
            } catch (error) {
                this.$Loading.error()
                console.log(error)
            }
        },
        previousPage () {
            let maker = this.makerArray[this.makerArray.length - 2]
            this.makerArray.pop()
            this.getData(maker, this.searchValue)
        },
        nextPage () {
            this.nextMarker && this.makerArray.push(this.nextMarker)
            this.getData(this.nextMarker, this.searchValue)
        },
        searchFile (value) {
            this.searchMode = true
            this.getData(this.prefix, value)
        },
        async addFolder () {
            if (!this.createFolderValue) return
            try {
                await handler('putObject', { Bucket: this.bucket, Key: this.prefix + this.createFolderValue + '/', Body: '' })
                this.$Message.success(this.$t('STORAGE.ADD_FOLDER_SUCCESS'))
                this.getData()
            } catch (error) {
                this.$Message.error(this.$t('STORAGE.ADD_FOLDER_FAILED'))
            }
        },
        async clipModal (file) {
            this.$Loading.start()
            this.clipUrl = await getURL(this.bucket, file, this.prefix)
            this.selectedFileKey = file.Key
            this.copyModal = true
            this.$Loading.finish()
        },
        download (url) {
            document.querySelector('#element-download').href = url
            document.querySelector('#span-download').click()
        },
        async downloadFile (file) {
            let self = this
            if (file.Type === 'file') {
                let url = await getURL(this.bucket, file, this.prefix)
                this.download(url)
            } else {
                let res = await handler('listObjects', {
                    Bucket: this.bucket,
                    Prefix: this.prefix + file.Prefix,
                    Delimiter: '/',
                    Marker: this.prefix + file.Prefix
                })
                _.each(res.Contents, async file => {
                    let url = await getURL(self.bucket, file, self.prefix)
                    self.download(url)
                })
            }
        },
        async imageModal (file) {
            this.$Loading.start()
            this.clipUrl = await getURL(this.bucket, file, this.prefix)
            this.selectedFileKey = file.Key
            this.showImageModal = true
            this.$Loading.finish()
        },
        async permissionModal (file) {
            this.permissionKey = file.Key
            this.showPermissonModal = true
        },
        batchDeleteFileConfirm () {
            this.$Modal.confirm({
                content: this.$t('STORAGE.DELETE_FILES_CONFIRMED'),
                okText: this.$t('PUBLIC.CONFIRMED'),
                cancelText: this.$t('PUBLIC.CANCLE'),
                onOk: () => this.batchDelete()
            })
        },
        deleteFileConfirm (file) {
            this.$Modal.confirm({
                content: this.$t('STORAGE.DELETE_CONFIRMED', {fileName: file.Key}),
                okText: this.$t('PUBLIC.CONFIRMED'),
                cancelText: this.$t('PUBLIC.CANCLE'),
                onOk: () => this.deleteFile(file)
            })
        },
        async deleteFile (file) {
            try {
                if (file.Type === 'file') {
                    await handler('deleteObject', { Bucket: this.bucket, Key: this.prefix + file.Key })
                } else {
                    let res = await handler('listObjects', {
                        Bucket: this.bucket,
                        Prefix: file.Prefix
                    })
                    batchDeleteFileHandle(res.Contents, this.bucket, this.prefix)
                }
                this.fileList.splice(file._index, 1)
                this.$Message.success(this.$t('STORAGE.DELETE_FILES_SUCCESS'))
            } catch (error) {
                this.$Message.error(this.$t('STORAGE.DELETE_FILES_FAILED'))
            }
        },
        async batchDelete () {
            let self = this
            await Promise.all(Array.map(self.selectedFileList, (file) => self.deleteFile(file)))
            self.getData()
        },
        async batchDownload () {
            let self = this
            await Promise.all(Array.map(self.selectedFileList, (file) => self.downloadFile(file)))
        },
        openFolder (item) {
            this.$router.push({ name: 'file', params: { bucket: this.bucket, prefix: item.Prefix } })
        },
        getUrl (prefix) {
            return '/bucket/' + this.bucket + '/prefix/' + repliceAllString(prefix, '/', '%2F')
        },
        upload () {
            this.$router.push({ name: 'upload', params: { bucket: this.bucket, prefix: this.$route.params.prefix } })
        },
        check () {
            this.inputCheck = !this.createFolderValue.length > 0
        },
        select (selection) {
            this.selectedFileList = selection
        },
        setLoading (bol) {
            this.$store.dispatch('setLoading', bol)
        }
    },
    directives: {
        clip: {
            bind: function (el) {
                new Clipboard(el)
            }
        }
    },
    watch: {
        // the fileList array need refresh when the $route value changed
        '$route' (to, from) {
            to.path !== from.path && this.getData()
        }
    }
}

const repliceAllString = (str, oldStr, newStr) => {
    while (str.indexOf(oldStr) > 0) {
        str = str.replace(oldStr, newStr)
    }
    return str
}

const batchDeleteFileHandle = async (list, bucket, prefix) => {
    await Promise.all(Array.map(list, (file) => handler('deleteObject', { Bucket: bucket, Key: file.Key })))
}

const isImage = (file) => !!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(file.Key)

const getURL = async (bucket, file, prefix) => {
    try {
        let params = { Bucket: bucket, Key: prefix + file.Key }
        let s3 = await getAWS()
        let url = await s3.getSignedUrl('getObject', params)
        let acl = await handler('getObjectAcl', params)
        let isAllUser = _.find(acl.Grants, (item) => item.Grantee.URI && item.Grantee.URI === 'http://acs.amazonaws.com/groups/global/AllUsers')
        return isAllUser ? url.split('?')[0] : url
    } catch (error) {
        console.log(error)
    }
}

const fileHeaderSetting = [{
    type: 'selection',
    width: 30,
    align: 'center'
},
{
    title: 'Key',
    key: 'Key',
    width: 240,
    ellipsis: true,
    sortable: true,
    render (row, column, index) {
        return row.Type === 'file' ? `<Icon type="document" style="position: relative;top: 1px;padding-right:4px" size="16"></Icon> <strong>${row.Key}</strong>` : `<Icon type="folder" style="position: relative;top: 1px;padding-right:4px" size="16"></Icon> <strong class="link-folder" @click="openFolder(row)">${row.Key}</strong>`
    }
}, {
    title: 'Size',
    width: 90,
    align: 'right',
    key: 'convertSize'
}, {
    title: 'Create time',
    key: 'LastModified',
    align: 'right',
    width: 140,
    sortable: true
}, {
    title: 'Actions',
    key: 'actions',
    width: 170,
    align: 'right',
    render (row, column, index) {
        return row.Type === 'folder' ? `<Tooltip :content='$t("STORAGE.DELETE_FOLDER")' :delay="1000" placement="top"><i-button size="small" @click="deleteFileConfirm(row)"><Icon type="ios-trash" :size="iconSize"></Icon></i-button></Tooltip>`
            : `<Tooltip :content='$t("STORAGE.FILE_PERMISSIONS")' :delay="1000" placement="top"><i-button @click="permissionModal(row)" size="small"><Icon type="gear-a" :size="iconSize"></Icon></i-button></Tooltip>
                        <Tooltip :content='$t("STORAGE.DOWNLOAD_FILE")' :delay="1000" placement="top"><i-button size="small" @click="downloadFile(row)"><Icon type="ios-cloud-download" :size="iconSize"></Icon></i-button></Tooltip>
                        <Tooltip :content='$t("STORAGE.IMG_PREVIEW")' :delay="1000" placement="top"><i-button size="small" :disabled="row && !row.isImage" @click="imageModal(row)"><Icon type="eye" :size="iconSize"></Icon></i-button></Tooltip>
                        <Tooltip :content='$t("STORAGE.COPY_FILE_LINK")' :delay="1000" placement="top"><i-button size="small" @click="clipModal(row)"><Icon type="link" :size="iconSize"></Icon></i-button></Tooltip>
                        <Tooltip :content='$t("STORAGE.DELETE_FILE")' :delay="1000" placement="top"><i-button size="small" @click="deleteFileConfirm(row)"><Icon type="ios-trash" :size="iconSize"></Icon></i-button></Tooltip>`
    }
}
]

</script>
<style lang="less" scoped>
.bsc-input {
    height: 32px;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 400px;
    position: relative;
    vertical-align: middle;
    border: 1px solid #d7dde4;
    padding: 5px 0 5px 7px;
    border-radius: 4px;
    input {
        height: 22px;
        line-height: 1.5;
        font-size: 12px;
        padding: 0 4px;
        flex: 1;
        border: 0;
        color: #657180;
        background-image: none;
        position: relative;
        cursor: text;
        transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
    }
    input:focus {
        outline: 0;
    }
    .input-append-before {
        flex: none;
        background: #f5f7f9;
        border-radius: 2px;
    }
}
.bsc-input-focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(51,153,255,.2);
}

.section-img {
    width: 100%;
    text-align: center;
    img {
        max-width: 844px;
        max-height: 600px;
    }
}

.section-search {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.link-folder {
    font-weight: bold;
    color: #1088E9;
    cursor: pointer;
}

.button-reset {
    margin-top: 2px;
    background-color: #eee !important;
    border-radius: 0 !important;
}

.layout-bsc-toolbar {
    padding-bottom: 8px;
    border-bottom: 1px solid #f2f1f6;
    button {
        margin-right: 1px;
    }
}

.section-paging {
    height: 40px;
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    button {
        width: 70px;
        margin-left: 6px;
    }
}

.ivu-modal-footer {
    border-top: 0 !important;
}
</style>
