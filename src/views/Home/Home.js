export default {
  name: "Home",
  data() {
    return {
      // top slide
      slideImg: ["02.jpg", "03.jpg", "04.jpg"],
      // 四個圈圈
      categoryImg: [
        {
          label: "舒適的用餐環境",
          pic: "restaurant/view01.jpg",
          link: "#",
        },
        { label: "美味的精緻餐點", pic: "other/pasta.jpg", link: "#" },
        { label: "親切的服務態度", pic: "restaurant/service.jpg", link: "#" },
        { label: "專業的服務態度", pic: "other/coffee.png", link: "#" },
      ],
      // 訊息專區
      msgArr: [
        {
          title: "[活動]",
          content: "當月壽星打卡即可獲得精美小禮!",
          link: "#",
        },
        { title: "[活動]", content: "雙十國慶優惠活動開始囉!", link: "#" },
        {
          title: "[活動]",
          content: "五倍券優惠禮，消費滿300折50元!",
          link: "#",
        },
        {
          title: "[公告]",
          content: "即日起營業時間小幅修改，詳情請點連結。",
          link: "#",
        },
        {
          title: "[活動]",
          content:
            "打卡送飲品! 凡消費加打卡，tag店家帳號，免費送一杯飲品! 不限金額品項，有打有送!",
          link: "#",
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
