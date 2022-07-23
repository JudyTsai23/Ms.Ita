import AjaxService from "@/services/ajaxService.js";

export default {
  name: "NewsDetail",
  data() {
    return {
      // 當前訊息id
      id: this.$route.params.id,
      // 訊息內容
      msg: {},
    };
  },
  mounted() {
    new this.$wow.WOW({ live: false }).init();

    this.init();
  },
  methods: {
    init() {
      this.getNewsData();
    },
    getNewsData() {
      AjaxService.get(
        "/server/news/" + this.id,
        (successResp) => {
          this.msg = successResp.restData;
        },
        (errorResp) => {
          console.log("取得訊息資料失敗!");
          console.log(errorResp);
        }
      );
    },
  },
};
