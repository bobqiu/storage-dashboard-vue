(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02f3"],{"834b":function(e,t,a){},ad1b:function(e,t,a){"use strict";var n=a("834b"),i=a.n(n);i.a},c293:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"f",function(){return i}),a.d(t,"g",function(){return l}),a.d(t,"a",function(){return r}),a.d(t,"d",function(){return o}),a.d(t,"e",function(){return s}),a.d(t,"c",function(){return u});var n=[{value:"Songti SC",label:"宋体"},{value:"Heiti SC",label:"黑体"},{value:"Kaiti SC",label:"楷体"},{value:"Microsoft YaHei",label:"微软雅黑"},{value:"Adobe Song Std",label:"Adobe Song Std"},{value:"Adobe Heiti Std",label:"Adobe Heiti Std"},{value:"Adobe Kaiti Std",label:"Adobe Kaiti Std"},{value:"Adobe Fangsong Std",label:"Adobe Fangsong Std"},{value:"Batang",label:"Batang"},{value:"Bookshelf Symbol 7",label:"Bookshelf Symbol 7"},{value:"Brush Script MT",label:"Brush Script MT"},{value:"Calibri",label:"Calibri"},{value:"Cambria",label:"Cambria"},{value:"Candara",label:"Candara"},{value:"Candelita",label:"Candelita"},{value:"Consolas",label:"Consolas"},{value:"Constantia",label:"Constantia"},{value:"Corbel",label:"Corbel"},{value:"Franklin Gothic Book",label:"Franklin Gothic Book"},{value:"Franklin Gothic Medium",label:"Franklin Gothic Medium"},{value:"Gill Sans MT",label:"Gill Sans MT"},{value:"Gulim",label:"Gulim"},{value:"Hannotate SC",label:"Hannotate SC"},{value:"Hannotate TC",label:"Hannotate TC"},{value:"HanziPen SC",label:"HanziPen SC"},{value:"HanziPen TC",label:"HanziPen TC"},{value:"Hiragino Sans GB",label:"Hiragino Sans GB"},{value:"Lantinghei SC",label:"Lantinghei SC"},{value:"Lantinghei TC",label:"Lantinghei TC"},{value:"Libian SC",label:"Libian SC"},{value:"Lucida Console",label:"Lucida Console"},{value:"Lucida Sans Unicode",label:"Lucida Sans Unicode"},{value:"MJNgai PRC",label:"MJNgai PRC"},{value:"MS Gothic",label:"MS Gothic"},{value:"MS Mincho",label:"MS Mincho"},{value:"MS PGothic",label:"MS PGothic"},{value:"MS PMincho",label:"MS PMincho"},{value:"MS Reference Sans Serif",label:"MS Reference Sans Serif"},{value:"Marlett",label:"Marlett"},{value:"Meiryo",label:"Meiryo"},{value:"Microsoft YaHei",label:"Microsoft YaHei"},{value:"PMingLiU",label:"PMingLiU"},{value:"Perpetua",label:"Perpetua"},{value:"STFangsong",label:"STFangsong"},{value:"STHeiti",label:"STHeiti"},{value:"STHupo",label:"STHupo"},{value:"STKaiti",label:"STKaiti"},{value:"STLiti",label:"STLiti"},{value:"STSong",label:"STSong"},{value:"STXingkai",label:"STXingkai"},{value:"STXinwei",label:"STXinwei"},{value:"STZhongsong",label:"STZhongsong"},{value:"SentyPaperCut",label:"SentyPaperCut"},{value:"SimHei",label:"SimHei"},{value:"SimSun",label:"SimSun"},{value:"SimSun-ExtB",label:"SimSun-ExtB"},{value:"Songti TC",label:"Songti TC"},{value:"Source Han Sans CN",label:"Source Han Sans CN"},{value:"Tw Cen MT",label:"Tw Cen MT"},{value:"Villasukat",label:"Villasukat"},{value:"Wawati SC",label:"Wawati SC"},{value:"Weibei SC",label:"Weibei SC"},{value:"Xingkai SC",label:"Xingkai SC"},{value:"Yuanti SC",label:"Yuanti SC"},{value:"Yuppy SC",label:"Yuppy SC"}],i=window.dashboard_conf.previewAk,l=window.dashboard_conf.previewSk,r={c_:"crop",w_:"width",h_:"height",g_:"gravity",x_:"x",y_:"y",q_:"quality",r_:"radius",a_:"angle",e_:"effect",o_:"opacity",bo_:"border",b_:"background",l_:"overlay",f_:"format",v_:"version",t_:"transformation"},o={crop:"noCrop",quality:100,format:"original",width:200,height:400,padType:"pad",fillType:"fill",thumbType:"face",fitType:"fit",dataType:"pixel",gravity:"north_west",opacity:100,angleType:"angle",angle:0,effect:"noEffect",brightnessValue:30,blurValue:100,sharpenValue:100,oilValue:4,colorValue:80,color:"sepia",pixelateValue:5,border:!1,borderSize:1,borderColor:"#ffffff",padColor:"#ffffff",x:0,y:0,radius:0},s={open:!1,type:"text",text:"",gravity:"north_west",x:0,y:0,opacity:100},u={text:"",font_family:"Songti SC",font_size:16,background:"#ffffff",font_color:"#000000"}},f2fa:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"layout-bsc-toolbar"},[a("a",{staticClass:"btn-back",on:{click:function(t){e.back()}}},[a("Icon",{attrs:{type:"chevron-left"}})],1),a("bsc-breadcrumb",[a("bsc-breadcrumb-item",{attrs:{href:e.bucketPath}},[e._v(e._s(e.$t("STORAGE.TITLE")))]),a("bsc-breadcrumb-item",[e._v(e._s(e.$t("STORAGE.PIC_STYLE"))+" ("+e._s(e.bucket)+")")])],1)],1),a("div",{staticClass:"toolbar-nav"},[a("Button",{attrs:{type:"primary"},on:{click:e.goCreateStyle}},[e._v(e._s(e.$t("STORAGE.CREATE_STYLE")))]),a("Button",{attrs:{type:"primary"},on:{click:e.uploadModal}},[e._v(e._s(e.$t("STORAGE.IMPORT_STYLE")))])],1),a("Table",{attrs:{border:"","show-header":e.showHeader,stripe:!0,context:e.self,columns:e.styleHeader,data:e.styleList,"no-data-text":e.$t("STORAGE.NO_STYLE")}}),a("Modal",{attrs:{title:e.selectedStyleName,width:"900"},model:{value:e.showImageModal,callback:function(t){e.showImageModal=t},expression:"showImageModal"}},[a("div",{staticClass:"section-img"},[a("img",{attrs:{src:e.clipUrl}})]),a("div",{attrs:{slot:"footer"},slot:"footer"})]),a("Modal",{attrs:{title:"Upload settings files",width:"700"},model:{value:e.showUploadModal,callback:function(t){e.showUploadModal=t},expression:"showUploadModal"}},[e.showUploadModal?a("upload",{attrs:{accept:"application/json",prefix:e.prefix,bucket:e.bucket,checkFileType:!0,validateMessage:e.$t("STORAGE.PIC_UPLOAD_INFO"),validation:e.uploadValidation},on:{uploadSuccess:e.uploadSuccess}}):e._e(),a("div",{staticClass:"copy-modal-footer",attrs:{slot:"footer"},slot:"footer"},[a("Button",{staticStyle:{visibility:"hidden"},attrs:{type:"primary"}})],1)],1),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticStyle:{display:"none"},attrs:{download:"",id:"element-download"}},[a("span",{attrs:{id:"span-download"}})])}],l=(a("7514"),a("ac6a"),a("4f7f"),a("c93e")),r=(a("28a5"),a("96cf"),a("3040")),o=a("ff66"),s=a("7265"),u=a("c293"),c=a("36fa"),p=a("2587"),d=a.n(p),b=a("365c"),f=a("acc6"),h={components:{upload:c["a"],bscBreadcrumb:f["a"],bscBreadcrumbItem:f["a"].Item},data:function(){var e=this;return{iconSize:18,self:this,showHeader:!0,styleList:[],fontName:this.fontName,showImageModal:!1,clipUrl:"",selectedStyleName:"",showUploadModal:!1,prefix:s["k"].rules,uploadValidation:/\.(json|JSON)$/,styleHeader:[{title:"Name",key:"ruleName",width:150},{title:"Styles",width:300,ellipsis:!0,key:"IS"},{title:"Quality",key:"quality",width:150},{title:"Format",key:"format",width:150},{title:"Actions",key:"actions",width:170,render:function(t,a){return t("div",[t("Tooltip",{props:{content:e.$t("STORAGE.IMG_PREVIEW"),delay:1e3,placement:"top"},class:{"mar-r-5":!0}},[t("i-button",{props:{size:"small"},on:{click:function(){e.previewModal(a.row)}}},[t("Icon",{props:{type:"eye",size:e.iconSize}})])]),t("Tooltip",{props:{content:e.$t("STORAGE.EXPORT_STYLE"),delay:1e3,placement:"top"},class:{"mar-r-5":!0}},[t("i-button",{props:{size:"small"},on:{click:function(){e.exportStyle(a.row)}}},[t("Icon",{props:{type:"share",size:e.iconSize}})])]),t("Tooltip",{props:{content:e.$t("STORAGE.EDIT"),delay:1e3,placement:"top"},class:{"mar-r-5":!0}},[t("i-button",{props:{size:"small"},on:{click:function(){e.goEdit(a.row)}}},[t("Icon",{props:{type:"compose",size:e.iconSize}})])]),t("Tooltip",{props:{content:e.$t("STORAGE.DELETE_STYLE"),delay:1e3,placement:"top"}},[t("i-button",{props:{size:"small"},on:{click:function(){e.deleteStyleConfirm(a.row)}}},[t("Icon",{props:{type:"ios-trash",size:e.iconSize}})])])])}}]}},computed:{bucket:function(){return this.$route.params.bucket},bucketPath:function(){return"/bucket/".concat(this.$route.params.bucket)}},created:function(){this.getList()},methods:{goCreateStyle:function(){this.$router.push({name:"editStyles",params:{bucket:this.bucket,ruleName:"noRuleName",IS:"noIS"}})},getList:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,a,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.$Loading.start(),e.next=4,Object(o["d"])("listObjects",{Bucket:this.bucket,Prefix:s["k"].rules});case 4:t=e.sent,a=t.Contents,_.each(a,function(e){/.json$/.test(e.Key)&&n.getObject(e)}),this.$Loading.finish(),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),this.$Message.error(this.$t("STORAGE.GET_RULES_FAILED"));case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}(),getObject:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a,n,i,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a={Bucket:this.bucket,Key:t.Key},e.next=3,Object(o["d"])("getObject",a);case 3:n=e.sent,i=JSON.parse(Object(s["a"])(n.Body)),r=t.Key.split(s["k"].rules)[1].split(".json")[0],this.styleList.push(Object(l["a"])({ruleName:r},this.convert2list(i)));case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),convert2list:function(e){var t=this,a={quality:"--",format:this.$t("STORAGE.FORMAT_ORIGINAL")},n=[],i=new Set;return _.each(e,function(e){var l=t.json2instruction(e);n.push(l.instruction),l.overlayFileName&&i.add(l.overlayFileName),e.format&&(a.quality=e.quality||"",a.format=e.format)}),a.overlayList=i,a.IS=n.join("--"),a},deleteStyleConfirm:function(e){var t=this;this.$Modal.confirm({content:this.$t("STORAGE.DELETE_CONFIRMED",{fileName:e.ruleName}),okText:this.$t("PUBLIC.CONFIRMED"),cancelText:this.$t("PUBLIC.CANCLE"),title:this.$t("PUBLIC.DELETE"),onOk:function(){return t.deleteStyle(e)}})},deleteStyle:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o["d"])("deleteObject",{Bucket:this.bucket,Key:s["k"].rules+t.ruleName+".json"});case 3:this.styleList.splice(t._index,1),this.$Message.success(this.$t("STORAGE.DELETE_STYLE_SUCCESS")),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.$Message.error(this.$t("STORAGE.DELETE_STYLE_FAILED"));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),exportStyle:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S(this.bucket,s["k"].rules+t.ruleName+".json");case 2:a=e.sent,document.querySelector("#element-download").href=a,document.querySelector("#span-download").click();case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),goEdit:function(e){this.$router.push({name:"editStyles",params:{bucket:this.bucket,ruleName:e.ruleName,IS:e.IS}})},json2instruction:function(e){var t=[],a="";return _.each(e,function(e,n){var i="";"overlay"===n&&(a=/^text:.*/.test(e)?/^text:(.*):(.*)/.exec(e)[1]+".json":e+".png"),i=_.invert(u["a"])[n]+e,t.push(i)}),{instruction:t.join(","),overlayFileName:a}},previewModal:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.$Loading.start(),!(t.overlayList.size>0)){e.next=6;break}return a=[],t.overlayList.forEach(function(e){a.push(n.putOverlayObject(e))}),e.next=6,Promise.all(a);case 6:this.clipUrl=b["l"]+t.IS+"/dashboard.jpg?"+Date.now(),this.selectedStyleName=t.ruleName,this.showImageModal=!0,this.$Loading.finish();case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),putOverlayObject:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["d"])("getObject",{Bucket:this.bucket,Key:s["k"].overlay+t});case 2:return a=e.sent,e.next=5,Object(o["c"])({key:{accesskey:u["f"],secretkey:u["g"]}});case 5:return n=e.sent,e.abrupt("return",new Promise(function(e,i){return n.putObject({Bucket:"image-example",Key:s["k"].overlay+t,ContentType:a.ContentType,Body:a.Body},function(t,a){return t&&d.a.Message.error(t.message,5),t?i(t):e(a)})}));case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),uploadModal:function(){this.showUploadModal=!0},back:function(){this.$router.back()},uploadSuccess:function(e){var t=this,a={Key:this.prefix+e};this.getObject(a).then(function(){t.showUploadModal=!1})}}},S=function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,a){var n,i,l,r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n={Bucket:t,Key:a},e.next=3,Object(o["c"])();case 3:return i=e.sent,e.next=6,i.getSignedUrl("getObject",n);case 6:return l=e.sent,e.next=9,Object(o["d"])("getObjectAcl",n);case 9:return r=e.sent,s=_.find(r.Grants,function(e){return e.Grantee.URI&&"http://acs.amazonaws.com/groups/global/AllUsers"===e.Grantee.URI}),e.abrupt("return",s?l.split("?")[0]:l);case 12:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),v=h,m=(a("ad1b"),a("2877")),y=Object(m["a"])(v,n,i,!1,null,"7e559468",null);y.options.__file="PictureStyles.vue";t["default"]=y.exports}}]);