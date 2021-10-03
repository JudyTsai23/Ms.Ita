<template>
  <div>
    <!-- top slide -->
    <div class="top-slide">
      <b-overlay variant="dark" opacity="0.5" blur="10" show>
        <template #overlay>
          <b-img
            fluid
            class="mt-2"
            :src="require(`@/assets/img/logo/logo2-bold.png`)"
          />
        </template>
        <b-carousel :interval="4000" background="#ababab" fade indicators>
          <template v-for="item in slideImg">
            <b-carousel-slide
              :key="item.index"
              :caption="slideTitle"
              :text="slideText"
            >
              <template #img>
                <b-img
                  fluid-grow
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
      <!-- category img -->
      <div class="category mt-5 mb-5">
        <b-row align-v="center" align-h="center">
          <template v-for="item of categoryImg">
            <b-col cols="3" :key="item.index">
              <b-img-lazy
                class="img shadow-lg rounded"
                rounded="circle"
                blank-color="#444422"
                center
                fluid
                :src="require(`@/assets/img/category/` + item)"
              />
            </b-col>
          </template>
        </b-row>
      </div>
      <!-- 訊息專區 -->
      <div class="msg-area mb-4">
        <div class="frame">
          <span class="frame-label mr-1">訊息專區</span>
          <b-img
            class="frame-icon mb-1"
            :src="require(`@/assets/img/send.svg`)"
          />
        </div>
        <!-- content -->
        <div class="content">
          <b-row align-v="center" align-h="center">
            <!-- msg -->
            <b-col>
              <template v-for="msg of msgArr">
                <b-row :key="msg.index">
                  <b-col></b-col>
                </b-row>
              </template>
            </b-col>
            <!-- icon、pic -->
            <b-col></b-col>
          </b-row>
        </div>
      </div>
      <!-- 餐廳位置 -->
      <div></div>
      <!-- 營業時間 -->
      <div class="open-time">
        <b-row align-v="center" align-h="center">
          <!-- 文字 -->
          <b-col>
            <b-row align-v="center" align-h="center">
              <b-col>
                <b-row>
                  <b-col
                    >營業時間 <b-icon icon="telephone-fill"></b-icon
                  ></b-col>
                </b-row>
                <b-row>
                  <b-col>星期一~五 11:00~20:30</b-col>
                </b-row>
                <b-row>
                  <b-col>星期六~日 10:30~21:30</b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-row>
                  <b-col>電話</b-col>
                </b-row>
                <b-row>
                  <b-col>02-1234-5678</b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
          <!-- 圖片 -->
          <b-col></b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script src="./Home.js"></script>
<style lang="scss" scoped>
// 上方Slide
.top-slide {
  margin-top: -60px;
  .img {
    height: 115vh;
    width: 100vw;
  }
}
// 四個圈圈圖
.category {
  width: 90%;
  margin: auto;
  .img {
    height: 23vh;
    width: 12vw;
  }
  .shadow-lg {
    box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%) !important;
  }
}
// 訊息專區
.msg-area {
  // height: 20vh;
  width: 90%;
  margin: auto;
  border: lightgray 2.5px solid;
  border-radius: 10px;
  .frame {
    width: fit-content;
    background-color: white;
    margin: -15px 0 0 20px;
    padding: 0 10px;
    color: gray;
    .frame-label {
      font-size: 20px;
    }
    .frame-icon {
      width: 33px;
      filter: opacity(50%);
    }
  }
  .content {
    padding: 15px;
  }
}
// 營業時間
.open-time {
  height: 50vh;
  width: 80%;
  margin: auto;
  background-color: #444422de;
}
</style>
