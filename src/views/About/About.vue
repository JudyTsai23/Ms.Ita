<template>
  <div>
    <global-title
      title="關於我們"
      overlay="#789E90"
      :image="require(`@/assets/img/banner/about-hero.jpg`)"
    />
    <!-- 餐廳介紹 -->
    <div
      class="intro section"
      v-for="intro in introductions"
      :key="intro.title"
    >
      <b-container>
        <b-row align-v="center" align-h="around">
          <b-col cols="11" md="7" lg="5" order-md="1">
            <h3 class="fz-title-middle font-weight-bold">{{ intro.title }}</h3>
            <p class="fz-content-middle my-4">{{ intro.content }}</p>
          </b-col>
          <b-col class="img" cols="11" md="5" lg="4">
            <b-img-lazy :src="intro.image" fluid />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- 意見回饋 -->
    <div class="contact section">
      <b-container>
        <h3 class="text-center font-weight-bold mb-4">意見回饋</h3>
        <b-row>
          <!-- 聯絡資訊 -->
          <b-col
            class="mt-4 mt-md-0"
            md="3"
            lg="4"
            align-self="center"
            order="1"
            order-md="0"
          >
            <b-row align-v="center" cols-md="1">
              <b-col class="info-illustration p-4" sm="5">
                <b-img :src="require(`@/assets/img/other/shop.svg`)" />
              </b-col>
              <b-col>
                <div class="mt-4">
                  <h5>營業時間 <b-icon icon="clock" /></h5>
                  <div class="text-primary">
                    星期一 ~ 星期五 &nbsp; 11:00 ~ 20:30
                  </div>
                  <div class="text-primary">
                    星期六 ~ 星期日 &nbsp; 10:30 ~ 21:30
                  </div>
                </div>
                <div class="mt-4">
                  <h5>電話 <b-icon icon="telephone" /></h5>
                  <div class="text-primary">02-1234-5678</div>
                </div>
                <div class="social-icon mt-4">
                  <router-link to="#"
                    ><b-icon class="mr-4" icon="facebook"></b-icon
                  ></router-link>
                  <router-link to="#"
                    ><b-icon class="mr-4" icon="instagram"></b-icon
                  ></router-link>
                  <router-link to="#"
                    ><b-icon icon="twitter"></b-icon
                  ></router-link>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <!-- 回饋表單 -->
          <b-col md="9" lg="8">
            <b-card class="shadow mt-3">
              <validation-observer ref="observer" v-slot="{ handleSubmit }">
                <b-form
                  @submit.prevent="handleSubmit(onSubmit)"
                  @reset.prevent="onReset"
                  v-if="show"
                >
                  <!-- 姓名 text -->

                  <FormItem :value.sync="form.name" fieldName="姓名" required />

                  <!-- 電話 tel -->
                  <!-- TODO:電話不需驗證 -->
                  <FormItem
                    :value.sync="form.phone"
                    fieldName="聯絡電話"
                    inputType="tel"
                    description="您輸入的電話為聯繫使用，絕不做其他用途"
                  />

                  <!-- Email email -->
                  <FormItem
                    :value.sync="form.email"
                    fieldName="Email"
                    inputType="email"
                    description="您輸入的Email為聯繫使用，絕不做其他用途"
                    required
                  >
                    <template v-slot:after>
                      <b-form-checkbox
                        id="input-reply"
                        class="mt-2"
                        v-model="form.reply"
                        value="reply"
                        unchecked-value="not_reply"
                        size="sm"
                      >
                        希望收到回覆
                      </b-form-checkbox>
                    </template>
                  </FormItem>
                  <!-- 主題 select -->
                  <FormItem
                    :value.sync="form.topic"
                    fieldName="回饋主題"
                    inputType="select"
                    :options="topics"
                    required
                  />

                  <!-- 用餐日期 date -->
                  <FormItem
                    :value.sync="form.date"
                    fieldName="用餐日期"
                    inputType="date"
                    :datepickerMax="maxDate"
                    required
                    groupClass="mb-1"
                  />

                  <!-- 用餐時段 radio -->
                  <FormItem
                    :value.sync="form.time"
                    fieldName="用餐時段"
                    inputType="radio"
                    :options="timeItems"
                    noLabel
                    required
                  />

                  <!-- 意見 textarea -->
                  <FormItem
                    :value.sync="form.content"
                    fieldName="詳細意見"
                    inputType="textarea"
                    placeholder="請將詳盡描述您的意見，好讓我們能夠理解您的需求。"
                    required
                  />

                  <!-- 整體感受 rating -->
                  <!-- TODO:rating驗證無效 -->
                  <FormItem
                    :value.sync="form.rating"
                    fieldName="整體感受"
                    inputType="rating"
                    required
                  />

                  <!-- 表單按鈕 -->
                  <div class="text-center mt-4">
                    <b-button class="mr-4" type="submit" variant="primary"
                      >送出</b-button
                    >
                    <b-button type="reset" variant="outline-primary-light"
                      >清除</b-button
                    >
                  </div>
                </b-form>
              </validation-observer>
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
    background-color: $secondary-light;
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

  .social-icon {
    font-size: 24px;
  }
  @include media-breakpoint-down(sm) {
    .info-illustration {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 45%;
      padding: 0 !important;
    }
  }
}
#input-topic :disabled {
  display: none;
}
</style>
