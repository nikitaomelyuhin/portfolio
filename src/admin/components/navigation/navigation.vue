<template lang="pug">
  .navigation-component
    .container
      ul.list
        li.item(v-for="link in links" :key="link.id")
          router-link(
            :data-text="link.title"
            :to="link.alias"
            exact-active-class="active"
          ).link {{link.title}}

          
</template>

<script>

export default {
  data() {
    return {
      links: [
        {id: "0", title: "Обо мне", alias: "/"},
        {id: "1", title: "Работы", alias: "/works" },
        {id: "2", title: "Отзывы", alias: "/reviews"}
      ]
    }
  },
}
</script>

<style lang="postcss" scoped src="./navigation.pcss"></style>