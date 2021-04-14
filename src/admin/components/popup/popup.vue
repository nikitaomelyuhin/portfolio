<template lang="pug">
  .popup
    .popup__wrapper
      .popup__text Вы действительно хотите удалить "{{title}}"?
      .popup__btns
        button(type="button" @click.prevent="cancel").popup__btn Нет
        button(type="button" @click.prevent="confirm").popup__btn.popup__btn--approve Да
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    confirm() {
      this.$emit("confirmDeletion")
    },
    cancel() {
      this.$emit("cancelDeletion")
    }
  },
}
</script>

<style lang="postcss" scoped src="./popup.pcss">

</style>