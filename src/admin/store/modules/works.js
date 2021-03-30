export default {
  namespaced: true,
  state: {
    works: [],
    currentWork: {},
  },
  mutations: {
    ADD_WORK(state, newWork) {
      state.works.unshift(newWork);
    },
    SET_WORKS(state, works) {
      state.works = works;
    },
    DELETE_WORK(state, workId) {
      state.works = state.works.filter(work => {
        if (work.id !== workId) {
          return work
        }
      })
    },
    SET_CURRENT_WORK: (state, updatedWorkId) => {
      state.currentWork = state.works.filter(
        work => work.id === updatedWorkId
      );
    },
    UPDATE_WORK(state, newWork) {
      state.works = state.works.map(work => {
        return work.id === newWork.id ? newWork : work
      })
    }
  },
  actions: {
    async add({commit}, newWork) {
      const formData = new FormData();

      Object.keys(newWork).forEach(item => {
        formData.append(item, newWork[item]);
      })
      try {
        const { data } = await this.$axios.post("/works", formData);
        commit("ADD_WORK", data);
      } catch (error) {
        console.log("error");
      }
    },
    async delete({commit}, workId) {
      try {
        const { data } = await this.$axios.delete(`/works/${workId}`)
        commit("DELETE_WORK", workId)
      } catch (error) {
        
      }
    },
    async updateWork({ commit }, work) {
      const formData = new FormData();

      Object.keys(work).forEach(item => {
        formData.append(item, work[item]);
      })
      try {
        const response = await this.$axios.post(`/works/${work.id}`, formData);

        commit("UPDATE_WORK", response.data.work);

        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async fetch({commit}) {
      try {
        const { data } = await this.$axios.get("/works/436");
        commit("SET_WORKS", data)
      } catch (error) {
        console.log(error);
      }
    }
  }
}