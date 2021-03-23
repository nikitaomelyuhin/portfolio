<template lang="pug">
  .card-work
    .card-work__preview
      img.card-work__image(:src="work.photo")
    .card-work__content
      h4.card-work__title {{work.title}}
      .card-work__desc
        p {{work.desc}}
      a.card-work__link(:src="work.link") {{"http:" + work.link}}
      .card-work__buttons
        icon(symbol="pencil" title="Править")
        icon(symbol="cross" title="Удалить")
</template>

<script>
import icon from "../icon/icon.vue";
export default {
  props: {
    work: {
      type: Object,
    }
  },
  components: {
    icon
  }
}
</script>

<style lang="postcss" scoped src="./cardWork.pcss">

</style>