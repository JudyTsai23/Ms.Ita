import AjaxService from "@/services/ajaxService.js";
import MenuCategories from "@/mock/menuCategories.js";

export default {
  name: "Menu",
  data() {
    return {
      // 當前餐點類別
      currentCategory: this.$route.params.category,
      // 類別
      categories: MenuCategories.getMenuCategories(),
      // 取得的餐點資料
      allMealsData: [],
      // 依次分類分組的餐點列表
      mealsList: {},
      // 當前點擊的餐點項目的資料
      currentMeal: {},
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    // 當前餐點種類的名稱
    currentCategoryName() {
      let currentCategoryData = this.categories.find((cate) => {
        return cate.slug == this.currentCategory;
      });
      return currentCategoryData.name;
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
      this.getCategoryMeals();
    },
    getCategoryMeals() {
      AjaxService.get(
        "/server/menu/" + this.currentCategory,
        (successResp) => {
          this.allMealsData = successResp.restData.map((item) => {
            let meal = {
              mealId: item.id,
              mealName: item.name,
              mealCategory: item.category,
              mealSubCategory: item.subCategory,
              mealPrice: item.price,
              mealDescription: item.description,
              mealIngredient: item.ingredient,
              mealNote: item.note,
              mealImage: item.image,
            };
            return meal;
          });
          this.mealsList = this.groupBy(this.allMealsData, "mealSubCategory");
        },
        (errorResp) => {
          console.log("查詢定分類餐點失敗!");
          console.log(errorResp);
        }
      );
    },
    groupBy(data, targetColumn) {
      return data.reduce(function(currResult, item) {
        (currResult[item[targetColumn]] = currResult[item[targetColumn]] || []).push(item);
        return currResult;
      }, {});
    },
    ChangeCurrentMeal(val) {
      this.currentMeal = val;
    },
  },
};
