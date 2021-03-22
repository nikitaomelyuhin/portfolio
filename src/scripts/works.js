import Vue from "vue";

const buttons = {
  template: "#works-buttons"
}

const thumbs = {
  props: ["works", "currentWork"],
  template: "#works-thumbs",
}

const tags = {
  props: ["tags"],
  template: "#works-tags"
}

const info = {
  props: ["currentWork"],
  template: "#works-info",
  components: {tags},
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(",");
    }
  },
}

const display = {
  props: ["currentWork", "works", "currentIndex"],
  template: "#works-display",
  components: {thumbs, buttons}
}

new Vue({
  el: "#works-component",
  template: "#works-container",
  components: {display, info},
  data() {
    return {
      works: [],
      currentIndex: 0,
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
          break;
        case "prev":
          this.works.unshift(lastItem);
          this.works.pop();
          this.currentIndex--;
          break;
      }
    },

    requireImagesToArray(data) {
      return data.map((item) => {
        const requiredImage = require(`../images/content/${item.photo}`).default;
        item.photo = requiredImage;
        return item;
      });
    },
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.requireImagesToArray(data);
  }
})