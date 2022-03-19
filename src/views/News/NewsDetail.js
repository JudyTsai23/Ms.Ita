import News from "@/mock/news.js";

export default {
  name: "NewsDetail",
  data() {
    const id = this.$route.params.id;
    return {
      // 訊息內容
      msg: News.getNewsById(id),
    };
  },
  methods: {},
};
