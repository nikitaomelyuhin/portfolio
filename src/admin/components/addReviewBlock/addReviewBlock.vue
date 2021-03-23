<template lang="pug">
  .add-review-block-component
    card
      .title(slot="title") Редактирование отзыва
      template(slot="content")
        form.form
          .form__user-photo
            .form__user-photo-wrap
            a.form__user-photo-desc Добавить фото
          .form__content
            .form__content-top
              .form__content-input.form__content-input-top
                .form__content-input-title Имя автора
                app-input(noSidePaddings)
              .form__content-input  
                .form__content-input-title Титул автора
                app-input(noSidePaddings)
            .form__content-bottom
              .form__content-input.form__content-input-bottom
                .form__content-input-title Отзыв
                app-input(fieldType="textarea")
              .form__btns
                button-component(title="Отмена" plain)
                button-component(title="Сохранить")
              



</template>

<script>
import card from "../card/card.vue";
import input from "../input/input.vue";
import button from "../button/button.vue";

export default {
  components: {
    card,
    appInput: input,
    buttonComponent: button
  }
}
</script>

<style lang="postcss" scoped src="./addReviewBlock.pcss">

</style>