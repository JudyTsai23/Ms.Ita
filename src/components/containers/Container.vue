<template>
  <div>
    <!-- Header -->
    <Header />
    <!-- Content -->
    <router-view></router-view>
    <!-- Footer -->
    <Footer />
    <global-overlay :is-show="$store.state.globalLoading"></global-overlay>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "Container",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss" scoped></style>
