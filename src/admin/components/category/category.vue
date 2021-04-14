<template lang="pug">
  card(slim)
    edit-line(
      :editModeByDefault="empty" 
      slot="title" 
      v-model="categoryTitle"
      @remove="showPopup"
      @approve="approveCategory"
      @input="getInputValue"
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
      popup(
        v-if="isShownPopup"
        :title="categoryTitle"
        @confirmDeletion="remove"
        @cancelDeletion="isShownPopup = false"
      )
</template>

<script>
import card from "../card/card.vue";
import editLine from "../editLine/editLine.vue";
import skill from "../skill/skill.vue";
import popup from "../../components/popup/popup.vue";
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
    },
  },
  components: {
    card, editLine, skill, skillAddLine, popup
  },
  data() {
    return {
      categoryTitle: this.title,
      categoryObj: this.category,
      isShownPopup: false,
      isShownForm: false,
    }
  },
  methods: {
    setSkill(skill) {
      this.$emit("setNewSkill", {
        skill: skill,
        categoryId: this.categoryId
        })
    },
    approveCategory(value) {
      this.$emit("approve", value)
    },
    getInputValue(value) {
      this.$emit("inputValue", value)
    },
    remove($event) {
      this.$emit('remove', $event);
      this.isShownPopup = false;
    },
    showPopup() {
      if (this.categoryTitle === "") {
        return this.$emit("isShownForm", this.isShownForm)
      }
      this.isShownPopup = true;
    }
  }
}
</script>

<style lang="pcss" src="./category.pcss" scoped>

</style>