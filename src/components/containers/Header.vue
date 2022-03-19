<template>
  <div>
    <b-navbar class="nav-bar" toggleable="md" type="dark" fixed="top">
      <b-navbar-brand to="/home">
        <img class="logo" src="../../assets/img/logo/logo2-bold.svg" alt="Ms.Ita" />
      </b-navbar-brand>
      <!-- <b-navbar-brand to="/home">Ms. Ita</b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mr-auto">
          <b-nav-item class="mr-5" to="/home">首頁</b-nav-item>
          <b-nav-item class="mr-5" to="/news">訊息專區</b-nav-item>
          <b-nav-item-dropdown class="mr-5 dropdown-list" text="美味餐點">
            <div v-for="(item, key) in menuCategories" :key="key">
              <b-dropdown-item variant="primary" :to="`/menu/${key}`">{{ item.name }}</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown class="mr-5" text="線上預訂">
            <b-dropdown-item variant="primary">訂位</b-dropdown-item>
            <b-dropdown-item variant="primary">訂餐</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item class="mr-5" to="/about">關於我們</b-nav-item>
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
      // 類別
      menuCategories: {
        salad: { name: "沙拉", icon: "Vegetables" },
        pasta: { name: "義大利麵", icon: "Spaghetti" },
        pizza: { name: "披薩", icon: "Pizza" },
        dessert: { name: "甜點", icon: "Desserts" },
        "soft-drinks": { name: "飲料", icon: "Coffee" },
        drinks: { name: "酒類", icon: "Wine" },
      },
    };
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
