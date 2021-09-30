<template>
  <div class="footer">
    <b-row align-v="center" align-h="center" class="text-center">
      <b-col cols="2" align-self="start">
        <img class="logo" src="../../assets/img/logo/logo.png" />
      </b-col>
      <b-col cols="1" align-self="start" class="title">
        <router-link to="/home">首頁</router-link></b-col
      >
      <b-col cols="1" align-self="start" class="title">訊息專區</b-col>
      <b-col cols="1" align-self="start" class="title">美味餐點</b-col>
      <b-col cols="1" align-self="start">
        <b-row>
          <b-col class="title">線上預訂</b-col>
        </b-row>
        <b-row>
          <b-col class="item">訂位</b-col>
        </b-row>
        <b-row>
          <b-col class="item">訂餐</b-col>
        </b-row>
      </b-col>
      <b-col cols="2" align-self="start" class="title">關於我們</b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
@mixin router-link($link-color) {
  color: $link-color;
  text-decoration: none;
  cursor: pointer;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  /* height: 15vh; */
  background-color: #001a00e5;
  opacity: 1;
  color: white;
  padding-top: 3vh;
  font-size: 12px;
  .logo {
    height: 100px;
  }
  .title,
  a {
    @include router-link(rgb(111, 131, 111));
    font-size: 16px;
    margin-bottom: 5px;
  }
  .title:hover,
  a:hover,
  .item:hover {
    @include router-link(rgb(136, 167, 136));
  }
  .item {
    font-weight: normal;
    @include router-link(rgb(111, 131, 111));
  }
}
</style>
