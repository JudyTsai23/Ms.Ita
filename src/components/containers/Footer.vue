<template>
  <footer class="footer pt-2">
    <div class="footer-inside">
      <div class="d-flex justify-content-between align-items-center py-3">
        <img class="logo" src="@/assets/img/logo/logo2-bold.svg" />
        <div class="d-flex flex-column text-right">
          <span>
            Icons by BootstrapVue,
            <a href="https://www.flaticon.com/" title="Flaticon">Flaticon.com</a>
            and <a target="_blank" href="https://icons8.com">Icons8</a>
          </span>
          <span>
            此為練習用網站，不為商業所用。
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
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
    width: 70%;
    margin: auto;

    .logo {
      height: 70px;
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
