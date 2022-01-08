<template>
  <b-pagination
    v-model="parentValue"
    :total-rows="totalRows"
    :per-page="perPage"
    first-number
    pills
    align="center"
    class="fz-content-middle"
    :class="currColor"
  >
    <template #prev-text><b-icon-chevron-left /></template>
    <template #next-text><b-icon-chevron-right /></template>
    <template #last-text><b-icon-chevron-double-right /></template>
  </b-pagination>
</template>

<script>
export default {
  name: "Pagination",
  props: [
    // 當前頁數
    "currPage",
    // 資料總筆數
    "totalRows",
    // 每頁顯示筆數
    "perPage",
    // 當前頁的色塊顏色
    "currColor",
  ],
  data() {
    return {};
  },
  computed: {
    // v-model的值
    parentValue: {
      get() {
        return this.currPage;
      },
      set(val) {
        this.$emit("update:currPage", val);
      },
    },
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/mixins/breakpoints";

// 頁碼樣式調整-去除外框、間距拉開
.pagination {
  .page-link {
    color: $primary-darker;
    border: none;
    margin: 0 10px;
    @include media-breakpoint-up(md) {
      margin: 0 20px;
    }
  }
}

// 當前頁的底色塊及文字顏色設定 (預設為primary)
.pagination.primary-light .page-item.active .page-link {
  background-color: $primary-light;
  color: $primary-darker;
}
.pagination.primary-lighter .page-item.active .page-link {
  background-color: $primary-lighter;
  color: $primary-darker;
}
.pagination.primary-dark .page-item.active .page-link {
  background-color: $primary-dark;
}
.pagination.primary-darker .page-item.active .page-link {
  background-color: $primary-darker;
}
.pagination.secondary .page-item.active .page-link {
  background-color: $secondary;
  color: $primary-darker;
}
.pagination.secondary-light .page-item.active .page-link {
  background-color: $secondary-light;
  color: $primary-darker;
}
.pagination.secondary-dark .page-item.active .page-link {
  background-color: $secondary-dark;
}
.pagination.other .page-item.active .page-link {
  background-color: $other-purple;
  color: $primary-darker;
}
</style>