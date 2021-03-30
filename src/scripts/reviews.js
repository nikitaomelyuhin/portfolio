import Vue from "vue";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import axios from "axios";

new Vue ({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    Swiper, SwiperSlide, directive
  },
  data() {
    return {
      reviews: [],
      sliderOptions: {
        slidesPerView: this.slideDependsSize(),
      },
    }
  },
  watch: {
    
  },
  methods: {
    requireImagesToArray(data) {
      return data.map((item) => {
        const requiredImage = require(`../images/content/${item.pic}`).default;
        item.pic = requiredImage;
        return item;
      });
    },
    slide(direction) {
      const slider = this.$refs["slider"].$swiper;
      switch(direction) {
        case "next" :
          slider.slideNext();
          break;
          case "prev" :
          slider.slidePrev();
          break;
      }
    },
    slideDependsSize() {
      let numberOfSlides = 0;
      if (document.body.clientWidth <= 768) {
        numberOfSlides = 1;
      } else {
        numberOfSlides = 2;
      }
      return numberOfSlides;
    }
  },
  async created() {
    try {
      const { data } = await axios.get("https://webdev-api.loftschool.com/reviews/436");
      this.reviews = data;
    } catch (error) {
      
    }
    
    this.slideDependsSize();
  },
})