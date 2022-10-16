<template>
  <div>
    <!-- top slide -->
    <div class="top-slide">
      <b-overlay variant="dark" opacity="0.65" blur="10" show>
        <template #overlay>
          <div class="d-flex flex-column align-items-center">
            <b-img fluid class="mt-5 mb-3 logo" :src="require(`@/assets/img/logo/logo_prod.png`)" />
            <div class="fz-content-middle font-italic logo-text">
              Enjoy food. Relax. Have a Good day.
            </div>
          </div>
        </template>
        <b-carousel :interval="4000" background="#ababab" fade indicators>
          <template v-for="item in slideImg">
            <b-carousel-slide :key="item.index">
              <template #img>
                <b-img fluid-grow id="slideImg" class="img" :src="require(`@/assets/img/banner/slide/` + item)" />
              </template>
            </b-carousel-slide>
          </template>
        </b-carousel>
      </b-overlay>
    </div>
    <!-- content below -->
    <!-- category img 四個圈圈 -->
    <div class="category section bg-primary-light">
      <b-container>
        <b-row class="content" align-v="center" align-h="center">
          <template v-for="(item, index) of categoryImg">
            <b-col cols="6" lg="3" :key="index">
              <div class="img-wrapper shadow-lg wow slideInDown" data-wow-duration="1.2s" :data-wow-delay="`${index * 0.02}s`">
                <b-img-lazy class="img" rounded="circle" blank-color="#444422" center fluid :src="require(`@/assets/img/` + item.pic)" />
              </div>
              <p class="text-center text-white mt-2">{{ item.label }}</p>
            </b-col>
          </template>
        </b-row>
      </b-container>
    </div>
    <!-- 訊息專區 -->
    <div class="section">
      <b-container>
        <b-row class="msg-area" align-v="center" align-h="center">
          <!-- 圖片 -->
          <b-col md="4" class="wow fadeInUp order-md-2 text-center mb-4" data-wow-duration="0.5s" data-wow-delay="0.3s" data-wow-offset="100">
            <router-link to="/news" class="msg-link" style="text-decoration: none;">
              <h4 class="d-flex justify-content-center align-items-center text-primary-dark fz-title-middle mb-5">
                訊息專區
                <b-icon class="arrow ml-3" icon="arrow-right-circle" />
              </h4>
              <b-img class="msg-img" :src="require(`@/assets/img/other/message.png`)" />
            </router-link>
          </b-col>
          <!-- 訊息 -->
          <b-col md="6" class="wow fadeInUp order-md-1 pt-1 pl-5 pl-md-4 pl-lg-5 mt-4" data-wow-duration="0.8s" data-wow-delay="0s" data-wow-offset="100">
            <template v-for="(news, index) of newsList">
              <div :key="index">
                <router-link :to="`${'/news/' + news.id}`">
                  <div class="d-inline-flex text-primary mb-3">
                    <span class="mr-2 flex-shrink-0">【{{ news.type }}】</span>
                    <b-icon class="mt-1 mr-2" icon="caret-right-fill" style="width: 13px;" />
                    <span class="align-self-start">{{ news.title }}</span>
                  </div>
                </router-link>
              </div>
            </template>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- 餐廳位置 -->
    <div class="location section bg-primary">
      <b-container>
        <b-row align-v="center" align-h="center">
          <b-col md="4" class="wow fadeInLeft text-center pt-5 pb-5" data-wow-offset="100">
            <h4 class="text-white fz-title-middle mb-5">餐廳位置</h4>
            <b-img-lazy class="img" :src="require(`@/assets/img/other/location.png`)" />
          </b-col>
          <b-col md="7" class="wow fadeInRight" data-wow-offset="100">
            <b-card class="map ml-4 ml-lg-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.0031833199567!2d121.52244347846103!3d25.063762496539173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9448b0cf3a7%3A0x33962c413b0178e!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDkuK3lsbHljJfot6_kuozmrrUxODPlt7cx5LmLNOiZnw!5e0!3m2!1szh-TW!2stw!4v1665925092729!5m2!1szh-TW!2stw"
                class="h-100 w-100 border-0"
                allowfullscreen="false"
                loading="lazy"
              ></iframe>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- 營業時間 -->
    <div class="section open-time">
      <b-container>
        <b-row class="wow fadeIn text-primary-dark" data-wow-offset="100" align-v="center" align-h="center">
          <!-- 圖片 -->
          <b-col md="7" class="text-center mb-5 mb-md-0">
            <b-img-lazy class="img" :src="require(`@/assets/img/restaurant/restaurant.jpg`)" />
          </b-col>
          <!-- 文字 -->
          <b-col md="5" class="pl-4 pl-md-0 ml-5 ml-md-0">
            <div class="fz-title-middle mb-3">營業時間 <b-icon icon="clock" /></div>
            <div class="mb-2">星期一 ~ 星期五 &nbsp; 11:00 ~ 20:30</div>
            <div class="mb-5">星期六 ~ 星期日 &nbsp; 10:30 ~ 21:30</div>
            <div class="fz-title-middle mb-3">電話 <b-icon icon="telephone" /></div>
            <div class="mb-4">02-1234-5678</div>
            <div class="text-primary">
              <router-link to="#"><b-icon class="icon mr-4" icon="facebook"></b-icon></router-link>
              <router-link to="#"><b-icon class="icon mr-4" icon="instagram"></b-icon></router-link>
              <router-link to="#"><b-icon class="icon" icon="twitter"></b-icon></router-link>
            </div>
            <!-- <div class="mt-3"><b-button variant="primary-darker" @click="serverTest()">測試按鈕</b-button></div> -->
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script src="./Home.js"></script>
<style lang="scss" scoped>
@import "~bootstrap/scss/mixins/breakpoints";
// 上方Slide
.top-slide {
  margin-top: -60px;
  .logo {
    height: 270px;
  }
  .logo-text {
    font-weight: 400;
    letter-spacing: 1px;
    color: $secondary;
  }
  .img {
    object-fit: cover;
    height: 115vh;
    width: 100vw;
  }
}
// 四個圈圈圖
.category {
  background-image: url("~@/assets/img/background/459.png");
  background-blend-mode: multiply;

  .content {
    @include media-breakpoint-up(md) {
      width: 95%;
      margin: auto;
    }
    @include media-breakpoint-up(lg) {
      width: 100%;
    }
    .img-wrapper {
      height: 200px;
      width: 200px;
      margin: auto;
      border-radius: 50%;
      overflow: hidden;

      @include media-breakpoint-down(md) {
        height: 190px;
        width: 190px;
      }
      .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
      }
      .img:hover {
        transform: scale(1.1);
      }
    }
    .img-wrapper:hover {
      box-shadow: 0 1rem 3rem rgb(0 0 0 / 45%) !important;
    }
    .shadow-lg {
      box-shadow: 0 1rem 3rem rgb(0 0 0 / 30%) !important;
    }
  }
}
// 訊息專區
.msg-area {
  .msg-link {
    h4 {
      transition: 0.5s;
    }
    .msg-img {
      width: 120px;
      height: 150px;
    }
  }
  .msg-link h4:hover {
    margin-left: 30px;
  }
}
// 餐廳位置
.location {
  background-image: url("~@/assets/img/background/683.png");

  .img {
    width: 35%;
    @include media-breakpoint-up(md) {
      width: 60%;
    }
  }
  .map {
    width: 90%;
    height: 50vh;
    border: none;

    @include media-breakpoint-up(md) {
      width: 45vw;
    }
    @include media-breakpoint-up(xl) {
      width: 40vw;
    }
  }
}
// 營業時間
.open-time {
  .img {
    width: 75%;
  }
  .icon {
    height: 30px;
    width: 30px;
  }
}
</style>
