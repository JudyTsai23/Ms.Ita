<template>
  <div class="section">
    <b-row align-h="center" class="pb-4b pb-lg-7 border-bottom border-other">
      <b-col cols="12" md="5" class="mb-3 mb-md-0">
        <router-link :to="`/news/${msg.id}`">
          <b-img fluid :src="msg.image" />
        </router-link>
      </b-col>
      <b-col cols="12" md="7">
        <router-link :to="`/news/${msg.id}`">
          <h3 class="fz-title text-primary font-weight-bold mb-2">
            {{ msg.title }}
          </h3>
        </router-link>
        <div class="fz-content text-muted mb-3">{{ msg.created_at }}</div>
        <p v-html="msg.content" class="fz-content text-primary-light"></p>
      </b-col>
    </b-row>
    <div class="text-center mt-5 mt-lg-6">
      <router-link to="/news" class="btn btn-secondary-dark">
        返回
      </router-link>
    </div>
  </div>
</template>

<script src="./NewsDetail.js"></script>

<style lang="scss" scoped>
.row {
  border-bottom-style: dotted !important;
  border-bottom-width: 2px !important;
}
</style>