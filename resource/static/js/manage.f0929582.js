!function(c){function t(t){for(var e,n,o=t[0],r=t[1],a=t[2],s=0,i=[];s<o.length;s++)n=o[s],l[n]&&i.push(l[n][0]),l[n]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(c[e]=r[e]);for(p&&p(t);i.length;)i.shift()();return f.push.apply(f,a||[]),u()}function u(){for(var t,e=0;e<f.length;e++){for(var n=f[e],o=!0,r=1;r<n.length;r++){var a=n[r];0!==l[a]&&(o=!1)}o&&(f.splice(e--,1),t=s(s.s=n[0]))}return t}var n={},l={2:0},f=[];function s(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=c,s.c=n,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/resource/";var e=window.webpackJsonp=window.webpackJsonp||[],o=e.push.bind(e);e.push=t,e=e.slice();for(var r=0;r<e.length;r++)t(e[r]);var p=o;f.push([334,0]),u()}({10:function(t,e,n){t.exports=n(33)(3)},100:function(t,e){},142:function(t,e,n){t.exports=n(33)(0)},308:function(t,e,n){t.exports=n.p+"static/img/d32ce4977f8842a4751ebb0389ec1378.jpg"},309:function(t,e,n){t.exports=n.p+"static/img/324b9e8a461688cab423503cfd3d781e.png"},310:function(t,e,n){t.exports=n.p+"static/docs/train.014eb560.xlsx"},311:function(t,e,n){"use strict";var o=n(68);n.n(o).a},32:function(n,t,e){(function(t){var e=(t.env.PUBLIC_PATH||"").replace(/([^:])\/{2,}/g,"$1/"),o={400:"{status}:请求数据格式错误！",401:"{status}:请刷新页面重新操作或退出重登录！",403:"{status}:请刷新页面重新操作或退出重登录！",404:"{status}:请求路径不存在！",405:"{status}:请求方法服务端不允许！",408:"{status}:请求超时，请稍后重试！",500:"{status}:系统异常，请刷新页面重新操作或退出重登录！",other:"{status}:网络问题，请稍后重试！"};n.exports={baseURL:e,timeout:6e4,contentType:{xml:"text/xml",json:"application/json;charset=UTF-8",form:"application/x-www-form-urlencoded;charset=UTF-8"},method:["OPTIONS","HEAD","GET","POST","PUT","DELETE","TRACE","CONNECT"],statusCode:o,getStatusTxt:function(n){var t=o[n.status]||o.other;return t=t.replace(/\{(\w+)\}/g,function(t,e){return n[e]||""})}}}).call(this,e(96))},33:function(t,e){t.exports=iview},333:function(t,e,n){},334:function(t,e,o){"use strict";o.r(e);var n={};o.r(n),o.d(n,"parse",function(){return y}),o.d(n,"format",function(){return w}),o.d(n,"secondFormat",function(){return b});o(141);var r=o(10),a=o(69),s={API:{common:{userInfo:"GET:/v1.0/common/userinfo",schoolLogo:"GET:/v1.0/schoolLogo/{id}",info:"GET:/v1.0/common/info",login:"POST:/v1.0/login",captcha:"GET:/v1.0/captcha",new:"POST:".concat("/gateway/api.action","?apiType=manage&method=plant/test/mulute.action")}},VAR:{sex:[{label:"男",value:1},{label:"女",value:2}]},install:function(t){s.installed||(s.installed=!0,t.prototype.$cfg=s)}},i=s,c=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-manage"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"content-container"},[e("router-view")],1)])])};c._withStripped=!0;var u=o(49),l=Object(u.a)({},c,[],!1,null,null,null);l.options.__file="src/components/manage/index.vue";var f=l.exports,p=o(99),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-m-home"},[n("p",[e._v("我是vue的首页哈哈")]),e._v(" "),n("Select",{staticStyle:{width:"200px"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},e._l(e.cityList,function(t){return n("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1),e._v(" "),n("img",{attrs:{src:e.defaultPath,alt:""}}),e._v(" "),n("a",{staticClass:"primary download",attrs:{href:e.tpl,target:"_blank",download:"卓越教师模板.xlsx"}},[e._v("卓越教师导入模板")]),e._v(" "),n("img",{staticStyle:{width:"100%"},attrs:{src:o(308),alt:""}})],1)};function d(t){return"[object Array]"===Object.prototype.toString.apply(t)}h._withStripped=!0;var m=o(19),v=o.n(m);function g(t){if(!t)return!1;if("object"==v()(t)||d(t))return!0;if("string"==typeof t)try{var e=JSON.parse(t);return!("object"!=v()(e)||!e)}catch(t){return!1}return!1}function y(t){return t?t instanceof Date?t:(t=t.toString().replace("T"," "),t=/^(\d{10}|\d{13})$/g.test(t)?new Date(parseInt(10==t.length?1e3*t:t)):new Date(t.replace(/-/g,"/")),isNaN(t.getDate())?null:t):null}function w(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";return t&&(t=y(t))?T(e,{y:t.getFullYear()+"",M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds(),q:Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds(),W:["日","一","二","三","四","五","六"][t.getDay()]}):""}function b(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"[hh:]mm:ss";return t=parseInt(t),isNaN(t)?"":T(e,{h:Math.floor(t/3600),m:Math.floor(t/60%60),s:Math.floor(t%60)})}var x=/\[(([yMdhmsqSW])+)(.*?)\]|(([yMdhmsqSW])+)/g;function T(t,u){return t&&u?t.replace(x,function(t,e,n,o,r,a){var s=n||a,i=e||r,c=u[s];return void 0!==c?e&&!c?"":"y"===s?c.substr(4-i.length)+(o||""):(1<i.length&&(c=(c="0"+c).substr(c.length-2)),c+(o||"")):t}):""}var _=/^[\s\u3000\uFEFF]+|[\s\u3000\uFEFF]+$/g;function O(t){if("string"==typeof t)return t.replace(_,"");if("object"!=v()(t))return t;for(var e in t)t.hasOwnProperty(e)&&(t[e]=O(t[e]));return t}var P=o(67);var S=o(309),j=o(310),C={data:function(){return{defaultPath:S,tpl:j,cityList:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"}],model:""}},methods:{test:function(){console.log("我是iview的首页44646"),console.log("production","production","我是管理端页面"),console.log(this.$cfg.API.common.userInfo),console.log(this.$cfg.VAR.sex),console.log(d([1,2,3])),console.log(n.secondFormat(156797))},fetchUserInfo:function(){this.$api(this.$cfg.API.common.userInfo).then(function(t){}).catch(function(){})},fetchSchoolLogo:function(){this.$api(this.$cfg.API.common.schoolLogo,{id:52}).then(function(t){}).catch(function(){})},fetchLogin:function(){this.$api(this.$cfg.API.common.login,{name:"我是post请求",url:"wwww.baidu.com"}).then(function(t){}).catch(function(){})},fetchNew:function(){this.$api(this.$cfg.API.common.new,{name:" 我是新平台接口方式 ",url:" www.test ",searchParams:{merchantName:"",merchantType:""},session:"fslm_96ad9999-bdfa-46ec-abb6-c56126c20ebe"}).then(function(t){}).catch(function(){})}},created:function(){this.fetchLogin(),this.fetchNew()}},I=(o(311),Object(u.a)(C,h,[],!1,null,null,null));I.options.__file="src/components/manage/home/index.vue";var L=I.exports,M=function(){var t=this.$createElement;return(this._self._c||t)("router-view")};M._withStripped=!0;var E=Object(u.a)({},M,[],!1,null,null,null);E.options.__file="src/components/router-view.vue";E.exports;r.default.use(p.a);var A=new p.a({routes:[{path:"/",name:"index",component:L},{path:"*",component:L}],linkActiveClass:"active"}),$=o(32),R=o.n($),U=o(20),N=o.n(U),q=o(138),F=o.n(q),D=(o(330),{timeout:R.a.timeout,baseURL:R.a.baseURL,contentType:"form",trim:!0,retry:!0,maxRetry:2,headers:{"X-Requested-With":"XMLHttpRequest"}});var k=function(t){var s=F.a.create(N()(!0,{},D,t));return s.interceptors.request.use(function(t){if(!t)throw new Error("请求配置丢失，请检查request拦截器是否没有return返回配置");t.contentType&&R.a.contentType[t.contentType]&&(t.headers["Content-Type"]=R.a.contentType[t.contentType]);var e=t.data;return e&&t.trim&&(e="object"==v()(e)?"get"==t.method?O(e):"json"==t.contentType?JSON.stringify(e,function(t,e){return O(e)}):O(e):g(e)?JSON.stringify(O(JSON.parse(e))):O(e),t.data=e),"get"==t.method.toLowerCase()&&(t.url=Object(P.a)(t.url,e)),t}),s.interceptors.response.use(function(t){var e=t.data,n=t.config;e&&g(e)||(e={success:!1,code:0,message:"",result:""});var o,r=!1;if((!n.retryTime||n.retryTime<n.maxRetry)&&("boolean"==typeof n.retry&&n.retry?r=30==e.code:"function"==typeof n.retry&&(r=!0===n.retry(e))),r)return n.source?(o=n.source).source=N()({},o):(o=n).url=o.url.replace(o.baseURL,""),o.retryTime=n.retryTime?n.retryTime+1:1,s(o);if(!0===e.success)return e;e.message||(e.message="发生了个奇怪的错误");var a=new Error(e.message);throw a.data=e,a.response=t,a},function(t){var e={success:!1,code:-1,message:""};return t&&t.response?(e.code=-t.response.status,e.message=R.a.getStatusTxt(t.response)):(console.error(t),e.message="请求失败：网络错误或超时"),t.data=e,Promise.reject(t)}),s},W=/\{(.*?)\}/g;function J(t){if(t.apis&&this.injectAPI(t.apis),t.methods){var e="boolean"==typeof t.methods?R.a.method:t.methods;this.injectMethod(e)}this.instance=k(t.axios)}J.prototype={request:function(t,n,e){if(!this.instance)throw new Error("未初始化，请先执行install方法");if(t){var o=t.indexOf(":"),r="get",a={};return o!=t.indexOf("://")&&-1<o&&o<=7&&(r=t.substr(0,o).toLowerCase(),t=t.substring(o+1)),W.test(t)&&(t=t.replace(W,function(t,e){return n&&void 0!==n[e]?n[e]:""})),a.url=t,a.method=r,a.data=n,(a=N()(a,e)).source=N()({},a),this.instance(a)}},injectAPI:function(t){var o=this;for(var e in t)if(t.hasOwnProperty(e))if("object"==v()(e))for(var n in e)this[e+"."+n]=function(n){return function(t,e){return o.request(n,t,e)}}(t[e][n]);else this[e]=function(n){return function(t,e){return o.request(n,t,e)}}(t[e]);return this},injectMethod:function(t){for(var e=t.length,n=0;n<e;n++)this[t[n].toLowerCase()]=function(o){return function(t,e,n){return n=N()({},n,{method:o}),this.request(t,e,n)}}(t[n]);return this},intercept:function(){if(!this.instance)throw new Error("未初始化，请先执行install方法");var t=arguments[0].toLowerCase(),e=Array.prototype.slice.call(arguments,1),n=this.instance.interceptors[t];return n.use.apply(n,e),this}};var G=J,H=o(97),Y=o(14),Q={namespace:"$api",methods:!0};function V(t){var e=new G(t),n=H(G.prototype.request,e);return Y.extend(n,G.prototype,e),Y.extend(n,e),n}var X=V(Q);X.install=function(t,e){if(e=N()(Q,e),!t||!t[e.namespace]){var n=V(e);return t&&("function"==typeof t?t.prototype[e.namespace]=n:t[e.namespace]=n),n}};var B=X,z=o(100),K=o.n(z),Z=window,tt=Z.location,et=Z.navigator,nt=et.userAgent.toLowerCase();function ot(t){return t.test(nt)}var rt="ontouchend"in Z,at=ot(/android|htc/)||/linux/i.test(et.platform+""),st=at&&ot(/mobile/),it=at&&!st,ct=!at&&ot(/ipad/),ut=!at&&ot(/ipod|iphone/),lt=ct||ut,ft=ot(/windows/),pt=ot(/windows phone/),ht=ft&&ot(/touch/)&&!pt,dt=ot(/meego/),mt=!!et.standalone,vt=ot(/ucbrowser/),gt=ot(/micromessenger/),yt=ot(/qq/),wt=!!Z.chrome,bt=at&&ot(/htc\s+/),xt=st||ut||pt||dt,Tt=ot(/tablet/)||it||ct||ht,_t={isTouch:rt,isAndroid:at,isIPad:ct,isIPhone:ut,isIOS:lt,isWinPhone:pt,isWebapp:mt,isUC:vt,isWechat:gt,isQQ:yt,isChrome:wt,isHTC:bt,isMobile:xt,isTablet:Tt,isPC:!xt&&!Tt,isDebug:!!~(""+tt.port).indexOf("0")};r.default.use(B);var Ot=r.default.prototype.$api;Ot.intercept("request",function(t){return t.data=N()({_t:+new Date},window._params,t.data),t}),Ot.intercept("response",function(t){return null==t.result&&(t.result={}),t},function(t){return 21==(t.data||{}).code&&(window.location.href=_t.isMobile?K.a.mobile.login:K.a.login),Promise.reject(t)});var Pt=o(54),St=o.n(Pt);o(101),o(333);r.default.use(a.a),r.default.use(St.a),r.default.use(i),new r.default({el:"#manage",router:A,render:function(t){return t(f)}})},54:function(t,e,n){t.exports=n(33)(2)},67:function(t,u,l){"use strict";(function(t){l.d(u,"a",function(){return i});var n,e=l(19),c=l.n(e),o=/^(?:([^/]*:)\/\/(?:([^:]*)(?::(.*))?@)?([^:/]+)(:\d+)?)?([^?#]+)?(\?[^#]*)?(#.*)?$/;function r(t,e){return t=t.toString(),n||"undefined"==typeof document||(n=document.createElement("a")),e&&n?(n.setAttribute("href",t),{protocol:n.protocol,username:decodeURIComponent(n.username),password:decodeURIComponent(n.password),host:n.host,hostname:n.hostname,port:n.port,pathname:n.pathname,search:n.search,hash:n.hash}):function(t){"//"!=t.substr(0,2)&&"://"!=t.substr(0,3)||(t=("undefined"==typeof location?"http:":location.protocol)+t);var e=t.match(o)||[],n={protocol:e[1]||"",username:decodeURIComponent(e[2]||""),password:decodeURIComponent(e[3]||""),host:e[4]||"",hostname:e[4]||"",port:e[5]?e[5].substr(1):"",pathname:e[6]||"",search:e[7]||"",hash:e[8]||""};"http:"==n.protocol&&"80"==n.port?n.port="":"https:"==n.protocol&&"443"==n.port&&(n.port="");n.port&&(n.host+=":"+n.port);return n}(t)}function a(t){var e=t.protocol,n=t.username,o=t.password,r=t.host,a=t.pathname,s=t.search,i=t.hash,c="";return e&&(":"==e?e="":e+="//"),(n||o)&&(n&&(c+=encodeURIComponent(n)),o&&(c+=":"+encodeURIComponent(o)),c+="@"),e+c+r+a+s+i}function s(){var t=function t(e,n){var o=!(2<arguments.length&&void 0!==arguments[2])||arguments[2];if(null==e)return"";var r="",a=c()(e);if("string"==a||"number"==a||"boolean"==a)r+="&"+n+"="+(o?encodeURIComponent(e):e);else for(var s in e){var i=null==n?s:n+(e instanceof Array?"["+s+"]":"."+s);r+=t(e[s],i,o)}return r}.apply(this,arguments);return"&"==t.substr(0,1)&&(t=t.substring(1)),t}function i(t,e){if(!e)return t;var n="";if(!(n="string"==typeof e?e:s(e)))return t;var o=r(t);return o.search+=(-1==o.search.indexOf("?")?"?":"&")+n,a(o)}}).call(this,l(96))},68:function(t,e,n){},96:function(t,e,n){t.exports=n(33)(6)}});