import AjaxService from "@/services/ajaxService.js";

export default {
  name: "NewsList",
  data() {
    return {
      // 當前頁數
      currentPage: 1,
      // 資料總筆數
      rows: 0,
      // 每頁顯示筆數
      perPage: 5,
      // 訊息
      msgArr: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getRangeNews();
    },
    getRangeNews() {
      let queryData = {
        count: this.perPage,
        page: this.currentPage,
      };
      AjaxService.post(
        "/server/news/range",
        queryData,
        (successResp) => {
          this.msgArr = successResp.restData.list;
          this.rows = successResp.restData.total;
          console.log(this.rows);
        },
        (errorResp) => {
          console.log("查詢特定範圍內的訊息失敗!");
          console.log(errorResp);
        }
      );
    },
    nl2br(str) {
      let result = str.replace(/\\n|\\r\\n/g, "<br/>");
      return result;
    },
    changePage() {
      this.getRangeNews();
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
