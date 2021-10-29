export default {
	name: "About",
	data() {
		const now = new Date();
		const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

		return {
			introductions: [
				{ title: "食材講究", content: "特拉赫恩曾經提過，愛是人生的本性，就像太陽要放射光芒; 它是人類靈魂最愜意，最自然的受用; 沒有它，人就蒙昧而可悲。沒有享受過之歡樂的人，無異於白活一輩子，空受煎熬。希望各位能用心體會這段話。若能夠欣賞到食材的美，相信我們一定會對食材改觀。", image: require("@/assets/img/restaurant/ingredient.jpg") },
				{ title: "環境氛圍", content: "王夫之說過一句經典的名言，力行而後知之真。這句話決定了一切。車爾尼雪夫斯基曾經提到過，美的東西總是與人生的幸福和歡樂相連的。這句話把我們帶到了一個新的維度去思考這個問題。儘管舒適看似不顯眼，卻佔據了我的腦海。深入的探討舒適，是釐清一切的關鍵。", image: require("@/assets/img/restaurant/view01.jpg") },
				{ title: "餐廳理念", content: "如果別人做得到，那我也可以做到。可是，即使是這樣，服務的出現仍然代表了一定的意義。我們普遍認為，若能理解透徹核心原理，對其就有了一定的了解程度。透過逆向歸納，得以用最佳的策略去分析服務。我們可以很篤定的說，這需要花很多時間來嚴謹地論證。服務的出現，必將帶領人類走向更高的巔峰。", image: require("@/assets/img/restaurant/service.jpg") },
			],
			maxDate: today,
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
				checked: [],
			},
			topics: [{ text: "請選擇", value: null }, "餐廳環境", "關於餐點", "服務品質", "網站相關", "其他"],
			show: true,
		};
	},
	methods: {
		onSubmit(event) {
			event.preventDefault();
			alert(JSON.stringify(this.form));
		},
		onReset(event) {
			event.preventDefault();
			// Reset our form values
			this.form.name = "";
			this.form.phone = "";
			this.form.email = "";
			this.form.reply = "";
			this.form.topic = null;
			this.form.date = "";
			this.form.time = "";
			this.form.content = "";
			this.form.rating = null;
			this.form.checked = [];
			// Trick to reset/clear native browser form validation state
			this.show = false;
			this.$nextTick(() => {
				this.show = true;
			});
		},
	},
	computed: {},
};
