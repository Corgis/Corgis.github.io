(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{380:function(t,e,a){},381:function(t,e,a){"use strict";var i=a(380);a.n(i).a},382:function(t,e,a){"use strict";var i=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"ui-bread-crumb"},[i("el-breadcrumb",a._l(a.data,function(t,e){return i("el-breadcrumb-item",{key:e},[a._v(a._s(t))])}),1)],1)};i._withStripped=!0;var o={props:{data:{type:Array,default:function(){return[]}}}},s=(a(381),a(44)),n=Object(s.a)(o,i,[],!1,null,null,null);n.options.__file="src/components/manage/common/bread-crumb.vue";e.a=n.exports},390:function(t,e,a){"use strict";var i=a(12),n=a.n(i),o=a(106),s=a.n(o);e.a={data:function(){return{TABLE_CONFIG:{field:{id:"id"},api:{query:"",delete:""}},filter:{pageNum:1,pageSize:15,sort:""},autoLoad:!0,loading:!0,listData:[],totalCount:0,pickedId:[],usePage:!0,useRouterQuery:!1}},beforeRouteUpdate:function(t,e,a){if(this.useRouterQuery){var i=t.query.page||1;this.filter.pageNum=parseInt(i),this.fetchData(),a()}else a()},methods:{fetchData:function(t,e){var a=this;this.TABLE_CONFIG.api.query&&(!t&&this.loading||(this.beforeFetch&&this.beforeFetch(),e=n()({},this.filter,e),this.loading=!0,this.$api(this.TABLE_CONFIG.api.query,e,{showLoading:!0}).then(function(t){a.loading=!1,a.filter=e,a.parseData(t.object),a.afterFetch&&a.afterFetch()}).catch(function(t){a.loading=!1,a._showErrMsg(t)})))},parseData:function(t){this.usePage?(this.listData=t.records,this.totalCount=t.total):(this.listData=t,this.totalCount=t.length)},deleteData:function(t,e){if(this.TABLE_CONFIG.api.delete){var a=this,i=[],o="确定删除该条数据么?";if(t?i.push(t):(i=a.pickedId,o="确定删除选中的数据么?"),!i.length)return a.$message.warning("未选择任何数据"),!1;var s=n()({},e);s[a.TABLE_CONFIG.field.id]=i.join(","),a._asyncDialog(o,"警告",{confirmButtonText:"删除",type:"warning",confirmButtonClass:"el-button--danger",api:a.TABLE_CONFIG.api.delete,params:s,success:function(){a.$message({message:"删除成功",type:"success"}),a.usePage?a.fetchData():a.__delListData(i)}})}},__delListData:function(a){var i=this;this.listData.forEach(function(t,e){~a.indexOf(t[i.TABLE_CONFIG.field.id])&&i.listData.splice(e,1)})},selectRow:function(t){var e=this,a=[];t.forEach(function(t){a.push(t[e.TABLE_CONFIG.field.id])}),this.pickedId=a},sortData:function(t){t.order?this.filter.sort="ascending"==t.order?2:1:this.filter.sort="",this.fetchData()},pageChange:function(t){if(this.beforePageChange&&this.beforePageChange(t),this.useRouterQuery){var e=this.$route;if((e.query.page||1)==this.filter.pageNum)return;var a={name:e.name,meta:n()({},e.meta),params:n()({},e.params),query:n()({},e.query)};a.query.page=t,e.name||(a.path=e.path),this.$router.push(a)}else this.fetchData();this.afterPageChange&&this.afterPageChange(t)},pushData:function(t){this.listData.unshift(t),this.listData.splice(this.filter.pageSize),this.totalCount++},updateData:function(i){var o=this,s=-1;this.listData.forEach(function(t,e){var a=t[o.TABLE_CONFIG.field.id];a&&a==i[o.TABLE_CONFIG.field.id]&&(s=e)}),-1!=s&&this.$set(this.listData,s,i)},filterChangeHandle:function(){this.fetchDataHandle(!1,{pageNum:1})}},created:function(){this.fetchDataHandle=s()(this.fetchData,200);var t=this.$route.query.page;t&&(this.filter.pageNum=parseInt(t)),this.autoLoad&&this.fetchData(!0)}}},391:function(t,e,a){},392:function(t,e,a){},405:function(t,e,a){"use strict";var i=a(391);a.n(i).a},406:function(t,e,a){"use strict";var i=a(392);a.n(i).a},414:function(t,e,a){"use strict";a.r(e);var i=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{directives:[{name:"title",rawName:"v-title",value:a.pageTitle,expression:"pageTitle"}],staticClass:"c-m-system-user ui-box"},[i("bread-crumb",{attrs:{data:a.crumbData}}),a._v(" "),i("search",{staticClass:"ui-search",attrs:{data:a.filter},on:{search:a.fetchData}}),a._v(" "),i("div",{staticClass:"ui-hander"},[i("el-button",{attrs:{type:"primary",size:"small",icon:"iconfont icon-add"},on:{click:a.showAdd}},[a._v("新增")]),a._v(" "),i("el-button",{attrs:{type:"primary",size:"small",icon:"iconfont icon-upload"},on:{click:a.showImgUpload}},[a._v("上传")]),a._v(" "),i("el-button",{attrs:{type:"primary",size:"small",icon:"iconfont icon-upload"},on:{click:a.showFileUpload}},[a._v("上传文件")])],1),a._v(" "),i("div",{staticClass:"ui-table-content"},[i("el-table",{attrs:{data:a.listData,border:"",stripe:"",size:"mini"}},[i("el-table-column",{attrs:{prop:"userName",label:"用户名","header-align":"center",align:"center"}}),a._v(" "),i("el-table-column",{attrs:{prop:"name",label:"姓名","header-align":"center",align:"center"}}),a._v(" "),i("el-table-column",{attrs:{prop:"phone",label:"手机","header-align":"center",align:"center"}}),a._v(" "),i("el-table-column",{attrs:{prop:"organizationInfoIdRefName",label:"机构名","header-align":"center",align:"center"}}),a._v(" "),i("el-table-column",{attrs:{prop:"createdTime",label:"创建时间","header-align":"center",align:"center"}}),a._v(" "),i("el-table-column",{attrs:{prop:"createdTime",label:"操作","min-width":"150","header-align":"center",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return a.showDetail(e.row.userInfoId,e.row,!0)}}},[a._v("详情")]),a._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return a.showEdit(e.row.userInfoId,e.row)}}},[a._v("编辑")]),a._v(" "),i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return a.deleteData(e.row.userInfoId)}}},[a._v("删除")]),a._v(" "),i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return a.resetPwd(e.row.userInfoId,e.row)}}},[a._v("重置密码")])]}}])})],1)],1),a._v(" "),i("div",{staticClass:"ui-page"},[i("el-pagination",{attrs:{"page-size":a.filter.pageSize,"current-page":a.filter.pageNum,layout:"total, prev, pager, next, jumper",total:a.totalCount},on:{"current-change":a.pageChange,"update:currentPage":function(t){return a.$set(a.filter,"pageNum",t)},"update:current-page":function(t){return a.$set(a.filter,"pageNum",t)}}})],1),a._v(" "),i("dialog-form",{ref:"form",on:{edit:a.fetchData,add:a.fetchData}}),a._v(" "),i("img-uploads",{ref:"imguploads",attrs:{option:a.imgOption},on:{done:a.done}}),a._v(" "),i("file-upload",{ref:"fileupload",attrs:{option:a.fileOption},on:{done:a.done}})],1)};i._withStripped=!0;var o=a(382),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"c-m-market-search search-bar"},[a("el-row",{attrs:{gutter:10}},[a("el-button",{staticClass:"ui-skin-btn ui-front-btn",attrs:{type:"primary",icon:"iconfont icon-add",size:"small"}},[e._v("新增")]),e._v(" "),a("el-col",{attrs:{xs:8,sm:5,lg:4,xl:3}},[a("el-input",{attrs:{placeholder:"关键字搜素应用"},model:{value:e.formData.keyWord,callback:function(t){e.$set(e.formData,"keyWord",t)},expression:"formData.keyWord"}})],1),e._v(" "),a("el-col",{attrs:{xs:8,sm:5,lg:4,xl:3}},[a("el-select",{attrs:{placeholder:"型号"},model:{value:e.formData.model,callback:function(t){e.$set(e.formData,"model",t)},expression:"formData.model"}},e._l(e.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),e._v(" "),a("el-col",{attrs:{xs:8,sm:5,lg:4,xl:3}},[a("el-select",{attrs:{placeholder:"类别"},model:{value:e.formData.category,callback:function(t){e.$set(e.formData,"category",t)},expression:"formData.category"}},e._l(e.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1)],1)};s._withStripped=!0;var n={data:function(){return{formData:{model:"",category:"",keyWord:""},options:[{label:"型号类别1",value:1},{label:"型号类别2",value:2}]}}},r=a(44),l=Object(r.a)(n,s,[],!1,null,null,null);l.options.__file="src/components/manage/system/users/search.vue";var c=l.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"c-m-system-user-dialog ui-form",attrs:{title:e.title,visible:e.dialogShow,"lock-scroll":!1,"close-on-click-modal":!1,"before-close":e.close,width:"500px"},on:{"update:visible":function(t){e.dialogShow=t}}},[a("el-form",{ref:"form",attrs:{model:e.formData,"label-width":"80px","label-position":"right",rules:e.rules}},[a("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[a("el-input",{attrs:{size:"small",placeholder:"用户名",disabled:e.unEdit},model:{value:e.formData.userName,callback:function(t){e.$set(e.formData,"userName",t)},expression:"formData.userName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{size:"small",placeholder:"姓名",disabled:e.unEdit},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[a("el-input",{attrs:{size:"small",placeholder:"手机号",disabled:e.unEdit},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone",t)},expression:"formData.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{size:"small",type:"textarea",placeholder:"备注",disabled:e.unEdit},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.close}},[e._v("关闭")]),e._v(" "),a("el-button",{attrs:{type:"primary",disabled:e.loading||e.saving||e.unEdit,loading:e.saving},on:{click:e.save}},[e._v("保 存")])],1)],1)};u._withStripped=!0;var d=a(12),f=a.n(d),h={mixins:[{data:function(){return{FORM_CONFIG:{field:{id:"id"},api:{info:"",add:"",edit:""}},id:0,inited:!1,formData:{},rules:{},dialogShow:!1,loading:!1,hasEdited:!1,saving:!1,labelWidth:"7em",unEdit:!1}},computed:{title:function(){return this.id?"编辑":"添加"}},watch:{formData:{handler:function(){this.inited&&(this.hasEdited=!0)},deep:!0}},methods:{show:function(t,e,a){this.id=t||0,this.unEdit=a||!1,this.dialogShow=!0,e?this.setFormData(e):this.id?this.fetchData():this.setFormData(this._defaultFormData)},close:function(t){var e=this;this.hasEdited?this.$confirm("表单未保存，确定要关闭吗？","警告",{confirmButtonText:"关闭",cancelButtonText:"点错了",type:"warning"}).then(function(){e.closeHandle(),"function"==typeof t&&t()}).catch(function(){}):(this.closeHandle(),"function"==typeof t&&t())},closeHandle:function(){this.dialogShow=!1,this.resetTimer=setTimeout(this.reset,300)},fetchData:function(){var e=this;if(this.FORM_CONFIG.api.info&&!this.loading){var t={};t[this.FORM_CONFIG.field.id]=this.id,this.loading=!0,this.$api(this.FORM_CONFIG.api.info,t).then(function(t){e.setFormData(t.object),e.loading=!1}).catch(function(t){e.loading=!1,e._showErrMsg(t)})}},setFormData:function(t){var e=this;this.formData=f()(!0,{},t),this.onSetFormData&&this.onSetFormData(),this.$nextTick(function(){e.inited=!0,e.$refs.form.clearValidate()})},save:function(){var e=this;this.saving||this.$refs.form.validate(function(t){t&&e.post()})},post:function(){var e=this,a=this.id?"edit":"add",t=this.FORM_CONFIG.api[a];if(t&&(!this.beforeSave||!1!==this.beforeSave())){this.saving=!0;var i=this.parsePostData?this.parsePostData():this.formData;this.$api(t,i).then(function(t){e.$emit(a,t.object),e.saving=!1,e.hasEdited=!1,e.$message.success("保存成功"),e.close(),e.onSuccess&&e.onSuccess(t)}).catch(function(t){e._showErrMsg(t),e.saving=!1,e.onFail&&e.onFail(t)})}},reset:function(){clearTimeout(this.resetTimer),this.inited=!1,this.hasEdited=!1;var t=this.$refs.form;t&&t.resetFields()}},created:function(){this._defaultFormData=f()(!0,{},this.formData)}}],data:function(){return{FORM_CONFIG:{field:{id:"userInfoId"},api:{add:this.$cfg.API.system.user.add,edit:this.$cfg.API.system.user.edit}},formData:{userName:"",name:"",phone:"",remark:""},rules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{validator:this.checkUsername,trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:this.checkPhone,trigger:"blur"}]}}},methods:{checkUsername:function(t,e,a){if(!this.$cfg.REG.letterOrNumber.test(e))return a(new Error("请输入英文，字母或其组合"));a()},checkPhone:function(t,e,a){if(!this.$cfg.REG.phone.test(e))return a(new Error("请输入正确的手机号"));a()}}},p=Object(r.a)(h,u,[],!1,null,null,null);p.options.__file="src/components/manage/system/users/form.vue";var m=p.exports,g=a(390),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"ui-img-upload-dialog ui-form",attrs:{title:e.title,visible:e.dialogShow,"lock-scroll":!1,"close-on-click-modal":!1,"before-close":e.close,width:"500px"},on:{"update:visible":function(t){e.dialogShow=t}}},[a("el-upload",{ref:"upload",staticClass:"ui-img-upload",attrs:{multiple:e.options.multiple,"show-file-list":!1,action:e.options.urlPath||"",name:e.options.name,drag:e.options.drag,format:e.options.format,"file-list":e.readyFiles,"auto-upload":e.options.autoUpload,"before-upload":e.beforeUpload,"on-change":e.handleChange,"on-error":e.handleError,"on-success":e.handleSuccess,"list-type":"picture"}},[a("div",{ref:"pickup",staticClass:"area"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.preview,expression:"preview"}],staticClass:"thumb-area",style:e.thumbStyle.area},[a("div",{staticClass:"thumb",style:e.thumbStyle.img},[a("img",{attrs:{src:e.imgpath}})])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"}],staticClass:"shade"},[a("i",{staticClass:"iconfont icon-upload"}),e._v(" "),a("p",{staticClass:"text"},[e._v("将图片拖到此处，或"),a("em",[e._v("点击上传")])]),e._v(" "),a("p",{staticClass:"tip",domProps:{innerHTML:e._s(e.tip)}})])])]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:e.close}},[e._v("关 闭")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",loading:e.loadingStatus},on:{click:e.submitUpload}},[e._v("上 传")])],1)],1)};v._withStripped=!0;var b=a(52),_={multiple:!1,autoUpload:!1,maxSize:10240,format:[],drag:!0,name:"file",urlPath:"/fileupload/common/upload!uploadFile.action"},w={props:{option:{type:Object,default:function(){return{}}}},data:function(){return{dialogShow:!1,loadingStatus:!1,title:"图片上传",options:{},readyFiles:[],preview:!1,imgpath:""}},computed:{tip:function(){var t=this.options.format,e=(this.options.maxSize,t&&t.length?t.join(","):""),a=Object(b.a)(1024*this.options.maxSize," ");return"(请上传<span class='format-tip'>".concat(e,"</span>格式的图片,大小不超过 ").concat(a,")")},thumbStyle:function(){var t={area:{},img:{}};return this.width&&(t.area.maxWidth=this.width+"px",t.img.paddingBottom=Math.floor(this.height/this.width*1e4)/100+"%"),t}},methods:{show:function(){var t=this;t.dialogShow=!0,t.option.format=t.option.format?t.option.format:t.$cfg.FILE.image,t.options=f()({},_,t.option)},close:function(){this.dialogShow=!1,this.reset()},handleChange:function(t,e){if(!t.percentage){var a=this,i=t.name;a.readyFiles=[];var o=t.name.substring(t.name.lastIndexOf(".")+1);if(!(a.options.format||[]).includes(o))return a.$message.error("文件 ".concat(i," 格式错误")),a.reset(),!1;var s=t.size/1024,n=a.options.maxSize,r=Object(b.a)(1024*this.options.maxSize," ");if(n<s)return a.$message.error("文件 ".concat(i," 大小超过").concat(r)),a.reset(),!1;a.readyFiles.push(t),a.imgpath=t.url,a.preview=!0}},beforeUpload:function(t){this.loadingStatus=!0},submitUpload:function(){this.readyFiles.length?this.$refs.upload.submit():this.$message.warning("请选择图片")},handleError:function(t,e,a){this.$message.error("上传出错"),this.loadingStatus=!1,this.reset()},handleSuccess:function(t,e,a){var i=this;if(0==t.error)i.$emit("done",t.url),i.$message.success("上传成功"),setTimeout(function(){i.close()},800);else{var o=t.message||"上传失败,请重新上传";i.reset(),i.$message.error(o)}},reset:function(){this.preview=!1,this.loadingStatus=!1,this.readyFiles=[],this.$refs.upload.clearFiles()}}},y=(a(405),Object(r.a)(w,v,[],!1,null,null,null));y.options.__file="src/components/manage/common/img-uploads.vue";var D=y.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"ui-file-upload-dialog ui-form",attrs:{title:e.title,visible:e.dialogShow,"lock-scroll":!1,"close-on-click-modal":!1,"before-close":e.close,width:"500px"},on:{"update:visible":function(t){e.dialogShow=t}}},[a("el-upload",{ref:"upload",staticClass:"ui-file-upload",attrs:{multiple:e.options.multiple,action:e.options.urlPath||"",name:e.options.name,drag:e.options.drag,format:e.options.format,"file-list":e.readyFiles,"auto-upload":e.options.autoUpload,"before-upload":e.beforeUpload,"on-change":e.handleChange,"on-error":e.handleError,"on-success":e.handleSuccess}},[a("div",{ref:"pickup",staticClass:"area"},[a("div",{staticClass:"shade"},[a("i",{staticClass:"iconfont icon-upload"}),e._v(" "),a("p",{staticClass:"text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])]),e._v(" "),a("p",{staticClass:"tip",domProps:{innerHTML:e._s(e.tip)}})])])]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:e.close}},[e._v("关 闭")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",loading:e.loadingStatus},on:{click:e.submitUpload}},[e._v("上 传")])],1)],1)},$={multiple:!(C._withStripped=!0),autoUpload:!1,maxSize:10240,format:[],drag:!0,name:"file",urlPath:"/fileupload/common/upload!uploadFile.action"},S={props:{option:{type:Object,default:function(){return{}}}},data:function(){return{dialogShow:!1,loadingStatus:!1,title:"文件上传",options:{},readyFiles:[]}},computed:{tip:function(){var t=this.options.format,e=(this.options.maxSize,t&&t.length?t.join(","):""),a=Object(b.a)(1024*this.options.maxSize," ");return"(请上传<span class='format-tip'>".concat(e,"</span>格式的文件,大小不超过 ").concat(a,")")}},methods:{show:function(){var t=this;t.dialogShow=!0,t.option.format=t.option.format?t.option.format:t.$cfg.FILE.excel,t.options=f()({},$,t.option)},close:function(){this.dialogShow=!1,this.reset()},handleChange:function(t,e){if(!t.percentage){var a=this;t.name;return a.readyFiles=[],void a.$emit("done",t)}},beforeUpload:function(t){this.loadingStatus=!0},submitUpload:function(){this.readyFiles.length?this.$refs.upload.submit():this.$message.warning("请选择文件")},handleError:function(t,e,a){this.$message.error("上传出错"),this.loadingStatus=!1,this.reset()},handleSuccess:function(t,e,a){var i=this;if(0==t.error)i.$emit("done",t.url),i.$message.success("上传成功"),setTimeout(function(){i.close()},800);else{var o=t.message||"上传失败,请重新上传";i.reset(),i.$message.error(o)}},reset:function(){this.preview=!1,this.loadingStatus=!1,this.readyFiles=[],this.$refs.upload.clearFiles()}}},F=(a(406),Object(r.a)(S,C,[],!1,null,null,null));F.options.__file="src/components/manage/common/file-upload.vue";var x=F.exports,k=a(379),E={mixins:[g.a],components:{BreadCrumb:o.a,Search:c,DialogForm:m,imgUploads:D,fileUpload:x},data:function(){return{parser:"",pageTitle:"用户管理",imgOption:{maxSize:5120,name:"uploadify"},fileOption:{maxSize:51200,name:"uploadify"},crumbData:["系统设置","用户管理"],filter:{pageSize:10,userName:"",name:"",phone:"",organizationInfoIdRef:""},TABLE_CONFIG:{field:{id:"userInfoId"},api:{query:this.$cfg.API.system.user.query,delete:this.$cfg.API.system.user.del}}}},methods:{showAdd:function(){this.$refs.form.show()},showEdit:function(t,e){this.$refs.form.show(t,e)},showDetail:function(t,e,a){this.$refs.form.show(t,e,a)},showImgUpload:function(){this.$refs.imguploads.show()},showFileUpload:function(){this.$refs.fileupload.show()},done:function(t){this.parser=new k(t.raw),this.parser.parse().then(function(t){console.log("app info ----\x3e ",t),console.log("icon base64 ----\x3e ",t.icon)}).catch(function(t){console.log("err ----\x3e ",t)})},jumptest:function(){this.$router.push({name:"childpage",params:{id:1}})}}},I=Object(r.a)(E,i,[],!1,null,null,null);I.options.__file="src/components/manage/system/users/index.vue";e.default=I.exports}}]);