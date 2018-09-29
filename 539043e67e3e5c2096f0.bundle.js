(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2561"],{2001:function(e,t,c){"use strict";c.r(t);var n=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"bsc-bucket"},[e.isSubUser?e._e():c("div",{staticClass:"layout-bsc-toolbar"},[c("div",[c("Button",{staticClass:"button-bsc-add-bucket",attrs:{type:"primary"},on:{click:function(t){e.createBucketModal=!0}}},[e._v(e._s(e.$t("STORAGE.ADD_BUCKET")))]),c("Tooltip",{attrs:{content:e.$t("STORAGE.FOLDER_INFO"),disabled:!!e.selectedBucket.Name,placement:"top"}},[c("Button",{staticClass:"button-bsc-add-bucket",attrs:{disabled:!e.selectedBucket.Name,type:"primary"},on:{click:function(t){e.goBucketSettings()}}},[e._v(e._s(e.$t("STORAGE.BUCKET_SETTING")))])],1),c("Tooltip",{attrs:{content:e.$t("STORAGE.FOLDER_INFO"),disabled:!!e.selectedBucket.Name,placement:"top"}},[c("Button",{directives:[{name:"show",rawName:"v-show",value:e.canShowPicture,expression:"canShowPicture"}],staticClass:"button-bsc-add-bucket",attrs:{disabled:!e.selectedBucket.Name,type:"primary"},on:{click:function(t){e.goPictureStyles()}}},[e._v(e._s(e.$t("STORAGE.PIC_STYLE")))])],1),c("Tooltip",{attrs:{content:e.$t("STORAGE.FOLDER_INFO"),disabled:!!e.selectedBucket.Name,placement:"top"}},[c("Button",{staticClass:"button-bsc-add-bucket",attrs:{disabled:!e.selectedBucket.Name,type:"primary"},on:{click:function(t){e.deleteBucketConfirm()}}},[e._v(e._s(e.$t("STORAGE.DELETE_BUCKET")))])],1)],1)]),c("div",{staticClass:"bsc-flex-section"},[e._l(e.bucketList,function(t){return e.isNoBuckets?e._e():c("div",{key:t.Name,staticClass:"bucket",class:{"bucket-selected":t.selected},on:{click:function(c){e.rowClick(t)},dblclick:function(c){e.dbClick(t)}}},[c("span",{staticClass:"span-filename"},[e._v(e._s(t.Name))])])}),e.isNoBuckets?c("span",{staticClass:"no-bucket"},[e._v(e._s(e.$t("STORAGE.NO_BUCKET")))]):e._e()],2),c("Modal",{attrs:{title:e.$t("STORAGE.ADD_BUCKET")},on:{"on-ok":e.addBucket,"on-cancel":function(t){e.inputCheck=!1,e.createBucketValue=""}},model:{value:e.createBucketModal,callback:function(t){e.createBucketModal=t},expression:"createBucketModal"}},[c("Input",{attrs:{autofocus:"",placeholder:e.$t("STORAGE.ADD_BUCKET_PLACEHOLDER"),pattern:"/^([a-z0-9][a-z0-9\\-]*[.])*([a-z0-9][a-z0-9\\-]*)*$/"},on:{"on-enter":e.addBucket},model:{value:e.createBucketValue,callback:function(t){e.createBucketValue=t},expression:"createBucketValue"}}),c("span",{staticClass:"info-input-error"},[e._v(e._s(e.inputCheck?e.$t("STORAGE.ADD_BUCKET_CHECK"):""))])],1)],1)},s=[],a=(c("a481"),c("ac6a"),c("96cf"),c("3040")),r=c("ff66"),i=c("7265"),u=c("c1df"),o=c.n(u),l=c("7340"),k=c("4360"),h=c("365c"),d={data:function(){return{createBucketValue:"",fetchDone:!1,createBucketModal:!1,inputCheck:!1,bucketList:[],selectedBucket:{},iconSize:18}},computed:{canShowPicture:function(){return this.$store.state.manager.length&&this.$store.state.manager[0].username!==this.$store.state.current.username?Object(l["a"])("IMGX")&&Object(l["a"])("WRITE_USER",!0):Object(l["a"])("IMGX")},bucket:function(){return this.$route.params.bucket||""},isSubUser:function(){return Object(l["a"])("SUBUSER")},isNoBuckets:function(){return this.fetchDone&&this.bucketList&&0===this.bucketList.length}},watch:{createBucketValue:function(e){this.inputCheck=!(e.length>=3)}},created:function(){this.getBucketList()},methods:{getBucketList:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,c,n=this,s=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]&&s[0],e.next=3,this.$store.dispatch("getBuckets",t);case 3:c=e.sent,this.fetchDone=!0,this.isSubUser?c.Buckets.forEach(function(e){n.getBucketAcl(e.Name).then(function(t){t.Grants.forEach(function(t){t.Grantee.ID!==k["a"].state.current.username||"FULL_CONTROL"!==t.Permission&&"READ"!==t.Permission||(e.CreationDate=o()(e.CreationDate).format("YYYY-MM-DD HH:mm"),n.bucketList.push(e))})})}):this.bucketList=_.forEach(c.Buckets,function(e){e.CreationDate=o()(e.CreationDate).format("YYYY-MM-DD HH:mm")}),this.bucketList=_.forEach(this.bucketList,function(e,t){e.selected=n.bucket?e.Name===n.bucket:0===t}),this.selectedBucket=this.$route.params.bucket&&this.bucketList?this.bucketList.filter(function(e){return e.Name===n.$route.params.bucket})[0]:this.bucketList&&this.bucketList.length>0?this.bucketList[0]:{};case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),deleteBucketConfirm:function(){var e=this,t=this.selectedBucket;this.$Modal.confirm({content:this.$t("STORAGE.DELETE_CONFIRMED",{fileName:t.Name}),okText:this.$t("PUBLIC.CONFIRMED"),cancelText:this.$t("PUBLIC.CANCLE"),title:this.$t("PUBLIC.DELETE"),onOk:function(){return e.deleteBucket(t)}})},deleteBucket:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var c,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.$Loading.start(),e.next=4,Object(r["d"])("listObjects",{Bucket:t.Name});case 4:return c=e.sent,e.next=7,c.Contents.length;case 7:if(!e.sent){e.next=11;break}e.t0=f(c.Contents,t.Name),e.next=12;break;case 11:e.t0=Promise.resolve();case 12:n=e.t0,n.then(function(){setTimeout(function(){Object(r["d"])("deleteBucket",{Bucket:t.Name})},1e3)}),Object(i["l"])(this.bucketList,t),this.selectedBucket={},_.each(document.querySelector(".bsc-flex-section").childNodes,function(e){e.classList.remove("bucket-selected")}),this.$Loading.finish(),e.next=23;break;case 20:e.prev=20,e.t1=e["catch"](0),this.$Loading.error();case 23:case"end":return e.stop()}},e,this,[[0,20]])}));return function(t){return e.apply(this,arguments)}}(),goBucketSettings:function(){var e=this.selectedBucket;this.$router.push({name:"bucketSettings",params:{bucket:e.Name,tabName:"permission"}})},goPictureStyles:function(){var e=this.selectedBucket;this.$router.push({name:"pictureStyles",params:{bucket:e.Name}})},rowClick:function(e){this.selectedBucket=e,this.bucketList.forEach(function(t){t.selected=t===e})},addBucket:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.createBucketModal=!1,this.createBucketValue=this.createBucketValue.trim(),!(this.createBucketValue.length>2)){e.next=12;break}return e.next=5,Object(r["d"])("createBucket",{Bucket:this.createBucketValue});case 5:return this.$Message.success(this.$t("STORAGE.ADD_BUCKET_SUCCESS")),e.next=8,this.getBucketList(!0);case 8:Object(l["a"])("SUB")&&this.createRedirectBucket(this.createBucketValue),this.createBucketValue="",e.next=13;break;case 12:this.$Message.warning(this.$t("STORAGE.ADD_BUCKET_CHECK"));case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),dbClick:function(e){this.$router.push({name:"file",params:{bucket:e.Name,prefix:"noprefix"}})},getBucketAcl:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["d"])("getBucketAcl",{Bucket:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),createRedirectBucket:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["p"])();case 2:return c=e.sent,e.next=5,Promise.all(c.map(function(e){return Object(h["T"])({original:t,username:e.username,redirect:t+"-"+e.username.replace(/\W|_/g,"").toLowerCase(),bucket_acl:["READ_ACP"],file_acl:["READ_ACP"]})}));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},f=function(e,t){return Promise.all(e.map(function(e){return Object(r["d"])("deleteObject",{Bucket:t,Key:e.Key||e.Prefix})}))},b=d,m=(c("7e07"),c("2877")),p=Object(m["a"])(b,n,s,!1,null,"0aecca42",null);p.options.__file="Bucket.vue";t["default"]=p.exports},"7e07":function(e,t,c){"use strict";var n=c("c512"),s=c.n(n);s.a},c512:function(e,t,c){}}]);