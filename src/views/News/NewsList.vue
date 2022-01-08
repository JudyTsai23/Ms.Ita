<template>
  <div class="section">
    <!-- 置頂訊息 -->
    <b-row align-h="center" class="pb-5 pb-lg-7 border-bottom border-other">
      <b-col cols="10" md="4" class="mb-3 mb-md-0">
        <router-link :to="`/news/${msgTop.id}`">
          <b-img fluid :src="msgTop.image" />
        </router-link>
      </b-col>
      <b-col cols="12" md="8">
        <router-link :to="`/news/${msgTop.id}`">
          <h3 class="fz-title text-primary font-weight-bold mb-2">
            {{ msgTop.title }}
          </h3>
        </router-link>
        <div class="fz-content text-muted mb-3">{{ msgTop.created_at }}</div>
        <p
          v-html="msgTop.description"
          class="fz-content text-primary-light"
        ></p>
        <router-link
          :to="`/news/${msgTop.id}`"
          class="text-secondary-dark small mt-4"
        >
          more <b-icon-arrow-right-square-fill font-scale="1.25" />
        </router-link>
      </b-col>
    </b-row>
    <!-- 訊息列表 -->
    <b-row
      align-h="center"
      v-for="item in msgArr"
      :key="item.id"
      class="py-4b py-md-5"
    >
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
        <div class="fz-content text-muted mb-3">{{ item.created_at }}</div>
        <p v-html="item.description" class="fz-content text-primary-light"></p>
        <router-link
          :to="`/news/${item.id}`"
          class="text-secondary-dark small mt-4"
        >
          more <b-icon-arrow-right-square-fill font-scale="1.25" />
        </router-link>
      </b-col>
    </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      hide-goto-end-buttons
      pills
      align="center"
      class="mt-5 mt-md-7"
    >
      <template #prev-text><b-icon-chevron-left /></template>
      <template #next-text><b-icon-chevron-right /></template>
    </b-pagination>
  </div>
</template>

<script src="./NewsList.js"></script>

<style lang="scss" scoped>
.row {
  border-bottom-style: dotted !important;
  border-bottom-width: 2px !important;
}
</style>