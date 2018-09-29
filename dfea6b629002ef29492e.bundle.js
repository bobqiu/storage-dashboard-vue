(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3a4"],{"0e7f":function(e,t,n){},"0ff4":function(e,t,n){},"187d":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bsc-pipeline-list"},[n("div",{staticClass:"layout-bsc-toolbar layout-legend"},[n("Button",{staticClass:"button-bsc-add-bucket",attrs:{type:"primary"},on:{click:function(t){e.goPipelineEdit("none")}}},[e._v(e._s(e.$t("VIDEO.NEW_PIPELINE")))]),n("legend-list",{attrs:{data:e.legendList}})],1),n("Table",{attrs:{border:"",context:e.self,stripe:!0,columns:e.listHeader,data:e.pipelineList,"no-data-text":e.$t("STORAGE.NO_LIST")}}),n("div",{staticClass:"section-paging"},[n("Button",{directives:[{name:"show",rawName:"v-show",value:e.pageTokenArray.length>0,expression:"pageTokenArray.length > 0"}],attrs:{type:"ghost",size:"small"},on:{click:function(t){e.listPipelines(""),e.pageTokenArray.length=0}}},[e._v(e._s(e.$t("PUBLIC.PAGE_FIRST")))]),n("Button",{directives:[{name:"show",rawName:"v-show",value:e.pageTokenArray.length>0,expression:"pageTokenArray.length > 0"}],attrs:{type:"ghost",size:"small"},on:{click:function(t){e.previousPage()}}},[e._v(e._s(e.$t("PUBLIC.PAGE_PREV")))]),n("Button",{directives:[{name:"show",rawName:"v-show",value:e.pageToken,expression:"pageToken"}],attrs:{type:"ghost",size:"small"},on:{click:function(t){e.nextPage()}}},[e._v(e._s(e.$t("PUBLIC.PAGE_NEXT")))])],1)],1)},s=[],a=(n("ac6a"),n("6762"),n("2fdb"),n("96cf"),n("3040")),r=(n("7f7f"),n("cadf"),n("551c"),n("097d"),n("4360")),o=n("ff66"),c=n("e9b8"),l={components:{legendList:c["a"]},data:function(){var e=this;return{legendList:[{icon:"ios-toggle",text:"VIDEO.STATUS"},{icon:"compose",text:"PUBLIC.EDIT"},{icon:"ios-trash",text:"PUBLIC.DELETE"}],iconSize:18,self:this,pipelineList:[],pageToken:"",pageTokenArray:[],listHeader:[{title:this.$t("VIDEO.PIPELINE_ID"),key:"id",width:"18%"},{title:this.$t("VIDEO.PIPELINE_NAME"),key:"name",width:"12%"},{title:this.$t("VIDEO.INPUT_BUCKET"),key:"input_bucket",width:"12%"},{title:this.$t("VIDEO.OUTPUT_BUCKET"),key:"output_bucket",width:"12%"},{title:this.$t("VIDEO.PERMISSION_SETTINGS"),render:function(e,t){return e("Poptip",{style:{padding:"6px 0"},props:{placement:"right",trigger:"hover"}},[e("div",t.row.permission.map(function(t){return e("Tag",{props:{type:"border"}},"".concat(t.name,":").concat(t.value))})),e("div",{slot:"content"},t.row.permissionDetails.map(function(t){return e("p","".concat(t.name,":").concat(t.value))}))])}},{title:this.$t("VIDEO.ACTIONS"),key:"actions",width:"170px",align:"right",render:function(t,n){return t("div",[t("Tooltip",{props:{content:e.$t("VIDEO.STATUS"),delay:500,placement:"top"},class:{"mar-r-8":!0}},[t("i-switch",{props:{value:"true"===n.row.is_enabled,size:"large"},on:{input:function(){e.changeStatus(n.row)}}},[t("span",{slot:"open"},e.$t("VIDEO.OPEN")),t("span",{slot:"close"},e.$t("VIDEO.CLOSE"))])]),t("Tooltip",{props:{content:e.$t("PUBLIC.EDIT"),delay:500,placement:"top"},class:{"mar-r-8":!0}},[t("i-button",{props:{size:"small"},on:{click:function(){e.goPipelineEdit(n.row.id)}}},[t("Icon",{props:{type:"compose",size:e.iconSize}})])]),t("Tooltip",{props:{content:e.$t("PUBLIC.DELETE"),delay:500,placement:"top"}},[t("i-button",{props:{size:"small"},on:{click:function(){e.deletePipelineConfirm(n.row)}}},[t("Icon",{props:{type:"ios-trash",size:e.iconSize}})])])])}}]}},computed:{username:function(){return r["a"].state.current.username}},created:function(){this.listPipelines()},methods:{listPipelines:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.$Loading.start(),!t){e.next=8;break}return e.next=5,Object(o["e"])("listPipelines",{PageToken:t});case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,Object(o["e"])("listPipelines");case 10:e.t0=e.sent;case 11:return n=e.t0,e.next=14,this.convert2Front(n.Pipelines);case 14:if(this.pipelineList=e.sent,t&&!this.pageTokenArray.includes(t)&&this.pageTokenArray.push(t),!n.NextPageToken){e.next=23;break}return e.next=19,Object(o["e"])("listPipelines",{PageToken:n.NextPageToken});case 19:i=e.sent,this.pageToken=i.Pipelines.length?n.NextPageToken:null,e.next=24;break;case 23:this.pageToken=null;case 24:this.$Loading.finish(),e.next=30;break;case 27:e.prev=27,e.t1=e["catch"](0),this.$Loading.error();case 30:case"end":return e.stop()}},e,this,[[0,27]])}));return function(t){return e.apply(this,arguments)}}(),convert2Front:function(e){var t=this,n=[];return e.forEach(function(e){var i=e.ContentConfig?e.ContentConfig.Permissions:[{Grantee:t.username,GranteeType:"Canonical",Access:["FullControl"]}],s={id:e.Id,name:e.Name,input_bucket:e.InputBucket,output_bucket:e.OutputBucket,is_enabled:"Active"===e.Status?"true":"false",permission:[],permissionDetails:[]};s.permission[0]={name:"AllUsers",value:"--"},s.permission[1]={name:"AuthenticatedUsers",value:"--"},s.permissionDetails[0]={name:"AllUsers",value:"--"},s.permissionDetails[1]={name:"AuthenticatedUsers",value:"--"},_.forEach(i,function(e){"AllUsers"===e.Grantee?(s.permission[0]={name:e.Grantee,value:e.Access.join()},s.permissionDetails[0]={name:e.Grantee,value:e.Access.join()}):"AuthenticatedUsers"===e.Grantee?(s.permission[1]={name:e.Grantee,value:e.Access.join()},s.permissionDetails[1]={name:e.Grantee,value:e.Access.join()}):s.permissionDetails.push({name:e.Grantee,value:e.Access.join()})}),n.push(s)}),n},previousPage:function(){var e=this.pageTokenArray[this.pageTokenArray.length-2];this.pageTokenArray.pop(),this.listPipelines(e)},nextPage:function(){this.listPipelines(this.pageToken)},goPipelineEdit:function(e){this.$router.push({name:"pipelineEdit",params:{id:e}})},deletePipelineConfirm:function(e){var t=this;this.$Modal.confirm({content:this.$t("STORAGE.DELETE_CONFIRMED",{fileName:e.id}),okText:this.$t("PUBLIC.CONFIRMED"),cancelText:this.$t("PUBLIC.CANCLE"),title:this.$t("PUBLIC.DELETE"),onOk:function(){return t.deletePipeline(e)}})},deletePipeline:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.$Loading.start(),e.next=4,Object(o["e"])("deletePipeline",{Id:t.id},this.$t("VIDEO.PIPELINE_DELETE_ERROR"));case 4:this.pipelineList.splice(t._index,1),this.$Loading.finish(),this.$Message.success(this.$t("VIDEO.DELETED_SUCCESSFULLY")),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),this.$Loading.error();case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),changeStatus:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.$Loading.start(),e.next=4,Object(o["e"])("updatePipelineStatus",{Id:t.id,Status:"true"===t.is_enabled?"Paused":"Active"});case 4:n=this.pipelineList[t._index].is_enabled,this.pipelineList[t._index].is_enabled="true"===n?"false":"true",this.$Loading.finish(),this.$Message.success(this.$t("VIDEO.SET_UP_SUCCESSFULLY")),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),this.$Loading.error(),this.$Message.error(this.$t("VIDEO.SET_UP_FAILED"));case 14:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()}},p=l,u=(n("fd09"),n("2877")),h=Object(u["a"])(p,i,s,!1,null,"13ee0007",null);h.options.__file="PipelineList.vue";t["default"]=h.exports},a046:function(e,t,n){"use strict";var i=n("0e7f"),s=n.n(i);s.a},e9b8:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bsc-legend"},e._l(e.data,function(t){return n("div",{key:t.text,staticClass:"legend-item"},[n("Icon",{attrs:{type:t.icon,size:"14"}}),n("span",{staticClass:"legend-text"},[e._v(e._s(e.$t(t.text)))]),t!==e.data[e.data.length-1]?n("span",{staticClass:"legend-separator"},[e._v("|")]):e._e()],1)}))},s=[],a={props:["data"]},r=a,o=(n("a046"),n("2877")),c=Object(o["a"])(r,i,s,!1,null,"ea96999c",null);c.options.__file="legend.vue";t["a"]=c.exports},fd09:function(e,t,n){"use strict";var i=n("0ff4"),s=n.n(i);s.a}}]);