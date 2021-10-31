<template>
  <b-overlay
    variant="dark"
    opacity="0.55"
    spinner-variant="warning"
    :show="isShow"
    no-wrap
    fixed
  ></b-overlay>
</template>
<script>
export default {
  name: "Overlay",
  props: ["isShow"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
