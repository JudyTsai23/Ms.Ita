<template>
  <div>
    <global-title title="關於我們" overlay="#789E90" :image="require(`@/assets/img/banner/about-hero.jpg`)" />
    <!-- 餐廳介紹 -->
    <div class="intro" v-for="intro in introductions" :key="intro.title">
      <b-container class="section">
        <b-row align-v="center" align-h="around">
          <b-col cols="11" md="7" lg="5" order-md="1" class="wow fadeInUp" data-wow-offset="100">
            <h3 class="fz-title-middle font-weight-bold">{{ intro.title }}</h3>
            <p class="fz-content-middle my-4">{{ intro.content }}</p>
          </b-col>
          <b-col cols="11" md="5" lg="4" class="img wow zoomInSmall" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="100">
            <b-img-lazy :src="intro.image" fluid />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- 餐廳資訊 -->
    <div class="contact section">
      <b-container>
        <h3 class="text-center font-weight-bold mb-4">餐廳資訊</h3>
        <b-row align-h="between" class="wow fadeInUp" data-wow-offset="200">
          <!-- 聯絡資訊 -->
          <b-col class="text-md-center mt-4 mt-md-0" md="5" align-self="center">
            <b-row align-v="center" cols-md="1">
              <b-col class="info-illustration p-4 mx-auto" sm="5">
                <b-img :src="require(`@/assets/img/other/shop.svg`)" />
              </b-col>
              <b-col>
                <div class="mt-4">
                  <h5>
                    營業時間
                    <b-icon icon="clock" />
                  </h5>
                  <div class="text-primary">
                    星期一 ~ 星期五 &nbsp; 11:00 ~ 20:30
                  </div>
                  <div class="text-primary">
                    星期六 ~ 星期日 &nbsp; 10:30 ~ 21:30
                  </div>
                </div>
                <div class="mt-4">
                  <h5>
                    電話
                    <b-icon icon="telephone" />
                  </h5>
                  <div class="text-primary">02-1234-5678</div>
                </div>
                <div class="social-icon mt-4">
                  <router-link to="#"><b-icon class="mr-4" icon="facebook"></b-icon></router-link>
                  <router-link to="#"><b-icon class="mr-4" icon="instagram"></b-icon></router-link>
                  <router-link to="#"><b-icon icon="twitter"></b-icon></router-link>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <!-- 餐廳位置 -->
          <b-col md="6">
            <b-card class="h-100 mt-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.0031833199567!2d121.52244347846103!3d25.063762496539173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9448b0cf3a7%3A0x33962c413b0178e!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDkuK3lsbHljJfot6_kuozmrrUxODPlt7cx5LmLNOiZnw!5e0!3m2!1szh-TW!2stw!4v1665925092729!5m2!1szh-TW!2stw"
                class="w-100 h-100 border-0"
                allowfullscreen="false"
                loading="lazy"
              ></iframe>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script src="./About.js"></script>

<style lang="scss" scoped>
// @import "~bootstrap/scss/vendor/rfs";
@import "~bootstrap/scss/mixins/breakpoints";

.intro {
  &:nth-child(odd) {
    // background-color: $secondary-light;
    background-image: url("~@/assets/img/background/461.png");
    // box-shadow: inset 0 0 30px 25px #ffffff;
  }
  @include media-breakpoint-up(md) {
    &:nth-child(even) .img {
      order: 2;
      text-align: right;
    }
  }
}
.contact {
  background-color: $primary-lighter;
  background-image: url("~@/assets/img/background/490.png");

  .social-icon {
    font-size: 24px;
  }
  .info-illustration {
    max-width: 400px;
    @include media-breakpoint-down(sm) {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 45%;
      padding: 0 !important;
    }
  }
}
</style>
