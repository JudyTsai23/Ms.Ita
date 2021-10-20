<template>
  <div>
    <!-- top slide -->
    <div class="top-slide">
      <b-overlay variant="dark" opacity="0.65" blur="10" show>
        <template #overlay>
          <b-img
            fluid
            class="mt-5 logo"
            :src="require(`@/assets/img/logo/logo2-bold.svg`)"
          />
          <div class="text-center logo-text">
            <span class="title">
              {{ slideTitle }}
            </span>
            <br />
            <span>
              {{ slideText }}
            </span>
          </div>
        </template>
        <b-carousel :interval="4000" background="#ababab" fade indicators>
          <template v-for="item in slideImg">
            <b-carousel-slide :key="item.index">
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
    <div class="home-container max-container">
      <!-- category img -->
      <div class="category-bg">
        <div class="category pt-5 pb-4">
          <b-row align-v="center" align-h="center">
            <template v-for="item of categoryImg">
              <b-col cols="6" md="3" :key="item.index">
                <router-link :to="item.link">
                  <b-img-lazy
                    class="img shadow-lg rounded"
                    rounded="circle"
                    blank-color="#444422"
                    center
                    fluid
                    :src="require(`@/assets/img/category/` + item.pic)"
                  />
                </router-link>
                <p class="text-center label mt-2">{{ item.label }}</p>
              </b-col>
            </template>
          </b-row>
        </div>
      </div>
      <!-- 訊息專區 -->
      <div class="msg-area mt-5 mb-4">
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
    </div>
  </div>
</template>
<script src="./Home.js"></script>
<style lang="scss" scoped>
// 上方Slide
.top-slide {
  margin-top: -60px;
  .logo {
    height: 150px;
  }
  .logo-text {
    color: #dbdbbd;
    font-weight: 400;
    letter-spacing: 1px;
    .title {
      font-size: 24px;
    }
  }
  .img {
    object-fit: cover;
    height: 115vh;
    width: 100vw;
  }
}
.home-container {
  // 四個圈圈圖
  .category-bg {
    background-color: $primary-light;
    .category {
      width: 80%;
      margin: auto;
      .label {
        font-size: medium;
        color: white;
      }
      .img {
        object-fit: cover;
        height: 170px;
        width: 170px;
      }
      @media (max-width: 768px) {
        .img {
          height: 130px;
          width: 130px;
        }
      }
      // .img:hover {
      // }
      .shadow-lg {
        box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%) !important;
      }
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
}
</style>
