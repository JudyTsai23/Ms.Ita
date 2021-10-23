<template>
  <b-jumbotron
    text-variant="white"
    fluid
    :header="title"
    :image="image"
    header-level="5"
    class="hero-title"
    :style="bgStyles"
  />
</template>
<script>
export default {
  name: "HeroTitle",
  props: {
    title: String,
    image: String,
    overlay: String,
  },
  computed: {
    bgStyles() {
      return {
        "background-image": `linear-gradient(95deg, ${this.overlay}E6 40%, ${this.overlay}00 100%),url(${this.image})`,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~bootstrap/scss/mixins/breakpoints";

.hero-title {
  background-size: cover;
  background-position: center;
  padding: (100px + $nav-height) 30px 100px;
  margin-bottom: 60px;
}
@include media-breakpoint-down(sm) {
  .hero-title {
    padding: (50px + $nav-height) 30px 50px;
    margin-bottom: 40px;
    h1 {
      font-size: 2rem;
    }
  }
}
</style>
