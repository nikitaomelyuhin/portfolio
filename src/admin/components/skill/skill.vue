<template lang="pug">
  .skill-component(v-if="editmode === false")
    .title {{skill.title}}
    .percent {{skill.percent}}
    .buttons
      icon.btn(symbol="pencil" grayscale @click="editmode = true")
      icon.btn(symbol="trash" grayscale @click="$emit('remove', currentSkill)")
  .skill-component(v-else)
    .title
      app-input(noSidePaddings v-model="currentSkill.title")
    .percent
      app-input(type="number" min="0" max="100" maxlength="3" v-model="currentSkill.percent")
    .buttons
      icon.btn(symbol="tick" @click="approve")
      icon.btn(symbol="cross" @click="editmode = false")
</template>


<script>
  import icon from "../icon/icon.vue"
  import input from "../input/input.vue"

  export default {
    props: {
      skill: {
        type: Object,
        default: () => {},
        required: true
      },
    },
    data() {
      return {
        editmode: false,
        currentSkill: {
          id: this.skill.id,
          title: this.skill.title,
          percent: this.skill.percent,
          category: this.skill.category
        }
      }
    },
    components: {
      icon,
      appInput: input
    },
    methods: {
      approve() {
        this.$emit("approve", this.currentSkill);
        this.editmode = false;
      }
    }
  }
</script>

<style lang="pcss" scoped src="./skill.pcss"></style>