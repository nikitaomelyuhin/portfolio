export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => (state.data = categories),
    ADD_CATEGORY: (state, category) => state.data.unshift(category),
    DELETE_CATEGORY: (state, categoryId) => {
      state.data = state.data.filter(category => {
        if (categoryId !== category.id) {
          return category
        }
      })
    },
    EDIT_CATEGORY: (state, category) => {
      console.log(category);
      state.data = state.data.filter(categoryItem => {
        if (categoryItem.id === category.id) {
          categoryItem.category = category.category;
          return categoryItem;
        } else {
          return categoryItem
        }
      })
    },

    ADD_SKILL: (state, newSkill) => {
      state.data = state.data.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill)
        }
        return category
      })
    },
    REMOVE_SKILL: (state, skillToRemove) => {
      state.data = state.data.map(category => {
        if (category.id === skillToRemove.category) {
          category.skills = category.skills.filter(skill => skill.id !== skillToRemove.id)
        }
        return category;
      })
    },
    EDIT_SKILL: (state, skillToEdit) => {
      const editSkillInCategory = category => {
        category.skills = category.skills.map(skill => {
          return skill.id === skillToEdit.id ? skillToEdit : skill
        });
      }
      const findCategory = category => {
        if (category.id === skillToEdit.category) {
          editSkillInCategory(category);
        }
        return category;
      }
      state.data = state.data.map(findCategory);
    },

  },
  actions: {
    async edit({commit}, category) {
      try {
        const { data } = await this.$axios.post(`/categories/${category.id}`, category)
        commit("EDIT_CATEGORY", data.category)
      } catch (error) {
        throw new Error("Ошибка")
      }
    },
    async create({commit}, title) {
      try {
        const { data } = await this.$axios.post('/categories', { title });
        commit("ADD_CATEGORY", data)
      } catch (error) {
        throw new Error("Ошибка")
      }
    },
    async fetch({commit}) {
      try {
        const { data } = await this.$axios.get('/categories/436');
        commit("SET_CATEGORIES", data)
      } catch (error) {
        console.log(error);
      }
    },
    async delete({commit}, categoryId) {
      try {
        const { data } = await this.$axios.delete(`/categories/${categoryId}`);
        commit("DELETE_CATEGORY", categoryId)
      } catch (error) {
        console.log("Какая то ошибка при удалении");
      }
    },
  }
}