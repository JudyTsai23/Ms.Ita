import Vue from "vue";
import Vuex from "vuex";
// custom class data
import MenuCategory from "@/classes/MenuCategory.js";
// service
import AjaxService from "@/services/ajaxService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 全域 overlay
    globalLoading: false,
    // 餐點類別物件
    menuCategory: null,
  },
  mutations: {
    // 設定值給 state
    set(state, [variable, value]) {
      state[variable] = value;
    },
    // 初始化餐點類別
    initMenuCategory(state, cateList) {
      state.menuCategory = new MenuCategory(cateList);
    },
  },
  actions: {
    // 查詢所有餐點種類
    queryMenuCategory(context) {
      if (!context.menuCategory) {
        new Promise((resolve, reject) => {
          AjaxService.get(
            "/server/mealCate/cate",
            (successResp) => {
              if (successResp.restData) {
                resolve(successResp.restData);
                console.log("查詢所有餐點類別成功");
              }
            },
            (errorResp) => {
              reject(errorResp);
              console.log("查詢所有餐點類別失敗");
            }
          );
        })
          .then((category) => {
            return new Promise((resolve, reject) => {
              AjaxService.get(
                "/server/mealCate/sub",
                (successResp) => {
                  if (successResp) {
                    let subCategoryList = successResp.restData;
                    context.commit("initMenuCategory", [category, subCategoryList]);
                    console.log("查詢所有餐點子類別成功");
                  }
                },
                (errorResp) => {
                  reject(errorResp);
                  console.log("查詢所有餐點子類別失敗");
                }
              );
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
});
