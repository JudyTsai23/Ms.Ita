import Pagination from "@/components/common/Pagination.vue";

export default {
  name: "Menu",
  components: {
    "gobal-pagination": Pagination,
  },
  data() {
    return {
      // 類別
      categories: {
        salad: { name: "沙拉", icon: "Vegetables" },
        pasta: { name: "義大利麵", icon: "Spaghetti" },
        pizza: { name: "披薩", icon: "Pizza" },
        dessert: { name: "甜點", icon: "Desserts" },
        "soft-drinks": { name: "飲料", icon: "Coffee" },
        drinks: { name: "酒類", icon: "Wine" },
      },
      meals: {
        紅醬: [
          {
            name: "茄汁海鮮扁麵",
            price: "200",
            image: "https://source.unsplash.com/BhEXW19sW1M/500x450",
            description:
              "長期接歡這個額，謝您，看了不過，雜誌可以的是比較候好累強迫以程度，來想我現在直接，大家不偷說。那時候，出來看一下，好感動有要知道我喔喔長的，意義最比較有先時候，人會出，真的不了的生活真的。的貓種東西覺得這的超級，這兩以為桃魔法",
            content: "香酥馬芝拉條 / 馬鈴薯皮 / 紐約辣雞翅 / 田納西芝麻雞柳 / 酥炸魚柳條 / 酥炸洋蔥圈",
            note: "【註】題的呀我主角除了，讓我要交換的覺偷偷的帳號偷快部分",
          },
          {
            name: "茄汁鮮蔬義大利麵",
            price: "200",
            image: "https://source.unsplash.com/BhEXW19sW1M/500x450",
            description: "長期接歡這個額，謝您，看了不過，雜誌可以的是比較候好累強迫以程度，來想我現超級，這兩以為桃魔法",
            content: "香酥馬芝拉條 / 馬鈴薯皮 / 紐約辣雞翅",
            note: "",
          },
          {
            name: "茄汁塘揚義大利麵",
            price: "200",
            image: "https://source.unsplash.com/OC3lZI9P6kU/500x450",
            description:
              "長期接歡這個額，謝您，看了不過，雜誌想我現在直接，大家不偷說。那時候，出來看一下，好感動有要知道我喔喔長的，意義最比較有先時候，人會出，真的不了的生活真的。的貓種東西覺得這的超級，這兩以為桃魔法",
            content: "香酥馬芝拉條 / 馬鈴薯皮 / 紐約辣雞翅 / 田納西芝麻雞柳",
            note: "",
          },
          {
            name: "茄汁焗烤筆管麵",
            price: "200",
            image: "https://source.unsplash.com/flFd8L7_B3g/500x450",
            description:
              "長期接歡這個額，謝您，看來想我現在直接，大家不偷說。那時候，出來看一下，好感動有要知道我喔喔長的，意義最比較有先時候，人會出，真的不了的生活真的。的貓種東西覺得這的超級，這兩以為桃魔法",
            content: "香酥馬芝拉條 / 馬鈴薯皮",
            note: "【註】題的呀我主角除了，讓我要交換的覺偷偷的帳號偷快部分",
          },
          {
            name: "茄汁辣味義大利麵",
            price: "200",
            image: "https://source.unsplash.com/TtadVut4jsg/500x450",
            description:
              "長期接歡這個額，謝您，看了不過，雜誌可以的是比較候好累強迫以程度，來想我現在直接，大家不偷說。那時候，出來看一下，好感動有要知道我喔喔長的，意義最比較有先時候，人會出，真的不了的生活真的。的貓種東西覺得這的超級，這兩以為桃魔法",
            content: "香酥馬芝拉條 / 馬鈴薯皮 / 紐約辣雞翅 / 田納西芝麻雞柳 / 酥炸魚柳條 / 酥炸洋蔥圈",
            note: "【註】題的呀我主角除了，讓我要交換的覺偷偷的帳號偷快部分",
          },
        ],
        白醬: [
          {
            name: "白醬海鮮義大利麵",
            price: "200",
            image: "https://source.unsplash.com/BhEXW19sW1M/500x450",
            description:
              "長期接歡這個額，謝您，看了不過，雜誌可以的是比較候好累強迫以程度，來想我現在直接，大家不偷說。那時候，出來看一下，好感動有要知道我喔喔長的，意義最比較有先時候，人會出，真的不了的生活真的。的貓種東西覺得這的超級，這兩以為桃魔法",
            content: "香酥馬芝拉條 / 馬鈴薯皮 / 紐約辣雞翅 / 田納西芝麻雞柳 / 酥炸魚柳條 / 酥炸洋蔥圈",
            note: "【註】題的呀我主角除了，讓我要交換的覺偷偷的帳號偷快部分",
          },
          {
            name: "白醬鮮蔬義大利麵",
            price: "200",
            image: "https://source.unsplash.com/BhEXW19sW1M/500x450",
            description:
              "長期接歡這個額，謝您，看了不過，雜誌可以的是比較候好累強迫以程度，來想我現在直接，大家不偷說。那時候，出來看一下，好感動有要知道我喔喔長的，意義最比較有先時候，人會出，真的不了的生活真的。的貓種東西覺得這的超級，這兩以為桃魔法",
            content: "香酥馬芝拉條 / 馬鈴薯皮 / 紐約辣雞翅 / 田納西芝麻雞柳 / 酥炸魚柳條 / 酥炸洋蔥圈",
            note: "【註】題的呀我主角除了，讓我要交換的覺偷偷的帳號偷快部分",
          },
          {
            name: "白醬塘揚義大利麵",
            price: "200",
            image: "https://source.unsplash.com/BhEXW19sW1M/500x450",
            description:
              "長期接歡這個額，謝您，看了不過，雜誌可以的是比較候好累強迫以程度，來想我現在直接，大家不偷說。那時候，出來看一下，好感動有要知道我喔喔長的，意義最比較有先時候，人會出，真的不了的生活真的。的貓種東西覺得這的超級，這兩以為桃魔法",
            content: "香酥馬芝拉條 / 馬鈴薯皮 / 紐約辣雞翅 / 田納西芝麻雞柳 / 酥炸魚柳條 / 酥炸洋蔥圈",
            note: "【註】題的呀我主角除了，讓我要交換的覺偷偷的帳號偷快部分",
          },
          {
            name: "白醬焗烤筆管麵",
            price: "200",
            image: "https://source.unsplash.com/aeESmmFKH0M/500x450",
            description:
              "長期接歡這個額，謝您，看了不過，雜誌可以的是比較候好累強迫以程度，來想我現在直接，大家不偷說。那時候，出來看一下，好感動有要知道我喔喔長的，意義最比較有先時候，人會出，真的不了的生活真的。的貓種東西覺得這的超級，這兩以為桃魔法",
            content: "香酥馬芝拉條 / 馬鈴薯皮 / 紐約辣雞翅 / 田納西芝麻雞柳 / 酥炸魚柳條 / 酥炸洋蔥圈",
            note: "【註】題的呀我主角除了，讓我要交換的覺偷偷的帳號偷快部分",
          },
        ],
      },
      // 當前頁數
      currentPage: 1,
      // 資料總筆數
      rows: 100,
      // 每頁顯示筆數
      perPage: 4,
    };
  },
};
