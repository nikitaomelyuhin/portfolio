(window.webpackJsonp=window.webpackJsonp||[]).push([[3,12],{104:function(t,e,r){"use strict";r.r(e);var o=r(86);r.d(e,"default",(function(){return o.a}))},105:function(t,e,r){},106:function(t,e,r){},107:function(t,e,r){},108:function(t,e,r){},131:function(t,e,r){"use strict";r(105)},132:function(t,e,r){"use strict";r(106)},133:function(t,e,r){"use strict";r(107)},134:function(t,e,r){"use strict";r(108)},146:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"works-component"},[r("header-component"),r("div",{staticClass:"page-content"},[t._m(0),r("div",{staticClass:"container"},[r("div",{staticClass:"works-container"},["add"===t.mode?r("add-work-block",{attrs:{showForm:t.showForm},on:{addWork:t.addWork,closeForm:t.closeForm}}):t._e(),"edit"===t.mode?r("add-work-block",{attrs:{showForm:t.showForm,currentWork:t.currentWork,mode:t.mode},on:{updateWork:t.updateWork,closeForm:t.closeForm}}):t._e(),r("ul",{staticClass:"works"},[!1===t.showForm?r("li",{staticClass:"works__add-work works__item"},[r("button-component",{attrs:{type:"square"},on:{click:t.openAddingForm}})],1):t._e(),t._l(t.works,(function(e){return r("li",{key:e.id,staticClass:"works__item"},[r("card-work",{attrs:{work:e,disableForm:t.disabled,currentWork:t.currentWork},on:{deleteWork:t.deleteWork,editWork:t.editWork}})],1)}))],2)],1)])])],1)};o._withStripped=!0;var n=r(1),a=r.n(n),s=r(11),i=r.n(s),c=r(0),u=r.n(c),l=r(90),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["card-work",{disable:t.currentWork.id===t.work.id&&t.disableForm}]},[r("div",{staticClass:"card-work__preview"},[r("img",{staticClass:"card-work__image",attrs:{src:t.cover}}),r("ul",{staticClass:"tags"},t._l(t.tagsArray,(function(t,e){return r("li",{key:""+t+e,staticClass:"tag"},[r("tag",{staticClass:"tag-component",attrs:{title:t}})],1)})),0)]),r("div",{staticClass:"card-work__content"},[r("h4",{staticClass:"card-work__title"},[t._v(t._s(t.work.title))]),r("div",{staticClass:"card-work__desc"},[t._v(t._s(t.work.description))]),r("a",{staticClass:"card-work__link",attrs:{href:t.work.link}},[t._v(t._s(t.work.link))])]),r("div",{staticClass:"card-work__buttons"},[r("icon",{attrs:{symbol:"pencil",title:"Править"},on:{click:t.editWork}}),r("icon",{attrs:{symbol:"cross",title:"Удалить"},on:{click:t.deleteWork}})],1)])};d._withStripped=!0;var p=r(86),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["tag",{interactive:t.interactive}]},[r("span",[t._v(t._s(t.title))]),t._v(" "),t.interactive?r("button",t._g({staticClass:"remove",attrs:{type:"button"}},t.$listeners)):t._e()])};f._withStripped=!0;var k=r(104),m={props:{title:{type:String,default:""},interactive:Boolean},components:{icon:k.default}},h=(r(131),r(10)),w=Object(h.a)(m,f,[],!1,null,"77450145",null);w.options.__file="src/admin/components/tag/tag.vue";var v=w.exports,_={components:{icon:p.a,tag:v},props:{currentWork:Object,work:{type:Object},disableForm:Boolean},data:function(){return{mode:"edit",showForm:!0}},methods:{deleteWork:function(){return this.$emit("deleteWork",this.work.id)},editWork:function(){var t=this;return a()(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.$emit("editWork",t.work,t.mode,t.showForm));case 1:case"end":return e.stop()}}),e)})))()}},computed:{cover:function(){return"https://webdev-api.loftschool.com/".concat(this.work.photo)},tagsArray:function(){return this.work.techs.trim().split(",")}}},b=(r(132),Object(h.a)(_,d,[],!1,null,"33a1acef",null));b.options.__file="src/admin/components/cardWork/cardWork.vue";var x=b.exports,g=r(84),y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.showForm?r("div",{staticClass:"add-work-block-component"},[r("card",[r("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(t._s(this.editFormTitle))]),r("template",{slot:"content"},[r("form",{staticClass:"form"},[r("div",{staticClass:"form__load"},[r("label",{class:["uploader",{active:t.renderedPhoto},{hovered:t.hovered}],style:{backgroundImage:"url("+t.renderedPhoto+")"},on:{dragover:t.handleDragOver,dragleave:function(e){t.hovered=!1},drop:function(e){return e.preventDefault(),t.handlePhotoUpload(e)},change:t.handlePhotoUpload}},[r("div",{staticClass:"uploader__title"},[t._v("Перетащите или загрузите для загрузки изображения")]),r("button-component",{staticClass:"uploader__btn",attrs:{title:"Загрузить",typeAttr:"file"},on:{change:t.handlePhotoUpload}})],1)]),r("div",{staticClass:"form__inputs"},[r("div",{staticClass:"form__inputs-wrap"},[r("div",{staticClass:"form__inputs-title"},[t._v("Название")]),r("app-input",{attrs:{noSidePaddings:""},model:{value:t.work.title,callback:function(e){t.$set(t.work,"title",e)},expression:"work.title"}})],1),r("div",{staticClass:"form__inputs-wrap"},[r("div",{staticClass:"form__inputs-title"},[t._v("Ссылка")]),r("app-input",{attrs:{noSidePaddings:""},model:{value:t.work.link,callback:function(e){t.$set(t.work,"link",e)},expression:"work.link"}})],1),r("div",{staticClass:"form__inputs-wrap"},[r("div",{staticClass:"form__inputs-title"},[t._v("Описание")]),r("app-input",{attrs:{fieldType:"textarea"},model:{value:t.work.description,callback:function(e){t.$set(t.work,"description",e)},expression:"work.description"}})],1),r("div",{staticClass:"form__inputs-wrap"},[r("div",{staticClass:"form__inputs-title"},[t._v("Добавление тэга")]),r("app-input",{attrs:{noSidePaddings:""},model:{value:t.work.techs,callback:function(e){t.$set(t.work,"techs",e)},expression:"work.techs"}}),r("ul",{staticClass:"tags"},t._l(t.tagsArray,(function(e,o){return e.trim()?r("li",{key:""+e+o,staticClass:"tag"},[r("tag",{attrs:{interactive:"",title:e},on:{click:function(r){return t.removeTag(e)}}})],1):t._e()})),0)],1),r("div",{staticClass:"form__btns"},[r("button-component",{attrs:{title:"Отмена",plain:""},on:{click:function(e){return e.preventDefault(),t.cancelAdding(e)}}}),"add"===t.mode?r("button-component",{attrs:{title:"Сохранить"},on:{click:function(e){return e.preventDefault(),t.addNewWork(e)}}}):t._e(),"edit"===t.mode?r("button-component",{attrs:{title:"Изменить"},on:{click:function(e){return e.preventDefault(),t.editWork(e)}}}):t._e()],1)])])])],2)],1):t._e()};y._withStripped=!0;var W=r(61),O=r.n(W),C=r(91),F=r(85),j=r(89),P=r(13);function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}var D={mixins:[r(13).mixin],validators:{"work.title":function(t){return P.Validator.value(t).required("Заполните название")},"work.techs":function(t){return P.Validator.value(t).required("Заполните технологии")},"work.link":function(t){return P.Validator.value(t).required("Заполните ссылку")},"work.description":function(t){return P.Validator.value(t).required("Заполните описание")},"work.photo":function(t){return P.Validator.value(t).required("Вставьте файл")}},components:{card:C.a,buttonComponent:g.a,appInput:F.a,tag:v},props:{mode:{type:String,default:"add",validator:function(t){return["add","edit"].includes(t)}},currentWork:Object,showForm:Boolean},data:function(){return{hovered:!1,renderedPhoto:"",closeForm:!1,work:{title:"",link:"",description:"",techs:"",photo:{}}}},computed:{tagsArray:function(){return this.work.techs.split(",")},workPhotoUrl:function(){return"url(".concat(this.renderedPhoto,")")},editFormTitle:function(){switch(this.mode){case"edit":return"Редактирование работы";case"add":return"Добавление работы"}}},created:function(){"edit"===this.mode&&this.fillFormWithCurrentWorkData()},watch:{currentWorkWatcher:function(t){"edit"===this.mode&&this.fillFormWithCurrentWorkData()}},methods:{editWork:function(){var t=this;return a()(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validate();case 2:if(e.t0=e.sent,!1!==e.t0){e.next=5;break}return e.abrupt("return");case 5:t.disableForm=!0,t.$emit("updateWork",t.work);case 7:case"end":return e.stop()}}),e)})))()},addNewWork:function(){var t=this;return a()(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$validate();case 2:if(e.t0=e.sent,!1!==e.t0){e.next=5;break}return e.abrupt("return");case 5:t.$emit("addWork",t.work),t.renderedPhoto="";case 7:case"end":return e.stop()}}),e)})))()},removeTag:function(t){var e=O()(this.tagsArray),r=e.indexOf(t);r<0||(e.splice(r,1),this.newWork.techs=e.join(", "))},handleDragOver:function(t){t.preventDefault(),this.hovered=!0},cancelAdding:function(t){this.closeForm=!0,this.$emit("closeForm",t)},fillFormWithCurrentWorkData:function(){this.work=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},this.currentWork),this.renderedPhoto=Object(j.a)(this.currentWork.photo)},handlePhotoUpload:function(t){var e=this;return a()(u.a.mark((function r(){var o,n;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.dataTransfer?t.dataTransfer.files[0]:t.target.files[0],e.hovered=!1,e.work.photo=o,r.prev=3,r.next=6,Object(j.b)(o);case 6:n=r.sent,e.renderedPhoto=n,r.next=13;break;case 10:r.prev=10,r.t0=r.catch(3),e.shownTooltip({type:"error",text:r.t0.message});case 13:case"end":return r.stop()}}),r,null,[[3,10]])})))()}}},S=(r(133),Object(h.a)(D,y,[],!1,null,"1162882f",null));S.options.__file="src/admin/components/addWorkBlock/addWorkBlock.vue";var $=S.exports,T=r(7);function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function U(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var M={components:{headerComponent:l.a,cardWork:x,buttonComponent:g.a,addWorkBlock:$},data:function(){return{showForm:!1,mode:"normal",currentWork:{},disabled:!1}},computed:U({},Object(T.c)("works",{works:function(t){return t.works}})),watch:{disableForm:function(){return!0===this.showForm?this.disabled=!0:this.disabled=!1}},methods:U(U({},Object(T.b)({addNewWork:"works/add",fetchWorksAction:"works/fetch",deleteWorkAction:"works/delete",updateWorkAction:"works/updateWork",shownTooltip:"tooltips/show"})),{},{openAddingForm:function(){this.showForm=!0,this.mode="add"},addWork:function(t){var e=this;return a()(u.a.mark((function r(){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.addNewWork(t);case 3:e.showForm=!1,t={},e.mode="normal",e.shownTooltip({text:"Работа добавлена",type:"success"}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),e.shownTooltip({text:"Не удалось добавить работу",type:"error"});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},updateWork:function(t){var e=this;return a()(u.a.mark((function r(){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.updateWorkAction(t);case 3:e.mode="normal",e.showForm=!1,e.disableForm(),e.shownTooltip({text:"Работа изменена",type:"success"}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),e.shownTooltip({text:"Не удалось изменить работу",type:"error"});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},deleteWork:function(t){var e=this;return a()(u.a.mark((function r(){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.closeForm();case 2:return r.prev=2,r.next=5,e.deleteWorkAction(t);case 5:e.shownTooltip({text:"Работа удалена",type:"success"}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),e.shownTooltip({text:"Не удалось удалить работу",type:"error"});case 11:case"end":return r.stop()}}),r,null,[[2,8]])})))()},closeForm:function(t){var e=this;return a()(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.mode="",e.showForm=!1,e.disableForm();case 3:case"end":return t.stop()}}),t)})))()},editWork:function(t,e,r){var o=this;return a()(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return window.scrollTo(pageXOffset,150),n.next=3,o.closeForm();case 3:o.mode=e,o.currentWork=t,o.showForm=r,o.disableForm();case 7:case"end":return n.stop()}}),n)})))()},disableForm:function(){var t=this;return a()(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==t.showForm){e.next=6;break}return e.next=3,!0;case 3:return e.abrupt("return",t.disabled=e.sent);case 6:return e.next=8,!1;case 8:return e.abrupt("return",t.disabled=e.sent);case 9:case"end":return e.stop()}}),e)})))()}}),created:function(){this.fetchWorksAction()}},q=(r(134),Object(h.a)(M,o,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"title"},[this._v("Блок «Работы»")])])])}],!1,null,"4672a761",null));q.options.__file="src/admin/pages/works/works.vue";e.default=q.exports},60:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o},t.exports.default=t.exports,t.exports.__esModule=!0},61:function(t,e,r){var o=r(62),n=r(63),a=r(64),s=r(65);t.exports=function(t){return o(t)||n(t)||a(t)||s()},t.exports.default=t.exports,t.exports.__esModule=!0},62:function(t,e,r){var o=r(60);t.exports=function(t){if(Array.isArray(t))return o(t)},t.exports.default=t.exports,t.exports.__esModule=!0},63:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},64:function(t,e,r){var o=r(60);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},65:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},89:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return a}));var o=r(6),n=function(t){var e=new FileReader;return new Promise((function(r,o){try{e.readAsDataURL(t),e.onloadend=function(){r(e.result)}}catch(t){throw new Error("Ошибка при чтении файла")}}))},a=function(t){var e=o.a.defaults.baseURL;return"".concat(e,"/").concat(t)}}}]);