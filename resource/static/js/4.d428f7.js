(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{383:function(t,e,n){},384:function(t,e,n){},385:function(t,e,n){},386:function(t,e,n){},398:function(t,e,n){"use strict";var s=n(383);n.n(s).a},399:function(t,e,n){"use strict";var s=n(384);n.n(s).a},400:function(t,e,n){"use strict";var s=n(385);n.n(s).a},401:function(t,e,n){"use strict";var s=n(386);n.n(s).a},415:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-m-manage-home"},[n("topnav"),t._v(" "),n("sidebar",{staticClass:"c-m-sidebar"}),t._v(" "),n("div",{staticClass:"ui-main-content",class:{"collapsed-content":t.isCollapsed}},[n("transition",{attrs:{name:"slide-fade"}},[n("router-view")],1),t._v(" "),n("Footer",{staticClass:"unfixed-footer"})],1)],1)},o=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("el-menu",{class:{"collapsed-menu":n.isCollapse},attrs:{"default-active":n.activeName,router:"",collapse:n.isCollapse,"unique-opened":"","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},n._l(n.permissionList,function(t,e){return s("div",{key:e,staticClass:"out-box"},[t.children&&t.children.length?s("el-submenu",{attrs:{index:t.meta.groupName,name:t.meta.groupName||""}},[s("template",{slot:"title"},[s("i",{staticClass:"iconfont",class:t.meta.icon}),n._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[n._v(n._s(t.meta.name))])]),n._v(" "),n._l(t.children,function(t,e){return s("div",{key:e},[1!=t.meta.type||t.children&&t.children.length?n._e():s("el-menu-item",{attrs:{index:t.name,route:{name:t.name}}},[s("i",{staticClass:"iconfont",class:t.meta.icon}),n._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[n._v(n._s(t.meta.name))])])],1)})],2):s("el-menu-item",{attrs:{index:t.name,name:t.meta.groupName,route:{name:t.name}}},[s("i",{staticClass:"iconfont",class:t.meta.icon}),n._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[n._v(n._s(t.meta.name))])])],1)}),0)};o._withStripped=s._withStripped=!0;var i={data:function(){return{isCollapse:!1}},computed:{permissionList:function(){return(this.$store.state.rbac.permissionList||[])[0].children},activeName:function(){return this.$route.name||""},openMenu:function(){var t=[],e=this.$route.meta.groupName||"";return t.push(e),t||[]}},methods:{collapsedSider:function(){this.isCollapse=!this.isCollapse,this.$store.commit("info/setCollapseStatus",this.isCollapse)}},created:function(){console.log(this.$router,this.$route,"我是路由对象"),this.$bus.on("collapsedSider",this.collapsedSider)},beforeDestroy:function(){this.$bus.off("collapsedSider",this.collapsedSider)}},a=(n(398),n(44)),l=Object(a.a)(i,o,[],!1,null,null,null);l.options.__file="src/components/manage/common/sidebar.vue";var c=l.exports,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-m-manage-topnav"},[n("div",{staticClass:"logo"},[t._v("\n\t\t智能商户管理平台\n\t")]),t._v(" "),n("i",{staticClass:"iconfont",class:t.isexpand?"icon-retract":"icon-spread",on:{click:t.collapse}}),t._v(" "),n("div",{staticClass:"ui-topnav-handle"},[n("screenfull"),t._v(" "),n("el-dropdown",{attrs:{size:"primary"},on:{command:t.handleClick}},[n("div",[n("span",{staticClass:"ui-avatar"},[n("img",{attrs:{src:"https://i.loli.net/2017/08/21/599a521472424.jpg",alt:""}})]),t._v(" "),n("span",{staticClass:"username"},[t._v(t._s(t.userName))]),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(t.roleName))]),t._v(" "),n("i",{staticClass:"iconfont icon-downtriangle",staticStyle:{color:"#fff"}})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{staticClass:"logout",attrs:{command:"logout"}},[n("i",{staticClass:"iconfont icon-logout"}),t._v(" "),n("span",{staticClass:"text"},[t._v("退出登录")])])],1)],1)],1)])},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showFullScreenBtn?n("div",{staticClass:"full-screen-btn-con"},[n("el-tooltip",{attrs:{content:t.isFullScreen?"退出全屏":"全屏",placement:"bottom"}},[n("i",{staticClass:"iconfont",class:t.isFullScreen?"icon-outfull":"icon-fullscreen",on:{click:t.toggleScreen}})])],1):t._e()};u._withStripped=r._withStripped=!0;var d=n(378),m=n.n(d),p={name:"Fullscreen",data:function(){return{isFullScreen:!1}},computed:{showFullScreenBtn:function(){return window.navigator.userAgent.indexOf("MSIE")<0}},methods:{toggleScreen:function(){if(!m.a.enabled)return this.$message.warning("您的浏览器不支持全屏"),!1;this.isFullScreen=!this.isFullScreen,m.a.toggle()}}},f=(n(399),Object(a.a)(p,u,[],!1,null,null,null));f.options.__file="src/components/manage/common/fullscreen.vue";var h=f.exports,v=document.body,_={mixins:[{data:function(){return{}},beforeMount:function(){window.addEventListener("resize",this.resizeHandler)},mounted:function(){},methods:{isMobile:function(){return v.getBoundingClientRect().width-3<1200},resizeHandler:function(){var t=this.isMobile(),e=this.$store.state.info.collapseStatus;t?e||this.collapse():e&&this.collapse()}}}],components:{screenfull:h},data:function(){return{isexpand:!0}},computed:{userName:function(){return this.$store.state.info.common.account||""},roleName:function(){return this.$store.state.info.common.roleName||""}},methods:{collapse:function(){this.isexpand=!this.isexpand,this.$bus.emit("collapsedSider"),this.$bus.emit("contentSider")},handleClick:function(t){switch(t){case"logout":this.logout();break;case"password":this.password()}},logout:function(){var n=this;this.$api(this.$cfg.API.commons.logout,null,{showLoading:!0}).then(function(t){n.$store.commit("info/setUserToken",""),n.$store.commit("rbac/setPermission",[]);var e=n.$route.path||"";n.$router.push({name:"login",query:{path:e}}),location.reload()}).catch(function(){})}},created:function(){this.$store.dispatch("info/fetchUserInfo")}},g=(n(400),Object(a.a)(_,r,[],!1,null,null,null));g.options.__file="src/components/manage/common/topnav.vue";var C={components:{sidebar:c,topnav:g.exports,Footer:n(150).a},data:function(){return{isCollapsed:!1}},methods:{contentSider:function(){this.isCollapsed=!this.isCollapsed}},created:function(){this.$bus.on("contentSider",this.contentSider)},beforeDestroy:function(){this.$bus.off("contentSider",this.contentSider)}},b=(n(401),Object(a.a)(C,s,[],!1,null,null,null));b.options.__file="src/components/manage/home/index.vue";e.default=b.exports}}]);