(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8488"],{"4cc3":function(t,e,s){"use strict";var i=s("9ddf"),n=s.n(i);n.a},"504c":function(t,e,s){var i=s("0d58"),n=s("6821"),a=s("52a7").f;t.exports=function(t){return function(e){var s,r=n(e),c=i(r),l=c.length,o=0,p=[];while(l>o)a.call(r,s=c[o++])&&p.push(t?[s,r[s]]:r[s]);return p}}},"601b":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bsc-edit"},[s("div",{staticClass:"layout-bsc-toolbar"},[s("Breadcrumb",[s("Breadcrumb-item",{attrs:{href:"/video/pipeline"}},[t._v(t._s(t.$t("VIDEO.PIPELINE_MANAGEMENT")))]),s("Breadcrumb-item",[t._v(t._s(t.$t("VIDEO.NEW_PIPELINE")))])],1)],1),s("div",{staticClass:"separator-line"}),s("Form",{ref:"pipeline",attrs:{"label-width":180,model:t.pipeline,rules:t.pipelineRulesValidate}},[s("div",{staticClass:"editBlock"},[s("div",{staticClass:"section-separator"},[s("div",{staticClass:"separator-body"},[s("span",{staticClass:"separator-icon"}),s("span",{staticClass:"separator-info"},[t._v(t._s(t.$t("VIDEO.BASE_INFO")))])])]),s("FormItem",{staticClass:"form-item",attrs:{prop:"Name",label:t.$t("VIDEO.PIPELINE_NAME")+" :"}},[s("Input",{staticClass:"line-width",attrs:{placeholder:t.$t("VIDEO.PIPELINE_NAME_INFO")},model:{value:t.pipeline.Name,callback:function(e){t.$set(t.pipeline,"Name",e)},expression:"pipeline.Name"}})],1),s("FormItem",{staticClass:"form-item",attrs:{prop:"InputBucket",label:t.$t("VIDEO.INPUT_BUCKET")+" :"}},[s("Select",{staticClass:"line-width",model:{value:t.pipeline.InputBucket,callback:function(e){t.$set(t.pipeline,"InputBucket",e)},expression:"pipeline.InputBucket"}},t._l(t.bucketList,function(e){return s("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],1),s("FormItem",{staticClass:"form-item",attrs:{prop:"OutputBucket",label:t.$t("VIDEO.OUTPUT_BUCKET")+" :"}},[s("Select",{staticClass:"line-width",model:{value:t.pipeline.OutputBucket,callback:function(e){t.$set(t.pipeline,"OutputBucket",e)},expression:"pipeline.OutputBucket"}},t._l(t.bucketList,function(e){return s("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],1)],1),s("div",{staticClass:"separator-line"}),s("div",{staticClass:"editBlock"},[s("div",{staticClass:"section-separator"},[s("div",{staticClass:"separator-body"},[s("span",{staticClass:"separator-icon"}),s("span",{staticClass:"separator-info"},[t._v(t._s(t.$t("VIDEO.PERMISSION_SETTINGS")))])])]),s("div",{staticClass:"form-item"},[s("file-acl",{attrs:{aclData:t.groupACLList,userAcl:t.userACLList,isInline:!0,width:600}},[s("span",{staticClass:"form-label",attrs:{slot:"groupTitle"},slot:"groupTitle"},[t._v(t._s(t.$t("VIDEO.USER_GROUP_PERMISSIONS"))+" : ")]),s("span",{staticClass:"form-label",attrs:{slot:"userTitle"},slot:"userTitle"},[t._v(t._s(t.$t("VIDEO.USER_PERMISSIONS"))+" : ")])])],1)]),s("div",{staticClass:"separator-line"}),s("div",{staticClass:"editBlock"},[s("div",{staticClass:"section-separator"},[s("div",{staticClass:"separator-body"},[s("span",{staticClass:"separator-icon"}),s("span",{staticClass:"separator-info"},[t._v(t._s(t.$t("VIDEO.MORE_CONFIGURATION")))])])]),s("div",{staticClass:"form-item"},[s("span",{staticClass:"form-label"},[t._v(t._s(t.$t("VIDEO.ACCEPT_JOB_SUCCESS_CALLBACK_URL"))+" : ")]),s("Input",{staticClass:"line-width",staticStyle:{display:"inline-table"},attrs:{placeholder:t.$t("VIDEO.ACCEPT_JOB_SUCCESS_CALLBACK_URL_INFO")},model:{value:t.pipeline.SuccessCallbackUrl,callback:function(e){t.$set(t.pipeline,"SuccessCallbackUrl",e)},expression:"pipeline.SuccessCallbackUrl"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("http://")])])],1),s("div",{staticClass:"form-item"},[s("span",{staticClass:"form-label"},[t._v(t._s(t.$t("VIDEO.ACCEPT_JOB_FAILURE_CALLBACK_URL"))+" : ")]),s("Input",{staticClass:"line-width",staticStyle:{display:"inline-table"},attrs:{placeholder:t.$t("VIDEO.ACCEPT_JOB_FAILURE_CALLBACK_URL_INFO")},model:{value:t.pipeline.FailureCallbackUrl,callback:function(e){t.$set(t.pipeline,"FailureCallbackUrl",e)},expression:"pipeline.FailureCallbackUrl"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("http://")])])],1)]),s("div",{staticClass:"separator-line"}),s("div",{staticClass:"editBlock"},[s("Button",{staticClass:"button-save",attrs:{type:"primary"},on:{click:function(e){t.pipelineValidate("pipeline")}}},[t._v(t._s(t.$t("VIDEO.SAVE")))])],1)])],1)},n=[],a=(s("8615"),s("2fdb"),s("6762"),s("8afe")),r=(s("7f7f"),s("ac6a"),s("28a5"),s("96cf"),s("3040")),c=s("4360"),l=s("365c"),o=s("c6e4"),p={components:{fileAcl:o["a"]},data:function(){return{iconSize:18,pipeline:_.cloneDeep(u),groupACLList:_.cloneDeep(A),pipelineRulesValidate:{Name:[{required:!0,message:this.$t("VIDEO.PIPELINE_NAME_CANNOT_EMPTY"),trigger:"blur change"},{type:"string",max:40,message:this.$t("VIDEO.PIPELINE_NAME_CHAR_NUMBER"),trigger:"blur change"}],InputBucket:[{required:!0}],OutputBucket:[{required:!0}]},bucketList:[],userACLList:[]}},computed:{pipelineId:function(){return this.$route.params.id},username:function(){return c["a"].state.current.username},owerACL:function(){return{GranteeType:"Canonial",Grantee:this.username,Access:{Read:!0,ReadAcp:!0,WriteAcp:!0}}}},created:function(){this.readPipeline()},methods:{readPipeline:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getBuckets");case 2:if(e=t.sent,this.bucketList=_.map(e.Buckets,function(t){return t.Name}),"none"===this.pipelineId){t.next=20;break}return t.prev=5,this.$Loading.start(),t.next=9,Object(l["z"])("pipelines/".concat(this.pipelineId));case 9:return s=t.sent,t.next=12,this.convert2Front(s.Pipeline);case 12:this.$Loading.finish(),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](5),this.$Loading.error();case 18:t.next=23;break;case 20:this.pipeline.InputBucket=this.bucketList[0],this.pipeline.OutputBucket=this.bucketList[0],this.userACLList=[this.owerACL];case 23:case"end":return t.stop()}},t,this,[[5,15]])}));return function(){return t.apply(this,arguments)}}(),convert2Front:function(t){var e=this;this.pipeline.Name=t.Name,this.pipeline.InputBucket=t.InputBucket,this.pipeline.OutputBucket=t.OutputBucket,this.pipeline.SuccessCallbackUrl=t.SuccessCallbackUrl?t.SuccessCallbackUrl.split("http://")[1]:"",this.pipeline.FailureCallbackUrl=t.FailureCallbackUrl?t.FailureCallbackUrl.split("http://")[1]:"";var s=t.ContentConfig?t.ContentConfig.Permissions:[{Grantee:this.username,GranteeType:"Canonical",Access:["FullControl"]}];s.forEach(function(t){var s={Read:!1,ReadAcp:!1,WriteAcp:!1};t.Access.forEach(function(t){"FullControl"===t?s={Read:!0,ReadAcp:!0,WriteAcp:!0}:s[t]=!0}),t.Access=s,"Group"===t.GranteeType?("AllUsers"===t.Grantee?e.groupACLList[0]=t:e.groupACLList[1]=t,e.groupACLList=_.cloneDeep(e.groupACLList)):e.userACLList.push(t)})},pipelineValidate:function(t){var e=this;this.$refs[t].validate(function(t){t?e.addPipeline():e.$Message.error(e.$t("VIDEO.ENTER_CORRECT_PIPELINE_NAME"))})},addPipeline:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.convert2Save(),t.prev=1,this.$Loading.start(),"none"!==this.pipelineId){t.next=10;break}return t.next=6,Object(l["W"])("pipelines",e);case 6:this.$Loading.finish(),this.$Message.success(this.$t("VIDEO.CREATED_SUCCESSFULLY")),t.next=14;break;case 10:return t.next=12,Object(l["Z"])("pipelines/".concat(this.pipelineId),e);case 12:this.$Loading.finish(),this.$Message.success(this.$t("VIDEO.UPDATED_SUCCESSFULLY"));case 14:this.$router.push({name:"pipeline"}),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](1),this.$Loading.error();case 20:case"end":return t.stop()}},t,this,[[1,17]])}));return function(){return t.apply(this,arguments)}}(),convert2Save:function(){var t=_.cloneDeep(this.pipeline);t.Name=this.pipeline.Name,t.InputBucket=this.pipeline.InputBucket,t.OutputBucket=this.pipeline.OutputBucket,t.SuccessCallbackUrl="http://"+this.pipeline.SuccessCallbackUrl,t.FailureCallbackUrl="http://"+this.pipeline.FailureCallbackUrl;var e=_.cloneDeep(this.groupACLList),s=_.cloneDeep(this.userACLList);return t.ContentConfig.Permissions=_.without(Object(a["a"])(e).concat(Object(a["a"])(s)).map(function(t){var e=t.Access,s=e.Read,i=e.ReadAcp,n=e.WriteAcp;if(s||i||n)return h(t)}),null,void 0),t},goPipelineList:function(){this.$router.push({name:"pipeline"})}}},u={Name:"",InputBucket:"",OutputBucket:"",SuccessCallbackUrl:"",FailureCallbackUrl:"",ContentConfig:{Permissions:[]}},d=["AllUsers","AuthenticatedUsers"],A=[{GranteeType:"Group",Grantee:"AllUsers",Access:{Read:!1,ReadAcp:!1,WriteAcp:!1}},{GranteeType:"Group",Grantee:"AuthenticatedUsers",Access:{Read:!1,ReadAcp:!1,WriteAcp:!1}}],h=function(t){var e={Grantee:t.Grantee};return d.includes(t.Grantee)?e.GranteeType=t.GranteeType:e.GranteeType=t.Grantee.split("@")[1]?"Email":"Canonical",Object.values(t.Access).includes(!1)?(e.Access=[],_.forEach(t.Access,function(t,s){t&&e.Access.push(s)})):e.Access=["FullControl"],e},m=p,f=(s("b2d6"),s("2877")),C=Object(f["a"])(m,i,n,!1,null,"4ac1a024",null);C.options.__file="PipelineEdit.vue";e["default"]=C.exports},"777c":function(t,e,s){},8615:function(t,e,s){var i=s("5ca1"),n=s("504c")(!1);i(i.S,"Object",{values:function(t){return n(t)}})},"8afe":function(t,e,s){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,s=new Array(t.length);e<t.length;e++)s[e]=t[e];return s}}function n(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){return i(t)||n(t)||a()}s.d(e,"a",function(){return r})},9093:function(t,e,s){var i=s("ce10"),n=s("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,n)}},"9ddf":function(t,e,s){},aa77:function(t,e,s){var i=s("5ca1"),n=s("be13"),a=s("79e5"),r=s("fdef"),c="["+r+"]",l="​",o=RegExp("^"+c+c+"*"),p=RegExp(c+c+"*$"),u=function(t,e,s){var n={},c=a(function(){return!!r[t]()||l[t]()!=l}),o=n[t]=c?e(d):r[t];s&&(n[s]=o),i(i.P+i.F*c,"String",n)},d=u.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(o,"")),2&e&&(t=t.replace(p,"")),t};t.exports=u},b2d6:function(t,e,s){"use strict";var i=s("777c"),n=s.n(i);n.a},c5f6:function(t,e,s){"use strict";var i=s("7726"),n=s("69a8"),a=s("2d95"),r=s("5dbc"),c=s("6a99"),l=s("79e5"),o=s("9093").f,p=s("11e9").f,u=s("86cc").f,d=s("aa77").trim,A="Number",h=i[A],_=h,m=h.prototype,f=a(s("2aeb")(m))==A,C="trim"in String.prototype,I=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=C?e.trim():d(e,3);var s,i,n,a=e.charCodeAt(0);if(43===a||45===a){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+e}for(var r,l=e.slice(2),o=0,p=l.length;o<p;o++)if(r=l.charCodeAt(o),r<48||r>n)return NaN;return parseInt(l,i)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof h&&(f?l(function(){m.valueOf.call(s)}):a(s)!=A)?r(new _(I(e)),s,h):I(e)};for(var E,v=s("9e1e")?o(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;v.length>b;b++)n(_,E=v[b])&&!n(h,E)&&u(h,E,p(_,E));h.prototype=m,m.constructor=h,s("2aba")(i,A,h)}},c6e4:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._t("groupTitle"),s("table",{staticClass:"table-permission",class:{"dis-in-b":t.isInline},style:t.tableStyle},[s("thead",[s("tr",[s("th",{staticClass:"percent27",style:t.td30Style},[t._v(" "+t._s(t.$t("STORAGE.ACL_GROUP"))+"\n          "),s("Tooltip",{attrs:{placement:"right"}},[s("span",[s("Icon",{attrs:{type:"ios-help-outline"}})],1),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",{staticStyle:{"white-space":"normal !important"}},[t._v(t._s(t.$t("STORAGE.ACL_GROUP_INFO")))])])])],1),s("th",{staticClass:"percent23",style:t.td25Style},[t._v(t._s(t.$t("STORAGE.OBJECT_PERMISSIONS"))+"\n          "),s("Tooltip",{attrs:{placement:"right"}},[s("span",[s("Icon",{attrs:{type:"ios-help-outline"}})],1),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",{staticStyle:{"white-space":"normal !important"}},[t._v(t._s(t.$t("STORAGE.OBJECT_OBJECT_PERMISSIONS_INFO")))])])])],1),s("th",{staticClass:"percent25",style:t.td25Style},[t._v(t._s(t.$t("STORAGE.ACL_PERMISSIONS"))+"\n          "),s("Tooltip",{attrs:{placement:"right"}},[s("span",[s("Icon",{attrs:{type:"ios-help-outline"}})],1),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",{staticStyle:{"white-space":"normal !important"}},[t._v(t._s(t.$t("STORAGE.OBJECT_ACL_PERMISSIONS_INFO")))])])])],1),s("th",{staticClass:"percent25",style:t.td20Style})])]),s("tbody",t._l(t.aclData,function(e){return s("tr",{key:e.Grantee},[s("td",[t._v("\n          "+t._s(e.Grantee)+"\n        ")]),s("td",[s("Checkbox",{model:{value:e.Access.Read,callback:function(s){t.$set(e.Access,"Read",s)},expression:"item.Access.Read"}},[t._v(t._s(t.$t("STORAGE.READ")))])],1),s("td",[s("Checkbox",{model:{value:e.Access.ReadAcp,callback:function(s){t.$set(e.Access,"ReadAcp",s)},expression:"item.Access.ReadAcp"}},[t._v(t._s(t.$t("STORAGE.READ")))]),s("Checkbox",{model:{value:e.Access.WriteAcp,callback:function(s){t.$set(e.Access,"WriteAcp",s)},expression:"item.Access.WriteAcp"}},[t._v(t._s(t.$t("STORAGE.WRITE")))])],1),s("td")])}))]),s("br"),t._t("userTitle"),s("table",{staticClass:"table-permission",class:{"dis-in-b":t.isInline},style:t.tableStyle},[s("thead",[s("tr",[s("th",{staticClass:"percent27",style:t.td30Style},[t._v(" "+t._s(t.$t("STORAGE.USER"))+"\n          "),s("Tooltip",{attrs:{placement:"right"}},[s("span",[s("Icon",{attrs:{type:"ios-help-outline"}})],1),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",{staticStyle:{"white-space":"normal !important"}},[t._v(t._s(t.$t("STORAGE.ACL_USER_INFO")))])])])],1),s("th",{staticClass:"percent23",style:t.td25Style},[t._v(t._s(t.$t("STORAGE.OBJECT_PERMISSIONS"))+"\n          "),s("Tooltip",{attrs:{placement:"right"}},[s("span",[s("Icon",{attrs:{type:"ios-help-outline"}})],1),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",{staticStyle:{"white-space":"normal !important"}},[t._v(t._s(t.$t("STORAGE.OBJECT_OBJECT_PERMISSIONS_INFO")))])])])],1),s("th",{staticClass:"percent25",style:t.td25Style},[t._v(t._s(t.$t("STORAGE.ACL_PERMISSIONS"))+"\n          "),s("Tooltip",{attrs:{placement:"right"}},[s("span",[s("Icon",{attrs:{type:"ios-help-outline"}})],1),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",{staticStyle:{"white-space":"normal !important"}},[t._v(t._s(t.$t("STORAGE.OBJECT_ACL_PERMISSIONS_INFO")))])])])],1),s("th",{staticClass:"percent25",style:t.td20Style})])]),s("tbody",[t.isAddUser?s("tr",[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUserItem.Grantee,expression:"newUserItem.Grantee"}],staticClass:"new-user-input",domProps:{value:t.newUserItem.Grantee},on:{input:function(e){e.target.composing||t.$set(t.newUserItem,"Grantee",e.target.value)}}})]),s("td",[s("Checkbox",{model:{value:t.newUserItem.Access.Read,callback:function(e){t.$set(t.newUserItem.Access,"Read",e)},expression:"newUserItem.Access.Read"}},[t._v(t._s(t.$t("STORAGE.READ")))])],1),s("td",[s("Checkbox",{model:{value:t.newUserItem.Access.ReadAcp,callback:function(e){t.$set(t.newUserItem.Access,"ReadAcp",e)},expression:"newUserItem.Access.ReadAcp"}},[t._v(t._s(t.$t("STORAGE.READ")))]),s("Checkbox",{model:{value:t.newUserItem.Access.WriteAcp,callback:function(e){t.$set(t.newUserItem.Access,"WriteAcp",e)},expression:"newUserItem.Access.WriteAcp"}},[t._v(t._s(t.$t("STORAGE.WRITE")))])],1),s("td",[s("Tooltip",{attrs:{placement:"bottom",delay:1e3}},[s("Button",{staticStyle:{margin:"0 6px"},attrs:{disabled:t.newUserDisabled,size:"small",icon:"checkmark-round"},on:{click:t.addUserOK}}),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v(t._s(t.$t("PUBLIC.ADD")))])])],1),s("Tooltip",{attrs:{placement:"bottom",delay:1e3}},[s("Button",{staticStyle:{margin:"0 6px"},attrs:{size:"small",icon:"close-round"},on:{click:function(e){t.isAddUser=!1}}}),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v(t._s(t.$t("VIDEO.CANCEL")))])])],1)],1)]):t._e(),t._l(t.userAcl,function(e,i){return s("tr",{key:e.Grantee},[s("td",[t._v("\n          "+t._s(e.Grantee)+"\n        ")]),s("td",[s("Checkbox",{attrs:{disabled:t.username==e.Grantee},model:{value:e.Access.Read,callback:function(s){t.$set(e.Access,"Read",s)},expression:"item.Access.Read"}},[t._v(t._s(t.$t("STORAGE.READ")))])],1),s("td",[s("Checkbox",{attrs:{disabled:t.username==e.Grantee},model:{value:e.Access.ReadAcp,callback:function(s){t.$set(e.Access,"ReadAcp",s)},expression:"item.Access.ReadAcp"}},[t._v(t._s(t.$t("STORAGE.READ")))]),s("Checkbox",{attrs:{disabled:t.username==e.Grantee},model:{value:e.Access.WriteAcp,callback:function(s){t.$set(e.Access,"WriteAcp",s)},expression:"item.Access.WriteAcp"}},[t._v(t._s(t.$t("STORAGE.WRITE")))])],1),s("td",[s("Tooltip",{attrs:{placement:"bottom",delay:1e3}},[s("Button",0==i?{staticStyle:{margin:"0 6px"},attrs:{size:"small",icon:"plus-round"},on:{click:t.addUser}}:{staticStyle:{margin:"0 6px",visibility:"hidden"},attrs:{size:"small",icon:"plus-round"}}),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v(t._s(t.$t("STORAGE.ADD_USER")))])])],1),s("Tooltip",{attrs:{placement:"bottom",delay:1e3}},[s("Button",{staticStyle:{margin:"0 6px"},attrs:{disabled:t.username==e.Grantee,size:"small",icon:"minus-round"},on:{click:function(e){t.deleteUser(i)}}}),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v(t._s(t.$t("STORAGE.DELETE_USER")))])])],1)],1)])})],2)])],2)},n=[],a=(s("c5f6"),{props:{aclData:{type:Array,required:!0,default:function(){return c}},userAcl:{type:Array,required:!0,default:function(){return this.owerACL}},isInline:{type:Boolean,default:function(){return!1}},width:{type:Number}},data:function(){return{iconSize:16,isAddUser:!1,newUserItem:_.cloneDeep(r),userACLList:_.cloneDeep(this.userAcl)}},computed:{newUserDisabled:function(){var t=this.newUserItem.Grantee,e=this.newUserItem.Access,s=e.Read,i=e.ReadAcp,n=e.WriteAcp;return""===t||!(s||i||n)},username:function(){return this.$store.state.current.username},tableStyle:function(){return this.width?{width:"".concat(this.width,"px")}:{}},td30Style:function(){return this.width?{width:"".concat(this.width-parseInt(.2*this.width)-parseInt(.25*this.width*2),"px")}:{}},td20Style:function(){return this.width?{width:"".concat(parseInt(.2*this.width),"px")}:{}},td25Style:function(){return this.width?{width:"".concat(parseInt(.25*this.width),"px")}:{}}},methods:{addUser:function(){this.isAddUser=!0,this.newUserItem=_.cloneDeep(r)},addUserOK:function(){this.userAcl.push(this.newUserItem),this.isAddUser=!1},deleteUser:function(t){this.userAcl.splice(t,1)}}}),r={Grantee:"",Access:{Read:!1,ReadAcp:!1,WriteAcp:!1}},c=[{GranteeType:"Group",Grantee:"AllUsers",Access:{Read:!0,ReadAcp:!1,WriteAcp:!1}},{GranteeType:"Group",Grantee:"AuthenticatedUsers",Access:{Read:!1,ReadAcp:!1,WriteAcp:!1}}],l=a,o=(s("4cc3"),s("2877")),p=Object(o["a"])(l,i,n,!1,null,null,null);p.options.__file="fileAcl.vue";e["a"]=p.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);