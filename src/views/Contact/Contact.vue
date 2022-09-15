<template>
  <div>
    <global-title title="意見回饋" overlay="#c9b06b" :image="require(`@/assets/img/banner/contact-hero.jpg`)" />
    <!-- 意見回饋 -->
    <div class="contact section">
      <b-container>
        <b-row class="wow fadeInUp">
          <!-- <b-col md="2" class="position-relative d-none d-md-block"><b-img class="position-absolute" style="bottom:0;width:350%" :src="require(`@/assets/img/write.png`)" /></b-col> -->
          <b-col md="10" offset-md="2">
            <!-- <h3 class="text-center font-weight-bold mb-4">聯絡我們</h3> -->
            <b-card class="shadow pr-md-5 py-md-5 mx-auto">
              <validation-observer ref="observer" v-slot="{ handleSubmit }">
                <b-form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="onReset" v-if="show">
                  <!-- 姓名 text -->

                  <FormItem :value.sync="form.customerName" fieldName="姓名" required />

                  <!-- 電話 tel -->
                  <!-- TODO:電話不需驗證 -->
                  <FormItem :value.sync="form.phone" fieldName="聯絡電話" inputType="tel" description="您輸入的電話為聯繫使用，絕不做其他用途" />

                  <!-- Email email -->
                  <FormItem :value.sync="form.email" fieldName="Email" inputType="email" description="您輸入的Email為聯繫使用，絕不做其他用途" required>
                    <template v-slot:after>
                      <b-form-checkbox id="input-reply" class="mt-2" v-model="form.subscription" :value="true" :unchecked-value="false" size="sm">
                        希望收到回覆
                      </b-form-checkbox>
                    </template>
                  </FormItem>
                  <!-- 主題 select -->
                  <FormItem :value.sync="form.topic" fieldName="回饋主題" inputType="select" :options="topics" required />

                  <!-- 用餐日期 date -->
                  <FormItem :value.sync="form.date" fieldName="用餐日期" inputType="date" :datepickerMax="maxDate" required groupClass="mb-1" />

                  <!-- 用餐時段 radio -->
                  <FormItem :value.sync="form.period" fieldName="用餐時段" inputType="radio" :options="timeItems" noLabel required />

                  <!-- 意見 textarea -->
                  <FormItem :value.sync="form.opinion" fieldName="詳細意見" inputType="textarea" placeholder="請將詳盡描述您的意見，好讓我們能夠理解您的需求。" required />

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
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-modal id="formMsg" title="" size="sm" button-size="sm" hide-footer @hidden="onReset" header-bg-variant="primary-lighter" header-text-variant="white" header-class="p-2 border-bottom-0">
      <template #modal-title>
        <b-icon-check2-all />
        發送成功
      </template>
      <p class="mt-2 mb-5">感謝您寶貴的意見，我們會盡力為您提供更好的服務！</p>
      <b-button size="sm" variant="primary-light" to="/" block>
        回首頁
      </b-button>
    </b-modal>
  </div>
</template>

<script src="./Contact.js"></script>

<style lang="scss" scoped>
// @import "~bootstrap/scss/vendor/rfs";
@import "~bootstrap/scss/mixins/breakpoints";
.contact {
  background-image: linear-gradient(#fff 0%, rgba(255, 255, 255, 0.2) 100%), url("~@/assets/img/background/461.png");
  overflow: hidden;

  @include media-breakpoint-up(md) {
    .row {
      background: url("~@/assets/img/other/write.png") no-repeat left bottom/500px auto;
    }
  }
  @include media-breakpoint-up(lg) {
    .row {
      background-size: 600px auto;
    }
  }
}
#input-topic :disabled {
  display: none;
}
</style>
