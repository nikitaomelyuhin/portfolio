<template lang="pug">
  .user-component
    avatar(size="2.9" :src="userPic")
    .user-name Омелюхин Никита
</template>

<script>

import avatar from "../avatar/avatar.vue";

export default {
  components: {
    avatar,
  },
  props: {
    
  },
  computed: {
    userPic() {
      return require("../../../images/content/avatar.jpg").default
    }
  }
}
</script>

<style lang="postcss" scoped src="./user.pcss"></style>