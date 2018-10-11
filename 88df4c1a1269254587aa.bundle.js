(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04a20250"],{"139e":function(t,e,n){"use strict";var i=n("ca4a"),r=n.n(i);r.a},"1a80":function(t,e,n){"use strict";var i=n("b9da"),r=n.n(i);r.a},"74f19":function(t,e){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}function r(t,e){while(t&&t.nodeType!==n){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=r},"91da":function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},"9ca1":function(t,e,n){var i=n("91da"),r=n("c90e");function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return a(t,e,n);if(i.nodeList(t))return c(t,e,n);if(i.string(t))return s(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function c(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function s(t,e,n){return r(document.body,t,e,n)}t.exports=o},ae3c:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bsc-keychain"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isAdmin,expression:"!isAdmin"}],staticClass:"section-add-card"},[n("Button",{attrs:{type:"primary"},on:{click:t.addKeychain}},[t._v(t._s(t.$t("KEYCHAIN.ADD_KEY")))])],1),n("div",{staticClass:"section-card-list"},t._l(t.data,function(e){return n("keychain-card",{key:e.ts,attrs:{keychain:e,work:1===t.data.length,isAdmin:t.isAdmin},on:{deleteKey:t.deleteKeychain}})})),t.spinShow?n("Spin",{attrs:{size:"bigger",fix:""}}):t._e()],1)},r=[],o=(n("25d7"),n("9382"),n("b267")),a=n("365c"),c=n("ff66"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bsc-keychain-card"},[n("div",{staticClass:"header"},[n("span",[t._v(t._s(t.keychain.ts))]),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isAdmin&&!t.work,expression:"!isAdmin && !work"}],staticClass:"icon-delete",on:{click:function(e){t.deleteConfirmModal(t.keychain.accesskey)}}},[n("Tooltip",{attrs:{content:t.$t("KEYCHAIN.DELETE_KEY"),placement:"top"}},[n("Icon",{attrs:{type:"ios-trash",size:16}})],1)],1)]),n("Tooltip",{attrs:{content:t.$t("KEYCHAIN.COPY_ACCESSKEY")}},[n("div",{directives:[{name:"clip",rawName:"v-clip"}],staticClass:"content",attrs:{"data-clipboard-text":t.keychain.accesskey},on:{click:t.copy}},[n("Icon",{attrs:{type:"key"}}),n("span",{staticClass:"keys"},[t._v(t._s(t.keychain.accesskey))])],1)]),n("Tooltip",{attrs:{content:t.$t("KEYCHAIN.COPY_SECRETKEY")}},[n("div",{directives:[{name:"clip",rawName:"v-clip"}],staticClass:"content",attrs:{"data-clipboard-text":t.keychain.secretkey},on:{click:t.copy}},[n("Icon",{attrs:{type:"locked"}}),n("span",{staticClass:"keys"},[t._v(t._s(t.keychain.secretkey))])],1)])],1)},u=[],l=(n("3a0f"),n("a3a3"),n("4d0b"),n("b047")),f=n.n(l),h={directives:{clip:{bind:function(t){new f.a(t)}}},props:["keychain","work","isAdmin"],methods:{copy:function(){this.$Message.success(this.$t("STORAGE.COPIED"))},deleteConfirmModal:function(t){var e=this;this.$Modal.confirm({content:this.$t("KEYCHAIN.DELETE_KEY_COM",{accesskey:t}),okText:this.$t("PUBLIC.CONFIRMED"),cancelText:this.$t("PUBLIC.CANCLE"),title:this.$t("PUBLIC.DELETE"),onOk:function(){return e.$emit("deleteKey",t)}})}}},d=h,p=(n("1a80"),n("048f")),y=Object(p["a"])(d,s,u,!1,null,"48b46644",null);y.options.__file="KeychainCard.vue";var v=y.exports,m=n("4360"),g=n("23d5"),b=n.n(g),k={components:{keychainCard:v},data:function(){return{data:[],spinShow:!0}},computed:{isAdmin:function(){var t=this.$store.state;return"manage"===this.$store.getters.mode&&t.manager[0]&&t.manager[0].username!==t.current.username}},created:function(){this.getKeychainList()},methods:{getKeychainList:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.spinShow=!0,this.$Loading.start(),t.prev=2,!this.isAdmin){t.next=7;break}t.t0=m["a"].state.keys,t.next=10;break;case 7:return t.next=9,Object(a["c"])();case 9:t.t0=t.sent;case 10:return e=t.t0,t.next=13,_.forEach(e,function(t){t.ts=t.LastModified=b()(t.ts).format("YYYY-MM-DD HH:mm")});case 13:this.data=t.sent,this.$Loading.finish(),this.spinShow=!1,t.next=23;break;case 18:t.prev=18,t.t1=t["catch"](2),this.$Loading.error(),this.spinShow=!1,this.$Message.warning(t.t1);case 23:case"end":return t.stop()}},t,this,[[2,18]])}));return function(){return t.apply(this,arguments)}}(),addKeychain:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$Loading.start(),t.prev=1,t.next=4,Object(a["E"])();case 4:this.getKeychainList(),this.$Loading.finish(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),this.$Loading.error();case 11:case"end":return t.stop()}},t,this,[[1,8]])}));return function(){return t.apply(this,arguments)}}(),deleteKeychain:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$Loading.start(),t.prev=1,t.next=4,Object(a["a"])({accesskey:e});case 4:return t.next=6,Object(c["a"])();case 6:this.getKeychainList(),this.$Loading.finish(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),this.$Loading.error();case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}()}},E=k,w=(n("139e"),Object(p["a"])(E,i,r,!1,null,"362aa4d6",null));w.options.__file="Keychain.vue";e["default"]=w.exports},b047:function(t,e,n){var i,r,o;(function(a,c){r=[t,n("ede5"),n("e05c"),n("9ca1")],i=c,o="function"===typeof i?i.apply(e,r):i,void 0===o||(t.exports=o)})(0,function(t,e,n,i){"use strict";var r=c(e),o=c(n),a=c(i);function c(t){return t&&t.__esModule?t:{default:t}}var s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function h(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var d=function(t){function e(t,n){u(this,e);var i=f(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return h(e,t),l(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===s(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,a.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return p("action",t)}},{key:"defaultTarget",value:function(t){var e=p("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return p("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(o.default);function p(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=d})},b9da:function(t,e,n){},c90e:function(t,e,n){var i=n("74f19");function r(t,e,n,i,r){var o=a.apply(this,arguments);return t.addEventListener(n,o,r),{destroy:function(){t.removeEventListener(n,o,r)}}}function o(t,e,n,i,o){return"function"===typeof t.addEventListener?r.apply(null,arguments):"function"===typeof n?r.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return r(t,e,n,i,o)}))}function a(t,e,n,r){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=o},ca4a:function(t,e,n){},d85a:function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),r=document.createRange();r.selectNodeContents(t),i.removeAllRanges(),i.addRange(r),e=i.toString()}return e}t.exports=n},e05c:function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function r(){i.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,r=n.length;for(i;i<r;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],r=[];if(i&&e)for(var o=0,a=i.length;o<a;o++)i[o].fn!==e&&i[o].fn._!==e&&r.push(i[o]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},ede5:function(t,e,n){var i,r,o;(function(a,c){r=[t,n("d85a")],i=c,o="function"===typeof i?i.apply(e,r):i,void 0===o||(t.exports=o)})(0,function(t,e){"use strict";var n=i(e);function i(t){return t&&t.__esModule?t:{default:t}}var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=c})}}]);