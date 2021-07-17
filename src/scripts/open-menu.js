import Vue from "vue"

new Vue({
  el: "#open-menu",
  data: {
    open: true
  },
  methods: {
    openClose() {
      this.open = !this.open;
    }
  }
})