<template>
  <div class="container carousel_home ">
    <div class="carousel_home-title">
       <img width="60px" src="https://avatars.githubusercontent.com/u/6128107?s=280&v=4" alt="">
       <h5>Carousel em Vuejs</h5>
    </div>
    <div class="carousel carousel-slider center">
      <!-- <div class="carousel-fixed-item center">
        <a class="btn waves-effect white grey-text darken-text-2">Next</a>
      </div> -->
      <div class="carousel-item blue white-text" href="#one!">
        <h2>First Panel</h2>
        <p class="white-text">This is your first panel</p>
      </div>
      <div class="carousel-item amber white-text" href="#two!">
        <h2>Second Panel</h2>
        <p class="white-text">This is your second panel</p>
      </div>
      <div class="carousel-item green white-text" href="#three!">
        <h2>Third Panel</h2>
        <p class="white-text">This is your third panel</p>
      </div>
      <div class="carousel-item blue white-text" href="#four!">
        <h2>Fourth Panel</h2>
        <p class="white-text">This is your fourth panel</p>
      </div>
    </div>
  </div>
</template>

<script>
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import { objectFactory } from "@microfrontend/utilitario";

export default {
  name: "App",
  methods: {
    objectFactory,
  },
  mounted() {
    setTimeout(() => {
      let elems = document.querySelectorAll(".carousel");
      M.Carousel.init(elems, {
        indicators: true,
        noWrap: false,
        fullWidth: true,
        autoScroll: 6000
      });
    }, 500);
  },
};
</script>

<style scoped>
.carousel_home {
  margin-top: 100px;
}
.carousel_home-title {
  display: flex;
  align-items: center;
  justify-content: left;
}
</style>
