<template>
  <div>
    <Header />
    <Footer />
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
<style scoped></style>
