<template lang="pug">
  .add-work-block-component(v-if="showForm")
    card
      .title(slot="title") {{this.editFormTitle}}
      template(slot="content")
        form.form(
        )
          .form__load
            label(
              :style="{backgroundImage: `url(${renderedPhoto})`}"
              :class="['uploader', {active: renderedPhoto}, {hovered: hovered}]"
              @dragover="handleDragOver"
              @dragleave="hovered = false"
              @drop.prevent="handlePhotoUpload"
              @change="handlePhotoUpload"
            )
              .uploader__title Перетащите или загрузите для загрузки изображения
              button-component(
                title="Загрузить"
                typeAttr="file"
                @change="handlePhotoUpload"
                ).uploader__btn
          .form__inputs
            .form__inputs-wrap
              .form__inputs-title Название
              app-input(v-model="work.title" noSidePaddings)
            .form__inputs-wrap
              .form__inputs-title Ссылка
              app-input(v-model="work.link" noSidePaddings)
            .form__inputs-wrap
              .form__inputs-title Описание
              app-input(v-model="work.description" fieldType="textarea")
            .form__inputs-wrap
              .form__inputs-title Добавление тэга
              app-input(
                v-model="work.techs"
                noSidePaddings
                )
              ul.tags
                li.tag(
                  v-for="(tag, index) in tagsArray"
                  v-if="tag.trim()"
                  :key="`${tag}${index}`"
                )
                  tag(
                    interactive
                    :title="tag"
                    @click="removeTag(tag)"
                    )
            .form__btns
              button-component(title="Отмена" plain)
              button-component(
                title="Сохранить" 
                @click.prevent="addNewWork"
                )


              
</template>

<script>
import card from "../card/card.vue";
import button from "../button/button.vue";
import input from "../input/input.vue";
import tag from "../tag/tag.vue";
import { mapActions, mapState } from "vuex";
import { renderer, getAbsoluteImgPath }  from "../../helpers/pictures.js";
import { Validator } from "simple-vue-validator";


export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "work.title": value => {
      return Validator.value(value).required("Заполните название");
    },
    "work.techs": value => {
      return Validator.value(value).required("Заполните технологии");
    },
    "work.link": value => {
      return Validator.value(value).required("Заполните ссылку");
    },
    "work.description": value => {
      return Validator.value(value).required("Заполните описание");
    },
    "work.photo": value => {
      return Validator.value(value).required("Вставьте файл");
    }
  },
  components: {
    card,
    buttonComponent: button,
    appInput: input,
    tag
  },
  props: {
    mode: {
      type: String,
      default: "add",
      validator: value => ["add", "edit"].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    currentWork: Object,
    showForm: Boolean
  },
  data() {
    return {
      hovered: false,
      disableForm: this.disabled,
      renderedPhoto: "",
      work: {
        title: "",
        link: "",
        description: "",
        techs: "",
        photo: {},
      },
    }
  },
  computed: {
    tagsArray() {
      return this.work.techs.split(",")
    },
    workPhotoUrl() {
      return `url(${this.renderedPhoto})`;
    },
    editFormTitle() {
      switch (this.mode) {
        case "edit":
          return "Редактирование работы";
        case "add":
          return "Добавление работы";
      }
    },
  },
  created() {
    if (this.mode === "edit") {
      this.fillFormWithCurrentWorkData();
    }
  },
  watch: {
    currentWorkWatcher(value) {
      if (this.mode === "edit") {
        this.fillFormWithCurrentWorkData();
      }
    },
    mode(value) {
      if (value === "add") {
        this.clearFormFields();
      }
    }
  },
  methods: {
    async editWork() {
      if ((await this.$validate()) === false) return;
      this.disableForm = true;
      
    },
    async addNewWork() {
      if ((await this.$validate()) === false) return;
      this.disableForm = true;
      // try {
      //   await this.addNewWorkAction(this.work);
      //   this.clearFormFields();
      //   this.shownTooltip({
      //     text: "Работа создана",
      //     type: "success"
      //   });
      // } catch (error) {
      //   this.shownTooltip({
      //     type: "error",
      //     text: error.message
      //   });
      // } finally {
      //   this.disableForm = false;
      //   this.validation.reset();
      // }
    },
    removeTag(tag) {
      const tags = [...this.tagsArray];
      const tagNdx = tags.indexOf(tag);

      if(tagNdx < 0) return;
      tags.splice(tagNdx, 1);
      this.newWork.techs = tags.join(", ");
    },
    handleClick(newWork) {
      this.$emit("saveWork", newWork);
    },

    handleDragOver(e) {
      e.preventDefault();
      this.hovered = true;
    },
    cancelAdding() {
      this.clearFormFields();
      this.$emit("closeForm");
    },
    clearFormFields() {
      this.work = {};
      this.renderedPhoto = "";
    },
    fillFormWithCurrentWorkData() {
      this.work = { ...this.currentWork };
      this.renderedPhoto = getAbsoluteImgPath(this.currentWork.photo);
      console.log(this.work);

    },
    async handlePhotoUpload(e) {
      const file = e.dataTransfer
      ? e.dataTransfer.files[0]
      : e.target.files[0];
      this.hovered = false;

        this.work.photo = file;
      try {
        const rendererResult = await renderer(file);
        this.renderedPhoto = rendererResult;
      } catch (error) {
        this.shownTooltip({
          type: "error",
          text: error.message
        });
      }
    }  
  }
}
</script>

<style lang="postcss" scoped src="./addWorkBlock.pcss">

</style>