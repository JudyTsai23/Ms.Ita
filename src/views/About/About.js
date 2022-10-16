export default {
  name: "About",
  data() {
    return {
      // 餐廳介紹文字
      introductions: [
        {
          title: "食材講究",
          content: "Ms.Ita 為了讓大家品味義大利道地的家常饗宴，又能兼顧健康均衡，我們嚴格選定食材產地，不添加任何多餘的東西，堅持手工製作，並持續研發改良，讓大家享受到迷人的義大利美味。",
          image: require("@/assets/img/restaurant/ingredient2.jpg"),
        },
        {
          title: "環境氛圍",
          content: "我們致力於將義大利氛圍，原封不動地帶來店內，讓客人彷彿置身於義大利巷弄中的餐廳，享受到舒適放鬆的氛圍，以及美好的義式情調。",
          image: require("@/assets/img/restaurant/restaurant.jpg"),
        },
        {
          title: "餐廳理念",
          content: "熱愛義大利風情的 Ms.Ita，希望在台灣也可以體驗到義大利的美好，不論是店內氛圍還是道地的料理佳餚，我們都將持續努力，不斷推陳出新，帶給大家前所未有的義式體驗。",
          image: require("@/assets/img/restaurant/concept.jpg"),
        },
      ],
    };
  },
  mounted() {
    this.$store.commit("set", ["globalLoading", false]);
    new this.$wow.WOW({ live: false }).init();
  },
};
