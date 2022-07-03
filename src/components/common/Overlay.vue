<template>
  <b-overlay variant="dark" opacity="0.55" spinner-variant="warning" :show="isShow" no-wrap fixed></b-overlay>
</template>
<script>
export default {
  name: "Overlay",
  data() {
    return {
      isShow: false,
    };
  },
  watch: {
    "$store.state.globalLoading"() {
      this.isShow = this.$store.state.globalLoading;
    },
  },
};
</script>
<style lang="scss" scoped></style>
