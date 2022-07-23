import FormItem from "./FormItem";
export default {
  components: {
    FormItem,
  },

  name: "Contact",
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return {
      // 聯絡表單-用餐時間 可選擇的最大日期
      maxDate: today,
      // 聯絡表單-用餐時段 選項
      timeItems: [
        { text: "午餐時段", value: "lunch" },
        { text: "晚餐時段", value: "dinner" },
      ],
      // 聯絡表單-回饋主題 選項
      topics: [{ text: "請選擇", value: null, disabled: true }, "餐廳環境", "關於餐點", "服務品質", "網站相關", "其他"],
      // 聯絡表單
      form: {
        name: "",
        phone: "",
        email: "",
        reply: "",
        topic: null,
        date: "",
        time: "",
        content: "",
        rating: null,
      },
      show: true,
    };
  },
  mounted() {
    new this.$wow.WOW({ live: false }).init();
  },
  methods: {
    onReset() {
      // Trick to reset/clear native browser form validation state
      this.show = false;
      // Reset our form values
      this.form = {
        name: "",
        phone: "",
        email: "",
        reply: "",
        topic: null,
        date: "",
        time: "",
        content: "",
        rating: null,
      };

      this.$nextTick(() => {
        this.$refs.observer.reset();
        this.show = true;
      });
    },
    onSubmit() {
      alert(JSON.stringify(this.form));
    },
  },
  computed: {},
};
