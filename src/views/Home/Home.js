export default {
  name: "Home",
  data() {
    return {
      slideTitle: "Italian restaurant",
      slideText: "Enjoy food.  Relax.  Have a Good day.",
      slideImg: ["02.jpg", "03.jpg", "04.jpg"],
      categoryImg: ["pizza.jpg", "pasta.jpg", "cake.jpg", "coffee.jpg"],
    };
  },
  mounted() {
    this.$store.commit("isShowLoading", true);
    setTimeout(() => {
      // 測試用
      this.$store.commit("isShowLoading", false);
    }, 5000);
  },
  methods: {},
};
