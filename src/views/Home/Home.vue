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
              Italian restaurant
            </span>
            <br />
            <span class="sub-title">
              Enjoy food. Relax. Have a Good day.
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
                  :src="require(`@/assets/img/banner/slide/` + item)"
                />
              </template>
            </b-carousel-slide>
          </template>
        </b-carousel>
      </b-overlay>
    </div>
    <!-- content below -->
    <div class="home-container">
      <!-- category img -->
      <div class="category-bg">
        <div class="max-container category pt-5 pb-4">
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
                    :src="require(`@/assets/img/` + item.pic)"
                  />
                </router-link>
                <p class="text-center label mt-2">{{ item.label }}</p>
              </b-col>
            </template>
          </b-row>
        </div>
      </div>
      <!-- 訊息專區 -->
      <div class="msg-area-bg mt-5 mb-5">
        <div class="max-container msg-area">
          <b-row>
            <!-- 訊息 -->
            <b-col md="8" class="mt-4 mb-5 mb-md-0 pl-xl-5">
              <template v-for="(item, index) of msgArr">
                <!-- 預設只查詢出五筆 -->
                <div :key="index">
                  <router-link :to="item.link">
                    <b-row class="mt-2">
                      <!-- 標題 -->
                      <b-col cols="5" md="4" xl="2" class="text-center">{{
                        item.title
                      }}</b-col>
                      <!-- 訊息內容 -->
                      <b-col cols="7" md="8" xl="10" class="content">{{
                        item.content
                      }}</b-col>
                    </b-row>
                  </router-link>
                </div>
              </template>
            </b-col>
            <!-- 圖片 -->
            <b-col md="4" class="text-center">
              <h4 class="text mb-5">訊息專區</h4>
              <b-img
                class="img"
                :src="require(`@/assets/img/other/message.png`)"
              />
            </b-col>
          </b-row>
        </div>
      </div>
      <!-- 餐廳位置 -->
      <div class="location-bg">
        <div class="max-container location">
          <b-row align-v="center" align-h="center">
            <b-col md="4" class="text-center pt-5 pb-4 pb-md-5">
              <h4 class="text mb-5">餐廳位置</h4>
              <b-img-lazy
                class="img"
                :src="require(`@/assets/img/other/location.png`)"
              />
            </b-col>
            <b-col md="8" class="mb-5 mt-md-5">
              <!--Google map-->
              <div id="map-container-google-1" class="map-container">
                <iframe
                  src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  style="border:0"
                  allowfullscreen
                ></iframe>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
      <!-- 營業時間 -->
      <div class="open-time-bg mt-5">
        <div class="max-container open-time">
          <b-row align-v="center" align-h="center">
            <!-- 圖片 -->
            <b-col md="6" class="text-center mb-5 mb-md-0">
              <b-img-lazy
                class="img"
                :src="require(`@/assets/img/restaurant/view01.jpg`)"
              />
            </b-col>
            <!-- 文字 -->
            <b-col md="5" class="ml-3 ml-md-4">
              <b-row align-v="center" align-h="center" class="mb-4 mb-md-5">
                <b-col>
                  <b-row>
                    <b-col>
                      <h5>營業時間 <b-icon icon="clock" /></h5>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>星期一 ~ 星期五 &nbsp; 11:00 ~ 20:30</b-col>
                  </b-row>
                  <b-row>
                    <b-col>星期六 ~ 星期日 &nbsp; 10:30 ~ 21:30</b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-row>
                    <b-col>
                      <h5>電話 <b-icon icon="telephone" /></h5>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>02-1234-5678</b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="mt-4">
                <b-col class="contact-icon">
                  <router-link to="#"
                    ><b-icon class="icon mr-4" icon="facebook"></b-icon
                  ></router-link>
                  <router-link to="#"
                    ><b-icon class="icon mr-4" icon="instagram"></b-icon
                  ></router-link>
                  <router-link to="#"
                    ><b-icon class="icon" icon="twitter"></b-icon
                  ></router-link>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
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
      font-style: italic;
    }
    .sub-title {
      font-size: 15px;
      font-style: italic;
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
      .img:hover {
        box-shadow: 0 1rem 3rem rgb(0 0 0 / 55%) !important;
      }
      .shadow-lg {
        box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%) !important;
      }
    }
  }
  // 訊息專區
  .msg-area-bg {
    .msg-area {
      width: 60%;
      margin: auto;
      .text {
        color: $primary-dark;
      }
      .content {
        margin-left: -30px;
      }
    }
    @media (max-width: 1200px) {
      .msg-area {
        width: 75%;
      }
    }
    @media (max-width: 500px) {
      .msg-area {
        width: 90%;
      }
    }
  }
  // 餐廳位置
  .location-bg {
    background-color: $primary;
    .location {
      width: 70%;
      margin: auto;
      .text {
        color: white;
      }
      .img {
        height: 55%;
        width: 55%;
      }
      .map-container {
        overflow: hidden;
        padding-bottom: 45%;
        position: relative;
        height: 100%;
        width: 80%;
        margin: auto;
        iframe {
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          position: absolute;
        }
      }
    }
  }
  // 營業時間
  .open-time-bg {
    margin-bottom: 70px;
    .open-time {
      width: 70%;
      margin: auto;
      color: $primary-dark;
      .img {
        width: 90%;
      }
    }
    .contact-icon {
      color: $primary;
      .icon {
        height: 30px;
        width: 30px;
      }
    }
    @media (max-width: 1200px) {
      .open-time {
        width: 90%;
      }
    }
  }
}
</style>
