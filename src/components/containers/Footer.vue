<template>
  <footer class="footer">
    <div class="footer-inside">
      <b-row align-v="center" align-h="center" class="text-center">
        <b-col md="4" xl="3" xxl="2" align-self="start">
          <img class="logo mt-3" src="../../assets/img/logo/logo2-bold.svg" />
        </b-col>
        <b-col md="8" xl="7" xxl="5">
          <b-row align-v="center" align-h="center" class="text-center">
            <b-col md="3" align-self="start" class="title">訊息專區</b-col>
            <b-col md="3" align-self="start" class="title">美味餐點</b-col>
            <b-col md="3" align-self="start">
              <b-row>
                <b-col class="title mb-1">線上預訂</b-col>
              </b-row>
              <b-row>
                <b-col class="item">訂位</b-col>
              </b-row>
              <b-row>
                <b-col class="item mb-1">訂餐</b-col>
              </b-row>
            </b-col>
            <b-col md="3" align-self="start" class="title">關於我們</b-col>
          </b-row>
          <b-row align-v="center" align-h="center" class="text-center mb-2">
            <b-col>
              <hr class="footer-hr" />
              <b-row>
                <b-col>
                  Icons by BootstrapVue,
                  <a href="https://www.flaticon.com/" title="Flaticon">Flaticon.com</a>
                  and <a target="_blank" href="https://icons8.com">Icons8</a>
                </b-col>
              </b-row>
              <b-row>
                <b-col>此為練習用網站，不為商業所用。</b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
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
  /* height: 15vh; */
  background-color: #001a00e5;
  opacity: 1;
  color: lightgray;
  // margin-top: 70px;
  padding-top: 3vh;
  font-size: 12px;

  .footer-inside {
    width: 70%;
    margin: auto;

    .logo {
      height: 70px;
    }
    .title,
    a {
      @include router-link(rgb(111, 131, 111));
      font-size: 15px;
    }
    .title:hover,
    a:hover,
    .item:hover {
      @include router-link(rgb(136, 167, 136));
    }
    .item {
      font-weight: normal;
      @include router-link(rgb(111, 131, 111));
    }
    .footer-hr {
      background-color: rgb(50, 63, 53);
      margin-bottom: 10px;
      width: 80%;
    }
  }
}
</style>
