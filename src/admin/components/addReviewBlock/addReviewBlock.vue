<template lang="pug">
  .add-review-block-component(v-if="showForm")
    card
      .title(slot="title") {{this.editFormTitle}}
      template(slot="content")
        form.form
          .form__user-photo
            label(
              :style="{backgroundImage: `url(${renderedPhoto})`}"
              :class="['form__user-photo-wrap', {active: renderedPhoto}]"
            )
              svg.form_user-icon(v-if="activePreview === false")
                use(href="sprite.svg#user")
            button-component(
              title="Добавить фото"
              typeAttr="file"
              @change="handlePhotoUpload"
              ).form__user-photo-desc
          .form__content
            .form__content-top
              .form__content-input.form__content-input-top
                .form__content-input-title Имя автора
                app-input(
                  v-model="review.author"
                  noSidePaddings
                  )
              .form__content-input  
                .form__content-input-title Титул автора
                app-input(
                  v-model="review.occ"
                  noSidePaddings
                  )
            .form__content-bottom
              .form__content-input.form__content-input-bottom
                .form__content-input-title Отзыв
                app-input(
                  v-model="review.text"
                  fieldType="textarea"
                  )
              .form__btns
                button-component(
                  title="Отмена" plain
                  @click.prevent="cancelAdding"
                  )
                button-component(
                  v-if="mode === 'add'"
                  title="Сохранить" 
                  @click.prevent="addReview"
                  )
                button-component(
                  v-if="mode === 'edit'"
                  title="Изменить" 
                  @click.prevent="editReview"
                  )
              
</template>

<script>
import card from "../card/card.vue";
import input from "../input/input.vue";
import button from "../button/button.vue";
import { renderer, getAbsoluteImgPath }  from "../../helpers/pictures.js";

export default {
  components: {
    card,
    appInput: input,
    buttonComponent: button
  },
  props: {
    showForm: Boolean,
    mode: {
      type: String,
      default: "add",
    },
    currentReview: Object,
  },
  data() {
    return {
      renderedPhoto: "",
      activePreview: false,
      review: {
        photo: {},
        author: "",
        occ: "",
        text: ""
      }
    }
  },
  created() {
    if (this.mode === "edit") {
      this.fillFormWithCurrentReviewData();
    }
  },
  watch: {
    currentReviewWatcher(value) {
      if (this.mode === "edit") {
        this.fillFormWithCurrentReviewData();
      }
    },
  },
  computed: {
    editFormTitle() {
      switch (this.mode) {
        case "edit":
          return "Редактирование отзыва";
        case "add":
          return "Добавление отзыва";
      }
    },
  },
  methods: {
    async handlePhotoUpload(e) {
      const file = e.dataTransfer
      ? e.dataTransfer.files[0]
      : e.target.files[0];

        this.review.photo = file;
      try {
        const rendererResult = await renderer(file);
        this.renderedPhoto = rendererResult;
        this.activePreview = true;
      } catch (error) {
        this.shownTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    fillFormWithCurrentReviewData() {
      this.review = { ...this.currentReview };
      this.activePreview = true;
      this.renderedPhoto = getAbsoluteImgPath(this.currentReview.photo);
    },
    cancelAdding() {
      this.$emit("closeForm");
    },
    addReview() {
      this.$emit("addReview", this.review)
    },
    editReview() {
      this.$emit("updateReview", this.review)
    },
  }
}
</script>

<style lang="postcss" scoped src="./addReviewBlock.pcss">

</style>