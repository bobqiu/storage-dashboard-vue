(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e2c"],{"06b2":function(t,e,n){"use strict";n.d(e,"b",function(){return u}),n.d(e,"g",function(){return p}),n.d(e,"e",function(){return l}),n.d(e,"f",function(){return d}),n.d(e,"d",function(){return b}),n.d(e,"a",function(){return _}),n.d(e,"c",function(){return v});n("6b54"),n("c5f6"),n("28a5"),n("ac6a");var r=n("8afe"),a=(n("96cf"),n("3040")),i=n("ff66"),c=n("dd1f"),o=n("2587"),s=n.n(o),u=function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["c"])({timeout:1e4,host:c["a"].policyHOST});case 2:return n=t.sent,t.abrupt("return",new Promise(function(t,r){return n.getBucketPolicy({Bucket:e},function(n,a){return n&&"PolicyNotFound"!==n.code?r(n):t({bucket:e,data:a})})}));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r={name:"post_upload_transcoding",value:n},t.prev=1,t.abrupt("return",Object(i["d"])("putBucketPolicy",{Bucket:e,Policy:JSON.stringify(r)},c["a"].policyHOST));case 5:return t.prev=5,t.t0=t["catch"](1),t.abrupt("return",Promise.reject(t.t0));case 8:case"end":return t.stop()}},t,this,[[1,5]])}));return function(e,n){return t.apply(this,arguments)}}(),l=function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u(e);case 3:return n=t.sent,r=n.data&&n.data.Policy?JSON.parse(n.data.Policy):{},a=[],r&&r.post_upload_transcoding&&r.post_upload_transcoding.length>0&&(a=r.post_upload_transcoding),t.abrupt("return",a);case 10:t.prev=10,t.t0=t["catch"](0),s.a.Message.error(t.t0.message,5);case 13:case"end":return t.stop()}},t,this,[[0,10]])}));return function(e){return t.apply(this,arguments)}}(),f=[],d=function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return f=[],t.next=3,h();case 3:return t.abrupt("return",f);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e){t.next=7;break}return t.next=4,Object(i["e"])("listPipelines");case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,Object(i["e"])("listPipelines",{PageToken:e});case 9:t.t0=t.sent;case 10:if(a=t.t0,(n=f).push.apply(n,Object(r["a"])(a.Pipelines)),!a.NextPageToken){t.next=15;break}return t.next=15,h(a.NextPageToken);case 15:t.next=20;break;case 17:t.prev=17,t.t1=t["catch"](0),s.a.Message.error(t.t1.message,5);case 20:case"end":return t.stop()}},t,this,[[0,17]])}));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return g=[],t.next=3,m();case 3:return e=[],n=[],r=[],g.forEach(function(t){e[t.Id]=t.Container}),g.forEach(function(t){n[t.Id]=t.Name,r[t.Id]=t.Video.Codec}),t.abrupt("return",{templateList:g,templateContainer:e,templateVideoCodec:r,templateName:n});case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),g=[],m=function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e){t.next=6;break}return t.next=3,Object(i["e"])("listPresets");case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,Object(i["e"])("listPresets",{PageToken:e});case 8:t.t0=t.sent;case 9:if(a=t.t0,(n=g).push.apply(n,Object(r["a"])(a.Presets)),!a.NextPageToken){t.next=14;break}return t.next=14,m(a.NextPageToken);case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),_=function(t){var e=Math.floor(t/1e3);return["".concat(Math.floor(e/3600),":").concat(Math.floor(e/60)%60,":").concat(e%60),"".concat(t%1e3)]},v=function(t,e){var n=t.split(":").map(function(t){return Number(t)});return(1e3*(3600*n[0]+60*n[1]+n[2])+Number(e)).toString()}},"0e7f":function(t,e,n){},5729:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"layout-bsc-toolbar layout-legend"},[n("Button",{staticClass:"button-bsc-add-bucket",attrs:{type:"primary"},on:{click:function(e){t.goOutputEdit("none","none")}}},[t._v(t._s(t.$t("VIDEO.NEW_CONFIGURATION")))]),n("legend-list",{attrs:{data:t.legendList}})],1),n("Table",{attrs:{border:"",context:t.self,stripe:!0,columns:t.listHeader,data:t.policyFront,"no-data-text":t.$t("STORAGE.NO_LIST")}})],1)},a=[],i=n("8afe"),c=(n("ac6a"),n("96cf"),n("3040")),o=(n("cadf"),n("551c"),n("097d"),n("ff66")),s=n("06b2"),u=n("e9b8"),p={components:{legendList:u["a"]},data:function(){var t=this;return{iconSize:18,self:this,policyFront:this.policyFront,legendList:[{icon:"ios-toggle",text:"VIDEO.STATUS"},{icon:"compose",text:"PUBLIC.EDIT"},{icon:"ios-trash",text:"PUBLIC.DELETE"}],listHeader:[{title:"ID",key:"id"},{title:this.$t("VIDEO.INPUT_BUCKET"),width:"13%",key:"input_bucket"},{title:this.$t("VIDEO.OUTPUT_BUCKET"),width:"13%",key:"output_bucket"},{title:this.$t("VIDEO.KEYS_REG"),width:"17%",render:function(t,e){if(e.row.allowed_keys_regex.length>0)return e.row.allowed_keys_regex.map(function(e){return t("p","".concat(e))})}},{title:this.$t("VIDEO.OUTPUT_KEY_PREFIX"),width:"13%",render:function(t,e){return t("p",[e.row.output_key_prefix])}},{title:this.$t("VIDEO.OUTPUTS"),width:"15%",render:function(e,n){var r=n.row.outputs||[],a=r[0]?r[0].watermarks?r[0].watermarks[0].InputKey:"未启用":"";if(r.length>1){var i=r.map(function(n){var r=n.segment_duration||"-",a=n.watermarks?n.watermarks[0].InputKey:"未启用";return e("p",["keySuffix:".concat(n.key_suffix,","),e("br"),"".concat(t.$t("VIDEO.VIDEO_TRANSCODING_TEMPLATE_ID"),":").concat(n.preset_id,","),e("br"),"".concat(t.$t("VIDEO.HLS_SLICE_LENGTH"),":").concat(r,","),e("br"),"水印文件key:".concat(a,","),e("br")])});return e("div",{class:"output-wrap"},[e("p",["keySuffix:".concat(r[0].key_suffix,","),e("br"),"".concat(t.$t("VIDEO.VIDEO_TRANSCODING_TEMPLATE_ID"),":").concat(r[0].preset_id,","),e("br"),"".concat(t.$t("VIDEO.HLS_SLICE_LENGTH"),":").concat(r[0].segment_duration||"-",","),e("br"),"水印文件key:".concat(a,","),e("br")]),e("Poptip",[e("i-button",{props:{type:"ghost",size:"small"},class:"button-more"},["更多"]),e("div",{slot:"content"},[i])])])}if(r.length>0)return e("p",{class:"output-wrap"},["keySuffix:".concat(r[0].key_suffix,","),e("br"),"".concat(t.$t("VIDEO.VIDEO_TRANSCODING_TEMPLATE_ID"),":").concat(r[0].preset_id,","),e("br"),"".concat(t.$t("VIDEO.HLS_SLICE_LENGTH"),":").concat(r[0].segment_duration||"-",","),e("br"),"水印文件key:".concat(a,","),e("br")])}},{title:this.$t("VIDEO.OPERATION"),key:"actions",align:"right",width:"170px",render:function(e,n){return e("div",[e("Tooltip",{props:{content:t.$t("VIDEO.STATUS"),delay:1e3,placement:"top"},class:{"mar-r-5":!0}},[e("i-switch",{props:{value:"true"===n.row.is_enabled,size:"large"},on:{input:function(){t.changeStatus(n.row)}}},[e("span",{slot:"open"},t.$t("VIDEO.OPEN")),e("span",{slot:"close"},t.$t("VIDEO.CLOSE"))])]),e("Tooltip",{props:{content:t.$t("PUBLIC.EDIT"),delay:1e3,placement:"top"},class:{"mar-r-5":!0}},[e("i-button",{props:{size:"small"},on:{click:function(){t.goOutputEdit(n.row.input_bucket,n.row.id)}}},[e("Icon",{props:{type:"compose",size:t.iconSize}})])]),e("Tooltip",{props:{content:t.$t("PUBLIC.DELETE"),delay:1e3,placement:"top"}},[e("i-button",{props:{size:"small"},on:{click:function(){t.deletePolicyConfirm(n.row)}}},[e("Icon",{props:{type:"ios-trash",size:t.iconSize}})])])])}}]}},created:function(){this.listPolify()},methods:{listPolify:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getBucketNames();case 2:return e=t.sent,t.prev=3,this.$Loading.start(),t.next=7,Promise.all(e.map(function(t){return Object(s["b"])(t)}));case 7:n=t.sent,this.policyFront=this.convert2Front(n),this.$Loading.finish(),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),this.$Loading.error();case 15:case"end":return t.stop()}},t,this,[[3,12]])}));return function(){return t.apply(this,arguments)}}(),getBucketNames:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$Loading.start(),t.prev=1,t.next=4,this.$store.dispatch("getBuckets");case 4:return e=t.sent,t.abrupt("return",_.map(e.Buckets,function(t){return t.Name}));case 8:t.prev=8,t.t0=t["catch"](1),this.$Loading.error();case 11:case"end":return t.stop()}},t,this,[[1,8]])}));return function(){return t.apply(this,arguments)}}(),convert2Front:function(t){var e=[];return t.map(function(t){if(t.data){var n=JSON.parse(t.data.Policy),r=n.post_upload_transcoding;r&&r.length>0&&(r.forEach(function(e){e.input_bucket=t.bucket}),e.push.apply(e,Object(i["a"])(r)))}}),e},deletePolicyConfirm:function(t){var e=this;this.$Modal.confirm({content:this.$t("STORAGE.DELETE_CONFIRMED",{fileName:t.id}),okText:this.$t("PUBLIC.CONFIRMED"),cancelText:this.$t("PUBLIC.CANCLE"),title:this.$t("PUBLIC.DELETE"),onOk:function(){return e.deletePolicy(t.input_bucket,t.id,t._index)}})},deletePolicy:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,n,r){var a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.$Loading.start(),t.next=4,Object(s["e"])(e);case 4:if(a=t.sent,!a){t.next=9;break}return i=a.filter(function(t){return t.id!==n}),t.next=9,Object(s["g"])(e,i);case 9:this.policyFront.splice(r,1),this.$Message.success(this.$t("VIDEO.DELETED_SUCCESSFULLY")),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),this.$Message.error(this.$t("VIDEO.FAILED_TO_DELETE"));case 16:case"end":return t.stop()}},t,this,[[0,13]])}));return function(e,n,r){return t.apply(this,arguments)}}(),getTranscode:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getBucketPolicy(e);case 2:return n=t.sent,r=n.data&&n.data.Policy?JSON.parse(n.data.Policy):{},a=[],r&&r.post_upload_transcoding&&r.post_upload_transcoding.length>0&&(a=r.post_upload_transcoding),t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),putBucketPolicy:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r={name:"post_upload_transcoding",value:n},t.prev=1,t.abrupt("return",Object(o["d"])("putBucketPolicy",{Bucket:e,Policy:JSON.stringify(r)}));case 5:return t.prev=5,t.t0=t["catch"](1),t.abrupt("return",Promise.reject(t.t0));case 8:case"end":return t.stop()}},t,this,[[1,5]])}));return function(e,n){return t.apply(this,arguments)}}(),changeStatus:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e){var n,r,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$Loading.start(),n=e.input_bucket,r=e.id,a=this.policyFront[e._index].is_enabled,this.policyFront[e._index].is_enabled="true"===a?"false":"true",t.prev=5,t.next=8,Object(s["e"])(n);case 8:if(i=t.sent,!i){t.next=13;break}return i.forEach(function(t){t.id===r&&(t.is_enabled="true"===t.is_enabled?"false":"true")}),t.next=13,Object(s["g"])(n,i);case 13:this.$Message.success(this.$t("VIDEO.SET_UP_SUCCESSFULLY")),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](5),this.policyFront[e._index].is_enabled=a;case 19:case"end":return t.stop()}},t,this,[[5,16]])}));return function(e){return t.apply(this,arguments)}}(),goOutputEdit:function(t,e){this.$router.push({name:"outputEdit",params:{bucket:t,id:e}})}}},l=p,f=(n("bb12"),n("2877")),d=Object(f["a"])(l,r,a,!1,null,null,null);d.options.__file="OutputList.vue";e["default"]=d.exports},"8afe":function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){return r(t)||a(t)||i()}n.d(e,"a",function(){return c})},9093:function(t,e,n){var r=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},a046:function(t,e,n){"use strict";var r=n("0e7f"),a=n.n(r);a.a},aa77:function(t,e,n){var r=n("5ca1"),a=n("be13"),i=n("79e5"),c=n("fdef"),o="["+c+"]",s="​",u=RegExp("^"+o+o+"*"),p=RegExp(o+o+"*$"),l=function(t,e,n){var a={},o=i(function(){return!!c[t]()||s[t]()!=s}),u=a[t]=o?e(f):c[t];n&&(a[n]=u),r(r.P+r.F*o,"String",a)},f=l.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(p,"")),t};t.exports=l},bb12:function(t,e,n){"use strict";var r=n("f451"),a=n.n(r);a.a},c5f6:function(t,e,n){"use strict";var r=n("7726"),a=n("69a8"),i=n("2d95"),c=n("5dbc"),o=n("6a99"),s=n("79e5"),u=n("9093").f,p=n("11e9").f,l=n("86cc").f,f=n("aa77").trim,d="Number",h=r[d],b=h,g=h.prototype,m=i(n("2aeb")(g))==d,_="trim"in String.prototype,v=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():f(e,3);var n,r,a,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var c,s=e.slice(2),u=0,p=s.length;u<p;u++)if(c=s.charCodeAt(u),c<48||c>a)return NaN;return parseInt(s,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(m?s(function(){g.valueOf.call(n)}):i(n)!=d)?c(new b(v(e)),n,h):v(e)};for(var E,y=n("9e1e")?u(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;y.length>O;O++)a(b,E=y[O])&&!a(h,E)&&l(h,E,p(b,E));h.prototype=g,g.constructor=h,n("2aba")(r,d,h)}},e9b8:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bsc-legend"},t._l(t.data,function(e){return n("div",{key:e.text,staticClass:"legend-item"},[n("Icon",{attrs:{type:e.icon,size:"14"}}),n("span",{staticClass:"legend-text"},[t._v(t._s(t.$t(e.text)))]),e!==t.data[t.data.length-1]?n("span",{staticClass:"legend-separator"},[t._v("|")]):t._e()],1)}))},a=[],i={props:["data"]},c=i,o=(n("a046"),n("2877")),s=Object(o["a"])(c,r,a,!1,null,"ea96999c",null);s.options.__file="legend.vue";e["a"]=s.exports},f451:function(t,e,n){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);