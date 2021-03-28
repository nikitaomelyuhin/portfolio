<template lang="pug">
  .reviews-component
    header-component
    .page-content
      .container
        .header
          .title Блок «Отзывы»
      .reviews-container
        .container
          add-review-block
          ul.reviews
            li.reviews__add-work.reviews__item(v-if="addMode === false")
              button-component(type="square" title="Добавить отзыв")
            li.reviews__item(v-for="review in reviews" :key="review.id")
              card-review(:review="review")

</template>

<script>
import header from "../../components/header/header.vue";
import button from "../../components/button/button.vue";
import cardReview from "../../components/cardReview/cardReview.vue";
import addReviewBlock from "../../components/addReviewBlock/addReviewBlock.vue";

export default {
  components: {
    headerComponent: header,
    buttonComponent: button,
    cardReview,
    addReviewBlock
  },
  data() {
    return {
      reviews: [],
      addMode: false
    }
  },
  methods: {
    requirePhotos() {
      this.reviews = this.reviews.map(review => {
        review.pic = require(`../../../images/content/${review.pic}`).default;
        return review;
      })
    }
  },
  created() {
    this.reviews = require("../../../data/reviews.json");
  },
  mounted() {
    this.requirePhotos();
  }
}
</script>

<style lang="postcss" scoped src="./reviews.pcss">

</style>