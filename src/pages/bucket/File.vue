<template>
  <div class="bsc-file"
       @keyup.enter="searchValue !== '' && searchFile(searchValue)">
    <div class="layout-bsc-toolbar">
      <a class="btn-back"
         @click="back()">
        <Icon type="chevron-left"></Icon>
      </a>
      <bsc-breadcrumb>
        <bsc-breadcrumb-item :href="bucketPath">{{$t("STORAGE.TITLE")}}</bsc-breadcrumb-item>
        <bsc-breadcrumb-item :href="getUrl('noprefix')">{{bucket}}</bsc-breadcrumb-item>
        <bsc-breadcrumb-item v-for="bc in breadcrumb"
                             :href="getUrl(bc.prefix)"
                             :key="bc.text">{{bc.text}}</bsc-breadcrumb-item>
      </bsc-breadcrumb>
    </div>
    <Row class="toolbar-nav">
      <Col span="10">
      <div>
        <Button type="primary"
                v-show="canUpload"
                @click="openUploadModal">{{$t("STORAGE.UPLOAD_FILE")}}</Button>
        <Button type="primary"
                v-show="canUpload"
                @click="createFolderModal = true">{{$t("STORAGE.CREATE_FOLDER")}}</Button>
        <Tooltip v-if="canUseBatchDownload"
                content="页面提醒是否允许自动下载时，点击允许"
                 placement="bottom">
          <Button type="primary" @click="batchDownload" :disabled="!selectedFileList.length > 0">{{$t("STORAGE.DOWNLOAD_FILES")}}</Button>
        </Tooltip>
        <Button @click="batchDeleteFileConfirm"
                :disabled="!selectedFileList.length > 0">{{$t("STORAGE.DELETE_FILES")}}</Button>
        <Button type="primary"
                v-if="!showSearch"
                @click="showSearch = true">查找文件</Button>
        <transition name="slide-fade">
          <div class="section-search"
               v-if="showSearch">
            <span class="bsc-input">
              <input type="text"
                     class="input-append-before"
                     disabled
                     :value="prefix" />
              <input type="text"
                     @focus="searchInputFocus = true"
                     v-model="searchValue" />
              <Button type="text"
                      size="small"
                      @click="searchFile(searchValue)">
                <Icon type="search"
                      :size="iconSize"></Icon>
              </Button>
            </span>
          </div>
        </transition>
      </div>
      </Col>
      <Col span="14"
           style="text-align:right">
      <legend-list :data="legendList"></legend-list>
      </Col>
    </Row>
    <Spin size="bigger"
          fix
          v-if="spinShow"></Spin>
    <Modal v-model="copyModal">
      <div style="text-align:left">
        {{$t("STORAGE.COPY_LINK_CONFIRM",{selectedFileKey})}}
      </div>
      <div slot="footer"
           class="copy-modal-footer">
        <Button type="text"
                @click="copyModal = false">
          <span>{{$t("PUBLIC.CANCLE")}}</span>
        </Button>
        <Button type="info"
                @click="copyAction()"
                :data-clipboard-text="clipUrl"
                v-clip>{{$t("PUBLIC.COPY")}}</Button>
      </div>
    </Modal>
    <Modal v-model="createFolderModal"
           :title="$t('STORAGE.ADD_FOLDER')"
           @on-ok="addFolder"
           @on-cancel="createFolderValue = ''">
      <Input v-model="createFolderValue"
             @on-enter="addFolder"
             :placeholder="$t('STORAGE.FOLDER_PLACEHOLDER')" />
    </Modal>
    <Modal v-model="renameModal"
           :title="$t('STORAGE.RENAME')"
           @on-ok="rename"
           @on-cancel="renameKey = ''">
      <Input v-model="renameKey"
             @on-enter="rename"
             :placeholder="$t('STORAGE.RENAME_PLACEHOLDER')" />
    </Modal>
    <Modal v-model="showImageModal"
           :title="imageModalTitle"
           width="900">
      <div class="section-img">
        <img :src="clipUrl" />
      </div>
      <div slot="footer"></div>
    </Modal>
    <Modal v-model="uploadModal"
           :mask-closable="uploadModalMaskClosable"
           :title="$t('STORAGE.UPLOAD_FLIE')"
           @on-cancel="uploadModalClose"
           width="700">
      <RadioGroup v-model="aclType">
        <Radio label="authenticated-read">{{$t("STORAGE.AUTHENTICATED_READ")}}</Radio>
        <Radio label="public-read">{{$t("STORAGE.PUBULIC_READ")}}</Radio>
      </RadioGroup>
      <upload ref="upload"
              style="margin-top:15px"
              :bucket="bucket"
              :prefix="prefix"
              :acl-type="aclType"></upload>
      <div slot="footer"></div>
    </Modal>
    <Modal v-model="showPermissonModal"
           :title="$t('STORAGE.FILE_PERMISSIONS')"
           width="700">
      <file-permission v-if="showPermissonModal"
                       v-on:permissionSuccess="showPermissonModal = false"
                       :bucket="bucket"
                       :filePrefix="prefix"
                       :itemKey="permissionKey"
                       :show-modal="showPermissonModal"></file-permission>
      <div slot="footer"
           class="copy-modal-footer">
        <Button style="visibility:hidden"
                type="primary">{{$t("STORAGE.SAVE_PERMISSIONS")}}</Button>
      </div>
    </Modal>
    <a download
       id="element-download"
       style="display:none">
      <span id="span-download"></span>
    </a>
    <Table :show-header="showHeader"
           :stripe="true"
           :context="self"
           :columns="fileHeader"
           :data="fileList"
           @on-selection-change="select"
           :no-data-text="$t('STORAGE.NO_FILE')"></Table>
    <div class="section-paging">
      <div>
        <Tag>{{fileList.length}} files or folders in this page</Tag>
      </div>
      <div>
        <Button v-show="makerArray.length > 0"
                @click="getData('',searchValue);makerArray.length = 0"
                type="ghost"
                size="small">{{$t("PUBLIC.PAGE_FIRST")}}</Button>
        <Button v-show="makerArray.length > 0"
                @click="previousPage()"
                type="ghost"
                size="small">{{$t("PUBLIC.PAGE_PREV")}}</Button>
        <Button v-show="nextMarker"
                @click="nextPage()"
                type="ghost"
                size="small">{{$t("PUBLIC.PAGE_NEXT")}}</Button>
      </div>
    </div>
    <picture-preview v-if="showPicturePreview === true"
                     @close="showPicturePreview = false"
                     :selectedIndex="selectedIndex"
                     :fileList="fileList"
                     :bucket="bucket"
                     :prefix="prefix"></picture-preview>
  </div>
</template>
<script>
import picturePreview from '@/components/picturePreview/picturePreview'
import { getS3, handler } from '@/service/Aws'
import { bytes, keyFilter, convertPrefix2Router } from '@/service/BucketService'
import bscBreadcrumb from '@/components/breadcrumb'
import upload from '@/components/upload/upload'
import Clipboard from 'clipboard'
import store from '@/store'
import { getRedirectBucketFilesAcl } from 'api'
import { checkRole } from 'helper'
import legendList from '@/components/legend/legend'
import moment from 'moment'
import filePermission from './FilePermissions'
export default {
  components: {
    filePermission,
    bscBreadcrumb,
    bscBreadcrumbItem: bscBreadcrumb.Item,
    upload,
    legendList,
    picturePreview,
  },
  directives: {
    clip: {
      bind: function(el) {
        new Clipboard(el)
      },
    },
  },
  data() {
    return {
      clipUrl: '',
      showPicturePreview: false,
      selectedIndex: 0,
      searchValue: '',
      copyModal: false,
      nextMarker: '',
      makerArray: [],
      showImageModal: false,
      showPermissonModal: false,
      createFolderModal: false,
      renameModal: false,
      searchMode: false,
      uploadModal: false,
      aclType: 'authenticated-read',
      uploadModalMaskClosable: false,
      createFolderValue: '',
      selectedFileKey: '',
      showSearch: false,
      showFileDownloadPreview: true,
      renameKey: '',
      selectedFileList: [],
      legendList: [
        {
          icon: 'compose',
          text: 'STORAGE.RENAME',
        },
        {
          icon: 'gear-a',
          text: 'STORAGE.FILE_PERMISSIONS',
        },
        {
          icon: 'ios-cloud-download',
          text: 'SETTINGS.DOWNLOAD',
        },
        {
          icon: 'eye',
          text: 'STORAGE.IMG_PREVIEW',
        },
        {
          icon: 'link',
          text: 'PUBLIC.COPY',
        },
        {
          icon: 'ios-trash',
          text: 'PUBLIC.DELETE',
        },
      ],
      inputCheck: false,
      fileList: [],
      self: this,
      showHeader: true,
      iconSize: 18,
      spinShow: true,
      fileHeader: [
        {
          type: 'selection',
          width: '58px',
          align: 'center',
        },
        {
          title: 'Key',
          key: 'Key',
          ellipsis: true,
          sortable: true,
          render: (h, params) => {
            return h(
              'div',
              {
                on: {
                  click: () => {
                    params.row.Type !== 'file' && this.openFolder(params.row)
                  },
                },
                style: {
                  cursor: params.row.Type === 'file' ? 'default' : 'pointer',
                },
              },
              [
                h('Icon', {
                  props: {
                    type: params.row.Type === 'file' ? 'document' : 'folder',
                    size: 16,
                  },
                  style: {
                    position: 'relative',
                    top: '1px',
                    paddingRight: '4px',
                  },
                }),
                h(
                  'strong',
                  {
                    class: {
                      'link-folder': params.row.Type !== 'file',
                    },
                  },
                  params.row.Key,
                ),
              ],
            )
          },
        },
        {
          title: 'Size',
          width: '15%',
          align: 'right',
          key: 'convertSize',
        },
        {
          title: 'Create time',
          key: 'LastModified',
          align: 'right',
          width: '25%',
          sortable: true,
        },
        {
          title: 'Actions',
          key: 'actions',
          width: '25%',
          align: 'right',
          render: (h, params) => {
            return params.row.Type === 'folder'
              ? h(
                  'Tooltip',
                  {
                    props: {
                      content: this.$t('STORAGE.DELETE_FOLDER'),
                      delay: 1000,
                      placement: 'top-end',
                    },
                    class: {
                      'mar-r-5': true,
                    },
                  },
                  [
                    h(
                      'i-button',
                      {
                        props: {
                          size: 'small',
                        },
                        on: {
                          click: () => {
                            this.deleteFileConfirm(params.row)
                          },
                        },
                      },
                      [
                        h('Icon', {
                          props: {
                            type: 'ios-trash',
                            size: this.iconSize,
                          },
                        }),
                      ],
                    ),
                  ],
                )
              : h('div', [
                  h(
                    'Tooltip',
                    {
                      props: {
                        content: this.$t('STORAGE.RENAME'),
                        delay: 1000,
                        placement: 'top',
                      },
                      class: {
                        'mar-r-5': true,
                      },
                    },
                    [
                      h(
                        'i-button',
                        {
                          props: {
                            size: 'small',
                            disabled: !this.showFileDownloadPreview,
                          },
                          on: {
                            click: () => {
                              this.selectedFileKey = params.row.Key
                              this.renameKey = params.row.Key
                              this.renameModal = true
                            },
                          },
                        },
                        [
                          h('Icon', {
                            props: {
                              type: 'compose',
                              size: this.iconSize,
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  h(
                    'Tooltip',
                    {
                      props: {
                        content: this.$t('STORAGE.FILE_PERMISSIONS'),
                        delay: 1000,
                        placement: 'top',
                      },
                      class: {
                        'mar-r-5': true,
                      },
                    },
                    [
                      h(
                        'i-button',
                        {
                          props: {
                            size: 'small',
                            disabled: !this.showFileDownloadPreview,
                          },
                          on: {
                            click: () => {
                              this.permissionModal(params.row)
                            },
                          },
                        },
                        [
                          h('Icon', {
                            props: {
                              type: 'gear-a',
                              size: this.iconSize,
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  h(
                    'Tooltip',
                    {
                      props: {
                        content: this.$t('STORAGE.DOWNLOAD_FILE'),
                        delay: 1000,
                        placement: 'top',
                      },
                      class: {
                        'mar-r-5': true,
                      },
                    },
                    [
                      h(
                        'i-button',
                        {
                          props: {
                            size: 'small',
                            disabled: !this.showFileDownloadPreview,
                          },
                          on: {
                            click: () => {
                              this.downloadFile(params.row)
                            },
                          },
                        },
                        [
                          h('Icon', {
                            props: {
                              type: 'ios-cloud-download',
                              size: this.iconSize,
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  h(
                    'Tooltip',
                    {
                      props: {
                        content: this.$t('STORAGE.IMG_PREVIEW'),
                        delay: 1000,
                        placement: 'top',
                      },
                      class: {
                        'mar-r-5': true,
                      },
                    },
                    [
                      h(
                        'i-button',
                        {
                          props: {
                            disabled:
                              (params.row && !params.row.isImage) ||
                              !this.showFileDownloadPreview,
                            size: 'small',
                          },
                          on: {
                            click: () => {
                              this.showPicturePreview = true
                              this.selectedIndex = params.row._index
                            },
                          },
                        },
                        [
                          h('Icon', {
                            props: {
                              type: 'eye',
                              size: this.iconSize,
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  h(
                    'Tooltip',
                    {
                      props: {
                        content: this.$t('STORAGE.COPY_FILE_LINK'),
                        delay: 1000,
                        placement: 'top',
                      },
                      class: {
                        'mar-r-5': true,
                      },
                    },
                    [
                      h(
                        'i-button',
                        {
                          props: {
                            size: 'small',
                          },
                          on: {
                            click: () => {
                              this.clipModal(params.row)
                            },
                          },
                        },
                        [
                          h('Icon', {
                            props: {
                              type: 'link',
                              size: this.iconSize,
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  h(
                    'Tooltip',
                    {
                      props: {
                        content: this.$t('STORAGE.DELETE_FILE'),
                        delay: 1000,
                        placement: 'top',
                      },
                    },
                    [
                      h(
                        'i-button',
                        {
                          props: {
                            size: 'small',
                          },
                          on: {
                            click: () => {
                              this.deleteFileConfirm(params.row)
                            },
                          },
                        },
                        [
                          h('Icon', {
                            props: {
                              type: 'ios-trash',
                              size: this.iconSize,
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                ])
          },
        },
      ],
      permissionKey: '',
      searchInputFocus: false,
      canUpload: false,
    }
  },
  computed: {
    bucket() {
      return this.$route.params.bucket
    },
    prefix() {
      return this.$route.params.prefix === 'noprefix'
        ? ''
        : this.$route.params.prefix
    },
    breadcrumb() {
      return convertPrefix2Router(this.prefix)
    },
    bucketPath() {
      return `/bucket/${this.$route.params.bucket}`
    },
    imageModalTitle() {
      return this.selectedFileKey || this.$t('STORAGE.NO_TITLE')
    },
    canUseBatchDownload() {
      return true
    },
  },
  watch: {
    // the fileList array need refresh when the $route value changed
    $route(to, from) {
      to.path !== from.path && this.getData()
    },
  },
  created() {
    this.getData()
    this.checkCanUpload()
    this.hasFileReadAcl()
  },
  methods: {
    async getData(nextMarker, searchValue = '') {
      this.$Loading.start()
      this.spinShow = true
      try {
        let self = this
        let res = await handler('listObjects', {
          Bucket: this.bucket,
          Delimiter: '/',
          MaxKeys: 100,
          Marker: nextMarker || this.prefix,
          Prefix: this.prefix + searchValue,
        })
        this.nextMarker = res.NextMarker
        this.fileList = await _.forEach(res.CommonPrefixes, (foler) => {
          foler.Key = keyFilter(foler.Prefix, self.prefix)
          foler.Type = 'folder'
          foler.LastModified = ''
          foler.convertSize = ''
        }).concat(
          _.forEach(res.Contents, (item) => {
            item.Key = keyFilter(item.Key, self.prefix)
            item.convertSize = bytes(item.Size)
            item.Type = 'file'
            item.isImage = isImage(item)
            item.LastModified = moment(item.LastModified).format(
              'YYYY-MM-DD HH:mm',
            )
          }),
        )
        document.querySelector('#app').scrollTop = 0
        this.spinShow = false
        this.$Loading.finish()
      } catch (error) {
        this.spinShow = false
        this.$Loading.error()
      }
    },
    async hasFileReadAcl() {
      if (checkRole('SUBUSER')) {
        let acls = await getRedirectBucketFilesAcl(
          this.bucket,
          this.$store.state.current.username,
        )
        this.showFileDownloadPreview =
          acls && Array.isArray(acls.file_acl) && acls.file_acl.includes('READ')
      }
    },
    async rename() {
      this.renameModal = false
      if (this.renameKey.length > 0) {
        if (this.selectedFileKey === this.renameKey) {
          return false
        }
        try {
          this.$Loading.start()
          await handler('copyObject', {
            Bucket: this.bucket,
            CopySource: encodeURIComponent(
              this.bucket + '/' + this.prefix + this.selectedFileKey,
            ),
            Key: this.prefix + this.renameKey,
          })
          await handler('deleteObject', {
            Bucket: this.bucket,
            Key: this.prefix + this.selectedFileKey,
          })
          this.renameKey = ''
          await this.getData()
        } catch (error) {
          this.$Loading.error()
        }
      } else {
        this.$Message.error(this.$t('STORAGE.RENAME_PLACEHOLDER'))
      }
    },
    back() {
      this.$router.back()
    },
    previousPage() {
      let maker = this.makerArray[this.makerArray.length - 2]
      this.makerArray.pop()
      this.getData(maker, this.searchValue)
    },
    nextPage() {
      this.nextMarker && this.makerArray.push(this.nextMarker)
      this.getData(this.nextMarker, this.searchValue)
    },
    searchFile(value) {
      this.searchMode = true
      this.getData(this.prefix, value)
    },
    async addFolder() {
      if (!this.createFolderValue) return
      this.createFolderModal = false
      try {
        await handler('putObject', {
          Bucket: this.bucket,
          Key: this.prefix + this.createFolderValue + '/',
          Body: '',
        })
        await this.getData()
        this.$Message.success(this.$t('STORAGE.ADD_FOLDER_SUCCESS'))
      } catch (error) {
        this.$Message.error(this.$t('STORAGE.ADD_FOLDER_FAILED'))
      }
    },
    async clipModal(file) {
      this.$Loading.start()
      this.clipUrl = await getURL(this.bucket, file, this.prefix)
      this.selectedFileKey = file.Key
      this.copyModal = true
      this.$Loading.finish()
    },
    openUploadModal() {
      this.uploadModal = true
    },
    download(url) {
      document.querySelector('#element-download').href = url
      document.querySelector('#span-download').click()
    },
    async downloadFile(file) {
      let self = this
      if (file.Type === 'file') {
        let url = await getURL(this.bucket, file, this.prefix, true)
        this.download(url)
      } else {
        let res = await handler('listObjects', {
          Bucket: this.bucket,
          Prefix: this.prefix + file.Prefix,
          Delimiter: '/',
          Marker: this.prefix + file.Prefix,
        })
        _.each(res.Contents, async (file) => {
          let url = await getURL(self.bucket, file, self.prefix)
          self.download(url)
        })
      }
    },
    async imageModal(file) {
      this.$Loading.start()
      this.clipUrl = await getURL(this.bucket, file, this.prefix)
      this.selectedFileKey = file.Key
      this.showImageModal = true
      this.$Loading.finish()
    },
    async permissionModal(file) {
      this.permissionKey = file.Key
      this.showPermissonModal = true
    },
    batchDeleteFileConfirm() {
      this.$Modal.confirm({
        content: this.$t('STORAGE.DELETE_FILES_CONFIRMED'),
        okText: this.$t('PUBLIC.CONFIRMED'),
        cancelText: this.$t('PUBLIC.CANCLE'),
        title: this.$t('PUBLIC.DELETE'),
        onOk: () => this.batchDelete(),
      })
    },
    deleteFileConfirm(file) {
      this.$Modal.confirm({
        content: this.$t('STORAGE.DELETE_CONFIRMED', { fileName: file.Key }),
        okText: this.$t('PUBLIC.CONFIRMED'),
        cancelText: this.$t('PUBLIC.CANCLE'),
        title: this.$t('PUBLIC.DELETE'),
        onOk: () => this.deleteFile(file),
      })
    },
    async deleteFile(file) {
      try {
        if (file.Type === 'file') {
          await handler('deleteObject', {
            Bucket: this.bucket,
            Key: this.prefix + file.Key,
          })
        } else {
          await this.deleteFolders(file)
        }
        await this.getData()
        this.$Message.success(
          this.$t('STORAGE.DELETE_FILES_SUCCESS', { fileName: file.Key }),
        )
      } catch (error) {
        this.spinShow = false
        this.$Message.error(
          this.$t('STORAGE.DELETE_FILES_FAILED', { fileName: file.Key }),
        )
      }
    },
    async deleteFolders(folder, marker = '') {
      this.spinShow = true
      try {
        let res = await handler('listObjects', {
          Bucket: this.bucket,
          Prefix: folder.Prefix,
          MaxKeys: 1000,
          Marker: marker,
        })
        await handler('deleteObjects', {
          Bucket: this.bucket,
          Delete: {
            Objects: res.Contents.map((file) => _.pick(file, 'Key')),
          },
        })
        if (res.Contents.length === 1000) {
          this.deleteFolders(folder, res.Contents[100].Key)
        } else {
          await handler('deleteObject', {
            Bucket: this.bucket,
            Key: this.prefix + folder.Key,
          })
          this.spinShow = false
        }
      } catch (error) {
        this.spinShow = false
        this.$Loading.error()
        this.$Message.error(`Delete the folder [${folder.Key}] error`)
      }
    },
    async batchDelete() {
      let self = this
      await Promise.all(
        self.selectedFileList.map((file) => self.deleteFile(file)),
      )
    },
    async batchDownload() {
      let self = this
      for (let file of self.selectedFileList) {
        await this.downloadFile(file)
      }
    },
    openFolder(item) {
      this.searchValue = ''
      this.$router.push({
        name: 'file',
        params: { bucket: this.bucket, prefix: item.Prefix },
      })
    },
    getUrl(prefix) {
      return (
        '/bucket/' +
        this.bucket +
        '/prefix/' +
        repliceAllString(prefix, '/', '%2F')
      )
    },
    async uploadModalClose() {
      await this.getData()
      this.$refs.upload.clearFiles()
    },
    async checkCanUpload() {
      if (checkRole('SUBUSER')) {
        let acl = await handler('getBucketAcl', { Bucket: this.bucket })
        _.each(acl.Grants, (grant) => {
          if (
            grant.Grantee.ID === store.state.current.username &&
            (grant.Permission === 'FULL_CONTROL' ||
              grant.Permission === 'WRITE')
          ) {
            this.canUpload = true
          }
        })
      } else {
        this.canUpload = true
      }
    },
    select(selection) {
      this.selectedFileList = selection
    },
    setLoading(bol) {
      this.$store.dispatch('setLoading', bol)
    },
    copyAction() {
      this.copyModal = false
      this.$Message.success($t('STORAGE.COPIED'))
    },
  },
}

const repliceAllString = (strings, oldStr, newStr) => {
  let str = strings
  while (str.indexOf(oldStr) > 0) {
    str = str.replace(oldStr, newStr)
  }
  return str
}

const isImage = (file) => !!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(file.Key)

const getURL = async (bucket, file, prefix, isDownload = false) => {
  try {
    let getURLparams = isDownload
      ? {
          Bucket: bucket,
          Key: prefix + file.Key,
          ResponseContentDisposition: 'attachment',
        }
      : { Bucket: bucket, Key: prefix + file.Key }
    let getAclparams = { Bucket: bucket, Key: prefix + file.Key }
    let s3 = await getS3()
    let url = await s3.getSignedUrl('getObject', getURLparams)
    let acl = await handler('getObjectAcl', getAclparams)
    let isAllUser = _.find(
      acl.Grants,
      (item) =>
        item.Grantee.URI &&
        item.Grantee.URI === 'http://acs.amazonaws.com/groups/global/AllUsers',
    )
    return isDownload ? url : isAllUser ? url.split('?')[0] : url
  } catch (error) {
    this.$Loading.error()
    return Promise.reject(error)
  }
}
</script>

<style lang="less" scoped>
@import '../../styles/index.less';
@layout-bsc-toolbar-border-bottom-color: #f2f1f6;
@bsc-input-border-color: #d7dde4;
@input-append-before-background-color: #f5f7f9;
@input-color: #657180;

.dark .@{css-prefix}file {
  .layout-bsc-toolbar {
    border-bottom: @common-border-dark;
  }
  .section-search {
    span {
      background: transparent;
    }
    input.input-append-before {
      border-color: #52626d;
      color: #71818d;
      background-color: #414d56 !important;
    }
  }
}

.@{css-prefix}file {
  .layout-bsc-toolbar {
    padding-bottom: 8px;
    border-bottom: @common-border;

    button {
      margin-right: 4px;
    }
  }

  .section-search {
    position: absolute;
    z-index: 100;
    width: 400px;

    input.input-append-before {
      border-right: 1px solid #eff2f7;
      color: #99a9bf;
      width: 100px;
      margin: -5px 0 -5px -7px;
      height: 30px;
      background-color: #f9fafc !important;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .@{css-prefix}input {
      margin-left: 4px;
      width: 400px;
    }
  }

  .section-paging {
    .wh(100%, 40px);
    .fb(space-between, center);

    .bsc-tag {
      cursor: default;
    }

    button {
      margin-left: 6px;
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
}

.section-img {
  width: 100%;
  text-align: center;
  img {
    max-width: 100%;
    max-height: 600px;
  }
}
</style>
