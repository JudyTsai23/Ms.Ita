import AjaxService from "@/services/ajaxService.js";

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
      // 訊息清單
      newsList: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getHomeNewsList();
    },
    // 取得首頁訊息
    getHomeNewsList() {
      let queryData = {
        count: 10,
        page: 1,
      };
      AjaxService.post(
        "/server/news/range",
        queryData,
        (successResp) => {
          if (successResp.restData) {
            let resultList = successResp.restData;
            console.log(resultList);
            this.newsList = resultList.map((item) => {
              let news = {
                newsType: item.type,
                newsTitle: item.title,
              };
              return news;
            });
            console.log("查詢特定範圍內的訊息成功!");
          }
        },
        (errorResp) => {
          console.log("查詢特定範圍內的訊息失敗!");
          console.log(errorResp);
        }
      );
    },
  },
};
