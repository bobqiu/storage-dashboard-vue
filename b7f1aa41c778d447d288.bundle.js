(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5055593f"],{"0f77":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bsc-overview"},[s("Row",[s("Col",{staticClass:"left-section",attrs:{span:"19"}},[s("div",{staticClass:"storage"},[s("div",{staticClass:"section-separator"},[s("div",{staticClass:"separator-body"},[s("span",{staticClass:"separator-icon"}),s("span",{staticClass:"separator-info"},[t._v(t._s(t.$t("OVERVIEW.DASHBOARD_MONTH")))])])]),s("div",{staticClass:"storage-card-wrap"},[t.spinShow?s("Spin",{attrs:{size:"large",fix:""}}):t._e(),s("div",{staticClass:"storage-card"},[s("div",{staticClass:"title"},[s("div",{staticClass:"images"}),s("div",{staticClass:"texts"},[s("p",{staticClass:"label"},[t._v("\n                "+t._s(t.$t("OVERVIEW.CAPACITY_MONTH"))+"\n              ")]),s("p",{staticClass:"numbers"},[t._v("\n                "+t._s(t.originOverview.capacity[0])+"\n                "),s("span",[t._v(t._s(t.originOverview.capacity[1]))])])])]),s("div",{staticClass:"charts"},[s("chart",{ref:"capacityLine",attrs:{options:t.capacityOptions,"auto-resize":""}})],1)]),s("div",{staticClass:"storage-card"},[s("div",{staticClass:"title"},[s("div",{staticClass:"images"}),s("div",{staticClass:"texts"},[s("p",{staticClass:"label"},[t._v("\n                "+t._s(t.$t("OVERVIEW.OUTER_NET_MONTH"))+"\n              ")]),s("p",{staticClass:"numbers"},[t._v("\n                "+t._s(t.originOverview.traffic[0])+"\n                "),s("span",[t._v(t._s(t.originOverview.traffic[1]))])])])]),s("div",{staticClass:"charts"},[s("chart",{ref:"trafficLine",attrs:{options:t.trafficOptions,"auto-resize":""}})],1)]),s("div",{staticClass:"storage-card"},[s("div",{staticClass:"title"},[s("div",{staticClass:"images"}),s("div",{staticClass:"texts"},[s("p",{staticClass:"label"},[t._v("\n                "+t._s(t.$t("OVERVIEW.REQUEST_MONTH"))+"\n              ")]),s("p",{staticClass:"numbers"},[t._v("\n                "+t._s(t.originOverview.request[0])+"\n                "),s("span",[t._v(t._s(t.originOverview.request[1]))])])])]),s("div",{staticClass:"charts"},[s("chart",{ref:"requestLine",attrs:{options:t.requestOptions,"auto-resize":""}})],1)])],1)]),s("div",{staticClass:"file-ruler"},[s("div",{staticClass:"section-separator"},[s("div",{staticClass:"separator-body"},[s("span",{staticClass:"separator-icon"}),s("span",{staticClass:"separator-info"},[t._v(t._s(t.$t("OVERVIEW.FILE_RULES")))])])]),s("div",{staticClass:"card-section"},[s("div",{staticClass:"file-ruler-card"},[s("p",{staticClass:"file-ruler-card-title"},[t._v(t._s(t.$t("STORAGE.FILE_PERMISSIONS")))]),s("div",{staticClass:"file-ruler-card-body"},[s("p",[s("span",[t._v(t._s(t.permissionsList.length))]),t._v(t._s(t.$t("OVERVIEW.BUCKET_SETED_NUM")))])]),s("div",{staticClass:"file-ruler-card-hover"},[0===t.permissionsList.length?s("Button",{attrs:{type:"primary"},on:{click:t.gotoBucket}},[t._v(t._s(t.$t("OVERVIEW.GO_SETTING")))]):s("Button",{attrs:{type:"primary"},on:{click:function(e){t.showPermissionModal=!0}}},[t._v(t._s(t.$t("OVERVIEW.MORE")))])],1)]),s("div",{staticClass:"file-ruler-card"},[s("p",{staticClass:"file-ruler-card-title"},[t._v(t._s(t.$t("OVERVIEW.CUSTOM_DOMAIN")))]),s("div",{staticClass:"file-ruler-card-body"},[s("p",[s("span",[t._v("0")]),t._v(t._s(t.$t("OVERVIEW.BUCKET_SETED_NUM")))])]),s("div",{staticClass:"file-ruler-card-hover waiting"},[s("p",{staticClass:"waiting"},[t._v(t._s(t.$t("OVERVIEW.COMING_SOON")))])])]),s("div",{staticClass:"file-ruler-card"},[s("p",{staticClass:"file-ruler-card-title"},[t._v(t._s(t.$t("STORAGE.MIRROR")))]),s("div",{staticClass:"file-ruler-card-body"},[s("p",[s("span",[t._v(t._s(t.sourceList.length))]),t._v(t._s(t.$t("OVERVIEW.BUCKET_SETED_NUM")))])]),s("div",{staticClass:"file-ruler-card-hover"},[0===t.sourceList.length?s("Button",{attrs:{type:"primary"},on:{click:t.gotoBucket}},[t._v(t._s(t.$t("OVERVIEW.GO_SETTING")))]):s("Button",{attrs:{type:"primary"},on:{click:function(e){t.showSourceModal=!0}}},[t._v(t._s(t.$t("OVERVIEW.MORE")))])],1)]),s("div",{staticClass:"file-ruler-card"},[s("p",{staticClass:"file-ruler-card-title"},[t._v(t._s(t.$t("SETTINGS.SECURITY_CHAIN")))]),s("div",{staticClass:"file-ruler-card-body"},[s("p",[s("span",[t._v(t._s(t.accessList.length))]),t._v(t._s(t.$t("OVERVIEW.BUCKET_SETED_NUM")))])]),s("div",{staticClass:"file-ruler-card-hover"},[0===t.accessList.length?s("Button",{attrs:{type:"primary"},on:{click:t.gotoBucket}},[t._v(t._s(t.$t("OVERVIEW.GO_SETTING")))]):s("Button",{attrs:{type:"primary"},on:{click:function(e){t.showAccessModal=!0}}},[t._v(t._s(t.$t("OVERVIEW.MORE")))])],1)])])]),s("div",{staticClass:"file-handle"},[s("div",{staticClass:"section-separator"},[s("div",{staticClass:"separator-body"},[s("span",{staticClass:"separator-icon"}),s("span",{staticClass:"separator-info"},[t._v(t._s(t.$t("OVERVIEW.FILE_HANDLER")))])])]),s("div",{staticClass:"card-section"},[s("div",{staticClass:"file-ruler-card"},[s("p",{staticClass:"file-ruler-card-title"},[t._v(t._s(t.$t("OVERVIEW.PIC_SERVICE")))]),s("div",{staticClass:"file-ruler-card-body"},[s("p",[t._v(t._s(t.$t("OVERVIEW.PIC_SERVICE_INFO")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.canUseIMG,expression:"canUseIMG"}],staticClass:"file-ruler-card-hover"},[s("Button",{attrs:{type:"primary"},on:{click:function(e){t.showPictureModal=!0}}},[t._v(t._s(t.$t("OVERVIEW.MORE")))])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.canUseIMG,expression:"!canUseIMG"}],staticClass:"file-ruler-card-hover phone"},[s("p",{staticClass:"waiting"},[t._v(t._s(t.$t("OVERVIEW.CONTACT_BUSINESS")))])])]),s("div",{staticClass:"file-ruler-card"},[s("p",{staticClass:"file-ruler-card-title"},[t._v(t._s(t.$t("STORAGE.PIC_IDEN")))]),s("div",{staticClass:"file-ruler-card-body"},[s("p",[t._v(t._s(t.$t("OVERVIEW.PIC_ADULT_INFO")))])]),s("div",{staticClass:"file-ruler-card-hover phone"},[s("p",{staticClass:"waiting"},[t._v(t._s(t.$t("OVERVIEW.CONTACT_BUSINESS")))])])]),s("div",{staticClass:"file-ruler-card"},[s("p",{staticClass:"file-ruler-card-title"},[t._v(t._s(t.$t("OVERVIEW.VIDEO_SERICE")))]),s("div",{staticClass:"file-ruler-card-body"},[s("p",[t._v(t._s(t.$t("OVERVIEW.VIDEO_SERICE_INFO")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.canUseTrans,expression:"canUseTrans"}],staticClass:"file-ruler-card-hover"},[s("Button",{attrs:{type:"primary"},on:{click:t.gotoVideoTemplate}},[t._v(t._s(t.$t("OVERVIEW.MORE")))])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.canUseTrans,expression:"!canUseTrans"}],staticClass:"file-ruler-card-hover phone"},[s("p",{staticClass:"waiting"},[t._v(t._s(t.$t("OVERVIEW.CONTACT_BUSINESS")))])])])])])]),s("Col",{staticClass:"right-section",attrs:{span:"5"}},[s("div",{staticClass:"button-section"},[s("a",{attrs:{href:"http://doc.bscstorage.com/faq-pub.html",target:"_blank"}},[s("Button",{attrs:{type:"primary"}},[t._v("FAQ")])],1),s("a",{attrs:{href:"http://doc.bscstorage.com/doc/s2/demo/python.html",target:"_blank"}},[s("Button",{attrs:{type:"primary"}},[t._v("SDK")])],1),s("a",{attrs:{href:"http://doc.bscstorage.com/console-use/console-use.html",target:"_blank"}},[s("Button",{attrs:{type:"primary"}},[t._v(t._s(t.$t("OVERVIEW.DOC")))])],1)]),s("div",{staticClass:"bucket-section"},[s("div",{staticClass:"section-separator"},[s("div",{staticClass:"separator-body"},[s("span",{staticClass:"separator-icon"}),s("span",{staticClass:"separator-info"},[t._v(t._s(t.$t("SIDEBAR.BUCKET")))])])]),s("div",{staticClass:"bucket",on:{click:t.gotoBucket}},[s("p",[t._v(t._s(t.bucketNum))]),s("p",[t._v("Bucket")])]),s("div",{staticClass:"buttons"},[s("Button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.createBucketModal=!0}}},[t._v(t._s(t.$t("STORAGE.ADD_BUCKET")))]),s("Button",{attrs:{size:"small",type:"ghost"},on:{click:t.gotoKeychain}},[t._v(t._s(t.$t("OVERVIEW.MY_KEYCHAIN")))])],1)]),s("div",{staticClass:"update-history"},[s("div",{staticClass:"section-separator"},[s("div",{staticClass:"separator-body"},[s("span",{staticClass:"separator-icon"}),s("span",{staticClass:"separator-info"},[t._v(t._s(t.$t("OVERVIEW.PRODUCT_UPDATE")))])])]),s("Timeline",[s("TimelineItem",[s("span",{attrs:{slot:"before"},slot:"before"},[t._v("2017.12.20")]),s("div",{staticClass:"timeline-dot",attrs:{slot:"dot"},slot:"dot"}),s("span",[t._v("全新概览页上线")])]),s("TimelineItem",[s("span",{attrs:{slot:"before"},slot:"before"},[t._v("2017.11.20")]),s("span",[t._v('新版"统计分析"上线')])]),s("TimelineItem",{attrs:{color:"green"}},[s("span",{attrs:{slot:"before"},slot:"before"},[t._v("2017.10.12")]),s("span",[t._v(t._s(t.$t("OVERVIEW.PRODUCT_UPDATE_1012")))])]),s("TimelineItem",[s("span",{attrs:{slot:"before"},slot:"before"},[t._v("2017.09.11")]),s("span",[t._v("图片处理支持同步预处理")])]),s("TimelineItem",[s("span",{attrs:{slot:"before"},slot:"before"},[t._v("2017.07.22")]),s("span",[t._v(t._s(t.$t("OVERVIEW.PRODUCT_UPDATE_0722")))])]),s("TimelineItem",[s("span",{attrs:{slot:"before"},slot:"before"},[t._v("2017.05.08")]),s("span",[t._v(t._s(t.$t("OVERVIEW.PRODUCT_UPDATE_0508")))])]),s("TimelineItem",[s("span",{attrs:{slot:"before"},slot:"before"},[t._v("2017.04.10")]),s("span",[t._v("主动转码上线")])]),s("TimelineItem",[s("span",{attrs:{slot:"before"},slot:"before"},[t._v("2017.03.05")]),s("span",[t._v(t._s(t.$t("OVERVIEW.PRODUCT_UPDATE_0305")))])]),s("TimelineItem",[s("span",{attrs:{slot:"before"},slot:"before"},[t._v("2017.01.11")]),s("span",[t._v(t._s(t.$t("OVERVIEW.PRODUCT_UPDATE_0111")))])]),s("TimelineItem",{staticStyle:{"padding-bottom":"0"}},[s("span",{attrs:{slot:"before"},slot:"before"},[t._v("2016.12.10")]),s("span",[t._v("图片处理支持图片瘦身")])])],1)],1)])],1),s("Modal",{staticClass:"permission-modal",attrs:{title:t.$t("STORAGE.FILE_PERMISSIONS"),width:"700"},model:{value:t.showPermissionModal,callback:function(e){t.showPermissionModal=e},expression:"showPermissionModal"}},[s("Table",{attrs:{stripe:!0,columns:t.permissionHeader,data:t.permissionsList}})],1),s("Modal",{staticClass:"permission-modal",attrs:{title:t.$t("STORAGE.MIRROR"),width:"700"},model:{value:t.showSourceModal,callback:function(e){t.showSourceModal=e},expression:"showSourceModal"}},[s("Table",{attrs:{stripe:!0,columns:t.sourceHeader,data:t.sourceList}})],1),s("Modal",{staticClass:"permission-modal",attrs:{title:t.$t("SETTINGS.SECURITY_CHAIN"),width:"700"},model:{value:t.showAccessModal,callback:function(e){t.showAccessModal=e},expression:"showAccessModal"}},[s("Table",{attrs:{stripe:!0,columns:t.accessHeader,data:t.accessList}})],1),s("Modal",{staticClass:"permission-modal",attrs:{title:t.$t("STORAGE.PIC_STYLE"),width:"500"},model:{value:t.showPictureModal,callback:function(e){t.showPictureModal=e},expression:"showPictureModal"}},[s("Table",{attrs:{stripe:!0,columns:t.pictureHeader,data:t.bucketList}})],1),s("Modal",{attrs:{title:t.$t("STORAGE.ADD_BUCKET")},on:{"on-ok":t.addBucket,"on-cancel":function(e){t.inputCheck=!1,t.createBucketValue=""}},model:{value:t.createBucketModal,callback:function(e){t.createBucketModal=e},expression:"createBucketModal"}},[s("Input",{attrs:{autofocus:"",placeholder:t.$t("STORAGE.ADD_BUCKET_PLACEHOLDER"),pattern:"/^([a-z0-9][a-z0-9\\-]*[.])*([a-z0-9][a-z0-9\\-]*)*$/"},on:{"on-enter":t.addBucket},model:{value:t.createBucketValue,callback:function(e){t.createBucketValue=e},expression:"createBucketValue"}}),s("span",{staticClass:"info-input-error"},[t._v(t._s(t.inputCheck?t.$t("STORAGE.ADD_BUCKET_CHECK"):""))])],1)],1)},i=[],r=(s("dccb"),s("63af"),s("cf54"),s("98e2")),n=(s("25d7"),s("9382"),s("b267")),o=(s("bc72"),s("3a0f"),s("a3a3"),s("4d0b"),s("6f17")),c=(s("d2e1"),s("f9de"),s("2c14"),s("f4b0"),s("8adc"),s("365c")),l=s("ff66"),u=s("4360"),p=s("7340"),d=s("7265"),h={components:{chart:o["a"]},data:function(){var t=this;return{thisMonth:[new Date((new Date).setDate(1)),v(0)],originOverview:{capacity:[],traffic:[],request:[]},capacityOptions:E,trafficOptions:E,requestOptions:E,permissionsList:[],bucketList:[],spinShow:!0,sourceList:[],accessList:[],showPermissionModal:!1,showSourceModal:!1,showAccessModal:!1,showPictureModal:!1,createBucketModal:!1,createBucketValue:"",permissionHeader:[{title:"Name",width:120,key:"name"},{title:this.$t("STORAGE.OBJECT_PERMISSIONS"),render:function(t,e){var s=e.row.permissions.allUser,a=e.row.permissions.AuthUser;return t("div",["allUser:".concat(s.length>0?s.join(","):"--",";AuthUser:").concat(a.length>0?a.join(","):"--")])}},{title:"Actions",key:"actions",width:80,align:"right",render:function(e,s){return e("Tooltip",{props:{content:t.$t("OVERVIEW.GO_SETTING"),delay:1e3,placement:"top"},class:{"mar-r-5":!0}},[e("i-button",{props:{size:"small"},on:{click:function(){t.gotoBucketPermissionsSetting(s.row)}}},[e("Icon",{props:{type:"ios-cog",size:18}})])])}}],sourceHeader:[{title:"Name",width:120,key:"name"},{title:this.$t("STORAGE.SOURCE_DOMAIN"),render:function(t,e){return t("div",["".concat(e.row.source.domain)])}},{title:this.$t("STORAGE.SOURCE_MODE"),width:200,render:function(t,e){return t("div",["".concat(e.row.source.fetch_mode.split("_")[1])])}},{title:"Actions",key:"actions",width:80,align:"right",render:function(e,s){return e("Tooltip",{props:{content:t.$t("OVERVIEW.GO_SETTING"),delay:1e3,placement:"top"},class:{"mar-r-5":!0}},[e("i-button",{props:{size:"small"},on:{click:function(){t.gotoBucketSourceSetting(s.row)}}},[e("Icon",{props:{type:"ios-cog",size:18}})])])}}],accessHeader:[{title:"Name",key:"name"},{title:this.$t("SETTINGS.IP_BLACK_LIST"),width:"33%",render:function(t,e){return t("div",e.row.blackList.map(function(e){return t("div",["".concat(e.ip,":").concat(e.access)])}))}},{title:this.$t("SETTINGS.IP_WHITE_LIST"),width:"33%",render:function(t,e){return t("div",e.row.whiteList.map(function(e){return t("div",["".concat(e.ip,":").concat(e.access)])}))}},{title:"Actions",key:"actions",width:"85px",align:"right",render:function(e,s){return e("Tooltip",{props:{content:t.$t("OVERVIEW.GO_SETTING"),delay:1e3,placement:"top"},class:{"mar-r-5":!0}},[e("i-button",{props:{size:"small"},on:{click:function(){t.gotoBucketAccessSetting(s.row)}}},[e("Icon",{props:{type:"ios-cog",size:18}})])])}}],pictureHeader:[{title:"Name",width:90,key:"Name"},{title:"Actions",key:"actions",width:80,align:"right",render:function(e,s){return e("Tooltip",{props:{content:t.$t("OVERVIEW.GO_SETTING"),delay:1e3,placement:"top"},class:{"mar-r-5":!0}},[e("i-button",{props:{size:"small"},on:{click:function(){t.gotoBucketPictureStyle(s.row)}}},[e("Icon",{props:{type:"ios-cog",size:18}})])])}}]}},computed:{canUseIMG:function(){return Object(p["a"])("IMGX")},canUseTrans:function(){return Object(p["a"])("TRANSCODE")},dateRange:function(){return m(this.thisMonth[0])+"-"+m(this.thisMonth[1])},inputCheck:function(){return!(this.createBucketValue.length>=3)},bucketNum:function(){return this.bucketList.length},theme:function(){return this.$store.state.theme}},watch:{theme:function(){this.$refs["capacityLine"].chart.resize(),this.$refs["trafficLine"].chart.resize(),this.$refs["requestLine"].chart.resize(),this.setOptions()}},created:function(){this.convertBucketList(),this.getOverviewsData()},methods:{convertBucketList:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch("getBuckets");case 3:e=t.sent,e.Buckets.forEach(function(t){s.getBucketAcl(t.Name).then(function(e){e.Grants.length>0&&s.permissionsList.push({name:t.Name,permissions:s.convertGrants(e.Grants)})}),s.getBucketSource(t.Name).then(function(e){e.length>0&&e.map(function(e){e.is_active&&s.sourceList.push({name:t.Name,source:e})})}),s.getAccessList(t.Name).then(function(e){s.convertAccess(t.Name,e)})}),this.bucketList=Object(r["a"])(e.Buckets),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.$Message.error(this.$t("DASHBOARD.GET_BUCKET_FAILED"));case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),getOverviewsData:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.get(this.getApiURL()).then(function(t){e.originOverview={capacity:e.convertData({value:t.total.space_used,unit:"byte"},!0),traffic:e.convertData({value:t.sum.flow_up_cdn+t.sum.flow_up_pub+t.sum.flow_down_cdn+t.sum.flow_down_pub,unit:"byte"},!0),request:e.convertData({value:t.sum.get_count+t.sum.head_count+t.sum.post_count+t.sum.put_count+t.sum.delete_count+t.sum.list_count,unit:"times"},!0)},_.extend(e,t),e.setOptions()});case 3:this.spinShow=!1,t.next=11;break;case 6:if(t.prev=6,t.t0=t["catch"](0),!t.t0.msg||!t.t0.msg.message||"Not found any data in custom_range"!==t.t0.msg.message){t.next=11;break}return this.$Modal.warning({title:this.$t("OVERVIEW.PROMPT"),content:this.$t("OVERVIEW.PROMPT_CONTENT")}),t.abrupt("return");case 11:case"end":return t.stop()}},t,this,[[0,6]])}));return function(){return t.apply(this,arguments)}}(),setOptions:function(){var t=m(this.thisMonth[0])===m(this.thisMonth[1]);this.capacityOptions=b({dataPart1:this.combineTimeDataUnitLabel(this.distributed.space_used,"容量"),theme:this.theme,oneDayFlag:t}),this.trafficOptions=b({dataPart1:this.combineTimeDataUnitLabel(this.combineTwoArray(this.distributed.flow_up_cdn,this.distributed.flow_up_pub),"流入"),dataPart2:this.combineTimeDataUnitLabel(this.combineTwoArray(this.distributed.flow_down_cdn,this.distributed.flow_down_pub),"流出"),theme:this.theme,oneDayFlag:t}),this.requestOptions=b({dataPart1:this.combineTimeDataUnitLabel(this.combineTwoArray(this.distributed.post_count,this.distributed.put_count),"写","times"),dataPart2:this.combineTimeDataUnitLabel(this.combineFourArray(this.distributed.get_count,this.distributed.head_count,this.distributed.delete_count,this.distributed.list_count),"读","times"),theme:this.theme,oneDayFlag:t})},combineTwoArray:function(t,e){var s=[];return _.forEach(t,function(t,a){s.push(t+e[a])}),s},combineFourArray:function(t,e,s,a){var i=[];return _.forEach(t,function(t,r){i.push(t+e[r]+s[r]+a[r])}),i},combineTimeDataUnitLabel:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"byte",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.time_nodes,i=[];_.forEach(a,function(e,s){i.push([1e3*e,t[s]])});var r={label:e,unit:s,data:i};return r},gotoBucketPermissionsSetting:function(t){this.$router.push({name:"bucketSettings",params:{bucket:t.name,tabName:"permission"}})},gotoBucketSourceSetting:function(t){this.$router.push({name:"bucketSettings",params:{bucket:t.name,tabName:"backSource"}})},gotoBucketAccessSetting:function(t){this.$router.push({name:"bucketSettings",params:{bucket:t.name,tabName:"whiteList"}})},gotoBucketPictureStyle:function(t){this.$router.push({name:"pictureStyles",params:{bucket:t.Name}})},gotoVideoTemplate:function(){this.$router.push({name:"template"})},gotoBucket:function(){this.$router.push({name:"bucket"})},gotoKeychain:function(){this.$router.push({name:"keychain"})},convertGrants:function(t){var e=this,s={allUser:[],AuthUser:[]};return _.each(t,function(t){t.Grantee.URI&&"http://acs.amazonaws.com/groups/global/AllUsers"===t.Grantee.URI?"READ"===t.Permission?s.allUser.push(e.$t("STORAGE.READ")):"WRITE"===t.Permission?s.allUser.push(e.$t("STORAGE.WRITE")):"FULL_CONTROL"===t.Permission&&s.allUser.push(e.$t("STORAGE.READ"),e.$t("STORAGE.WRITE")):"Group"===t.Grantee.Type&&t.Grantee.URI&&"http://acs.amazonaws.com/groups/global/AuthenticatedUsers"===t.Grantee.URI&&("READ"===t.Permission?s.AuthUser.push(e.$t("STORAGE.READ")):"WRITE"===t.Permission?s.AuthUser.push(e.$t("STORAGE.WRITE")):"FULL_CONTROL"===t.Permission&&s.AuthUser.push(e.$t("STORAGE.READ"),e.$t("STORAGE.WRITE")))}),s},convertData:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?e?"byte"===t.unit?Object(d["e"])(t.value,3):Object(d["q"])(t.value,3):"byte"===t.unit?Object(d["d"])(t.value):Object(d["o"])(t.value):[0]},getApiURL:function(){var t="?custom_range="+this.dateRange;return"manage"!==this.$store.getters.mode||this.$store.getters.isSameUser||(t+="&customer="+u["a"].state.current.username),Object(c["g"])(t)},getBucketAcl:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["d"])("getBucketAcl",{Bucket:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getBucketSource:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s={action:"list",bucket:e},t.next=3,Object(c["V"])(s,u["a"].state.current.username);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getAccessList:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s={action:"get",bucket:e},t.next=3,Object(c["C"])(s,u["a"].state.current.username);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),convertAccess:function(t,e){var s=Object(r["a"])(e.delete_file.black_list).concat(Object(r["a"])(e.download_file.black_list),Object(r["a"])(e.upload_file.black_list)),a=Object(r["a"])(e.delete_file.white_list).concat(Object(r["a"])(e.download_file.white_list),Object(r["a"])(e.upload_file.white_list)),i=[],n=[];s[0]&&i.push({ip:s[0],access:this.accessValue(s[0],e)}),s[1]&&i.push({ip:s[1],access:this.accessValue(s[1],e)}),a[0]&&n.push({ip:a[0],access:this.accessValue(a[0],e,"white_list")}),a[1]&&n.push({ip:a[1],access:this.accessValue(a[1],e,"white_list")}),(i.length>0||n.length>0)&&this.accessList.push({name:t,blackList:i,whiteList:n})},accessValue:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"black_list",a=[];return e.upload_file[s].includes(t)&&a.push(this.$t("SETTINGS.UPLOAD")),e.download_file[s].includes(t)&&a.push(this.$t("SETTINGS.DOWNLOAD")),e.delete_file[s].includes(t)&&a.push(this.$t("SETTINGS.DELETE")),a.join(",")},addBucket:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.createBucketModal=!1,!(this.createBucketValue.length>2)){t.next=9;break}return t.next=4,Object(l["d"])("createBucket",{Bucket:this.createBucketValue});case 4:this.bucketList.push({Name:this.createBucketValue}),this.$Message.success(this.$t("STORAGE.ADD_BUCKET_SUCCESS")),this.createBucketValue="",t.next=10;break;case 9:this.$Message.warning(this.$t("STORAGE.ADD_BUCKET_CHECK"));case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},f=function(t){return t<10?"0"+t:String(t)},v=function(t){return new Date((new Date).getTime()-864e5*t)},m=function(t){return t&&t.getFullYear()+f(t.getMonth()+1)+f(t.getDate())},E={tooltip:{trigger:"axis",textStyle:{color:"#fff",fontSize:12},axisPointer:{lineStyle:{color:"#1e9fff"},z:0},backgroundColor:"rgba(71, 86, 105, 0.8)",padding:10},grid:{top:"25",left:"15",right:"20",bottom:"20",containLabel:!0,show:!0,borderColor:"none"},color:["#20a0ff","#8ecfff"],legend:{textStyle:{color:"#475669"},icon:"reac",right:34},xAxis:{type:"time",offset:5,axisLine:{show:!1},interval:2592e6,axisTick:{show:!1},axisLabel:{textStyle:{color:"#475669",fontSize:12}},splitLine:{lineStyle:{color:"#fff"}}},yAxis:{type:"value",min:0,minInterval:1,offset:5,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#475669",fontSize:12}},splitLine:{lineStyle:{color:"rgba(0, 0, 0, 0.06)"}}}},b=function(t){var e=t.dataPart1,s=t.dataPart2,a=t.theme,i=t.oneDayFlag,r=_.defaultsDeep({},E);"dark"===a&&(r.legend.textStyle.color="#8492a6",r.xAxis.splitLine.lineStyle.color="#313a41",r.yAxis.splitLine.lineStyle.color="rgba(255, 255, 255, 0.1)",r.xAxis.axisLabel.textStyle.color="#8492a6",r.yAxis.axisLabel.textStyle.color="#8492a6"),r.grid.backgroundColor="dark"===a?"#293137":"#f9fafc",r.grid.borderColor="dark"===a?"#313a41":"#fff",r.grid.right=i?"40":"20";var n=[],o=[{type:"line",symbol:"none",data:e.data,name:e.label,smooth:!0,sampling:"average",areaStyle:{normal:{color:"#20a0ff",opacity:.8}}}];if(s){n=[e.label,s.label];var c={type:"line",symbol:"none",data:s.data,name:s.label,smooth:!0,sampling:"average",areaStyle:{normal:{color:"#8ecfff",opacity:.8}}};o.push(c)}var l=_.defaultsDeep({},r,{legend:{data:n},series:o,tooltip:{formatter:function(t){var s="时间："+(i?Object(d["i"])(t[0].value[0]+36e5):Object(d["g"])(t[0].value[0]));return _.each(t,function(t){s+='<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+t.color+'"></span>'+t.seriesName+"：",s+="byte"===e.unit?Object(d["d"])(t.value[1],3):Object(d["o"])(t.value[1])}),s}},xAxis:{axisLabel:{formatter:function(t){return i?Object(d["h"])(t+36e5):Object(d["g"])(t,"MD")}}},yAxis:{axisLabel:{formatter:function(t){return"byte"===e.unit?Object(d["d"])(t):Object(d["p"])(t)}}}});return l},O=h,g=(s("9521"),s("048f")),C=Object(g["a"])(O,a,i,!1,null,"4e08240b",null);C.options.__file="Overview.vue";e["default"]=C.exports},"2e27":function(t,e,s){},9521:function(t,e,s){"use strict";var a=s("2e27"),i=s.n(a);i.a}}]);