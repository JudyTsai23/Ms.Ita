<template>
  <footer class="footer pt-2">
    <div class="footer-inside">
      <div class="d-flex flex-wrap justify-content-between align-items-center py-4">
        <div class="col-12 col-md-5 d-flex justify-content-center">
          <img class="logo" src="@/assets/img/logo/logo_final_horizontal.png" />
        </div>
        <div class="col-12 col-md-7 d-flex flex-column text-right pt-4 pt-md-0">
          <span>Ms.Ita © 2022</span>
          <span>
            Icons & Logo by BootstrapVue,
            <a href="https://www.flaticon.com/" title="Flaticon">Flaticon.com</a>
            and <a target="_blank" href="https://icons8.com">Icons8</a>
          </span>
          <span>
            此為練習用網站，不為商業所用，如有侵權敬請告知
          </span>
          <small>Design by Joyu & Judy ( saiyuki0804@gmail.com )</small>
          <samll>{{ version }}</samll>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      version: process.env.VUE_APP_VERSION,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~bootstrap/scss/mixins/breakpoints";

.footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #001a00e5;
  opacity: 1;
  color: lightgray;
  font-size: 13px;

  .footer-inside {
    width: 80%;
    margin: auto;

    .logo {
      width: 60%;
      @include media-breakpoint-up(md) {
        width: 90%;
      }
      @include media-breakpoint-up(lg) {
        width: 70%;
      }
      @include media-breakpoint-up(xl) {
        width: 60%;
      }
    }
    a {
      @include router-link(rgb(111, 131, 111));
    }
    a:hover {
      @include router-link(rgb(182, 204, 146));
    }
  }
}
</style>
