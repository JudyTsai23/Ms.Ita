<template>
  <div>
    <b-navbar class="nav-bar" toggleable="md" type="dark" fixed="top">
      <b-navbar-brand to="/home">
        <img class="logo" src="../../assets/img/logo/logo_final_horizontal.png" alt="Ms.Ita" />
      </b-navbar-brand>
      <!-- <b-navbar-brand to="/home">Ms. Ita</b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mr-auto">
          <b-nav-item class="mr-3 mr-lg-5" to="/home">首頁</b-nav-item>
          <b-nav-item class="mr-3 mr-lg-5" to="/news">訊息專區</b-nav-item>
          <b-nav-item-dropdown class="mr-3 mr-lg-5 dropdown-list" text="美味餐點">
            <div v-for="category in menuCategories" :key="category.slug">
              <b-dropdown-item variant="primary" active-class="bg-primary-lighter" :to="`/menu/${category.name}`">{{ category.zhName }}</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown class="mr-3 mr-lg-5" text="線上預訂">
            <b-dropdown-item variant="primary" href="https://inline.app/zh/reserve_with_google" target="_blank">訂位</b-dropdown-item>
            <b-dropdown-item variant="primary" href="https://inline.app/zh/onlineorder" target="_blank">訂餐</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item class="mr-3 mr-lg-5" to="/about">關於我們</b-nav-item>
          <b-nav-item class="mr-3 mr-lg-5" to="/contact">意見回饋</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      menuCategories: this.$store.state.menuCategory.getCategoryList(),
    };
  },
  watch: {
    "$store.state.menuCategory.isInit": {
      handler() {
        this.menuCategories = this.$store.state.menuCategory.getCategoryList();
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
.nav-bar {
  background-color: #1b1e20ee;
}
.logo {
  height: 40px;
}
</style>
