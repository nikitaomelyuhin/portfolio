<template lang="pug">
  .works-component
    header-component
    .page-content
      .container
        .header
          .title Блок «Работы»
      .works-container
        .container
          add-work-block
          ul.works
            li.works__add-work.works__item(v-if="addMode === false")
              button-component(type="square")
            li.works__item(v-for="work in works")
              card-work(:work="work")
</template>

<script>
import headerComponent from "../../components/header/header.vue";
import cardWork from "../../components/cardWork/cardWork.vue";
import button from "../../components/button/button.vue";
import addWorkBlock from "../../components/addWorkBlock/addWorkBlock.vue";
export default {
  components: {
    headerComponent,
    cardWork,
    buttonComponent: button,
    addWorkBlock
  },
  data() {
    return {
      works: [],
      addMode: false,
    }
  },
  methods: {
    requirePhotos() {
      this.works = this.works.map(work => {
        work.photo = require(`../../../images/content/${work.photo}`).default;
        return work;
      })
    }
  },
  created() {
    this.works = require("../../../data/works.json");
  },
  mounted() {
    this.requirePhotos();
  }
}
</script>

<style lang="postcss" scoped src="./works.pcss">

</style>