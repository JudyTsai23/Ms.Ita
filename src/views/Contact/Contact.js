import AjaxService from "@/services/ajaxService.js";
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
        { text: "午餐時段", value: "1" },
        { text: "晚餐時段", value: "2" },
      ],
      // 聯絡表單-回饋主題 選項
      topics: [
        { text: "請選擇", value: null, disabled: true },
        { text: "餐廳環境", value: "1" },
        { text: "關於餐點", value: "2" },
        { text: "服務品質", value: "3" },
        { text: "網站相關", value: "4" },
        { text: "其他", value: "5" },
      ],
      // 聯絡表單
      form: {
        customerName: "",
        phone: "",
        email: "",
        subscription: false,
        topic: null,
        date: "",
        period: "",
        opinion: "",
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
        customerName: "",
        phone: "",
        email: "",
        subscription: false,
        topic: null,
        date: "",
        period: "",
        opinion: "",
        rating: null,
      };

      this.$nextTick(() => {
        this.$refs.observer.reset();
        this.show = true;
      });
    },
    onSubmit() {
      console.log(this.form);
      this.$store.commit("set", ["globalLoading", true]);
      AjaxService.post(
        "/server/feedback",
        this.form,
        (successResp) => {
          this.$bvModal.show("formMsg");
          this.$store.commit("set", ["globalLoading", false]);
          console.log("意見回饋儲存成功!");
        },
        (errorResp) => {
          console.log("意見回饋儲存失敗!");
          console.log(errorResp);
        }
      );
    },
  },
  computed: {},
};
