import News from "@/mock/news.js";

export default {
  name: "NewsList",
  data() {
    return {
      // 當前頁數
      currentPage: 1,
      // 資料總筆數
      rows: News.newsTotal(),
      // 每頁顯示筆數
      perPage: 5,
      // 置頂訊息
      msgTop: News.getNewsById(1), // TODO 置頂訊息邏輯待補
      // 訊息列表項目
      msgArr: News.getNews(),
    };
  },
  methods: {},
};
