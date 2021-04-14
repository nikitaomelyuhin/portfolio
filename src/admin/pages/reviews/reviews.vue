<template lang="pug">
  .reviews-component
    header-component
    .page-content
      .container
        .header
          .title Блок «Отзывы»
      .container
        .reviews-container
          add-review-block(
            v-if="mode === 'add'"
            :showForm="showForm"
            @addReview="addReview"
            @closeForm="closeForm"
          )
          add-review-block(
            v-if="mode === 'edit'"
            :showForm="showForm"
            @updateReview="updateReview"
            :currentReview="currentReview"
            :mode="mode"
            @closeForm="closeForm"
          )
          ul.reviews
            li.reviews__add-work.reviews__item(
              v-if="showForm === false"
            )
              button-component(
                type="square" 
                title="Добавить отзыв"
                @click="openAddingForm"
                )
            li.reviews__item(
              v-for="review in reviews" 
              :key="review.id")
              card-review(
                :review="review"
                @deleteReview="removeReview"
                @editReview="editReview"
                :disableForm="disabled"
                :currentReview="currentReview"
                )

</template>

<script>
import header from "../../components/header/header.vue";
import button from "../../components/button/button.vue";
import cardReview from "../../components/cardReview/cardReview.vue";
import addReviewBlock from "../../components/addReviewBlock/addReviewBlock.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    headerComponent: header,
    buttonComponent: button,
    cardReview,
    addReviewBlock
  },
  data() {
    return {
      showForm: false,
      mode: "normal",
      currentReview: {},
      disabled: false,
    }
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.data
    }),
  },
  methods: {
    ...mapActions({
      fetchReviewsAction: "reviews/fetch",
      addReviewAction: "reviews/addReview",
      updateReviewAction: "reviews/updateReview",
      removeReviewAction: "reviews/removeReview",
      shownTooltip: "tooltips/show"
    }),
    openAddingForm() {
      this.showForm = true;
      this.mode = "add";
    },
    async addReview(review) {
      try {
        await this.addReviewAction(review);
        this.showForm = false;
        this.shownTooltip({
          text: "Отзыв добавлен",
          type: "success"
        })
      } catch (error) {
        this.shownTooltip({
          text: "Не удалось добавить отзыв",
          type: "error"
        })
      }
    },
    async updateReview(modifiedReview) {
      try {
        await this.updateReviewAction(modifiedReview);
        this.mode = "normal";
        this.showForm = false;
        this.shownTooltip({
          text: "Отзыв изменен",
          type: "success"
        })
      } catch (error) {
        this.shownTooltip({
          text: "Не удалось изменить отзыв",
          type: "error"
        })
      }
    },
    async removeReview(reviewId) {
      await this.closeForm();
      try {
        await this.removeReviewAction(reviewId)
        this.shownTooltip({
          text: "Отзыв удален",
          type: "success"
        })
      } catch (error) {
        this.shownTooltip({
          text: "Не удалось удалить отзыв",
          type: "error"
        })
      }
    },
    closeForm() {
      this.mode = "";
      this.showForm = false;
      this.disableForm();
    },
    async editReview(currentReview, mode, showForm) {
      await this.closeForm();
      this.mode = mode;
      this.currentReview = currentReview;
      this.showForm = showForm;
      this.disableForm();
    },
    async disableForm() {
      if (this.showForm === true) {
        return this.disabled = await true
      } else {
        return this.disabled = await false
      }
    }
  },
  created() {
    this.fetchReviewsAction();
  },
}
</script>

<style lang="postcss" scoped src="./reviews.pcss">

</style>