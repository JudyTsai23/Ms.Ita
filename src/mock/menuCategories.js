const allMenuCategories = [
  { slug: "salad", name: "沙拉", icon: "Vegetables" },
  { slug: "pasta", name: "義大利麵", icon: "Spaghetti" },
  { slug: "pizza", name: "披薩", icon: "Pizza" },
  { slug: "dessert", name: "甜點", icon: "Desserts" },
  { slug: "softdrinks", name: "飲料", icon: "Coffee" },
  { slug: "drinks", name: "酒類", icon: "Wine" },
];
const MenuCategories = {
  // 取得所有餐點分類
  getMenuCategories() {
    let menuCategoriesList = [];
    allMenuCategories.forEach((item) => {
      let cateItem = {
        slug: item.slug,
        name: item.name,
        icon: item.icon,
      };
      menuCategoriesList.push(cateItem);
    });
    return menuCategoriesList;
  },
  // 取得所有餐點分類的slug和名稱
  getMenuCategoriesName() {
    let menuCategoriesList = [];
    allMenuCategories.forEach((item) => {
      let cateItem = {
        slug: item.slug,
        name: item.name,
      };
      menuCategoriesList.push(cateItem);
    });
    return menuCategoriesList;
  },
};

export default MenuCategories;
