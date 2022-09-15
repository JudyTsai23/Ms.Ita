import AjaxService from "@/services/ajaxService.js";

export default {
  name: "Menu",
  data() {
    return {
      // 當前餐點類別的id
      currentCateId: "",
      // 當前餐點類別的中文名稱
      currentCateZh: "",
      // 所有餐點類別
      categories: this.$store.state.menuCategory.getCategoryList(),
      // 當前餐點類別依子類別分組的餐點列表
      mealsList: {},
      // 當前點擊的餐點項目的資料
      currentMeal: {},
    };
  },
  mounted() {
    if (this.$store.state.menuCategory.isInit) {
      this.init();
    }
  },
  watch: {
    "$route.params.category"(val, oldVal) {
      this.getCategoryMeals(this.$route.params.category);
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    "$store.state.menuCategory.isInit": {
      handler() {
        this.categories = this.$store.state.menuCategory.getCategoryList();
        this.getCategoryMeals(this.$route.params.category);
      },
      deep: true,
    },
  },
  methods: {
    init() {
      this.getCategoryMeals(this.$route.params.category);
    },
    // 取得當前類別的id、中文名稱 以及類別中的所有餐點資料
    getCategoryMeals(slug) {
      this.$store.commit("set", ["globalLoading", true]);
      // 取得id、中文名稱
      this.currentCateId = this.$store.state.menuCategory.getCategoryIdBySlug(slug);
      this.currentCateZh = this.$store.state.menuCategory.getCategoryZhNameBySlug(slug);
      // 取得類別中的所有餐點
      AjaxService.get(
        "/server/menu/" + this.currentCateId,
        (successResp) => {
          this.mealsList = successResp.restData;
          this.$store.commit("set", ["globalLoading", false]);
          console.log("查詢特定分類餐點成功!");

          this.$nextTick(() => {
            new this.$wow.WOW({ live: false }).init();
          });
        },
        (errorResp) => {
          console.log("查詢特定分類餐點失敗!");
          console.log(errorResp);
          alert("操作失敗，請重新讀取");
          this.$store.commit("set", ["globalLoading", false]);
          this.$router.push("/");
        }
      );
    },
    // 切換顯示的餐點詳細內容(modal)
    ChangeCurrentMeal(val) {
      this.currentMeal = val;
    },
  },
};
