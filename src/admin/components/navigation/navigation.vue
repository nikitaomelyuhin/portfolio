<template lang="pug">
  .navigation-component
    .container
      ul.list
        li.item(v-for="link in links" :key="link.id")
          a(
            :href="`/admin#/${link.alias}`" 
            :class="['link', {active: link.active}]"
            ) {{link.title}}
          
</template>

<script>

  const links = [
    {id: "0", title: "Обо мне", alias: "", active: true},
    {id: "1", title: "Работы", alias: "works", active: false},
    {id: "2", title: "Отзывы", alias: "reviews", active: false}
  ];

export default {
  props: {
    
  },
  data() {
    return {
      links
    }
  },
  created() {
    console.log(this.$router.currentRoute.fullPath);
    switch (this.$router.currentRoute.fullPath) {
      case "/works":
        this.links.forEach(item => {
          item.active = false;
        })
        this.links[1].active = true;
        break;
    
      case "/":
        this.links.forEach(item => {
          item.active = false;
        })
        this.links[0].active = true;
        
        break;
    
      case "/reviews":
        this.links.forEach(item => {
          item.active = false;
        })
        this.links[2].active = true;
        
        break;
    
      default:
        break;
    }
  }
}
</script>

<style lang="postcss" scoped src="./navigation.pcss"></style>