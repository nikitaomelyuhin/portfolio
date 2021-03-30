<template lang="pug">
  .card-work(ref="currentWork")
    .card-work__preview
      img.card-work__image(:src="cover")
      ul.tags
        li.tag(v-for="(tag, index) in tagsArray" :key="`${tag}${index}`")
          tag(:title="tag").tag-component
    .card-work__content
      h4.card-work__title {{work.title}}
      .card-work__desc
        p {{work.description}}
      a.card-work__link(:href="work.link") {{"http:" + work.link}}
      .card-work__buttons
        icon(symbol="pencil" title="Править" @click="editWork")
        icon(symbol="cross" title="Удалить" @click="deleteWork")
</template>

<script>
import icon from "../icon/icon.vue";
import tag from "../tag/tag.vue";
export default {
  components: {
    icon,
    tag
  },
  props: {
    works: Array,
    work: {
      type: Object,
    },
  },
  data() {
    return {
      mode: "edit",
      showForm: true,
    }
  },
  methods: {
    deleteWork() {
      return this.$emit("deleteWork", this.work.id)
    },
    async editWork() {
      await document.querySelectorAll('.card-work').forEach(work => {
        work.classList.remove("disable")
      })
      // document.querySelector(".card-work").classList.add("disable")
      this.$refs.currentWork.classList.add("disable")
      return this.$emit("editWork", this.work, this.mode, this.showForm)
    }
  },
  computed: {
    cover() {
      return `https://webdev-api.loftschool.com/${this.work.photo}`
    },
    tagsArray() {
      return this.work.techs.trim().split(',')
    }
  }
}
</script>

<style lang="postcss" scoped src="./cardWork.pcss">

</style>