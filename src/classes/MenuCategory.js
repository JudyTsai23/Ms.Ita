class MenuCategory {
  constructor(cateList) {
    this.category = cateList[0];
    this.subCategory = cateList[1];
  }

  // 取得類別清單
  getCategoryList() {
    return this.category;
  }

  // 依據slug取得對應的類別id
  getCategoryIdBySlug(slug) {
    let category = this.category.find((item) => item.name === slug);
    if (category) {
      return category.id;
    }
    return 0;
  }

  // 依據slug取得對應的類別中文名稱
  getCategoryZhNameBySlug(slug) {
    let category = this.category.find((item) => item.name === slug);
    if (category) {
      return category.zhName;
    }
    return "";
  }
}
export default MenuCategory;
