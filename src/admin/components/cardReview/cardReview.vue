<template lang="pug">
  .card-review
    .card-review__user
      avatar.card-review__user-avatar(:src="review.pic")
      .card-review__user-desc
        .card-review__user-name {{review.name}}
        .card-review__user-occ {{review.occ}}
    .card-review__content
      .card-review__desc
        p {{review.text}}
      .card-review__buttons
        icon(symbol="pencil" title="Править")
        icon(symbol="cross" title="Удалить")
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
  }
}
</script>

<style lang="postcss" scoped src="./cardReview.pcss">

</style>