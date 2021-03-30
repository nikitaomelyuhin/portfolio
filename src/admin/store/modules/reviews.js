export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    ADD_REVIEW(state, newReview) {
      state.data.unshift(newReview);
    },
    SET_REVIEWS(state, reviews) {
      state.data = reviews;
    },
    REMOVE_REVIEW(state, reviewId) {
      state.data = state.data.filter(review => {
        if (review.id !== reviewId) {
          return review
        }
      })
    },
    UPDATE_REVIEW(state, newReview) {
      state.data = state.data.map(review => {
        return review.id === newReview.id ? newReview : review
      })
    },
  },
  actions: {
    async addReview({commit}, review) {
      const formData = new FormData();

      Object.keys(review).forEach(item => {
        formData.append(item, review[item]);
      })
      try {
        const { data } = await this.$axios.post("/reviews", formData);
        commit("ADD_REVIEW", data)
      } catch (error) {
        console.log(error);
      }
    },
    async removeReview({commit}, reviewId) {
      try {
        const { data } = await this.$axios.delete(`/reviews/${reviewId}`)
        commit("REMOVE_REVIEW", reviewId)
      } catch (error) {
        console.log(error);
      }
    },
    async updateReview({ commit }, review) {
      const formData = new FormData();

      Object.keys(review).forEach(item => {
        formData.append(item, review[item]);
      })
      try {
        const response = await this.$axios.post(`/reviews/${review.id}`, formData);

        commit("UPDATE_REVIEW", response.data.review);

        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async fetch({commit}) {
      try {
        const { data } = await this.$axios.get("/reviews/436");
        commit("SET_REVIEWS", data)
      } catch (error) {
        console.log(error);
      }
    }
  }
}