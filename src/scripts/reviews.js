import Vue from "vue"
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    Swiper, SwiperSlide
  },
  data() {
    return {
      reviews: [],
      sliderOptions: {
        slidesPerView: 2
      },
      left_inactive: true,
      right_inactive: false
    }
  },
  methods: {
    requireImagesToArray(data) {
      return data.map((item) => {
        const requiredImage = require(`../images/content/${item.pic}`)
          .default;
        item.photo = requiredImage;
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

    slide_swiped() {
      const slider = this.$refs["slider"].$swiper;
      console.log("isBeginning = " + slider.isBeginning + "; isEnd = " + slider.isEnd + "; (Перелистывание)");
      this.left_inactive = slider.isBeginning;
      this.right_inactive = slider.isEnd;
    }

  },

  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.requireImagesToArray(data)
  }
})