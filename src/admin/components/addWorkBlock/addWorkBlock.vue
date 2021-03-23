<template lang="pug">
  .add-work-block-component
    card
      .title(slot="title") Редактирование работы
      template(slot="content")
        form.form
          .form__load
            label
              input(type="file").input-hidden
              .form__load-input
                .form__load-desc Перетащите или загрузите для загрузки изображения
                button-component(title="Загрузить").form__load-btn
          .form__inputs
            .form__inputs-wrap
              .form__inputs-title Название
              app-input(noSidePaddings)
            .form__inputs-wrap
              .form__inputs-title Ссылка
              app-input(noSidePaddings)
            .form__inputs-wrap
              .form__inputs-title Описание
              app-input(fieldType="textarea")
            .form__inputs-wrap
              .form__inputs-title Добавление тэга
              app-input(noSidePaddings)
            .form__btns
              button-component(title="Отмена" plain)
              button-component(title="Сохранить")


              
</template>

<script>
import card from "../card/card.vue";
import button from "../button/button.vue";
import input from "../input/input.vue";

export default {
  components: {
    card,
    buttonComponent: button,
    appInput: input
  }
}
</script>

<style lang="postcss" scoped src="./addWorkBlock.pcss">

</style>