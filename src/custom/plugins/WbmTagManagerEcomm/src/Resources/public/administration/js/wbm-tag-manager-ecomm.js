!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/administration/",n(n.s="DdfT")}({"03Au":function(e,t,n){var r=n("2Nqs");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("SZ7m").default)("43d283a3",r,!0,{})},"2Nqs":function(e,t,n){},"3r99":function(e){e.exports=JSON.parse('{"wbm-tagmanager":{"properties":{"title":"dataLayer Properties","modulesButton":"Modules","nameLabel":"Name","valueLabel":"Value","onEventLabel":"Push as separate event","onEventLabel-helpText":"Push subtree as separate event after page load. If there is any \'event\'-property at the root level, it will be unset. \'impressions\' will be split when 6kb are exceeded. Reason: the Analytics data limit is 8kb.","eventNameLabel":"Eventname","saveButton":"Save"}}}')},"5Yb5":function(e){e.exports=JSON.parse('{"wbm-tagmanager":{"tabs":{"menuEntry":"Google Tag Manager","title":"Google Tag Manager + Enhanced E-Commerce Tracking","modulesButton":"Modules","exportButton":"Export data layers","importHeader":"Import data layers","importButton":"Import","backButton":"Back","jsonImportLabel":"json Import File","truncateLabel":"Truncate tables before import","allStorefronts":"All Storefronts","containerIdHeadline":"GTM Container IDs","addContainerId":"Edit Container IDs"}}}')},"8Pam":function(e,t){e.exports='{% block wbm_module_detail %}\n    <sw-page class="wbm-module-detail">\n        <template slot="smart-bar-actions">\n            <sw-button :routerLink="{ name: \'wbm.module.list\' }">\n                {{ $t(\'wbm-tagmanager.modules.cancelButton\') }}\n            </sw-button>\n\n            <sw-button-process\n                    :isLoading="isLoading"\n                    :processSuccess="processSuccess"\n                    variant="primary"\n                    @process-finish="saveFinish"\n                    @click="onClickSave">\n                {{ $t(\'wbm-tagmanager.modules.saveButton\') }}\n            </sw-button-process>\n        </template>\n\n        <template slot="content">\n            <sw-card-view>\n                <sw-card v-if="module" :isLoading="isLoading">\n                    <sw-field :label="$t(\'wbm-tagmanager.modules.nameLabel\')" v-model="module.name"></sw-field>\n\n                    <sw-field :label="$t(\'wbm-tagmanager.modules.moduleLabel\')" v-model="module.module"></sw-field>\n\n                    <sw-field :label="$t(\'wbm-tagmanager.modules.responseLabel\')" v-model="module.response"></sw-field>\n                </sw-card>\n            </sw-card-view>\n        </template>\n    </sw-page>\n{% endblock %}'},"9HSd":function(e){e.exports=JSON.parse('{"wbm-tagmanager":{"modules":{"title":"dataLayer Module","propertiesButton":"Eigenschaften","addModulesButton":"Modul hinzufügen","nameLabel":"Name","moduleLabel":"Route","responseLabel":"Alternative Route der Response","saveButton":"Speichern","cancelButton":"Abbrechen"}}}')},BoKu:function(e){e.exports=JSON.parse('{"wbm-tagmanager":{"tabs":{"menuEntry":"Google Tag Manager","title":"Google Tag Manager + Enhanced E-Commerce Tracking","modulesButton":"Module","exportButton":"Exportiere Datenschichten","importHeader":"Importiere Datenschichten","importButton":"Importieren","backButton":"Zurück","jsonImportLabel":"json Import Datei","truncateLabel":"Tabellen vor Import leeren","allStorefronts":"Alle Storefronts","containerIdHeadline":"GTM Container IDs","addContainerId":"Container IDs bearbeiten"}}}')},DdfT:function(e,t,n){"use strict";n.r(t);var r=n("sNvC"),a=n.n(r),o=Shopware.Component,i=Shopware.Data.Criteria;o.register("wbm-module-list",{template:a.a,inject:["repositoryFactory","context"],data:function(){return{repository:null,modules:null}},metaInfo:function(){return{title:this.$createTitle()}},computed:{columns:function(){return[{property:"name",dataIndex:"name",label:this.$t("wbm-tagmanager.modules.nameLabel"),routerLink:"wbm.module.detail",inlineEdit:"string",allowResize:!0,primary:!0}]}},created:function(){var e=this;this.repository=this.repositoryFactory.create("wbm_data_layer_modules"),this.repository.search(new i,Shopware.Context.api).then((function(t){e.modules=t}))}});var s=n("8Pam"),l=n.n(s),p=Shopware,d=p.Component,c=p.Mixin;d.register("wbm-module-detail",{template:l.a,inject:["repositoryFactory","context"],mixins:[c.getByName("notification")],metaInfo:function(){return{title:this.$createTitle()}},data:function(){return{module:null,isLoading:!1,processSuccess:!1,repository:null}},created:function(){this.repository=this.repositoryFactory.create("wbm_data_layer_modules"),this.propertyRepository=this.repositoryFactory.create("wbm_data_layer_properties"),this.getModule()},methods:{getModule:function(){var e=this;this.repository.get(this.$route.params.id,Shopware.Context.api).then((function(t){e.module=t}))},onClickSave:function(){var e=this;this.isLoading=!0,this.repository.save(this.module,Shopware.Context.api).then((function(){e.getModule(),e.isLoading=!1,e.processSuccess=!0})).catch((function(t){e.isLoading=!1,e.createNotificationError({title:"Error",message:t})}))},saveFinish:function(){this.processSuccess=!1}}});n("GauA");var u=n("9HSd"),m=n("lBss");Shopware.Module.register("wbm-module",{color:"#ff3d58",icon:"default-shopping-paper-bag-product",title:"wbm-tagmanager.modules.title",description:"",snippets:{"de-DE":u,"en-GB":m},routes:{list:{component:"wbm-module-list",path:"list"},detail:{component:"wbm-module-detail",path:"detail/:id",meta:{parentPath:"wbm.module.list"}},create:{component:"wbm-module-create",path:"create",meta:{parentPath:"wbm.module.list"}}}});var h=n("xZel"),g=n.n(h);function f(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=Shopware.Component,I=Shopware.Data.Criteria;S.register("wbm-property-tree",{template:g.a,inject:["repositoryFactory","context"],props:{module:{type:String,required:!1}},watch:{module:function(){this.onModuleChange()}},data:function(){return{properties:{},loadedParentIds:[],linkContext:"wbm.property.detail",isLoadingInitialData:!0,noSyncMode:!1}},created:function(){this.createdComponent()},computed:{propertyRepository:function(){return this.repositoryFactory.create("wbm_data_layer_properties")},getProperties:function(){return Object.values(this.properties)}},methods:{createdComponent:function(){this.onModuleChange()},onModuleChange:function(){var e=this;this.isLoadingInitialData=!0,this.repository=this.repositoryFactory.create("wbm_data_layer_properties");var t=new I;t.limit=500,t.addFilter(I.equals("parentId",null)),t.addFilter(I.equals("module",this.module));var n={},r=[];this.repository.search(t,Shopware.Context.api).then((function(t){t.forEach((function(e){n[e.id]=e,r.push(e.parentId)})),e.properties=y({},n),e.loadedParentIds=r,e.isLoadingInitialData=!1,e.getProperties.forEach((function(t){e.onGetTreeItems(t.id).then((function(){e.$refs.swTree&&t&&e.$refs.swTree.openTreeById(t.id)}))}))}))},getChildrenFromParent:function(e){return this.onGetTreeItems(e)},onGetTreeItems:function(e){var t=this;if(this.loadedParentIds.includes(e))return Promise.resolve();this.loadedParentIds.push(e);var n=new I(1,500);return n.addFilter(I.equals("parentId",e)),n.addFilter(I.equals("module",this.module)),this.propertyRepository.search(n,Shopware.Context.api).then((function(e){t.addProperties(e),e.forEach((function(e){t.onGetTreeItems(e.id).then((function(){if(t.$refs.swTree&&e)try{t.$refs.swTree.openTreeById(e.id)}catch(e){}}))}))})).catch((function(){t.loadedParentIds=t.loadedParentIds.filter((function(t){return t!==e}))}))},onUpdatePositions:function(e){var t=this,n=e.draggedItem,r=e.oldParentId,a=e.newParentId;n.children.length>0&&(n.children.forEach((function(e){t.removeFromStore(e.id)})),this.loadedParentIds=this.loadedParentIds.filter((function(e){return e!==n.id}))),this.syncSiblings({parentId:a}).then((function(){r!==a&&t.syncSiblings({parentId:r})}))},changeProperty:function(e){this.$parent.$emit("wbm-property-id-change",e.id)},createNewElement:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!t&&e&&(t=e.parentId);var r=this.createNewProperty(n,t);return this.addProperty(r),r},createNewProperty:function(e,t){var n=this,r=this.propertyRepository.create(Shopware.Context.api);return r.name=e,r.parentId=t,r.module=this.$route.params.module,r.childCount=0,r.value="",r.save=function(){return n.propertyRepository.save(r,Shopware.Context.api).then((function(){var e=new I;e.setIds([r.id,t].filter((function(e){return null!==e}))),n.propertyRepository.search(e,Shopware.Context.api).then((function(e){n.addProperties(e)}))}))},r},addProperty:function(e){this.properties[e.id]=e,this.properties=y({},this.properties)},addProperties:function(e){var t=this;e.forEach((function(e){t.properties[e.id]=e})),this.properties=y({},this.properties)},onDeleteProperty:function(e){var t=this,n=e.data;return n.isNew()?(delete this.properties[n.id],this.properties=y({},this.properties),Promise.resolve()):(this.$parent.$emit("wbm-property-id-change",null),this.propertyRepository.delete(n.id,Shopware.Context.api).then((function(){t.removeFromStore(n.id),null!==n.parentId&&t.propertyRepository.get(n.parentId,Shopware.Context.api).then((function(e){var n=t.getProperties.filter((function(t){return t.parentId===e.id}));e.childCount=n.length,t.propertyRepository.save(e,Shopware.Context.api).then((function(){t.addProperty(e)}))}))})))},onEditEnd:function(e){var t=e.parentId;return!0===this.noSyncMode?Promise.resolve():this.syncSiblings({parentId:t})},syncSiblings:function(e){var t=this,n=e.parentId,r=this.getProperties.filter((function(e){return e.parentId===n}));return this.propertyRepository.sync(r,Shopware.Context.api).then((function(){return t.loadedParentIds=t.loadedParentIds.filter((function(e){return e!==n})),t.getChildrenFromParent(n)})).then((function(){var e=t.getProperties.filter((function(e){return e.id===n}));e.length&&(e[0].childCount=r.length,t.propertyRepository.sync(e,Shopware.Context.api).then((function(e){t.addProperty(e)})))}))},removeFromStore:function(e){var t=this,n=this.getDeletedIds(e);this.loadedParentIds=this.loadedParentIds.filter((function(e){return!n.includes(e)})),n.forEach((function(e){delete t.properties[e]})),this.properties=y({},this.properties)},getDeletedIds:function(e){var t=this,n=[e];return Object.keys(this.properties).forEach((function(r){t.properties[r].parentId===e&&n.push.apply(n,f(t.getDeletedIds(r)))})),n}}});n("Z15p");var C=n("f7tg"),x=n.n(C),L=(n("s3nF"),Shopware.Component),k=Shopware.Data.Criteria;L.register("wbm-property-list",{template:x.a,inject:["repositoryFactory","context"],data:function(){return{repository:null,modules:null}},metaInfo:function(){return{title:this.$createTitle()}},computed:{columns:function(){return[{property:"name",dataIndex:"name",label:this.$t("wbm-tagmanager.properties.nameLabel"),routerLink:"wbm.property.detail",inlineEdit:"string",allowResize:!0,primary:!0},{property:"value",dataIndex:"value",label:this.$t("wbm-tagmanager.properties.valueLabel"),routerLink:"wbm.property.detail",inlineEdit:"string",allowResize:!0}]}},created:function(){var e=this;this.repositoryFactory.create("wbm_data_layer_modules").search(new k,Shopware.Context.api).then((function(t){e.modules=t}))}});var E=n("r8oV"),_=n.n(E),P=Shopware,M=P.Component,T=P.Mixin;M.register("wbm-property-detail",{template:_.a,inject:["repositoryFactory","context"],props:{propertyId:{type:Number,required:!1},module:{type:String,required:!1}},watch:{module:function(){this.onModuleChange()}},mixins:[T.getByName("notification")],metaInfo:function(){return{title:this.$createTitle()}},data:function(){return{propertyId:null,module:null,property:null,isLoading:!1,processSuccess:!1,repository:null}},created:function(){this.$parent.$on("wbm-property-id-change",this.setProperty)},methods:{onModuleChange:function(){this.propertyId=null,this.property=null},setProperty:function(e){e?(this.repository=this.repositoryFactory.create("wbm_data_layer_properties"),this.propertyId=e,this.getProperty()):this.property=null},getProperty:function(){var e=this;this.repository.get(this.propertyId,Shopware.Context.api).then((function(t){null===t.value&&(t.value=""),e.property=t}))},onClickSave:function(){var e=this;this.isLoading=!0,this.property.value=this.property.value.replace(/(\r\n|\n|\r)/gm,""),this.repository.save(this.property,Shopware.Context.api).then((function(){e.getProperty(),e.isLoading=!1,e.processSuccess=!0,e.$parent.$parent.$refs.wbmPropertyTree.onModuleChange()})).catch((function(t){e.isLoading=!1,e.createNotificationError({title:"Error",message:t})}))},saveFinish:function(){this.processSuccess=!1}}});var $=n("mLM6"),B=n("3r99");Shopware.Module.register("wbm-property",{color:"#ff3d58",icon:"default-shopping-paper-bag-product",title:"wbm-tagmanager.properties.title",description:"",snippets:{"de-DE":$,"en-GB":B},routes:{list:{component:"wbm-property-list",path:"list/:module"}}});var j=n("dJJ2"),N=n.n(j),O=(n("03Au"),Shopware.Component),F=Shopware.Data.Criteria;O.register("wbm-tagmanager-tabs",{template:N.a,inject:["repositoryFactory","context","systemConfigApiService"],data:function(){return{repository:null,modules:null,loadedConfig:!1,config:null}},metaInfo:function(){return{title:this.$createTitle()}},created:function(){var e=this;this.repository=this.repositoryFactory.create("wbm_data_layer_modules"),this.repository.search(new F,Shopware.Context.api).then((function(t){e.modules=t})),this.salesChannelRepository=this.repositoryFactory.create("sales_channel");var t=[];this.systemConfigApiService.getValues("WbmTagManagerEcomm.config").then((function(n){var r=n["WbmTagManagerEcomm.config.containerId"],a=void 0!==n["WbmTagManagerEcomm.config.isInactive"]&&n["WbmTagManagerEcomm.config.isInactive"];t.push({salesChannel:e.$t("wbm-tagmanager.tabs.allStorefronts"),containerId:r,isInactive:a}),e.salesChannelRepository.search(new F,Shopware.Context.api).then((function(n){n.forEach((function(n,o,i){e.systemConfigApiService.getValues("WbmTagManagerEcomm.config",n.id).then((function(s){var l=void 0===s["WbmTagManagerEcomm.config.containerId"]?r:s["WbmTagManagerEcomm.config.containerId"],p=void 0===s["WbmTagManagerEcomm.config.isInactive"]?a:s["WbmTagManagerEcomm.config.isInactive"];t.push({salesChannel:n.name,containerId:l,isInactive:p}),o===i.length-1&&(e.config=t,e.loadedConfig=!0)}))}))}))}))},computed:{getRouterPath:function(){var e=Shopware.Context.app.config.version.replace(/\./g,"");return parseInt(e)<6440?"sw.plugin.settings":"sw.extension.config"}},methods:{onClickExport:function(){var e={Authorization:"Bearer ".concat(Shopware.Context.api.authToken.access),"Content-Type":"application/json"};Shopware.Application.getContainer("init").httpClient.get("_action/wbm-tagmanager/export",{headers:e}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","dataLayer.json"),document.body.appendChild(n),n.click()}))}}});var R=n("vu65"),D=n.n(R),A=Shopware,G=A.Component,J=A.Mixin;G.register("wbm-tagmanager-import",{template:D.a,mixins:[J.getByName("notification")],metaInfo:function(){return{title:this.$createTitle()}},data:function(){return{isLoading:!1,file:null,truncate:!0}},methods:{truncateChange:function(e){this.truncate=e},handleFileUpload:function(){this.file=this.$refs.file.selectedFile},onClickImport:function(e){var t=this;e.preventDefault();var n={Authorization:"Bearer ".concat(Shopware.Context.api.authToken.access),"Content-Type":"multipart/form-data"},r=new FormData;r.append("file",this.file),r.append("truncate",this.truncate),Shopware.Application.getContainer("init").httpClient.post("_action/wbm-tagmanager/import",r,{headers:n}).then((function(){t.$router.push({name:"wbm.tagmanager.tabs"})}))}}});var U=n("BoKu"),W=n("5Yb5");Shopware.Module.register("wbm-tagmanager",{color:"#ff3d58",icon:"default-shopping-paper-bag-product",title:"wbm-tagmanager.tabs.title",description:"",snippets:{"de-DE":U,"en-GB":W},routes:{tabs:{component:"wbm-tagmanager-tabs",path:"tabs"},import:{component:"wbm-tagmanager-import",path:"import"}},navigation:[{label:"wbm-tagmanager.tabs.menuEntry",color:"#00acd2",path:"wbm.tagmanager.tabs",icon:"default-text-code",parent:"sw-marketing",position:1e3}]});var q=n("E67i"),H=n.n(q),z=n("sb2s"),Z=n("Ox5I");Shopware.Component.register("wbm-config-warning",{template:H.a,snippets:{"de-DE":z,"en-GB":Z}})},E67i:function(e,t){e.exports='<div class="v-html">\n    <div class="sw-alert sw-alert--info sw-alert--default">\n        <div v-html="$tc(\'wbm-tagmanager.config.warning\')" class="sw-alert__body"></div>\n    </div>\n</div>\n'},GauA:function(e,t){Shopware.Component.extend("wbm-module-create","wbm-module-detail",{methods:{getModule:function(){this.module=this.repository.create(Shopware.Context.api)},onClickSave:function(){var e=this;this.isLoading=!0,this.repository.save(this.module,Shopware.Context.api).then((function(){e.isLoading=!1,e.$router.push({name:"wbm.module.list"})})).catch((function(t){e.isLoading=!1,e.createNotificationError({title:"Error",message:t})}))}}})},LgsN:function(e,t,n){},Ox5I:function(e){e.exports=JSON.parse('{"wbm-tagmanager":{"config":{"warning":"Changes to the content of the following fields can break the functionality of Google Tag Manager and should therefore only be done by experienced users. If you make changes, you agree to this risk and accept."}}}')},SZ7m:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=o[0],s={id:e+":"+a,css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return h}));var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},i=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,p=!1,d=function(){},c=null,u="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,a){p=n,c=a||{};var i=r(e,t);return g(i),function(t){for(var n=[],a=0;a<i.length;a++){var s=i[a];(l=o[s.id]).refs--,n.push(l)}t?g(i=r(e,t)):i=[];for(a=0;a<n.length;a++){var l;if(0===(l=n[a]).refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete o[l.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(b(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(a=0;a<n.parts.length;a++)i.push(b(n.parts[a]));o[n.id]={id:n.id,refs:1,parts:i}}}}function f(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function b(e){var t,n,r=document.querySelector("style["+u+'~="'+e.id+'"]');if(r){if(p)return d;r.parentNode.removeChild(r)}if(m){var a=l++;r=s||(s=f()),t=v.bind(null,r,a,!1),n=v.bind(null,r,a,!0)}else r=f(),t=S.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var w,y=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function v(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function S(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),c.ssrId&&e.setAttribute(u,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},Z15p:function(e,t){Shopware.Component.extend("wbm-tree-item","sw-tree-item",{methods:{abortCreateElement:function(e){null===this.parentScope.currentEditMode&&null===e.parentId&&(this.parentScope.$parent.noSyncMode=!0),this.parentScope.abortCreateElement(e),this.parentScope.$parent.noSyncMode=!1}}})},dJJ2:function(e,t){e.exports='{% block wbm_tagmanager_tabs %}\n    <sw-page class="wbm-tagmanager-tabs">\n        {% block wbm_tagmanager_tabs_smart_bar %}\n            <template slot="smart-bar-header">\n                <sw-tabs variant="minimal" v-if="modules">\n                    <sw-tabs-item\n                            v-for="module in modules"\n                            :route="{ name: \'wbm.property.list\', params: { module: module.module } }">\n                        {{ module.name }}\n                    </sw-tabs-item>\n                    <template slot="content">\n                        <sw-button variant="primary" :routerLink="{ name: \'wbm.module.list\' }">\n                            {{ $t(\'wbm-tagmanager.tabs.modulesButton\') }}\n                        </sw-button>\n                        <sw-button-process\n                                variant="primary"\n                                @click="onClickExport">\n                            {{ $t(\'wbm-tagmanager.tabs.exportButton\') }}\n                        </sw-button-process>\n                        <sw-button variant="primary" :routerLink="{ name: \'wbm.tagmanager.import\' }">\n                            {{ $t(\'wbm-tagmanager.tabs.importHeader\') }}\n                        </sw-button>\n                    </template>\n                </sw-tabs>\n            </template>\n        {% endblock %}\n\n        <template slot="content">\n            {% block wbm_tagmanager_tabs_content %}\n                <sw-card-view>\n                    <sw-card v-if="loadedConfig">\n                        <h2>{{ $t(\'wbm-tagmanager.tabs.containerIdHeadline\') }}</h2>\n                        <sw-grid :items="config"\n                                 :header="false"\n                                 :selectable="false"\n                                 :allSelectable="false"\n                                 :isFullpage="false"\n                                 table>\n                            <template slot="columns" slot-scope="{ item }">\n                                <sw-grid-column flex="minmax(200px, 1fr)" dataIndex="salesChannel">\n                                    {{ item.salesChannel }}\n                                </sw-grid-column>\n                                <sw-grid-column flex="minmax(200px, 1fr)" dataIndex="containerId">\n                                    {{ item.containerId }}\n                                </sw-grid-column>\n                                <sw-grid-column flex="minmax(50px, 50px)" dataIndex="isInactive">\n                                    <sw-icon\n                                            small\n                                            name="small-default-x-line-small"\n                                            v-if="item.isInactive || !item.containerId"></sw-icon>\n                                    <sw-icon\n                                            small\n                                            name="small-default-checkmark-line-small"\n                                            v-else></sw-icon>\n                                </sw-grid-column>\n                            </template>\n                        </sw-grid>\n\n                        <sw-button :routerLink="{ name: getRouterPath, params: { namespace: \'WbmTagManagerEcomm\' } }">\n                            {{ $t(\'wbm-tagmanager.tabs.addContainerId\') }}\n                        </sw-button>\n                    </sw-card>\n                    <sw-loader v-else></sw-loader>\n\n                    <sw-card>\n                        <iframe src="https://plugins.webmatch.de/wbm_tag_manager/info.php"\n                                style="height:50px;width:100%;border:0"></iframe>\n                    </sw-card>\n                </sw-card-view>\n            {% endblock %}\n        </template>\n    </sw-page>\n{% endblock %}\n'},f7tg:function(e,t){e.exports='{% block wbm_property_list %}\n    <sw-page class="wbm-property-list">\n        {% block wbm_property_list_smart_bar %}\n            <template slot="smart-bar-header">\n                <sw-tabs variant="minimal" v-if="modules">\n                    <sw-tabs-item\n                            v-for="module in modules"\n                            :route="{ name: \'wbm.property.list\', params: { module: module.module } }"\n                            :active="module.module == $route.params.module">\n                        {{ module.name }}\n                    </sw-tabs-item>\n                    <template slot="content">\n                        <sw-button variant="primary" :routerLink="{ name: \'wbm.module.list\' }">\n                            {{ $t(\'wbm-tagmanager.properties.modulesButton\') }}\n                        </sw-button>\n                    </template>\n                </sw-tabs>\n            </template>\n        {% endblock %}\n\n        <template #side-content>\n            <wbm-property-tree\n                    ref="wbmPropertyTree"\n                    :module="$route.params.module"\n            ></wbm-property-tree>\n        </template>\n\n        <template slot="content">\n            {% block wbm_property_list_content %}\n                <wbm-property-detail\n                        :module="$route.params.module"\n                ></wbm-property-detail>\n            {% endblock %}\n        </template>\n    </sw-page>\n{% endblock %}'},lBss:function(e){e.exports=JSON.parse('{"wbm-tagmanager":{"modules":{"title":"dataLayer Modules","propertiesButton":"Properties","addModulesButton":"Add Module","nameLabel":"Name","moduleLabel":"Route","responseLabel":"Alternative Response Route","saveButton":"Save","cancelButton":"Cancel"}}}')},mLM6:function(e){e.exports=JSON.parse('{"wbm-tagmanager":{"properties":{"title":"dataLayer Eigenschaften","modulesButton":"Module","nameLabel":"Name","valueLabel":"Wert","onEventLabel":"Als separates Event pushen","onEventLabel-helpText":"Subtree als separates Event nach \'pageload\' senden. Falls eine \'event\'-Property auf der Rootebene exisitiert, wird dieses entfernt. \'impressions\' wird gesplittet wenn 6kb überschritten werden. Hintergrund: das Analytics Datenlimit beträgt 8kb","eventNameLabel":"Eventname","saveButton":"Speichern"}}}')},r8oV:function(e,t){e.exports='{% block wbm_property_detail %}\n    <sw-card-view>\n        <sw-card v-if="property" :isLoading="isLoading">\n            <sw-field :label="$t(\'wbm-tagmanager.properties.nameLabel\')" v-model="property.name"></sw-field>\n\n            <sw-code-editor\n                    :label="$t(\'wbm-tagmanager.properties.valueLabel\')"\n                    name="value"\n                    identifier="value"\n                    completionMode="entity"\n                    v-model="property.value">\n            </sw-code-editor>\n\n            <sw-checkbox-field\n                :label="$t(\'wbm-tagmanager.properties.onEventLabel\')"\n                :helpText="$t(\'wbm-tagmanager.properties.onEventLabel-helpText\')"\n                v-model="property.onEvent"\n                v-if="!property.parentId">\n            </sw-checkbox-field>\n            <sw-field :label="$t(\'wbm-tagmanager.properties.eventNameLabel\')"\n                      v-model="property.eventName"\n                      v-if="property.onEvent">\n            </sw-field>\n\n            <sw-button-process\n                    :isLoading="isLoading"\n                    :processSuccess="processSuccess"\n                    variant="primary"\n                    @process-finish="saveFinish"\n                    @click="onClickSave">\n                {{ $t(\'wbm-tagmanager.properties.saveButton\') }}\n            </sw-button-process>\n        </sw-card>\n    </sw-card-view>\n{% endblock %}\n'},s3nF:function(e,t,n){var r=n("LgsN");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("SZ7m").default)("321743f2",r,!0,{})},sNvC:function(e,t){e.exports='{% block wbm_module_list %}\n    <sw-page class="wbm-module-list">\n        {% block wbm_module_list_smart_bar_actions %}\n            <template slot="smart-bar-actions">\n                <sw-button variant="primary" :routerLink="{ name: \'wbm.tagmanager.tabs\' }">\n                    {{ $t(\'wbm-tagmanager.modules.propertiesButton\') }}\n                </sw-button>\n                <sw-button variant="primary" :routerLink="{ name: \'wbm.module.create\' }">\n                    {{ $t(\'wbm-tagmanager.modules.addModulesButton\') }}\n                </sw-button>\n            </template>\n        {% endblock %}\n\n        <template slot="content">\n            {% block wbm_module_list_content %}\n                <sw-entity-listing\n                        v-if="modules"\n                        :items="modules"\n                        :repository="repository"\n                        :showSelection="false"\n                        :columns="columns"\n                        detailRoute="wbm.module.detail">\n                </sw-entity-listing>\n            {% endblock %}\n        </template>\n    </sw-page>\n{% endblock %}'},sb2s:function(e){e.exports=JSON.parse('{"wbm-tagmanager":{"config":{"warning":"Änderungen am Inhalt der folgenden Felder können dazu führen, dass der Google Tag Manager nicht mehr ordnungsgemäß funktioniert und sollte daher nur von erfahrenden Nutzern durchgeführt werden. Wenn Sie Änderungen vornehmen erklären Sie sich mit diesem Risiko einverstanden."}}}')},vu65:function(e,t){e.exports='{% block wbm_tagmanager_import %}\n    <sw-page class="wbm-tagmanager-import">\n        <template slot="smart-bar-header">\n            <h2> {{ $tc(\'wbm-tagmanager.tabs.importHeader\') }}</h2>\n        </template>\n\n        <template slot="smart-bar-actions">\n            <sw-button :routerLink="{ name: \'wbm.tagmanager.tabs\' }">\n                {{ $t(\'wbm-tagmanager.tabs.backButton\') }}\n            </sw-button>\n        </template>\n\n        <template slot="content">\n            <sw-card-view>\n                <sw-card :isLoading="isLoading">\n                    <sw-file-input\n                            ref="file"\n                            @change="handleFileUpload"\n                            :label="$t(\'wbm-tagmanager.tabs.jsonImportLabel\')"\n                            :allowedMimeTypes="[\'application/json\']"\n                            :maxFileSize="8*1024*1024">\n                    </sw-file-input>\n\n                    <br><br>\n\n                    <sw-field\n                            type="checkbox"\n                            name="truncate"\n                            ref="truncate"\n                            :label="$t(\'wbm-tagmanager.tabs.truncateLabel\')"\n                            :value="true"\n                            @change="truncateChange"></sw-field>\n\n                    <sw-button-process\n                            :isLoading="isLoading"\n                            variant="primary"\n                            @click="onClickImport">\n                        {{ $t(\'wbm-tagmanager.tabs.importButton\') }}\n                    </sw-button-process>\n                </sw-card>\n            </sw-card-view>\n        </template>\n    </sw-page>\n{% endblock %}'},xZel:function(e,t){e.exports='<sw-tree\n        v-if="!isLoadingInitialData"\n        ref="swTree"\n        after-id-property="afterId"\n        child-count-property="childCount"\n        :searchable="false"\n        :disableContextMenu="false"\n        :onChangeRoute="changeProperty"\n        :items="getProperties"\n        @get-tree-items="onGetTreeItems"\n        @delete-element="onDeleteProperty"\n        @drag-end="onUpdatePositions"\n        @editing-end="onEditEnd">\n    <template slot="headline">\n        <div class="sw-tree-actions__headline">\n            <span>{{ $t(\'wbm-tagmanager.properties.title\') }}</span>\n        </div>\n    </template>\n    <template slot="items" slot-scope="{ treeItems, sortable, draggedItem, newElementId, disableContextMenu, onChangeRoute }">\n        <wbm-tree-item\n                v-for="(item, index) in treeItems"\n                :key="item.id"\n                :item="item"\n                :disableContextMenu="disableContextMenu"\n                :onChangeRoute="onChangeRoute"\n                :newElementId="newElementId"></wbm-tree-item>\n    </template>\n</sw-tree>\n\n<sw-loader v-else></sw-loader>'}});