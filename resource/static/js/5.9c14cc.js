(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{368:function(t,e,n){},369:function(t,e,n){},370:function(t,e,n){},371:function(t,e,n){},385:function(t,e,n){"use strict";var s=n(368);n.n(s).a},386:function(t,e,n){"use strict";var s=n(369);n.n(s).a},387:function(t,e,n){"use strict";var s=n(370);n.n(s).a},388:function(t,e,n){"use strict";var s=n(371);n.n(s).a},407:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-m-manage-home"},[n("topnav"),t._v(" "),n("sidebar",{staticClass:"c-m-sidebar"}),t._v(" "),n("div",{staticClass:"ui-main-content",class:{"collapsed-content":t.isCollapsed}},[n("router-view"),t._v(" "),n("Footer",{staticClass:"unfixed-footer"})],1)],1)},o=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("Menu",{class:{"collapsed-menu":n.isCollapsed},attrs:{theme:"dark","active-name":n.activeName,"open-names":n.openMenu,accordion:""}},n._l(n.permissionList,function(t,e){return s("Submenu",{key:e,staticClass:"title-diy",attrs:{name:t.meta.groupName||""}},[s("template",{slot:"title"},[s("Icon",{attrs:{type:t.meta.icon}}),n._v(" "),s("span",[n._v(n._s(t.meta.name))])],1),n._v(" "),n._l(t.children,function(t,e){return s("div",{key:e},[t.children?s("MenuGroup",{attrs:{title:t.meta.name}},n._l(t.children,function(t,e){return s("MenuItem",{key:e,attrs:{name:t.name,to:{name:t.name}}},[s("Icon",{attrs:{type:t.meta.icon}}),n._v(" "),s("span",[n._v(n._s(t.meta.name))])],1)}),1):s("MenuItem",{attrs:{name:t.name,to:{name:t.name}}},[s("Icon",{attrs:{type:t.meta.icon}}),n._v(" "),s("span",[n._v(n._s(t.meta.name))])],1)],1)})],2)}),1)};o._withStripped=s._withStripped=!0;var i={data:function(){return{isCollapsed:!1}},computed:{permissionList:function(){return(this.$store.state.rbac.permissionList||[])[0].children},activeName:function(){return this.$route.name||""},openMenu:function(){var t=[],e=this.$route.meta.groupName||"";return t.push(e),t||[]}},methods:{collapsedSider:function(){this.isCollapsed=!this.isCollapsed}},created:function(){console.log(this.$router,this.$route,"我是路由对象"),this.$bus.on("collapsedSider",this.collapsedSider)},beforeDestroy:function(){this.$bus.off("collapsedSider",this.collapsedSider)}},a=(n(385),n(47)),c=Object(a.a)(i,o,[],!1,null,null,null);c.options.__file="src/components/manage/common/sidebar.vue";var r=c.exports,l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-m-manage-topnav"},[n("div",{staticClass:"logo"},[e._v("\n\t\t智能商户管理平台\n\t")]),e._v(" "),n("Icon",{staticClass:"btn-switch",attrs:{type:"ios-menu"},nativeOn:{click:function(t){return e.collapse(t)}}}),e._v(" "),n("div",{staticClass:"ui-topnav-handle"},[n("screenfull"),e._v(" "),n("Dropdown",{on:{"on-click":e.handleClick}},[n("Avatar",{attrs:{src:"https://i.loli.net/2017/08/21/599a521472424.jpg"}}),e._v(" "),n("span",{staticClass:"name"},[e._v("超级管理员")]),e._v(" "),n("Icon",{staticStyle:{color:"#fff"},attrs:{size:18,type:"md-arrow-dropdown"}}),e._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{attrs:{name:"message"}},[e._v("修改资料")]),e._v(" "),n("DropdownItem",{attrs:{name:"logout"}},[e._v("退出登录")])],1)],1)],1)],1)},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showFullScreenBtn?n("div",{staticClass:"full-screen-btn-con"},[n("Tooltip",{attrs:{content:e.isFullScreen?"退出全屏":"全屏",placement:"bottom"}},[n("Icon",{attrs:{type:e.isFullScreen?"md-contract":"md-expand",size:23},nativeOn:{click:function(t){return e.toggleScreen(t)}}})],1)],1):e._e()};u._withStripped=l._withStripped=!0;var m=n(363),p=n.n(m),d={name:"Fullscreen",data:function(){return{isFullScreen:!1}},computed:{showFullScreenBtn:function(){return window.navigator.userAgent.indexOf("MSIE")<0}},methods:{toggleScreen:function(){if(!p.a.enabled)return this.$message.warning("您的浏览器不支持全屏"),!1;this.isFullScreen=!this.isFullScreen,p.a.toggle()}}},f=(n(386),Object(a.a)(d,u,[],!1,null,null,null));f.options.__file="src/components/manage/common/fullscreen.vue";var h={components:{screenfull:f.exports},data:function(){return{isFullscreen:!1}},methods:{collapse:function(){this.$bus.emit("collapsedSider"),this.$bus.emit("contentSider")},handleClick:function(t){switch(t){case"logout":this.logout();break;case"message":this.message()}},logout:function(){this.$store.commit("info/setUserToken",""),this.$router.push({name:"login"}),location.reload()},message:function(){}}},v=(n(387),Object(a.a)(h,l,[],!1,null,null,null));v.options.__file="src/components/manage/common/topnav.vue";var _={components:{sidebar:r,topnav:v.exports,Footer:n(153).a},data:function(){return{isCollapsed:!1}},methods:{contentSider:function(){this.isCollapsed=!this.isCollapsed},fetchtest:function(){var e=this;this.$api(this.$cfg.API.common.test,{name:"我是徐",age:18}).then(function(t){console.log(t,"uwuwwu")}).catch(function(t){e._showErrMsg(t)})}},created:function(){this.$bus.on("contentSider",this.contentSider)},beforeDestroy:function(){this.$bus.off("contentSider",this.contentSider)}},g=(n(388),Object(a.a)(_,s,[],!1,null,null,null));g.options.__file="src/components/manage/home/index.vue";e.default=g.exports}}]);