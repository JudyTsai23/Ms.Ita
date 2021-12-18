<template>
  <div class="mb-5 mb-md-6 hero-title" :style="bgStyles">
    <h2 class="container text-white fz-title-large">{{ title }}</h2>
  </div>
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
  background-attachment: fixed;
  background-size: 160% auto;
  background-position: 60% 0;
  background-repeat: no-repeat;
  // padding: $nav-height 1em 0px;
  padding-top: $nav-height;
  // margin-bottom: 60px;
  h2 {
    // font-size: 2.5rem;
    // font-size: inherit;
    padding: 50px 1em;
  }
  @include media-breakpoint-up(sm) {
    background-size: 100% auto;
    background-position-x: center;
  }
  @include media-breakpoint-up(md) {
    h2 {
      // font-size: 2rem;
      padding: 100px 1em;
    }
  }
}
@include media-breakpoint-down(xs) {
  .hero-title {
    // padding: (50px + $nav-height) 30px 50px;
    // background-position: top center;
    // margin-bottom: 40px;
  }
}
</style>
