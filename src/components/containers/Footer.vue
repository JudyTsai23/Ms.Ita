<template>
  <div class="footer">
    <b-row>
      <b-col>
        <img class="logo" src="../../assets/img/logo/logo.png" />
      </b-col>
      <b-col> <router-link to="/home">首頁</router-link></b-col>
      <b-col>訊息專區</b-col>
      <b-col>美味餐點</b-col>
      <b-col>
        <b-row>
          <b-col><h5>線上預訂</h5></b-col>
        </b-row>
        <b-row>
          <b-col>訂位</b-col>
        </b-row>
        <b-row>
          <b-col>訂餐</b-col>
        </b-row>
      </b-col>
      <b-col>關於我們</b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 15vh;
  background-color: #001a00e5;
  opacity: 1;
  color: white;
  padding-top: 20px;
}
.logo {
  height: 150px;
}
</style>
