<template>
  <div>
    <b-navbar class="nav-bar" toggleable="md" type="dark">
      <b-navbar-brand to="/home">
        <img class="logo" src="../../assets/img/logo/logo.png" alt="Ms.Ita" />
      </b-navbar-brand>
      <!-- <b-navbar-brand to="/home">Ms. Ita</b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mr-auto">
          <b-nav-item class="mr-5" to="/home">首頁</b-nav-item>
          <b-nav-item class="mr-5">訊息專區</b-nav-item>
          <b-nav-item-dropdown class="mr-5" text="美味餐點" right>
            <b-dropdown-item variant="secondary">主菜</b-dropdown-item>
            <b-dropdown-item variant="secondary">沙拉</b-dropdown-item>
            <b-dropdown-item variant="secondary">甜點</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item class="mr-5">訂位</b-nav-item>
          <b-nav-item class="mr-5">訂餐</b-nav-item>
          <b-nav-item class="mr-5">關於我們</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.nav-bar {
  background-color: #1b1e20ee;
}
.logo {
  height: 50px;
}
</style>
