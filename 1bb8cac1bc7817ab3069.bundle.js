(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7151768"],{"05dc":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("file-acl",{attrs:{aclData:t.groupACLList,userAcl:t.userACLList}},[s("div",{staticClass:"section-separator",attrs:{slot:"groupTitle"},slot:"groupTitle"},[s("div",{staticClass:"separator-body"},[s("span",{staticClass:"separator-icon"}),s("span",{staticClass:"separator-info"},[t._v(t._s(t.$t("STORAGE.ACL_USER_GROUP")))])])]),s("div",{staticClass:"section-separator",attrs:{slot:"userTitle"},slot:"userTitle"},[s("div",{staticClass:"separator-body"},[s("span",{staticClass:"separator-icon"}),s("span",{staticClass:"separator-info"},[t._v("User")])])])]),s("Button",{staticClass:"pull-right button-reset",attrs:{type:"primary"},on:{click:function(e){t.ACLsubmitForm()}}},[t._v(t._s(t.$t("STORAGE.SAVE_PERMISSIONS")))])],1)},r=[],a=(s("4dde"),s("dccb"),s("63af"),s("aba3"),s("98e2")),i=(s("9382"),s("b267")),c=s("ff66"),o=s("7265"),l=s("c6e4"),u={components:{fileAcl:l["a"]},props:["bucket","filePrefix","itemKey"],data:function(){return{self:this,groupACLList:[],userACLList:[],owner:this.owner,iconSize:16}},computed:{prefix:function(){return this.filePrefix+this.itemKey},breadcrumb:function(){return Object(o["f"])(this.prefix)}},created:function(){this.getACLList()},methods:{getACLList:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$Loading.start(),t.prev=1,t.next=4,Object(c["d"])("getObjectAcl",{Bucket:this.bucket,Key:this.prefix});case 4:e=t.sent,this.groupACLList=d(e.Grants)[0],this.userACLList=d(e.Grants)[1],this.Data={bucket:this.bucket,grants:e.Grants,owner:e.Owner},this.owner=e.Owner.ID,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),this.$Message.error(this.$t("STORAGE.GET_PERMISSION_FAILED"));case 14:this.$Loading.finish();case 15:case"end":return t.stop()}},t,this,[[1,11]])}));return function(){return t.apply(this,arguments)}}(),ACLsubmitForm:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,s,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$Loading.start(),e=Object(a["a"])(this.groupACLList).concat(Object(a["a"])(this.userACLList)),s=_.cloneDeep(e),n=s.map(function(t){return p(t)}),n=_.filter(n,function(t){return t.Permission=f(t.Permission),t.Permission.length>0}),0!==n.length){t.next=8;break}return this.$Message.error(this.$t("STORAGE.PERMISSION_EMPTY")),t.abrupt("return",!1);case 8:return r={Bucket:this.bucket,Key:this.prefix,AccessControlPolicy:{Grants:n,Owner:this.Data.owner}},t.prev=9,t.next=12,Object(c["d"])("putObjectAcl",r);case 12:this.$Message.success(this.$t("STORAGE.PERMISSION_SUCCESS")),this.$emit("permissionSuccess"),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](9),this.$Message.error(this.$t("STORAGE.PERMISSION_FAILED"));case 19:this.$Loading.finish();case 20:case"end":return t.stop()}},t,this,[[9,16]])}));return function(){return t.apply(this,arguments)}}(),getUrl:function(t){return"/bucket/".concat(this.bucket,"/prefix/").concat(t.replace("/","%2F"))}}},p=function(t){var e={};return t.GranteeOrigin?e={Grantee:t.GranteeOrigin,Permission:t.Access}:(e.Grantee=t.Grantee.includes("@")?{Type:"AmazonCustomerByEmail",EmailAddress:t.Grantee}:{Type:"CanonicalUser",ID:t.Grantee},e.Permission=t.Access),e},d=function(t){var e=[],s=_.cloneDeep(S);if(t.length){var n=[];_.each(t,function(t){if(t.Grantee.URI&&"http://acs.amazonaws.com/groups/global/AllUsers"===t.Grantee.URI)h(s[0],t.Permission),s[0].GranteeOrigin=t.Grantee;else if("Group"===t.Grantee.Type&&t.Grantee.URI&&"http://acs.amazonaws.com/groups/global/AuthenticatedUsers"===t.Grantee.URI)h(s[1],t.Permission),s[1].GranteeOrigin=t.Grantee;else if(t.Grantee.ID){var r=t.Grantee.ID,a=n.findIndex(function(t){return t===r});if(n.includes(r))h(e[a],t.Permission);else{var i=A(t);h(i,t.Permission),e.push(i),n.push(r)}}})}return[s,e]},A=function(t){return{GranteeType:t.Grantee.Type,GranteeOrigin:t.Grantee,Grantee:t.Grantee.ID||t.Grantee.EmailAddress,Access:{Read:!1,ReadAcp:!1,WriteAcp:!1}}},h=function(t,e){"FULL_CONTROL"===e?t.Access={Read:!0,ReadAcp:!0,WriteAcp:!0}:t.Access[m[e]]=!0},f=function(t){var e=[];return _.each(t,function(t,s){t&&"Write"!==s&&e.push(R[s])}),e.join(",")},m={READ:"Read",WRITE:"Write",READ_ACP:"ReadAcp",WRITE_ACP:"WriteAcp"},R={Read:"READ",Write:"WRITE",ReadAcp:"READ_ACP",WriteAcp:"WRITE_ACP"},S=[{GranteeType:"Group",Grantee:"AllUsers",Access:{Read:!1,ReadAcp:!1,WriteAcp:!1},GranteeOrigin:{Type:"Group",URI:"http://acs.amazonaws.com/groups/global/AllUsers"}},{GranteeType:"Group",Grantee:"AuthenticatedUsers",Access:{Read:!1,ReadAcp:!1,WriteAcp:!1},GranteeOrigin:{Type:"Group",URI:"http://acs.amazonaws.com/groups/global/AuthenticatedUsers"}}],I=u,E=(s("d9b5"),s("048f")),b=Object(E["a"])(I,n,r,!1,null,null,null);b.options.__file="FilePermissions.vue";e["default"]=b.exports},3542:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"4cc3":function(t,e,s){"use strict";var n=s("b966"),r=s.n(n);r.a},"4dde":function(t,e,s){"use strict";var n=s("8718"),r=s("0c93")(6),a="findIndex",i=!0;a in[]&&Array(1)[a](function(){i=!1}),n(n.P+n.F*i,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("ccb3")(a)},"84fb":function(t,e,s){"use strict";var n=s("53da"),r=s("7a57"),a=s("af55"),i=s("69d8"),c=s("4b3d"),o=s("cce3"),l=s("e853").f,u=s("8566").f,p=s("9a0d").f,d=s("d079").trim,A="Number",h=n[A],f=h,m=h.prototype,_=a(s("e177")(m))==A,R="trim"in String.prototype,S=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=R?e.trim():d(e,3);var s,n,r,a=e.charCodeAt(0);if(43===a||45===a){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var i,o=e.slice(2),l=0,u=o.length;l<u;l++)if(i=o.charCodeAt(l),i<48||i>r)return NaN;return parseInt(o,n)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof h&&(_?o(function(){m.valueOf.call(s)}):a(s)!=A)?i(new f(S(e)),s,h):S(e)};for(var I,E=s("f711")?l(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;E.length>b;b++)r(f,I=E[b])&&!r(h,I)&&p(h,I,u(f,I));h.prototype=m,m.constructor=h,s("7e22")(n,A,h)}},8551:function(t,e,s){},"98e2":function(t,e,s){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,s=new Array(t.length);e<t.length;e++)s[e]=t[e];return s}}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){return n(t)||r(t)||a()}s.d(e,"a",function(){return i})},b966:function(t,e,s){},c6e4:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._t("groupTitle"),s("table",{staticClass:"table-permission",class:{"dis-in-b":t.isInline},style:t.tableStyle},[s("thead",[s("tr",[s("th",{staticClass:"percent27",style:t.td30Style},[t._v(" "+t._s(t.$t("STORAGE.ACL_GROUP"))+"\n          "),s("Tooltip",{attrs:{placement:"right"}},[s("span",[s("Icon",{attrs:{type:"ios-help-outline"}})],1),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",{staticStyle:{"white-space":"normal !important"}},[t._v(t._s(t.$t("STORAGE.ACL_GROUP_INFO")))])])])],1),s("th",{staticClass:"percent23",style:t.td25Style},[t._v(t._s(t.$t("STORAGE.OBJECT_PERMISSIONS"))+"\n          "),s("Tooltip",{attrs:{placement:"right"}},[s("span",[s("Icon",{attrs:{type:"ios-help-outline"}})],1),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",{staticStyle:{"white-space":"normal !important"}},[t._v(t._s(t.$t("STORAGE.OBJECT_OBJECT_PERMISSIONS_INFO")))])])])],1),s("th",{staticClass:"percent25",style:t.td25Style},[t._v(t._s(t.$t("STORAGE.ACL_PERMISSIONS"))+"\n          "),s("Tooltip",{attrs:{placement:"right"}},[s("span",[s("Icon",{attrs:{type:"ios-help-outline"}})],1),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",{staticStyle:{"white-space":"normal !important"}},[t._v(t._s(t.$t("STORAGE.OBJECT_ACL_PERMISSIONS_INFO")))])])])],1),s("th",{staticClass:"percent25",style:t.td20Style})])]),s("tbody",t._l(t.aclData,function(e){return s("tr",{key:e.Grantee},[s("td",[t._v("\n          "+t._s(e.Grantee)+"\n        ")]),s("td",[s("Checkbox",{model:{value:e.Access.Read,callback:function(s){t.$set(e.Access,"Read",s)},expression:"item.Access.Read"}},[t._v(t._s(t.$t("STORAGE.READ")))])],1),s("td",[s("Checkbox",{model:{value:e.Access.ReadAcp,callback:function(s){t.$set(e.Access,"ReadAcp",s)},expression:"item.Access.ReadAcp"}},[t._v(t._s(t.$t("STORAGE.READ")))]),s("Checkbox",{model:{value:e.Access.WriteAcp,callback:function(s){t.$set(e.Access,"WriteAcp",s)},expression:"item.Access.WriteAcp"}},[t._v(t._s(t.$t("STORAGE.WRITE")))])],1),s("td")])}))]),s("br"),t._t("userTitle"),s("table",{staticClass:"table-permission",class:{"dis-in-b":t.isInline},style:t.tableStyle},[s("thead",[s("tr",[s("th",{staticClass:"percent27",style:t.td30Style},[t._v(" "+t._s(t.$t("STORAGE.USER"))+"\n          "),s("Tooltip",{attrs:{placement:"right"}},[s("span",[s("Icon",{attrs:{type:"ios-help-outline"}})],1),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",{staticStyle:{"white-space":"normal !important"}},[t._v(t._s(t.$t("STORAGE.ACL_USER_INFO")))])])])],1),s("th",{staticClass:"percent23",style:t.td25Style},[t._v(t._s(t.$t("STORAGE.OBJECT_PERMISSIONS"))+"\n          "),s("Tooltip",{attrs:{placement:"right"}},[s("span",[s("Icon",{attrs:{type:"ios-help-outline"}})],1),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",{staticStyle:{"white-space":"normal !important"}},[t._v(t._s(t.$t("STORAGE.OBJECT_OBJECT_PERMISSIONS_INFO")))])])])],1),s("th",{staticClass:"percent25",style:t.td25Style},[t._v(t._s(t.$t("STORAGE.ACL_PERMISSIONS"))+"\n          "),s("Tooltip",{attrs:{placement:"right"}},[s("span",[s("Icon",{attrs:{type:"ios-help-outline"}})],1),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",{staticStyle:{"white-space":"normal !important"}},[t._v(t._s(t.$t("STORAGE.OBJECT_ACL_PERMISSIONS_INFO")))])])])],1),s("th",{staticClass:"percent25",style:t.td20Style})])]),s("tbody",[t.isAddUser?s("tr",[s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUserItem.Grantee,expression:"newUserItem.Grantee"}],staticClass:"new-user-input",domProps:{value:t.newUserItem.Grantee},on:{input:function(e){e.target.composing||t.$set(t.newUserItem,"Grantee",e.target.value)}}})]),s("td",[s("Checkbox",{model:{value:t.newUserItem.Access.Read,callback:function(e){t.$set(t.newUserItem.Access,"Read",e)},expression:"newUserItem.Access.Read"}},[t._v(t._s(t.$t("STORAGE.READ")))])],1),s("td",[s("Checkbox",{model:{value:t.newUserItem.Access.ReadAcp,callback:function(e){t.$set(t.newUserItem.Access,"ReadAcp",e)},expression:"newUserItem.Access.ReadAcp"}},[t._v(t._s(t.$t("STORAGE.READ")))]),s("Checkbox",{model:{value:t.newUserItem.Access.WriteAcp,callback:function(e){t.$set(t.newUserItem.Access,"WriteAcp",e)},expression:"newUserItem.Access.WriteAcp"}},[t._v(t._s(t.$t("STORAGE.WRITE")))])],1),s("td",[s("Tooltip",{attrs:{placement:"bottom",delay:1e3}},[s("Button",{staticStyle:{margin:"0 6px"},attrs:{disabled:t.newUserDisabled,size:"small",icon:"checkmark-round"},on:{click:t.addUserOK}}),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v(t._s(t.$t("PUBLIC.ADD")))])])],1),s("Tooltip",{attrs:{placement:"bottom",delay:1e3}},[s("Button",{staticStyle:{margin:"0 6px"},attrs:{size:"small",icon:"close-round"},on:{click:function(e){t.isAddUser=!1}}}),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v(t._s(t.$t("VIDEO.CANCEL")))])])],1)],1)]):t._e(),t._l(t.userAcl,function(e,n){return s("tr",{key:e.Grantee},[s("td",[t._v("\n          "+t._s(e.Grantee)+"\n        ")]),s("td",[s("Checkbox",{attrs:{disabled:t.username==e.Grantee},model:{value:e.Access.Read,callback:function(s){t.$set(e.Access,"Read",s)},expression:"item.Access.Read"}},[t._v(t._s(t.$t("STORAGE.READ")))])],1),s("td",[s("Checkbox",{attrs:{disabled:t.username==e.Grantee},model:{value:e.Access.ReadAcp,callback:function(s){t.$set(e.Access,"ReadAcp",s)},expression:"item.Access.ReadAcp"}},[t._v(t._s(t.$t("STORAGE.READ")))]),s("Checkbox",{attrs:{disabled:t.username==e.Grantee},model:{value:e.Access.WriteAcp,callback:function(s){t.$set(e.Access,"WriteAcp",s)},expression:"item.Access.WriteAcp"}},[t._v(t._s(t.$t("STORAGE.WRITE")))])],1),s("td",[s("Tooltip",{attrs:{placement:"bottom",delay:1e3}},[s("Button",0==n?{staticStyle:{margin:"0 6px"},attrs:{size:"small",icon:"plus-round"},on:{click:t.addUser}}:{staticStyle:{margin:"0 6px",visibility:"hidden"},attrs:{size:"small",icon:"plus-round"}}),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v(t._s(t.$t("STORAGE.ADD_USER")))])])],1),s("Tooltip",{attrs:{placement:"bottom",delay:1e3}},[s("Button",{staticStyle:{margin:"0 6px"},attrs:{disabled:t.username==e.Grantee,size:"small",icon:"minus-round"},on:{click:function(e){t.deleteUser(n)}}}),s("div",{attrs:{slot:"content"},slot:"content"},[s("p",[t._v(t._s(t.$t("STORAGE.DELETE_USER")))])])],1)],1)])})],2)])],2)},r=[],a=(s("84fb"),s("3a0f"),s("a3a3"),s("4d0b"),{props:{aclData:{type:Array,required:!0,default:function(){return c}},userAcl:{type:Array,required:!0,default:function(){return this.owerACL}},isInline:{type:Boolean,default:function(){return!1}},width:{type:Number}},data:function(){return{iconSize:16,isAddUser:!1,newUserItem:_.cloneDeep(i),userACLList:_.cloneDeep(this.userAcl)}},computed:{newUserDisabled:function(){var t=this.newUserItem.Grantee,e=this.newUserItem.Access,s=e.Read,n=e.ReadAcp,r=e.WriteAcp;return""===t||!(s||n||r)},username:function(){return this.$store.state.current.username},tableStyle:function(){return this.width?{width:"".concat(this.width,"px")}:{}},td30Style:function(){return this.width?{width:"".concat(this.width-parseInt(.2*this.width)-parseInt(.25*this.width*2),"px")}:{}},td20Style:function(){return this.width?{width:"".concat(parseInt(.2*this.width),"px")}:{}},td25Style:function(){return this.width?{width:"".concat(parseInt(.25*this.width),"px")}:{}}},methods:{addUser:function(){this.isAddUser=!0,this.newUserItem=_.cloneDeep(i)},addUserOK:function(){this.userAcl.push(this.newUserItem),this.isAddUser=!1},deleteUser:function(t){this.userAcl.splice(t,1)}}}),i={Grantee:"",Access:{Read:!1,ReadAcp:!1,WriteAcp:!1}},c=[{GranteeType:"Group",Grantee:"AllUsers",Access:{Read:!0,ReadAcp:!1,WriteAcp:!1}},{GranteeType:"Group",Grantee:"AuthenticatedUsers",Access:{Read:!1,ReadAcp:!1,WriteAcp:!1}}],o=a,l=(s("4cc3"),s("048f")),u=Object(l["a"])(o,n,r,!1,null,null,null);u.options.__file="fileAcl.vue";e["a"]=u.exports},d079:function(t,e,s){var n=s("8718"),r=s("5b8a"),a=s("cce3"),i=s("3542"),c="["+i+"]",o="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),p=function(t,e,s){var r={},c=a(function(){return!!i[t]()||o[t]()!=o}),l=r[t]=c?e(d):i[t];s&&(r[s]=l),n(n.P+n.F*c,"String",r)},d=p.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=p},d9b5:function(t,e,s){"use strict";var n=s("8551"),r=s.n(n);r.a}}]);