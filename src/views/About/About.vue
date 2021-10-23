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
            <h2 class="font-weight-bold">{{ intro.title }}</h2>
            <p class="my-4">{{ intro.content }}</p>
          </b-col>
          <b-col class="img" cols="11" md="6">
            <b-img-lazy :src="intro.image" fluid />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- 意見回饋表單 -->
    <div class="contact section">
      <b-container>
        <h2 class="text-center font-weight-bold">意見回饋</h2>

        <b-card class="mt-3">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              label="姓名："
              label-for="input-name"
              label-cols-md="2"
              label-cols-lg="1"
              label-align-md="right"
            >
              <b-form-input
                id="input-name"
                v-model="form.name"
                placeholder="請輸入姓名"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="電話："
              label-for="input-phone"
              label-cols-md="2"
              label-cols-lg="1"
              label-align-md="right"
            >
              <b-form-input
                id="input-phone"
                v-model="form.phone"
                placeholder="請輸入電話"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              label="Email："
              label-for="input-mail"
              label-cols-md="2"
              label-cols-lg="1"
              label-align-md="right"
              description="您輸入的Email為聯繫使用，絕不做其他用途"
            >
              <b-form-input
                id="input-mail"
                v-model="form.email"
                type="email"
                placeholder="請輸入email"
                required
              ></b-form-input>
              <b-form-checkbox
                id="input-reply"
                v-model="form.reply"
                value="reply"
                unchecked-value="not_reply"
                size="sm"
              >
                希望收到回覆
              </b-form-checkbox>
            </b-form-group>

            <b-form-group
              label="主題："
              label-for="input-topic"
              label-cols-md="2"
              label-cols-lg="1"
              label-align-md="right"
            >
              <b-form-select
                id="input-topic"
                v-model="form.topic"
                :options="topics"
                required
              ></b-form-select>
            </b-form-group>

            <b-button class="mr-2" type="submit" variant="primary"
              >送出</b-button
            >
            <b-button type="reset" variant="light">清除</b-button>
          </b-form>
        </b-card>
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
}
</style>