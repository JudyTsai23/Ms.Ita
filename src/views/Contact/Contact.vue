<template>
  <div>
    <global-title title="意見回饋" overlay="#c9b06b" :image="require(`@/assets/img/banner/contact-hero.jpg`)" />
    <!-- 意見回饋 -->
    <div class="contact section">
      <b-container>
        <h3 class="text-center font-weight-bold mb-4">聯絡我們</h3>
        <b-card class="shadow pr-md-5 py-md-5 mx-auto">
          <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <b-form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="onReset" v-if="show">
              <!-- 姓名 text -->

              <FormItem :value.sync="form.name" fieldName="姓名" required />

              <!-- 電話 tel -->
              <!-- TODO:電話不需驗證 -->
              <FormItem :value.sync="form.phone" fieldName="聯絡電話" inputType="tel" description="您輸入的電話為聯繫使用，絕不做其他用途" />

              <!-- Email email -->
              <FormItem :value.sync="form.email" fieldName="Email" inputType="email" description="您輸入的Email為聯繫使用，絕不做其他用途" required>
                <template v-slot:after>
                  <b-form-checkbox id="input-reply" class="mt-2" v-model="form.reply" value="reply" unchecked-value="not_reply" size="sm">
                    希望收到回覆
                  </b-form-checkbox>
                </template>
              </FormItem>
              <!-- 主題 select -->
              <FormItem :value.sync="form.topic" fieldName="回饋主題" inputType="select" :options="topics" required />

              <!-- 用餐日期 date -->
              <FormItem :value.sync="form.date" fieldName="用餐日期" inputType="date" :datepickerMax="maxDate" required groupClass="mb-1" />

              <!-- 用餐時段 radio -->
              <FormItem :value.sync="form.time" fieldName="用餐時段" inputType="radio" :options="timeItems" noLabel required />

              <!-- 意見 textarea -->
              <FormItem :value.sync="form.content" fieldName="詳細意見" inputType="textarea" placeholder="請將詳盡描述您的意見，好讓我們能夠理解您的需求。" required />

              <!-- 整體感受 rating -->
              <!-- TODO:rating驗證無效 -->
              <FormItem :value.sync="form.rating" fieldName="整體感受" inputType="rating" required />

              <!-- 表單按鈕 -->
              <div class="text-center mt-4">
                <b-button class="mr-4" type="submit" variant="primary">送出</b-button>
                <b-button type="reset" variant="outline-primary-light">清除</b-button>
              </div>
            </b-form>
          </validation-observer>
        </b-card>
        <!-- </b-col> -->
        <!-- </b-row> -->
      </b-container>
    </div>
  </div>
</template>

<script src="./Contact.js"></script>

<style lang="scss" scoped>
// @import "~bootstrap/scss/vendor/rfs";
@import "~bootstrap/scss/mixins/breakpoints";
.contact {
  background-image: linear-gradient(#fff 0%, rgba(255, 255, 255, 0) 100%), url("~@/assets/img/background/683.png");
  background-image: linear-gradient(#fff 0%, rgba(255, 255, 255, 0.2) 100%), url("~@/assets/img/background/461.png");
  // background-image: linear-gradient(170deg, #fff 20%, rgba(255, 255, 255, 0) 95%), url("~@/assets/img/background/459.png");
  .card {
    max-width: 800px;
  }
}
#input-topic :disabled {
  display: none;
}
</style>
