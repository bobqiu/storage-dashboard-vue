<template>
  <div class="bsc-bucket">
    <div class="layout-bsc-toolbar"
         v-if="!isSubUser">
      <div>
        <Button class="button-bsc-add-bucket"
                type="primary"
                @click="createBucketModal = true">{{$t("STORAGE.ADD_BUCKET")}}</Button>
        <Tooltip :content="$t('STORAGE.FOLDER_INFO')"
                 :disabled="!!selectedBucket.Name"
                 placement="top">
          <Button class="button-bsc-add-bucket"
                  :disabled="!selectedBucket.Name"
                  type="primary"
                  @click="goBucketSettings()">{{$t("STORAGE.BUCKET_SETTING")}}</Button>
        </Tooltip>
        <Tooltip :content="$t('STORAGE.FOLDER_INFO')"
                 :disabled="!!selectedBucket.Name"
                 placement="top">
          <Button class="button-bsc-add-bucket"
                  v-show=canShowPicture
                  :disabled="!selectedBucket.Name"
                  type="primary"
                  @click="goPictureStyles()">{{$t("STORAGE.PIC_STYLE")}}</Button>
        </Tooltip>
        <Tooltip :content="$t('STORAGE.FOLDER_INFO')"
                 :disabled="!!selectedBucket.Name"
                 placement="top">
          <Button class="button-bsc-add-bucket"
                  :disabled="!selectedBucket.Name"
                  type="primary"
                  @click="deleteBucketConfirm()">{{$t("STORAGE.DELETE_BUCKET")}}</Button>
        </Tooltip>
      </div>
    </div>
    <div class="bsc-flex-section">
      <div class="bucket"
           v-if="!isNoBuckets"
           v-bind:class="{'bucket-selected': bucket.selected}"
           v-for="bucket in bucketList"
           :key="bucket.Name"
           @click="rowClick(bucket)"
           v-on:dblclick="dbClick(bucket)">
        <span class="span-filename">{{bucket.Name}}</span>
      </div>
      <span v-if="isNoBuckets" class="no-bucket">{{$t("STORAGE.NO_BUCKET")}}</span>
    </div>
    <Modal v-model="createBucketModal"
           :title="$t('STORAGE.ADD_BUCKET')"
           @on-ok="addBucket"
           @on-cancel="inputCheck=false;createBucketValue = ''">
      <Input v-model="createBucketValue"
             autofocus
             @on-enter="addBucket"
             :placeholder="$t('STORAGE.ADD_BUCKET_PLACEHOLDER')"
             pattern="/^([a-z0-9][a-z0-9\-]*[.])*([a-z0-9][a-z0-9\-]*)*$/" />
      <span class="info-input-error">{{inputCheck ? $t("STORAGE.ADD_BUCKET_CHECK") : ''}}</span>
    </Modal>
  </div>
</template>
<script>
import { handler } from '@/service/Aws'
import { removeItemFromArray } from '@/service/BucketService'
import moment from 'moment'
import { checkRole } from 'helper'
import store from '@/store'
import { getListSubUser, postRedirectBucket } from 'api'

export default {
  data() {
    return {
      createBucketValue: '',
      fetchDone: false,
      createBucketModal: false,
      inputCheck: false,
      bucketList: [],
      selectedBucket: {},
      iconSize: 18,
    }
  },
  computed: {
    canShowPicture() {
      return this.$store.state.manager.length &&
        this.$store.state.manager[0].username !==
          this.$store.state.current.username
        ? checkRole('IMGX') && checkRole('WRITE_USER', true)
        : checkRole('IMGX')
    },
    bucket() {
      return this.$route.params.bucket || ''
    },
    isSubUser() {
      return checkRole('SUBUSER')
    },
    isNoBuckets() {
      return this.fetchDone && this.bucketList && this.bucketList.length === 0
    },
  },
  watch: {
    createBucketValue(to) {
      this.inputCheck = !(to.length >= 3)
    },
  },
  created() {
    this.getBucketList()
  },
  methods: {
    async getBucketList(forceUpdate = false) {
      const buckets = await this.$store.dispatch('getBuckets', forceUpdate)
      this.fetchDone = true
      if (this.isSubUser) {
        buckets.Buckets.forEach((item) => {
          this.getBucketAcl(item.Name).then((acl) => {
            acl.Grants.forEach((grant) => {
              if (
                grant.Grantee.ID === store.state.current.username &&
                (grant.Permission === 'FULL_CONTROL' ||
                  grant.Permission === 'READ')
              ) {
                item.CreationDate = moment(item.CreationDate).format(
                  'YYYY-MM-DD HH:mm',
                )
                this.bucketList.push(item)
              }
            })
          })
        })
      } else {
        this.bucketList = _.forEach(buckets.Buckets, (item) => {
          item.CreationDate = moment(item.CreationDate).format(
            'YYYY-MM-DD HH:mm',
          )
        })
      }
      this.bucketList = _.forEach(this.bucketList, (item, index) => {
        item.selected = this.bucket ? item.Name === this.bucket : index === 0
      })
      this.selectedBucket =
        this.$route.params.bucket && this.bucketList
          ? this.bucketList.filter(
              (bucket) => bucket.Name === this.$route.params.bucket,
            )[0]
          : this.bucketList && this.bucketList.length > 0
            ? this.bucketList[0]
            : {}
    },
    deleteBucketConfirm() {
      const item = this.selectedBucket
      this.$Modal.confirm({
        content: this.$t('STORAGE.DELETE_CONFIRMED', { fileName: item.Name }),
        okText: this.$t('PUBLIC.CONFIRMED'),
        cancelText: this.$t('PUBLIC.CANCLE'),
        title: this.$t('PUBLIC.DELETE'),
        onOk: () => this.deleteBucket(item),
      })
    },
    async deleteBucket(bucket) {
      try {
        this.$Loading.start()
        await handler('deleteBucket', { Bucket: bucket.Name })
        await this.$store.dispatch('getBuckets', true)
        // the bucket list also has cache ...
        removeItemFromArray(this.bucketList, bucket)

        this.selectedBucket = {}
        _.each(
          document.querySelector('.bsc-flex-section').childNodes,
          (node) => {
            node.classList.remove('bucket-selected')
          },
        )
        this.$Loading.finish()
      } catch (error) {
        this.$Loading.error()
      }
    },
    goBucketSettings() {
      const bucket = this.selectedBucket
      this.$router.push({
        name: 'bucketSettings',
        params: { bucket: bucket.Name, tabName: 'permission' },
      })
    },
    goPictureStyles() {
      const bucket = this.selectedBucket
      this.$router.push({
        name: 'pictureStyles',
        params: { bucket: bucket.Name },
      })
    },
    rowClick(item) {
      this.selectedBucket = item
      this.bucketList.forEach((bucket) => {
        bucket.selected = bucket === item
      })
    },
    async addBucket() {
      this.createBucketModal = false
      this.createBucketValue = this.createBucketValue.trim()
      if (this.createBucketValue.length > 2) {
        await handler('createBucket', { Bucket: this.createBucketValue })
        this.$Message.success(this.$t('STORAGE.ADD_BUCKET_SUCCESS'))
        await this.getBucketList(true)
        checkRole('SUB') && this.createRedirectBucket(this.createBucketValue)
        this.createBucketValue = ''
      } else {
        this.$Message.warning(this.$t('STORAGE.ADD_BUCKET_CHECK'))
      }
    },
    dbClick(item) {
      this.$router.push({
        name: 'file',
        params: { bucket: item.Name, prefix: 'noprefix' },
      })
    },
    async getBucketAcl(name) {
      return await handler('getBucketAcl', {
        Bucket: name,
      })
    },
    async createRedirectBucket(newBucket) {
      const subUsers = await getListSubUser()
      await Promise.all(
        subUsers.map((user) => {
          return postRedirectBucket({
            original: newBucket,
            username: user.username,
            redirect:
              newBucket +
              '-' +
              user.username.replace(/\W|_/g, '').toLowerCase(),
            bucket_acl: ['READ_ACP'],
            file_acl: ['READ_ACP'],
          })
        }),
      )
    },
  },
}
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
@bucket-hover-background-color: #f5f5f5;
@bucket-hover-background-color-black: #2e373e;
@bucket-span-filename-color: #657180;
@bucket-span-filename-color-black: #c0ccda;
@bucket-card-width: 120px;
@bucket-card-height: 120px;

.dark .@{css-prefix}bucket {
  .layout-bsc-toolbar {
    border-bottom: 1px solid #52626d;
  }

  .bsc-flex-section {
    .bucket {
      &:hover {
        background-color: @bucket-hover-background-color-black;
      }

      .span-filename {
        color: @bucket-span-filename-color-black;
      }
    }

    .bucket-selected {
      background-color: @bucket-hover-background-color-black;
    }
    .no-bucket {
      color: #f5f5f5;
    }
  }
}

.@{css-prefix}bucket {
  .layout-bsc-toolbar {
    padding-bottom: 20px;
    border-bottom: @common-border;
    margin-bottom: 0;

    button {
      margin-right: 4px;
    }
  }

  .bsc-flex-section {
    min-height: 100%;
    width: 100%;
    .fb(flex-start, flex-start);
    margin-top: 8px;
    flex-wrap: wrap;

    .bucket {
      .wh(@bucket-card-width, @bucket-card-height);
      font-size: 14px;
      border-radius: 5px;
      margin: 4px;
      padding: 5px;
      background: url('../../assets/bucket.png') no-repeat center;
      background-size: 66px 66px;

      &:hover {
        background-color: @bucket-hover-background-color;
      }

      .span-filename {
        display: inline-block;
        position: relative;
        text-align: center;
        color: @bucket-span-filename-color;
        font-style: normal;
        font-weight: 400;
        top: 85px;
        left: 0;
        width: 110px;
        .overflow();
      }
    }

    .bucket-selected {
      background-color: @bucket-hover-background-color;
    }
  }

  .info-input-error {
    display: block;
    margin-top: 6px;
    color: red;
  }
}
</style>
