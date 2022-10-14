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
      this.$store.commit("set", ["globalLoading", true]);
      AjaxService.get(
        "/server/news/" + this.id,
        (successResp) => {
          this.msg = successResp.restData;

          // 處理發布日期的日期值
          let publish_date = this.msg.publishDate.toString();
          let Y = publish_date.substr(0, 4),
            M = publish_date.substr(4, 2),
            D = publish_date.substr(6, 2);
          this.msg.publishDate = `${Y}-${M}-${D}`;

          this.$store.commit("set", ["globalLoading", false]);
          console.log("取得訊息資料成功!");
        },
        (errorResp) => {
          console.log("取得訊息資料失敗!");
          console.log(errorResp);
          alert("操作失敗，請重新讀取");
          this.$store.commit("set", ["globalLoading", false]);
          this.$router.push("/");
        }
      );
    },
  },
};
