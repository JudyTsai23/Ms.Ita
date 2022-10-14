<template>
  <div class="section">
    <b-row align-h="center" class="pb-4b pb-lg-5">
      <!-- 圖片 -->
      <b-col cols="12" md="5" class="mb-3 mb-md-0">
        <b-img fluid :src="msg.image" />
      </b-col>
      <!-- 內文 -->
      <b-col cols="12" md="7">
        <div class="fz-content text-muted mb-3">
          <span class="fz-content-middle badge badge-primary mr-3">{{ msg.type }}</span>
          {{ msg.publishDate }}
        </div>
        <h3 class="wow pulse d-inline-block fz-title text-primary font-weight-bold mb-2" data-wow-delay="0.2s">
          {{ msg.title }}
        </h3>
        <div v-html="msg.content" class="fz-content text-primary-light"></div>
      </b-col>
    </b-row>
    <!-- 下方按鈕 -->
    <div class="text-center mt-5 mt-lg-6">
      <router-link to="/news" class="btn btn-secondary-dark fz-content-middle">
        返回列表
      </router-link>
    </div>
  </div>
</template>

<script src="./NewsDetail.js"></script>

<style lang="scss" scoped>
.row {
  border-bottom: 2px dotted $other-purple;
}
</style>
