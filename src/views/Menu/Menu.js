import AjaxService from "@/services/ajaxService.js";

export default {
  name: "Menu",
  data() {
    return {
      // 當前餐點類別
      currentCategory: {},
      // 所有餐點類別
      categories: [],
      // 當前餐點類別依子類別分組的餐點列表
      mealsList: {},
      // 當前點擊的餐點項目的資料
      currentMeal: {},
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    "$route.params.category"(val, oldVal) {
      this.getCurrentCategory(val);
      this.getCategoryMeals();
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  methods: {
    init() {
      this.getCurrentCategory(this.$route.params.category);
      this.getMenuCategories();
      this.getCategoryMeals();
    },
    // 取得所有餐點類別 // FIXME 改成直接從vuex取資料
    getMenuCategories() {
      /**
       * this.categories=所有類別的資料
       * [
       *  {
       *   id
       *   name
       *   zhName
       *   icon
       *  }
       * ]
       */
    },
    // 取得當前餐點類別的id、中文名稱 // FIXME 直接從vuex取資料
    getCurrentCategory(slug) {
      /**
       * this.currentCategory=當前餐點類別的資料
       * {
       *  id
       *  zhName
       *  name (可有可無)
       *  icon (可有可無)
       * }
       */
    },
    // 取得當前類別的所有餐點
    getCategoryMeals() {
      this.$store.commit("set", ["globalLoading", true]);
      AjaxService.get(
        "/server/menu/" + this.currentCategory.id,
        (successResp) => {
          console.log(successResp.restData);
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
