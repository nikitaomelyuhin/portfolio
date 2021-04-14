<template lang="pug">
  .works-component
    header-component
    .page-content
      .container
        .header
          .title Блок «Работы»
      .container
        .works-container
          add-work-block(
            v-if="mode === 'add'"
            :showForm="showForm"
            @addWork="addWork"
            @closeForm="closeForm"
          )
          add-work-block(
            v-if="mode === 'edit'"
            :showForm="showForm"
            :currentWork="currentWork"
            :mode="mode"
            @updateWork="updateWork"
            @closeForm="closeForm"
          )
          ul.works
            li.works__add-work.works__item(
              v-if="showForm === false"
            )
              button-component(
                type="square" 
                @click="openAddingForm"
              )
            li.works__item(
              v-for="work in works" 
              :key="work.id")
              card-work(
                :work="work"
                @deleteWork="deleteWork"
                @editWork="editWork"
                :disableForm="disabled"
                :currentWork="currentWork"
                )
</template>

<script>
import headerComponent from "../../components/header/header.vue";
import cardWork from "../../components/cardWork/cardWork.vue";
import button from "../../components/button/button.vue";
import addWorkBlock from "../../components/addWorkBlock/addWorkBlock.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    headerComponent,
    cardWork,
    buttonComponent: button,
    addWorkBlock
  },
  data() {
    return {
      showForm: false,
      mode: "normal",
      currentWork: {},
      disabled: false,
    }
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    }),
    
  },
  watch: {
    disableForm() {
      if (this.showForm === true) {
        return this.disabled = true
      } else {
        return this.disabled = false
      }
    }
  },
  methods: {
    ...mapActions({
      addNewWork: "works/add",
      fetchWorksAction: "works/fetch",
      deleteWorkAction: "works/delete",
      updateWorkAction: "works/updateWork",
      shownTooltip: "tooltips/show"
    }),
    openAddingForm() {
      this.showForm = true;
      this.mode = "add";
    },
    async addWork(newWork) {
      try {
        await this.addNewWork(newWork);
        this.showForm = false;
        newWork = {};
        this.mode = "normal";
        this.shownTooltip({
          text: "Работа добавлена",
          type: "success"
        })
      } catch (error) {
        this.shownTooltip({
          text: "Не удалось добавить работу",
          type: "error"
        })
      }
    },
    async updateWork(modifiedWork) {
      try {
        await this.updateWorkAction(modifiedWork);
        this.mode = "normal";
        this.showForm = false;
        this.disableForm();
        this.shownTooltip({
          text: "Работа изменена",
          type: "success"
        })
      } catch (error) {
        this.shownTooltip({
          text: "Не удалось изменить работу",
          type: "error"
        })
      }
    },
    async deleteWork(workId) {
      await this.closeForm();
      try {
        await this.deleteWorkAction(workId);
        this.shownTooltip({
          text: "Работа удалена",
          type: "success"
        })
      } catch (error) {
        this.shownTooltip({
          text: "Не удалось удалить работу",
          type: "error"
        })
      }
    },
    async closeForm(e) {
      this.mode = "";
      this.showForm = false;
      this.disableForm();
    },
    async editWork(currentWork, mode, showForm) {
      window.scrollTo(pageXOffset, 150);
      await this.closeForm();
      this.mode = mode;
      this.currentWork = currentWork;
      this.showForm = showForm;
      this.disableForm();
    },
    async disableForm() {
      if (this.showForm === true) {
        return this.disabled = await true
      } else {
        return this.disabled = await false
      }
    }
  },
  created() {
    this.fetchWorksAction();
  },
}
</script>

<style lang="postcss" scoped src="./works.pcss">

</style>