export default {
  name: "Home",
  data() {
    return {
      // top slide
      slideTitle: "Italian restaurant",
      slideText: "Enjoy food.  Relax.  Have a Good day.",
      slideImg: ["02.jpg", "03.jpg", "04.jpg"],
      // 四個圈圈
      categoryImg: ["pizza.jpg", "pasta.jpg", "cake.jpg", "coffee.jpg"],
      // 訊息專區
      msgArr: [
        { title: "[活動]", content: "雙十國慶優惠活動開始囉!", href: "#" },
        {
          title: "[活動]",
          content: "五倍券優惠禮，消費滿300折50元!",
          href: "#",
        },
        {
          title: "[公告]",
          content: "即日起營業時間小幅修改，詳情請點連結。",
          href: "#",
        },
        {
          title: "[活動]",
          content:
            "打卡送飲品! 凡消費加打卡，tag店家帳號，免費送一杯飲品! 不限金額品項，有打有送!",
          href: "#",
        },
      ],
    };
  },
  mounted() {
    this.$store.commit("isShowLoading", true);
    setTimeout(() => {
      // 測試用
      this.$store.commit("isShowLoading", false);
    }, 5000);
  },
  methods: {},
};
