<template>
  <div>
    <router-view></router-view>
    <global-overlay></global-overlay>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("queryMenuCategory");
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>