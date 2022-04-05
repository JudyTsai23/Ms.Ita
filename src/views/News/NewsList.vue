<template>
  <div class="section">
    <template v-for="item in msgArr">
      <!-- 置頂訊息 -->
      <template v-if="item.isTop == 1">
        <b-row :key="item.id" align-h="center" class="pb-5 pb-lg-7">
          <b-col cols="10" md="4" class="mb-3 mb-md-0">
            <router-link :to="`/news/${item.id}`">
              <b-img fluid :src="item.image" />
            </router-link>
          </b-col>
          <b-col cols="12" md="8">
            <router-link :to="`/news/${item.id}`">
              <h3 class="fz-title text-primary font-weight-bold mb-2">
                {{ item.title }}
              </h3>
            </router-link>
            <div class="fz-content text-muted mb-3">{{ item.publishTime }}</div>
            <p v-html="nl2br(item.description)" class="fz-content text-primary-light"></p>
            <router-link :to="`/news/${item.id}`" class="text-secondary-dark small mt-4">
              more
              <b-icon-arrow-right-square-fill font-scale="1.25" />
            </router-link>
          </b-col>
        </b-row>
      </template>
      <!-- 一般訊息 -->
      <template v-else>
        <b-row :key="item.id" align-h="center" class="py-4b py-md-5">
          <b-col cols="10" md="3" class="mb-2 mb-md-0">
            <router-link :to="`/news/${item.id}`">
              <b-img fluid :src="item.image" />
            </router-link>
          </b-col>
          <b-col cols="12" md="9">
            <router-link :to="`/news/${item.id}`">
              <h3 class="fz-title text-primary font-weight-bold">
                {{ item.title }}
              </h3>
            </router-link>
            <div class="fz-content text-muted mb-3">{{ item.publishTime }}</div>
            <p v-html="nl2br(item.description)" class="fz-content text-primary-light"></p>
            <router-link :to="`/news/${item.id}`" class="text-secondary-dark small mt-4">
              more
              <b-icon-arrow-right-square-fill font-scale="1.25" />
            </router-link>
          </b-col>
        </b-row>
      </template>
    </template>
    <!-- 分頁頁碼 -->
    <global-pagination :curr-page.sync="currentPage" :total-rows="rows" :per-page="perPage" curr-color="secondary-light" class="mt-5 mt-md-7" />
  </div>
</template>

<script src="./NewsList.js"></script>

<style lang="scss" scoped>
.row {
  border-bottom: 2px dotted $other-purple;
}
</style>
