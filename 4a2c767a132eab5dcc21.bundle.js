(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61ace5ed"],{"06b2":function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"g",function(){return p}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return f}),n.d(t,"d",function(){return g}),n.d(t,"a",function(){return v}),n.d(t,"c",function(){return I});n("5a09"),n("84fb"),n("bc72"),n("25d7");var r=n("98e2"),i=(n("9382"),n("b267")),a=n("ff66"),s=n("dd1f"),o=n("d570"),c=n.n(o),u=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["c"])({timeout:1e4,host:s["a"].policyHOST});case 2:return n=e.sent,e.abrupt("return",new Promise(function(e,r){return n.getBucketPolicy({Bucket:t},function(n,i){return n&&"PolicyNotFound"!==n.code?r(n):e({bucket:t,data:i})})}));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r={name:"post_upload_transcoding",value:n},e.prev=1,e.abrupt("return",Object(a["d"])("putBucketPolicy",{Bucket:t,Policy:JSON.stringify(r)},s["a"].policyHOST));case 5:return e.prev=5,e.t0=e["catch"](1),e.abrupt("return",Promise.reject(e.t0));case 8:case"end":return e.stop()}},e,this,[[1,5]])}));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(t);case 3:return n=e.sent,r=n.data&&n.data.Policy?JSON.parse(n.data.Policy):{},i=[],r&&r.post_upload_transcoding&&r.post_upload_transcoding.length>0&&(i=r.post_upload_transcoding),e.abrupt("return",i);case 10:e.prev=10,e.t0=e["catch"](0),c.a.Message.error(e.t0.message,5);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),h=[],f=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return h=[],e.next=3,d();case 3:return e.abrupt("return",h);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=7;break}return e.next=4,Object(a["e"])("listPipelines");case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,Object(a["e"])("listPipelines",{PageToken:t});case 9:e.t0=e.sent;case 10:if(i=e.t0,(n=h).push.apply(n,Object(r["a"])(i.Pipelines)),!i.NextPageToken){e.next=15;break}return e.next=15,d(i.NextPageToken);case 15:e.next=20;break;case 17:e.prev=17,e.t1=e["catch"](0),c.a.Message.error(e.t1.message,5);case 20:case"end":return e.stop()}},e,this,[[0,17]])}));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return b=[],e.next=3,m();case 3:return t=[],n=[],r=[],b.forEach(function(e){t[e.Id]=e.Container}),b.forEach(function(e){n[e.Id]=e.Name,r[e.Id]=e.Video.Codec}),e.abrupt("return",{templateList:b,templateContainer:t,templateVideoCodec:r,templateName:n});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),b=[],m=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=6;break}return e.next=3,Object(a["e"])("listPresets");case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,Object(a["e"])("listPresets",{PageToken:t});case 8:e.t0=e.sent;case 9:if(i=e.t0,(n=b).push.apply(n,Object(r["a"])(i.Presets)),!i.NextPageToken){e.next=14;break}return e.next=14,m(i.NextPageToken);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=Math.floor(e/1e3);return["".concat(Math.floor(t/3600),":").concat(Math.floor(t/60)%60,":").concat(t%60),"".concat(e%1e3)]},I=function(e,t){var n=e.split(":").map(function(e){return Number(e)});return(1e3*(3600*n[0]+60*n[1]+n[2])+Number(t)).toString()}},"1aa1b":function(e,t,n){},3542:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"4f6c":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"layout-bsc-toolbar layout-legend"},[n("div",[n("Button",{staticClass:"button-bsc-add-bucket",attrs:{type:"primary"},on:{click:e.goJobEdit}},[e._v(e._s(e.$t("VIDEO.CREATE_JOB")))]),n("div",{staticClass:"select-box"},[n("span",{staticClass:"quary-name"},[e._v(e._s(e.$t("VIDEO.PIPE"))+" : ")]),n("Select",{staticStyle:{width:"200px"},on:{"on-change":e.listJobsByPipeline},model:{value:e.pipeId,callback:function(t){e.pipeId=t},expression:"pipeId"}},e._l(e.pipes,function(t){return n("Option",{key:t.Id,attrs:{value:t.Id}},[e._v(e._s(t.Name))])}))],1)],1),n("legend-list",{attrs:{data:e.legendList}})],1),n("Table",{attrs:{border:"",context:e.self,stripe:!0,columns:e.listHeader,data:e.jobList,"no-data-text":e.$t("STORAGE.NO_LIST")}}),n("div",{staticClass:"section-paging"},[n("Button",{directives:[{name:"show",rawName:"v-show",value:e.pageToken.length>0,expression:"pageToken.length > 0"}],attrs:{type:"ghost",size:"small"},on:{click:function(t){e.listJobsByPipeline(e.pipeId),e.pageToken.length=0}}},[e._v(e._s(e.$t("PUBLIC.PAGE_FIRST")))]),n("Button",{directives:[{name:"show",rawName:"v-show",value:e.pageToken.length>0,expression:"pageToken.length > 0"}],attrs:{type:"ghost",size:"small"},on:{click:e.previousPage}},[e._v(e._s(e.$t("PUBLIC.PAGE_PREV")))]),n("Button",{directives:[{name:"show",rawName:"v-show",value:e.nextPageToken,expression:"nextPageToken"}],attrs:{type:"ghost",size:"small"},on:{click:e.nextPage}},[e._v(e._s(e.$t("PUBLIC.PAGE_NEXT")))])],1)],1)},i=[],a=(n("25d7"),n("9382"),n("b267")),s=(n("bc72"),n("ff66")),o=n("06b2"),c=n("e9b81"),u={components:{legendList:c["a"]},data:function(){var e=this;return{iconSize:18,self:this,jobList:[],pipes:[],pipeId:"",nextPageShow:!1,pageToken:[],nextPageToken:"",legendList:[{icon:"ios-trash",text:"PUBLIC.DELETE"}],listHeader:[{title:this.$t("VIDEO.JOB_ID"),width:"9%",render:function(e,t){var n=t.row.Id.split("-")[1];return e("Poptip",{props:{content:t.row.Id,placement:"right",trigger:"hover"},style:{cursor:"pointer"}},[e("div",[n])])}},{title:this.$t("VIDEO.OUTPUT_FILE_NAME"),width:"17%",render:function(e,t){var n=t.row.outputNames;if(n&&n.length>0)return e("div",n.map(function(t){return e("Tag",{props:{type:"border"}},t)}))}},{title:this.$t("VIDEO.PIPE_ID"),width:"17%",key:"PipelineId"},{title:this.$t("VIDEO.JOB_TEMPLATE"),render:function(e,t){var n=t.row.templates;if(n&&n.length>0)return e("div",n.map(function(t){return e("Tag",{props:{type:"border"}},t)}))}},{title:this.$t("VIDEO.STATUS"),width:"10%",key:"Status"},{title:this.$t("VIDEO.CREATE_TIME"),width:"17%",key:"cTime"},{title:this.$t("VIDEO.OPERATION"),key:"actions",width:"82px",align:"right",render:function(t,n){return t("Tooltip",{props:{content:e.$t("PUBLIC.DELETE"),delay:1e3,placement:"top"}},[t("i-button",{props:{size:"small"},on:{click:function(){e.deleteJobConfirm(n.row)}}},[t("Icon",{props:{type:"ios-trash",size:e.iconSize}})])])}}]}},created:function(){this.listJobs()},methods:{listJobs:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["f"])();case 2:if(this.pipes=e.sent,!(this.pipes.length>0)){e.next=7;break}return this.pipeId=this.pipes[0].Id,e.next=7,this.listJobsByPipeline(this.pipeId);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),listJobsByPipeline:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.$Loading.start(),n){e.next=8;break}return e.next=5,Object(s["e"])("listJobsByPipeline",{PipelineId:t});case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,Object(s["e"])("listJobsByPipeline",{PipelineId:t,PageToken:n});case 10:r=e.sent;case 11:return e.next=13,p(r.Jobs);case 13:this.jobList=e.sent,this.nextPageToken=r.NextPageToken,this.$Loading.finish(),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](0),this.$Loading.error();case 21:case"end":return e.stop()}},e,this,[[0,18]])}));return function(t,n){return e.apply(this,arguments)}}(),previousPage:function(){var e=this.pageToken[this.pageToken.length-2];this.pageToken.pop(),this.listJobsByPipeline(this.pipeId,e)},nextPage:function(){this.nextPageToken&&this.pageToken.push(this.nextPageToken),this.listJobsByPipeline(this.pipeId,this.nextPageToken)},goJobEdit:function(){this.$router.push({name:"jobEdit",params:{id:"none"}})},deletePreset:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.$Loading.start(),e.next=4,Object(s["e"])("deletePreset",{Id:t.id});case 4:this.templateList.splice(t._index,1),this.$Loading.finish(),this.$Message.success(this.$t("VIDEO.DELETED_SUCCESSFULLY")),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),this.$Loading.error();case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),createPipe:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.$Loading.start(),e.next=4,Object(s["e"])("createPipeline",h);case 4:this.$Loading.finish(),this.$Message.success(this.$t("VIDEO.CREATED")),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.$Loading.error();case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),createJob:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.$Loading.start(),e.next=4,Object(s["e"])("createJob",l);case 4:this.$Loading.finish(),this.$Message.success(this.$t("VIDEO.DELETED")),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.$Loading.error();case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),cancelJob:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.$Loading.start(),e.next=4,Object(s["e"])("cancelJob",{Id:t.Id},this.$t("VIDEO.JOB_CANCEL_ERROR"));case 4:this.jobList.splice(t._index,1),this.$Loading.finish(),this.$Message.success(this.$t("VIDEO.DELETED")),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),this.$Loading.error();case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),deleteJobConfirm:function(e){var t=this;this.$Modal.confirm({content:this.$t("STORAGE.DELETE_CONFIRMED",{fileName:e.Id}),okText:this.$t("PUBLIC.CONFIRMED"),cancelText:this.$t("PUBLIC.CANCLE"),title:this.$t("PUBLIC.DELETE"),onOk:function(){return t.cancelJob(e)}})}}},p=function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=[],!(t&&t.length>0)){e.next=6;break}return e.next=4,Object(o["d"])();case 4:r=e.sent,t.forEach(function(e){var t={};t.Id=e.Id,t.PipelineId=e.PipelineId,t.Status=e.Status;var i=new Date(parseInt(e.Timing.SubmittedTimeMillis)),a=i.getMonth()+1<10?"0".concat(i.getMonth()+1):i.getMonth()+1;t.cTime="".concat(i.getFullYear(),"-").concat(a,"-").concat(i.getDate()," ").concat(i.getHours(),":").concat(i.getMinutes(),":").concat(i.getSeconds()),t.outputNames=e.Outputs?e.Outputs.map(function(e){return e.Key}):"",t.templates=e.Outputs?e.Outputs.map(function(e){return"".concat(e.PresetId,":").concat(r.templateName[e.PresetId])}):"",n.push(t)});case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),l={Inputs:[{Key:"path/source"}],OutputKeyPrefix:"path/output",Outputs:[{Key:"outputName",PresetId:"623",SegmentDuration:"20"}],Snapshots:[{Key:"SnapshotsName",Format:"jpg",Time:"1233",Interval:"12",Number:"1000"}],PipelineId:"1164000000039767922"},h={Name:" forJob",InputBucket:"policytest",OutputBucket:"policytest",ContentConfig:{Permissions:[{GranteeType:"Group",Grantee:"AllUsers",Access:["FullControl"]}]},SuccessCallbackUrl:"",FailureCallbackUrl:""},f=u,d=(n("bcce"),n("048f")),g=Object(d["a"])(f,r,i,!1,null,"9822ebfe",null);g.options.__file="JobList.vue";t["default"]=g.exports},"84fb":function(e,t,n){"use strict";var r=n("53da"),i=n("7a57"),a=n("af55"),s=n("69d8"),o=n("4b3d"),c=n("cce3"),u=n("e853").f,p=n("8566").f,l=n("9a0d").f,h=n("d079").trim,f="Number",d=r[f],g=d,b=d.prototype,m=a(n("e177")(b))==f,v="trim"in String.prototype,I=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():h(t,3);var n,r,i,a=t.charCodeAt(0);if(43===a||45===a){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+t}for(var s,c=t.slice(2),u=0,p=c.length;u<p;u++)if(s=c.charCodeAt(u),s<48||s>i)return NaN;return parseInt(c,r)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof d&&(m?c(function(){b.valueOf.call(n)}):a(n)!=f)?s(new g(I(t)),n,d):I(t)};for(var x,E=n("f711")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;E.length>k;k++)i(g,x=E[k])&&!i(d,x)&&l(d,x,p(g,x));d.prototype=b,b.constructor=d,n("7e22")(r,f,d)}},"98e2":function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function i(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(e){return r(e)||i(e)||a()}n.d(t,"a",function(){return s})},a046:function(e,t,n){"use strict";var r=n("1aa1b"),i=n.n(r);i.a},bcce:function(e,t,n){"use strict";var r=n("eda6"),i=n.n(r);i.a},d079:function(e,t,n){var r=n("8718"),i=n("5b8a"),a=n("cce3"),s=n("3542"),o="["+s+"]",c="​",u=RegExp("^"+o+o+"*"),p=RegExp(o+o+"*$"),l=function(e,t,n){var i={},o=a(function(){return!!s[e]()||c[e]()!=c}),u=i[e]=o?t(h):s[e];n&&(i[n]=u),r(r.P+r.F*o,"String",i)},h=l.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(p,"")),e};e.exports=l},e853:function(e,t,n){var r=n("6220"),i=n("bea0").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},e9b81:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bsc-legend"},e._l(e.data,function(t){return n("div",{key:t.text,staticClass:"legend-item"},[n("Icon",{attrs:{type:t.icon,size:"14"}}),n("span",{staticClass:"legend-text"},[e._v(e._s(e.$t(t.text)))]),t!==e.data[e.data.length-1]?n("span",{staticClass:"legend-separator"},[e._v("|")]):e._e()],1)}))},i=[],a={props:["data"]},s=a,o=(n("a046"),n("048f")),c=Object(o["a"])(s,r,i,!1,null,"ea96999c",null);c.options.__file="legend.vue";t["a"]=c.exports},eda6:function(e,t,n){}}]);