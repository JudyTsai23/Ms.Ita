<template>
  <div class="section">
    <b-row align-h="center" class="pb-4b pb-lg-5">
      <!-- 圖片 -->
      <b-col cols="12" md="5" class="mb-3 mb-md-0">
        <b-img fluid :src="msg.img" />
      </b-col>
      <!-- 內文 -->
      <b-col cols="12" md="7">
        <h3 class="fz-title text-primary font-weight-bold mb-2">
          {{ msg.title }}
        </h3>
        <div class="fz-content text-muted mb-3">{{ msg.created_at }}</div>
        <p v-html="msg.content" class="fz-content text-primary-light"></p>
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
