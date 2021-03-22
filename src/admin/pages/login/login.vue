<template lang="pug">
  .login-page-component
    .content
      form.form(
        @submit.prevent="handleSubmit"
      )
        .form-title Авторизация
        .row
          app-input(
            title="Логин"
            icon="user"
            v-model="user.name"
            :errorMessage="validation.firstError('user.name')"
          )

        .row
          app-input(
            title="Пароль"
            icon="key"
            type="password"
            v-model="user.password"
            :errorMessage="validation.firstError('user.password')"
          )
        .btn
          app-button(
            title="Отправить"
            :disabled="isSumbitDisabled"
          )

</template>

<script>
import appInput from "../../components/input/input.vue";
import appButton from "../../components/button/button.vue";
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";
import $axios from "../../requests.js";
import { mapActions } from "vuex";

export default {
  mixins: [ValidatorMixin],
  validators: {
    "user.name": (value) => {
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password": (value) => {
      return Validator.value(value).required("Введите пароль");
    },
  },
  data: () => ({
    user: {
      name: "",
      password: "",
    },
    isSumbitDisabled: false,
  }),
  methods: {
    ...mapActions({
      shownTooltip: "tooltips/show"
    }),
    async handleSubmit() {
      if((await this.$validate()) === false) return;
      this.isSumbitDisabled = true;

      try {

        const response = await $axios.post("/login", this.user);
        const token = response.data.token;
        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace('/');
        this.shownTooltip({
          text: "Вход выполнен успешно",
          type: "success"
        })

      } catch (error) {
        this.shownTooltip({
          text: error.response.data.error,
          type: "error"
        })
      } finally {
        this.isSumbitDisabled = false;
        }
      },
    },
  components: { appButton, appInput }
}
</script>

<style lang="pcss" scoped src="./login.pcss">

</style>