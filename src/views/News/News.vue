<template>
  <div>
    <global-title
      title="訊息專區"
      overlay="#466050"
      :image="require(`@/assets/img/banner/news-hero.jpg`)"
    />
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "News",
};
</script>

<style lang="scss" scoped>
</style>