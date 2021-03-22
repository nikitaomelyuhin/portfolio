<template lang="pug">
  card(slim)
    edit-line(
      :editModeByDefault="empty" 
      slot="title" 
      v-model="categoryTitle"
      @remove="$emit('remove', $event)"
      @approve="$emit('approve', $event)"
      )
    template(slot="content")
      ul.skills(v-if="empty === false")
        li.item(v-for="skill in skills" :key="skill.id")
          skill(
            :skill="skill"
            @remove="$emit('remove-skill', $event)"
            @approve="$emit('edit-skill', $event)"
          )
      .bottom-line
        skill-add-line(
          :blocked="empty"
          @approve="$emit('create-skill', $event)"
        )
</template>

<script>
import card from "../card/card.vue";
import editLine from "../editLine/editLine.vue";
import skill from "../skill/skill.vue";
import skillAddLine from "../skillAddLine/skillAddLine.vue";

export default {
  props: {
    empty: Boolean,
    title: {
      type: String,
      default: ""
    },
    categoryId: Number,
    skills: {
      type: Array,
      default: () => []
    }
  },
  components: {
    card, editLine, skill, skillAddLine
  },
  data() {
    return {
      categoryTitle: this.title,
    }
  },
  methods: {
    setSkill(skill) {
      this.$emit("setNewSkill", {
        skill: skill,
        categoryId: this.categoryId
        })
    }
  }
}
</script>

<style lang="pcss" scoped>
.item {
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
}
.bottom-line {
  padding-top: 70px;
  margin-top: auto;
  padding-left: 25%;
}
</style>