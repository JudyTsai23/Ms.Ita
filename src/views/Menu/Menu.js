import AjaxService from "@/services/ajaxService.js";

export default {
  name: "Menu",
  data() {
    return {
      // 當前餐點類別
      currentCategory: this.$route.params.category,
      // 類別
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
  computed: {
    // 當前餐點類別的名稱
    currentCategoryName() {
      let currentCategoryData = this.categories.find((cate) => {
        return cate.name == this.currentCategory;
      });
      return currentCategoryData.zhName;
    },
  },
  watch: {
    "$route.params.category"(val, oldVal) {
      this.currentCategory = val;
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
      this.getMenuCategories();
      this.getCategoryMeals();
    },
    // 取得所有餐點類別
    getMenuCategories() {
      this.$store.commit("set", ["globalLoading", true]);
      AjaxService.get(
        "/server/mealCate/cate",
        (successResp) => {
          this.categories = successResp.restData;
          console.log("查詢所有餐點類別成功!");
        },
        (errorResp) => {
          console.log("查詢所有餐點類別失敗!");
          console.log(errorResp);
          alert("操作失敗，請重新讀取");
          this.$router.push("/");
        }
      );
    },
    // 取得當前類別的所有餐點
    getCategoryMeals() {
      this.$store.commit("set", ["globalLoading", true]);
      AjaxService.get(
        "/server/menu/" + this.currentCategory,
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
