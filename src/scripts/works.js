import Vue from "vue";
import axios from "../admin/requests"

const buttons = {
  data() {
    return {
      disable: false,
    }
  },
  template: "#works-buttons",
  methods: {
    slideNext() {
      this.$emit('slide', 'next')
      setTimeout(() => {
        this.disable = false
      }, 500);
      this.disable = true;
    },
    slidePrev() {
        this.$emit('slide', 'prev')
        setTimeout(() => {
          this.disable = false
        }, 500);
        this.disable = true;
    },
  },
}

const thumbs = {
  props: ["works", "currentWork", "direction"],
  template: "#works-thumbs",
  computed: {
    slicedSlides() {
      return [...this.works].splice(0,4);
    },
  },
  methods: {
    enterCb(el, done) {
      const list = el.closest("ul");
      el.classList.remove("fade")
      switch (this.direction) {
        case "prev":
          el.classList.add("outsided");
          list.classList.add("transition");
          list.style.transform = "translateX(178px)"
          break;
        case "next":
          el.classList.add("insided");
          list.classList.add("transition");
          list.style.transform = "translateX(-178px)"
          break;
      
        default:
          break;
      }
      list.addEventListener("transitionend", e => done());

    },
    afterCb(el) {
      const list = el.closest("ul");

      el.classList.remove("outsided");
      el.classList.remove("insided");
      list.style.transform = "translateX(0)"
      list.classList.remove("transition");
      
    },
    leaveCb(el, done) {
      el.classList.add("fade");
      el.addEventListener("transitionend", e => done());
    },
  },
}

const tags = {
  props: ["tags"],
  template: "#works-tags",
}

const info = {
  props: ["currentWork"],
  template: "#works-info",
  components: {tags},
  computed: {
    tagsArray() {
      return this.currentWork.techs.split(',')
    }
  },
}

const display = {
  props: ["currentWork", "works", "currentIndex", "direction"],
  template: "#works-display",
  components: {thumbs, buttons},
}

new Vue({
  el: "#works-component",
  template: "#works-container",
  components: {display, info},
  data() {
    return {
      works: [],
      currentIndex: 0,
      direction: "next",
      isLoaded: false,
    }
  },
  computed: {
    currentWork() {
      return this.works[0];
    },
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForNdx(value);
    },
  },
  methods: {
    makeInfiniteLoopForNdx(index) {
      const worksNumber = this.works.length - 1;
      if (index < 0) this.currentIndex = worksNumber;
      if (index > worksNumber) this.currentIndex = 0;
    },

    slide(direction) {
      const lastItem = this.works[this.works.length - 1];
      switch (direction) {
        case "next":
          this.works.push(this.works[0]);
          this.works.shift();
          this.currentIndex++;
          this.direction = "next";
          break;
          case "prev":
            this.works.unshift(lastItem);
            this.works.pop();
            this.currentIndex--;
            this.direction = "prev";
          break;
      }
    },
  },
  async created() {
    try {
      const { data } = await axios.get("/works/436")
      this.works = data;
      this.isLoaded = true;
    } catch (error) {
      console.log(error);
    }
  }
})