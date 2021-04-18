(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{109:function(e,t,r){},110:function(e,t,r){},111:function(e,t,r){},135:function(e,t,r){"use strict";r(109)},136:function(e,t,r){"use strict";r(110)},137:function(e,t,r){"use strict";r(111)},147:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reviews-component"},[r("header-component"),r("div",{staticClass:"page-content"},[e._m(0),r("div",{staticClass:"container"},[r("div",{staticClass:"reviews-container"},["add"===e.mode?r("add-review-block",{attrs:{showForm:e.showForm},on:{addReview:e.addReview,closeForm:e.closeForm}}):e._e(),"edit"===e.mode?r("add-review-block",{attrs:{showForm:e.showForm,currentReview:e.currentReview,mode:e.mode},on:{updateReview:e.updateReview,closeForm:e.closeForm}}):e._e(),r("ul",{staticClass:"reviews"},[!1===e.showForm?r("li",{staticClass:"reviews__add-work reviews__item"},[r("button-component",{attrs:{type:"square",title:"Добавить отзыв"},on:{click:e.openAddingForm}})],1):e._e(),e._l(e.reviews,(function(t){return r("li",{key:t.id,staticClass:"reviews__item"},[r("card-review",{attrs:{review:t,disableForm:e.disabled,currentReview:e.currentReview},on:{deleteReview:e.removeReview,editReview:e.editReview}})],1)}))],2)],1)])])],1)};i._withStripped=!0;var n=r(1),o=r.n(n),s=r(11),c=r.n(s),a=r(0),u=r.n(a),d=r(90),v=r(84),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:["card-review",{disable:e.currentReview.id===e.review.id&&e.disableForm}]},[r("div",{staticClass:"card-review__user"},[r("avatar",{staticClass:"card-review__user-avatar",attrs:{src:e.cover}}),r("div",{staticClass:"card-review__user-desc"},[r("div",{staticClass:"card-review__user-name"},[e._v(e._s(e.review.author))]),r("div",{staticClass:"card-review__user-occ"},[e._v(e._s(e.review.occ))])])],1),r("div",{staticClass:"card-review__content"},[r("div",{staticClass:"card-review__desc"},[r("p",[e._v(e._s(e.review.text))])])]),r("div",{staticClass:"card-review__buttons"},[r("icon",{attrs:{symbol:"pencil",title:"Править"},on:{click:e.editReview}}),r("icon",{attrs:{symbol:"cross",title:"Удалить"},on:{click:e.deleteReview}})],1)])};l._withStripped=!0;var p=r(118),w=r(86),m={props:{currentReview:Object,review:{type:Object},disableForm:Boolean},components:{avatar:p.a,icon:w.a},data:function(){return{mode:"edit",showForm:!0}},computed:{cover:function(){return"https://webdev-api.loftschool.com/".concat(this.review.photo)}},methods:{deleteReview:function(){this.$emit("deleteReview",this.review.id)},editReview:function(){this.$emit("editReview",this.review,this.mode,this.showForm)}}},f=(r(135),r(10)),h=Object(f.a)(m,l,[],!1,null,"45ac2b0f",null);h.options.__file="src/admin/components/cardReview/cardReview.vue";var _=h.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.showForm?r("div",{staticClass:"add-review-block-component"},[r("card",[r("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v(e._s(this.editFormTitle))]),r("template",{slot:"content"},[r("form",{staticClass:"form"},[r("div",{staticClass:"form__user-photo"},[r("label",{class:["form__user-photo-wrap",{active:e.renderedPhoto}],style:{backgroundImage:"url("+e.renderedPhoto+")"}},[!1===e.activePreview?r("svg",{staticClass:"form_user-icon"},[r("use",{attrs:{href:"sprite.svg#user"}})]):e._e()]),r("button-component",{staticClass:"form__user-photo-desc",attrs:{title:"Добавить фото",typeAttr:"file"},on:{change:e.handlePhotoUpload}})],1),r("div",{staticClass:"form__content"},[r("div",{staticClass:"form__content-top"},[r("div",{staticClass:"form__content-input form__content-input-top"},[r("div",{staticClass:"form__content-input-title"},[e._v("Имя автора")]),r("app-input",{staticClass:"input__component",attrs:{noSidePaddings:""},model:{value:e.review.author,callback:function(t){e.$set(e.review,"author",t)},expression:"review.author"}})],1),r("div",{staticClass:"form__content-input"},[r("div",{staticClass:"form__content-input-title"},[e._v("Титул автора")]),r("app-input",{staticClass:"input__component",attrs:{noSidePaddings:""},model:{value:e.review.occ,callback:function(t){e.$set(e.review,"occ",t)},expression:"review.occ"}})],1)]),r("div",{staticClass:"form__content-bottom"},[r("div",{staticClass:"form__content-input form__content-input-bottom"},[r("div",{staticClass:"form__content-input-title"},[e._v("Отзыв")]),r("app-input",{staticClass:"input__component",attrs:{fieldType:"textarea"},model:{value:e.review.text,callback:function(t){e.$set(e.review,"text",t)},expression:"review.text"}})],1),r("div",{staticClass:"form__btns"},[r("button-component",{attrs:{title:"Отмена",plain:""},on:{click:function(t){return t.preventDefault(),e.cancelAdding(t)}}}),"add"===e.mode?r("button-component",{attrs:{title:"Сохранить"},on:{click:function(t){return t.preventDefault(),e.addReview(t)}}}):e._e(),"edit"===e.mode?r("button-component",{attrs:{title:"Изменить"},on:{click:function(t){return t.preventDefault(),e.editReview(t)}}}):e._e()],1)])])])])],2)],1):e._e()};b._withStripped=!0;var R=r(91),O=r(85),C=r(89);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}var x={components:{card:R.a,appInput:O.a,buttonComponent:v.a},props:{showForm:Boolean,mode:{type:String,default:"add"},currentReview:Object},data:function(){return{renderedPhoto:"",activePreview:!1,review:{photo:{},author:"",occ:"",text:""}}},created:function(){"edit"===this.mode&&this.fillFormWithCurrentReviewData()},watch:{currentReviewWatcher:function(e){"edit"===this.mode&&this.fillFormWithCurrentReviewData()}},computed:{editFormTitle:function(){switch(this.mode){case"edit":return"Редактирование отзыва";case"add":return"Добавление отзыва"}}},methods:{handlePhotoUpload:function(e){var t=this;return o()(u.a.mark((function r(){var i,n;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e.dataTransfer?e.dataTransfer.files[0]:e.target.files[0],t.review.photo=i,r.prev=2,r.next=5,Object(C.b)(i);case 5:n=r.sent,t.renderedPhoto=n,t.activePreview=!0,r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),t.shownTooltip({type:"error",text:r.t0.message});case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},fillFormWithCurrentReviewData:function(){this.review=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},this.currentReview),this.activePreview=!0,this.renderedPhoto=Object(C.a)(this.currentReview.photo)},cancelAdding:function(){this.$emit("closeForm")},addReview:function(){this.$emit("addReview",this.review)},editReview:function(){this.$emit("updateReview",this.review)}}},F=(r(136),Object(f.a)(x,b,[],!1,null,"2b673a0f",null));F.options.__file="src/admin/components/addReviewBlock/addReviewBlock.vue";var k=F.exports,j=r(7);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D={components:{headerComponent:d.a,buttonComponent:v.a,cardReview:_,addReviewBlock:k},data:function(){return{showForm:!1,mode:"normal",currentReview:{},disabled:!1}},computed:P({},Object(j.c)("reviews",{reviews:function(e){return e.data}})),methods:P(P({},Object(j.b)({fetchReviewsAction:"reviews/fetch",addReviewAction:"reviews/addReview",updateReviewAction:"reviews/updateReview",removeReviewAction:"reviews/removeReview",shownTooltip:"tooltips/show"})),{},{openAddingForm:function(){this.showForm=!0,this.mode="add"},addReview:function(e){var t=this;return o()(u.a.mark((function r(){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.addReviewAction(e);case 3:t.showForm=!1,t.shownTooltip({text:"Отзыв добавлен",type:"success"}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),t.shownTooltip({text:"Не удалось добавить отзыв",type:"error"});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},updateReview:function(e){var t=this;return o()(u.a.mark((function r(){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.updateReviewAction(e);case 3:t.mode="normal",t.showForm=!1,t.shownTooltip({text:"Отзыв изменен",type:"success"}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),t.shownTooltip({text:"Не удалось изменить отзыв",type:"error"});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},removeReview:function(e){var t=this;return o()(u.a.mark((function r(){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.closeForm();case 2:return r.prev=2,r.next=5,t.removeReviewAction(e);case 5:t.shownTooltip({text:"Отзыв удален",type:"success"}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),t.shownTooltip({text:"Не удалось удалить отзыв",type:"error"});case 11:case"end":return r.stop()}}),r,null,[[2,8]])})))()},closeForm:function(){this.mode="",this.showForm=!1,this.disableForm()},editReview:function(e,t,r){var i=this;return o()(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.closeForm();case 2:i.mode=t,i.currentReview=e,i.showForm=r,i.disableForm();case 6:case"end":return n.stop()}}),n)})))()},disableForm:function(){var e=this;return o()(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==e.showForm){t.next=6;break}return t.next=3,!0;case 3:return t.abrupt("return",e.disabled=t.sent);case 6:return t.next=8,!1;case 8:return t.abrupt("return",e.disabled=t.sent);case 9:case"end":return t.stop()}}),t)})))()}}),created:function(){this.fetchReviewsAction()}},A=(r(137),Object(f.a)(D,i,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"header"},[t("div",{staticClass:"title"},[this._v("Блок «Отзывы»")])])])}],!1,null,"2c7c3bd3",null));A.options.__file="src/admin/pages/reviews/reviews.vue";t.default=A.exports},89:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var i=r(6),n=function(e){var t=new FileReader;return new Promise((function(r,i){try{t.readAsDataURL(e),t.onloadend=function(){r(t.result)}}catch(e){throw new Error("Ошибка при чтении файла")}}))},o=function(e){var t=i.a.defaults.baseURL;return"".concat(t,"/").concat(e)}}}]);