(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ae1"],{"01f3":function(t,e,n){t.exports=n.p+"img/menu-toggle-rb.cbf7e434.svg"},"12d1":function(t,e,n){t.exports=n.p+"img/menu-toggle-r.b81e8879.svg"},"1f65":function(t,e,n){t.exports=n.p+"img/bsc-logo-mini.fa3d5c1b.svg"},"23f4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Row",{staticClass:"layout-row",attrs:{type:"flex"}},[n("menu-left"),n("div",{staticClass:"layout-container",class:{"layout-container-mimi-menu":t.miniMenu}},[n("div",{staticClass:"flex-box"},[n("header-top"),n("div",{staticClass:"layout-content"},[n("router-view")],1)],1)])],1)],1)},s=[],o=(n("cadf"),n("551c"),n("097d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bsc-header"},[n("div",{staticClass:"layout-header",class:{"layout-header-mini":t.miniMenu}},[n("div",{staticClass:"layout-header-left"},[n("a",{on:{click:function(e){t.getCDNUrl()}}},[t._v(t._s(t.$t("NAV.CDN")))]),n("a",{staticClass:"active",attrs:{disabled:""}},[t._v(t._s(t.$t("NAV.CWN")))]),n("Tooltip",{attrs:{content:t.$t("OVERVIEW.COMING_SOON"),placement:"bottom"}},[n("a",{attrs:{disabled:""}},[t._v(t._s(t.$t("NAV.CLN")))])])],1),n("div",{staticClass:"layout-header-right"},[n("div",{staticClass:"button-document",on:{click:t.openDoc}},[n("Tooltip",{attrs:{content:t.$t("STORAGE.DOCUMENTATION"),placement:"bottom"}},[n("Icon",{attrs:{type:"help-circled",size:24}})],1)],1),n("div",{staticClass:"button-document"},[n("i-switch",{on:{"on-change":t.toggleLanguage},model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("中")]),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("EN")])])],1),n("div",{staticClass:"button-document",on:{click:t.toggleTheme}},[n("Tooltip",{attrs:{content:t.$t("STORAGE.TOGGLE_THEME"),placement:"bottom"}},[n("Icon",{attrs:{type:"android-color-palette",size:24}})],1)],1),n("Dropdown",{staticStyle:{"margin-left":"20px"},attrs:{placement:"bottom-end"},on:{"on-click":t.menuClick}},[n("a",{staticClass:"dropdown-link",attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.uname))]),n("Icon",{staticClass:"icon-top-down",attrs:{type:"chevron-down"}}),n("Dropdown-menu",{attrs:{slot:"list"},slot:"list"},[n("Dropdown-item",{directives:[{name:"show",rawName:"v-show",value:t.isAdminMode,expression:"isAdminMode"}],attrs:{name:"selectSubUser"}},[t._v(t._s(t.$t("NAV.RESELECT_USER")))]),n("Dropdown-item",{attrs:{name:"rePasssword"}},[t._v(t._s(t.$t("NAV.CHANGE_PASSWORD")))]),n("Dropdown-item",{attrs:{name:"logout"}},[t._v(t._s(t.$t("NAV.LOGOUT")))])],1)],1)],1)]),n("Modal",{attrs:{title:t.$t("NAV.CHANGE_PASSWORD")},on:{"on-ok":t.changePassword,"on-cancel":function(e){t.rePasswordModal=!1}},model:{value:t.rePasswordModal,callback:function(e){t.rePasswordModal=e},expression:"rePasswordModal"}},[n("Form",{ref:"rePasswordForm",attrs:{model:t.rePasswordForm,rules:t.ruleValidate,"label-width":90}},[n("Form-item",{attrs:{label:t.$t("LOGIN.KEY"),prop:"password"}},[n("Input",{attrs:{placeholder:t.$t("NAV.NEW_PASSWORD")},model:{value:t.rePasswordForm.password,callback:function(e){t.$set(t.rePasswordForm,"password",e)},expression:"rePasswordForm.password"}})],1)],1)],1)],1)}),r=[],i=(n("96cf"),n("3040")),c=n("2b0e"),u=n("365c"),l=n("ff66"),m=n("7340"),d=n("4360"),p={data:function(){return{rePasswordModal:!1,lang:"cn"===d["a"].state.lang,cdnUrl:"1"===Object(m["c"])("uc_cdn_auth"),rePasswordForm:{password:""},ruleValidate:{password:[{required:!0,len:6,message:"Requires 6 charactors",trigger:"blur"}]}}},computed:{uname:function(){var t=this.$store.state;return"manage"===this.$store.getters.mode&&t.current&&t.manager[0]&&t.manager[0].username!==t.current.username?"".concat(t.manager[0].username," -- ").concat(t.current.username):t.current.username},theme:function(){return this.$store.state.theme},miniMenu:function(){return this.$store.state.miniMenu},isAdminMode:function(){return"manage"===this.$store.getters.mode}},methods:{menuClick:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("logout"!==e){t.next=4;break}Object(m["f"])(),t.next=14;break;case 4:if("rePasssword"!==e){t.next=8;break}this.rePasswordModal=!0,t.next=14;break;case 8:if("selectSubUser"!==e){t.next=14;break}return t.next=11,Object(l["a"])();case 11:return t.next=13,this.$store.dispatch("cleanState");case 13:this.$router.push({name:"login"});case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getCDNUrl:function(){window.location=this.cdnUrl?"https://portal.baishancloud.com":"https://portal.qingcdn.com/products/cdnx/index.html"},changePassword:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.rePasswordForm.password.length<6)){t.next=3;break}return this.$Message.error(this.$t("NAV.PASSWORD_CHECK")),t.abrupt("return",!1);case 3:return t.next=5,Object(u["ab"])({email:d["a"].state.current.email,password:this.rePasswordForm.password});case 5:Object(m["f"])();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),openDoc:function(){window.open("http://doc.bscstorage.com")},toggleLanguage:function(t){var e=t?"cn":"en";c["default"].config.lang=e,this.$store.state.lang=e,Object(m["b"])("uc_lang",e)},toggleTheme:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("toggleTheme","dark"===this.$store.state.theme?"white":"dark");case 2:"dark"===this.$store.state.theme?$("body").addClass("dark"):$("body").removeClass("dark");case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},h=p,f=(n("e83b"),n("acfe"),n("2877")),g=Object(f["a"])(h,o,r,!1,null,"67b9b4d4",null);g.options.__file="Header.vue";var b=g.exports,w=b,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-menu",class:{"layout-menu-mini":t.isMini}},[n("Menu",{ref:"menu",staticClass:"mini",attrs:{"active-name":t.activeName,theme:"dark","open-names":t.openName,accordion:!0,width:"auto",imgSrc:t.imgSrc,toggleTop:t.toogleTop},on:{"on-select":t.goRouter,"on-open-change":t.updateOpenName,"on-mini-change":t.miniChange}},[n("div",{staticClass:"layout-logo-left"},[n("img",{staticClass:"logo-big",attrs:{src:t.logoSrc,width:t.logoWidth}})]),t._l(t.menuList,function(e){return e.children?t._e():n("Menu-item",{key:e.index,attrs:{name:e.name}},[n("img",{staticClass:"icon-menu",attrs:{src:e.meta.icon,height:"15px"}}),n("span",{staticClass:"layout-text"},[t._v(t._s(t.$t("SIDEBAR."+e.name.toUpperCase())))])])}),t._l(t.menuList,function(e){return e.children?n("Submenu",{key:e.index,attrs:{name:e.name}},[n("template",{slot:"title"},[n("img",{staticClass:"icon-menu",attrs:{src:e.meta.icon,height:"15px"}}),n("span",{staticClass:"layout-text"},[t._v(t._s(t.$t("SIDEBAR."+e.name.toUpperCase())))])]),t._l(e.children,function(e){return n("Menu-item",{key:e.index,staticStyle:{"padding-left":"18px"},attrs:{name:e.name}},[n("span",{staticClass:"layout-text"},[t._v(t._s(t.$t("SIDEBAR."+e.name.toUpperCase())))])])})],2):t._e()})],2)],1)},C=[],x=(n("6762"),n("2fdb"),n("9976")),M=n.n(x),N=n("71b5"),O=n.n(N),k=n("01f3"),y=n.n(k),S=n("12d1"),A=n.n(S),E=n("bab2"),R=n.n(E),P=n("1f65"),D=n.n(P),T={data:function(){return{iconSize:24,activeName:this.$route.meta.ali,openName:this.$route.meta.parent?[this.$route.meta.parent]:[],isMini:!1,imgSrc:{leftBlue:M.a,left:O.a,rightBlue:y.a,right:A.a},toogleTop:"".concat(document.documentElement.clientHeight/2,"px"),subMenus:["group","partition","traffic","machine","template","pipeline","output","job","statistics"]}},computed:{menuList:function(){return _.filter(d["a"].state.menuList,function(t){return t.meta.show})},logoSrc:function(){return this.isMini?D.a:R.a},logoWidth:function(){return this.isMini?"30px":"164px"}},watch:{$route:function(t){this.activeName=t.meta.ali,this.openName=t.meta.parent?[t.meta.parent]:[]}},mounted:function(){var t=this;window.onresize=function(){t.toogleTop="".concat(document.documentElement.clientHeight/2,"px")}},methods:{goRouter:function(t){this.$router.push({name:t}),this.isMini&&this.subMenus.includes(t)&&(this.openName=[],this.$refs["menu"].updateOpened())},updateOpenName:function(){this.$refs["menu"].updateOpened()},miniChange:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isMini=e,t.next=3,this.$store.dispatch("toggleMiniMenu",this.isMini);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},I=T,L=(n("fda0"),Object(f["a"])(I,v,C,!1,null,"df0c20a4",null));L.options.__file="Menu.vue";var j=L.exports,U=j,V={components:{headerTop:w,menuLeft:U},data:function(){return{}},computed:{miniMenu:function(){return this.$store.state.miniMenu}},created:function(){this.$Message.config({duration:3}),"false"!==localStorage.getItem("showHost")&&this.$Notice.warning({title:this.$t("PUBLIC.DOMAIN"),desc:this.$t("PUBLIC.DOMAIN_ALERT"),duration:0,onClose:function(){localStorage.setItem("showHost",!1)}})}},F=V,G=(n("8b7b"),Object(f["a"])(F,a,s,!1,null,null,null));G.options.__file="Layout.vue";var H=G.exports;e["default"]=H},"459f":function(t,e,n){},"6d78":function(t,e,n){},"71b5":function(t,e,n){t.exports=n.p+"img/menu-toggle-l.e103eb06.svg"},"8b7b":function(t,e,n){"use strict";var a=n("6d78"),s=n.n(a);s.a},9976:function(t,e,n){t.exports=n.p+"img/menu-toggle-lb.80d4851e.svg"},acfe:function(t,e,n){"use strict";var a=n("459f"),s=n.n(a);s.a},b529:function(t,e,n){},bab2:function(t,e,n){t.exports=n.p+"img/bsc-logo.977b4594.svg"},bfe6:function(t,e,n){},e83b:function(t,e,n){"use strict";var a=n("bfe6"),s=n.n(a);s.a},fda0:function(t,e,n){"use strict";var a=n("b529"),s=n.n(a);s.a}}]);