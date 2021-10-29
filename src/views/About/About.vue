<template>
  <div>
    <global-title
      title="關於我們"
      overlay="#466050"
      :image="require(`@/assets/img/page-hero/about-hero.jpg`)"
    />
    <!-- 餐廳介紹 -->
    <div
      class="intro section"
      v-for="intro in introductions"
      :key="intro.title"
    >
      <b-container>
        <b-row align-v="center" align-h="around">
          <b-col cols="11" md="5" xl="4" order-md="1">
            <h3 class="font-weight-bold">{{ intro.title }}</h3>
            <p class="my-4">{{ intro.content }}</p>
          </b-col>
          <b-col class="img" cols="11" md="6">
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
                <b-img :src="require(`@/assets/img/shop.svg`)" />
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
                  <validation-provider
                    name="姓名"
                    rules="required"
                    v-slot="validationContext"
                  >
                    <b-form-group
                      label="* 姓名："
                      label-for="input-name"
                      label-cols-md="3"
                      label-align-md="right"
                    >
                      <b-form-input
                        id="input-name"
                        v-model="form.name"
                        placeholder="請輸入姓名"
                        :state="getValidationState(validationContext)"
                      ></b-form-input>
                      <b-form-invalid-feedback id="input-name-feedback">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <!-- 電話 tel -->
                  <b-form-group
                    label="聯絡電話："
                    label-for="input-phone"
                    label-cols-md="3"
                    label-align-md="right"
                    description="您輸入的電話為聯繫使用，絕不做其他用途"
                  >
                    <b-form-input
                      id="input-phone"
                      v-model="form.phone"
                      type="tel"
                      placeholder="請輸入電話"
                    ></b-form-input>
                  </b-form-group>
                  <!-- Email email -->
                  <validation-provider
                    name="Email"
                    rules="required|email"
                    v-slot="validationContext"
                  >
                    <b-form-group
                      label="* Email："
                      label-for="input-mail"
                      label-cols-md="3"
                      label-align-md="right"
                      description="您輸入的Email為聯繫使用，絕不做其他用途"
                    >
                      <b-form-input
                        id="input-mail"
                        v-model="form.email"
                        type="email"
                        placeholder="請輸入email"
                        :state="getValidationState(validationContext)"
                      ></b-form-input>
                      <b-form-invalid-feedback id="input-mail-feedback">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
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
                    </b-form-group>
                  </validation-provider>

                  <!-- 主題 select -->
                  <validation-provider
                    name="回饋主題"
                    rules="required"
                    v-slot="validationContext"
                  >
                    <b-form-group
                      label="* 回饋主題："
                      label-for="input-topic"
                      label-cols-md="3"
                      label-align-md="right"
                    >
                      <b-form-select
                        id="input-topic"
                        v-model="form.topic"
                        :options="topics"
                        :state="getValidationState(validationContext)"
                      ></b-form-select>
                      <b-form-invalid-feedback id="input-topic-feedback">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>

                  <b-form-group
                    label="* 用餐時間："
                    label-for="input-date"
                    label-cols-md="3"
                    label-align-md="right"
                  >
                    <!-- 用餐日期 date -->
                    <validation-provider
                      name="用餐日期"
                      rules="required"
                      v-slot="validationContext"
                    >
                      <b-form-datepicker
                        id="input-date"
                        v-model="form.date"
                        :max="maxDate"
                        :date-format-options="{
                          year: 'numeric',
                          month: 'numeric',
                          day: 'numeric',
                          weekday: 'short',
                        }"
                        locale="zh"
                        placeholder="請選擇日期"
                        :state="getValidationState(validationContext)"
                      ></b-form-datepicker>
                      <b-form-invalid-feedback id="input-date-feedback">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </validation-provider>
                    <!-- 用餐時間 radio -->
                    <validation-provider
                      name="用餐時段"
                      rules="required"
                      v-slot="validationContext"
                    >
                      <div>
                        <b-form-radio-group
                          id="input-time"
                          name="input-time"
                          class="mt-2"
                          v-model="form.time"
                        >
                          <b-form-radio
                            value="lunch"
                            :state="getValidationState(validationContext)"
                            >午餐時段</b-form-radio
                          >
                          <b-form-radio
                            value="dinner"
                            :state="getValidationState(validationContext)"
                            >晚餐時段</b-form-radio
                          >
                        </b-form-radio-group>
                        <b-form-invalid-feedback
                          :state="getValidationState(validationContext)"
                          id="input-date-feedback"
                        >
                          {{ validationContext.errors[0] }}
                        </b-form-invalid-feedback>
                      </div>
                    </validation-provider>
                  </b-form-group>
                  <!-- 意見 textarea -->
                  <validation-provider
                    name="詳細意見"
                    rules="required"
                    v-slot="validationContext"
                  >
                    <b-form-group
                      label="* 詳細意見："
                      label-for="input-content"
                      label-cols-md="3"
                      label-align-md="right"
                    >
                      <b-form-textarea
                        id="input-content"
                        v-model="form.content"
                        placeholder="請將詳盡描述您的意見，好讓我們能夠理解您的需求。"
                        rows="3"
                        max-rows="8"
                        :state="getValidationState(validationContext)"
                      ></b-form-textarea>
                      <b-form-invalid-feedback id="input-content-feedback">
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                  <!-- 整體感受 rating -->
                  <b-form-group
                    label="整體感受："
                    label-for="input-rating"
                    label-cols-md="3"
                    label-align-md="right"
                  >
                    <b-form-rating
                      id="input-rating"
                      v-model="form.rating"
                      icon-empty="heart"
                      icon-half="heart-half"
                      icon-full="heart-fill"
                      variant="secondary-dark"
                    ></b-form-rating>
                  </b-form-group>
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
  // @include font-size(1.5rem);
  font-size: 18px;
  &:nth-child(odd) {
    background-color: $secondary-light;
  }
  @include media-breakpoint-up(md) {
    &:nth-child(even) .img {
      order: 2;
      text-align: right;
    }
  }
  @include media-breakpoint-up(xl) {
    font-size: 24px;
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
</style>