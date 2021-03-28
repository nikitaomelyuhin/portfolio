<template lang="pug">
  .works-component
    header-component
    .page-content
      .container
        .header
          .title Блок «Работы»
      .works-container
        .container
          add-work-block(
            v-if="mode === 'add'"
            :showForm="showForm"
          )
          add-work-block(
            v-if="mode === 'edit'"
            :showForm="showForm"
            :currentWork="currentWork"
            :mode="mode"
          )
          ul.works
            li.works__add-work.works__item
              button-component(type="square" @click="openAddingForm")
            li.works__item(v-for="work in works" :key="work.id")
              card-work(
                :work="work"
                @deleteWork="deleteWork"
                @editWork="editWork"
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
      mode: "add",
      currentWork: {}
    }
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    }),
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
      // this.showForm = true;
      this.mode = "add";
    },
    // async handleSubmit(newWork) {
    //   try {
    //     await this.addNewWork(newWork);
    //     this.shownTooltip({
    //       text: "Работа добавлена",
    //       type: "success"
    //     })
    //   } catch (error) {
    //     this.shownTooltip({
    //       text: "Не удалось добавить работу",
    //       type: "error"
    //     })
    //   }
    //   newWork.title = '';
    //   newWork.link = '';
    //   newWork.description = '';
    //   newWork.techs = '';
    //   newWork.photo = {};
    //   newWork.preview = '';
    // },
    async deleteWork(workId) {
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
    editWork(currentWork, mode, showForm) {
      this.mode = mode;
      this.currentWork = currentWork;
      this.showForm = showForm;

    },
  },
  created() {
    this.fetchWorksAction();
  },
}
</script>

<style lang="postcss" scoped src="./works.pcss">

</style>