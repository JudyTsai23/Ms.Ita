<template>
  <footer class="footer">
    <div class="footer-inside">
      <b-row align-v="center" align-h="center" class="text-center">
        <b-col cols="2" align-self="start">
          <img class="logo" src="../../assets/img/logo/logo.png" />
        </b-col>
        <b-col>
          <b-row>
            <b-col align-self="start" class="title">訊息專區</b-col>
            <b-col align-self="start" class="title">美味餐點</b-col>
            <b-col align-self="start">
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
            <b-col align-self="start" class="title">關於我們</b-col>
          </b-row>
          <b-row align-v="center" align-h="center" class="text-center mb-2">
            <b-col>
              <hr class="footer-hr" />
              <b-row>
                <b-col
                  >Photo by
                  <a
                    href="https://unsplash.com/s/photos/italian-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >Unsplash</a
                  ></b-col
                >
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
  margin-top: 100px;
  padding-top: 3vh;
  font-size: 12px;

  .footer-inside {
    width: 70%;
    margin: auto;

    .logo {
      height: 100px;
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
      width: 90%;
    }
  }
}
</style>
