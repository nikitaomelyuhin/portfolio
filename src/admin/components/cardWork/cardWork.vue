<template lang="pug">
  div(:class="['card-work', {disable: (currentWork.id === work.id) && disableForm}]")
    .card-work__preview
      img.card-work__image(:src="cover")
      ul.tags
        li.tag(v-for="(tag, index) in tagsArray" :key="`${tag}${index}`")
          tag(:title="tag").tag-component
    .card-work__content
      h4.card-work__title {{work.title}}
      .card-work__desc {{work.description}}
      a.card-work__link(:href="work.link") {{work.link}}
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
    currentWork: Object,
    work: {
      type: Object,
    },
    disableForm: Boolean,
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
      return this.$emit("editWork", this.work, this.mode, this.showForm)
    }
  },
  computed: {
    cover() {
      return `https://webdev-api.loftschool.com/${this.work.photo}`
    },
    tagsArray() {
      return this.work.techs.trim().split(',')
    },
  },
}
</script>

<style lang="postcss" scoped src="./cardWork.pcss">

</style>