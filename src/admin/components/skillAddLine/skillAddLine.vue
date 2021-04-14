<template lang="pug">
  div(:class="['skill-add-line-component', {blocked: blocked}]")
    .title
      app-input(
        placeholder="Новый навык"
        :errorMessage="validation.firstError('skill.title')"
        v-model="skill.title"
      )
    .percent
      app-input(
        v-model="skill.percent"
        :errorMessage="validation.firstError('skill.percent')"
        type="number" min="0" max="100" maxlength="3"
      )
    .button
      round-button(
        type="round"
        @click="handleClick"
      )
</template>

<script>
  import input from "../input/input.vue"
  import button from "../button/button.vue"
  import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";

  export default {
    mixins: [ValidatorMixin],
    validators: {
      "skill.title": value => {
        return Validator.value(value).required("Не может быть пустым")
      },
      "skill.percent": value => {
        return Validator.value(value)
          .integer("Должно быть числом")
          .between(0, 100, "Некорректное значение")
          .required("Не может быть пустым")
      }
    },
    components: {
      appInput: input,
      roundButton: button
    },
    data() {
      return {
        skill: {
          title: "",
          percent: "",
        }
      }
    },
    props: {
      blocked: Boolean
    },
    methods: {
      async handleClick() {
        if (await this.$validate() === false) return
        this.$emit('approve', this.skill)
        this.validation.reset();
      }
    }
  };
</script>

<style lang="pcss" scoped src="./skillAddLine.pcss">

</style>