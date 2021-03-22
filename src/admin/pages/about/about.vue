<template lang="pug">
.about-page-component
  header-component
  .page-content
    .container(v-if="categories.length")
      .header
        .title Блок «Обо мне»
        round-btn(
          type="iconed",
          v-if="categoryOptions.emptyCatIsShown === false",
          @click="categoryOptions.emptyCatIsShown = true"
        )
      ul.skills
        li.item(v-if="categoryOptions.emptyCatIsShown")
          category(
            @remove="deleteCategory"
            @approve="createCategory", empty
            )
        li.item(v-for="category in categories", :key="category.id")
          category(
            @remove="deleteCategory(category.id)"
            @approve="editCategory(category)"
            :categoryId="category.id"
            :title="category.category"
            :skills="category.skills"
            @create-skill="createSkill($event, category.id)"
            @edit-skill="editSkill"
            @remove-skill="removeSkill"
          )
    .container(v-else) loading...
</template>

<script>
import button from "../../components/button/button.vue";
import category from "../../components/category/category.vue";
import headerComponent from "../../components/header/header.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    roundBtn: button,
    category,
    headerComponent
  },
  data() {
    return {
      categoryOptions: {
        emptyCatIsShown: false,
        categoryTitle: "",
        removedCategory: true
      }
    };
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.data
    })
  },
  methods: {
    ...mapActions({
      createCategoryAction: "categories/create",
      fetchCategoryAction: "categories/fetch",
      deleteCategoryAction: "categories/delete",
      editCategoryAction: "categories/edit",
      addSkillAction: "skills/add",
      removeSkillAction: "skills/remove",
      editSkillAction: "skills/edit",
      shownTooltip: "tooltips/show"
    }),
    async createSkill(skill, categoryId) {
      try {
        const newSkill = {
        ...skill,
        category: categoryId
      }
      await this.addSkillAction(newSkill);
      this.shownTooltip({
          text: "Скилл добавлен",
          type: "success"
        })
      skill.title = "";
      skill.percent = "";
      } catch (error) {
        this.shownTooltip({
          text: error.response.data.error,
          type: "error"
        })
      }
      
    },

    async removeSkill(skill) {
      try {
        await this.removeSkillAction(skill);
        this.shownTooltip({
          text: "Скилл удален",
          type: "success"
        })
      } catch (error) {
        this.shownTooltip({
          text: error.response.data.error,
          type: "error"
      })
    }
    },
    async editSkill(skill) {
      try {
        await this.editSkillAction(skill);
        this.shownTooltip({
          text: "Скилл изменен",
          type: "success"
        })
      } catch (error) {
        this.shownTooltip({
          text: error.response.data.error,
          type: "error"
        })
      }
      
    },
    async createCategory(categoryTitle) {
      try {
        await this.createCategoryAction(categoryTitle);
        this.categoryOptions.emptyCatIsShown = false;
        this.shownTooltip({
          text: "Категория создана успешно",
          type: "success"
        })
      } catch (error) {
        this.shownTooltip({
          text: error.response.data.error,
          type: "error"
        })
      }
    },
    async deleteCategory(categoryId) {
      console.log(categoryId);
      try {
        await this.deleteCategoryAction(categoryId);
        this.shownTooltip({
          text: "Категория удалена",
          type: "success"
        })
      } catch (error) {
        console.log("deleteError");
      }
    },
    async editCategory(category) {
      console.log(category);
      try {
        await this.editCategoryAction(category);
      } catch (error) {
        console.log("editError");
      }
    },
  },
  created() {
    this.fetchCategoryAction();
  },
};
</script>

<style lang="pcss" scoped src="./about.pcss">
  
</style>