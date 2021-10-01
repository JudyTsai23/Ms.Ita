<template>
  <div>
    <!-- top slide -->
    <div>
      <b-overlay variant="dark" opacity="0.5" blur="10" show>
        <template #overlay>
          <img class="slider-logo mt-5" src="../../assets/img/logo/logo.png" />
        </template>
        <b-carousel :interval="4000" background="#ababab" fade indicators>
          <template v-for="item in slideImg">
            <b-carousel-slide
              :key="item.index"
              :caption="slideTitle"
              :text="slideText"
            >
              <template #img>
                <img
                  id="slideImg"
                  class="img"
                  :src="require(`@/assets/img/slide/` + item)"
                />
              </template>
            </b-carousel-slide>
          </template>
        </b-carousel>
      </b-overlay>
    </div>
    <!-- content below -->
    <b-container>
      <!--  -->
      <div></div>
      <!-- 訊息專區 -->
      <div></div>
      <!-- 餐廳位置 -->
      <div></div>
      <!-- 營業時間 -->
      <div class="open-time"></div>
    </b-container>
  </div>
</template>
<script src="./Home.js"></script>
<style lang="scss" scoped>
.slider-logo {
  height: 100vh;
}
.img {
  height: 115vh;
  width: 100vw;
}
.open-time {
  width: 100%;
  height: 50vh;
  background-color: rgb(204, 204, 204);
}
</style>
