<template lang="pug">
  .card-review
    .card-review__user
      avatar.card-review__user-avatar(:src="cover")
      .card-review__user-desc
        .card-review__user-name {{review.author}}
        .card-review__user-occ {{review.occ}}
    .card-review__content
      .card-review__desc
        p {{review.text}}
      .card-review__buttons
        icon(symbol="pencil" title="Править" @click="editReview")
        icon(symbol="cross" title="Удалить" @click="deleteReview")
</template>

<script>
import avatar from "../avatar/avatar.vue";
import icon from "../icon/icon.vue";

export default {
  props: {
    review: {
      type: Object,
    }
  },
  components: {
    avatar,
    icon
  },
  data() {
    return {
      mode: "edit",
      showForm: true,
    }
  },
  computed: {
    cover() {
      return `https://webdev-api.loftschool.com/${this.review.photo}`
    },
  },
  methods: {
    deleteReview() {
      this.$emit("deleteReview", this.review.id)
    },
    editReview() {
      this.$emit("editReview", this.review, this.mode, this.showForm)
    },
  },
}
</script>

<style lang="postcss" scoped src="./cardReview.pcss">

</style>