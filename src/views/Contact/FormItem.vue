
<template>
  <!-- input驗證 -->
  <validation-provider
    :name="fieldName"
    :rules="rules"
    v-slot="validationContext"
  >
    <!-- 排版 -->
    <b-form-group
      :label="label"
      :label-for="`input-${fieldName}`"
      label-cols-md="3"
      label-align-md="right"
      :description="description"
      :class="groupClass"
    >
      <!-- 預留前方內容 -->
      <slot name="before"></slot>

      <!-- 各種input情況 ------ -->
      <!-- TODO:希望能用slot寫在component外，不用if一直判斷 -->
      <slot name="default">
        <!-- 如果是select -->
        <b-form-select
          v-if="inputType == 'select'"
          :id="`input-${fieldName}`"
          v-model="parentValue"
          :options="options"
          :state="getValidationState(validationContext)"
        ></b-form-select>

        <!-- 如果是radio -->
        <b-form-radio-group
          v-else-if="inputType == 'radio'"
          :id="`input-${fieldName}`"
          v-model="parentValue"
          :options="options"
          name="`radio-${fieldName}`"
          :state="getValidationState(validationContext)"
          :class="{ 'is-invalid': parentValue == '' }"
        >
        </b-form-radio-group>
        <!-- 如果是date -->
        <b-form-datepicker
          v-else-if="inputType == 'date'"
          :id="`input-${fieldName}`"
          v-model="parentValue"
          :max="datepickerMax"
          :date-format-options="{
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            weekday: 'short',
          }"
          locale="zh"
          placeholder="請選擇日期"
          :state="getValidationState(validationContext)"
        ></b-form-datepicker>

        <!-- 如果是rating -->
        <b-form-rating
          v-else-if="inputType == 'rating'"
          :id="`input-${fieldName}`"
          v-model="parentValue"
          icon-empty="heart"
          icon-half="heart-half"
          icon-full="heart-fill"
          variant="secondary-dark"
        ></b-form-rating>

        <!-- 如果是textarea -->
        <b-form-textarea
          v-else-if="inputType == 'textarea'"
          :id="`input-${fieldName}`"
          v-model="parentValue"
          :placeholder="placeholder"
          rows="3"
          max-rows="8"
          :state="getValidationState(validationContext)"
        ></b-form-textarea>

        <!-- 預設為自填input的type -->
        <b-form-input
          v-else
          :id="`input-${fieldName}`"
          v-model="parentValue"
          :type="inputType"
          :placeholder="placeholderStr"
          :state="getValidationState(validationContext)"
        ></b-form-input>
        <!-- 各種input情況 end--- -->

        <!-- 驗證錯誤 顯示訊息 -->
        <b-form-invalid-feedback :id="`input-${fieldName}-feedback`">
          {{ validationContext.errors[0] }}
        </b-form-invalid-feedback>
      </slot>
      <!-- 預留後方內容 -->
      <slot name="after"></slot>
    </b-form-group>
  </validation-provider>
</template>


<script>
export default {
  name: "FormItem",
  props: {
    value: {
      required: true,
    },
    // <b-form-group>的class
    groupClass: {
      type: String,
    },
    // 是否顯示label文字
    noLabel: {
      type: Boolean,
    },
    // input的類型(email、select等)
    inputType: {
      type: String,
      default: "text",
    },
    // input標題
    fieldName: {
      type: String,
      required: true,
    },
    // placeholder
    placeholder: {
      type: String,
    },
    // 下方說明文字
    description: {
      type: String,
    },
    // 是否必填
    required: {
      type: Boolean,
    },
    // select的選項(如果inputType是select就需要)
    options: {
      type: Array,
    },
    // datepicker可選擇的最大日期(如果inputType是date就需要)
    datepickerMax: {
      type: Date,
    },
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  },
  computed: {
    // v-model的值
    parentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("update:value", val);
      },
    },
    label() {
      if (this.noLabel) {
        return "";
      }
      if (this.required) {
        return `* ${this.fieldName}：`;
      }
      return `${this.fieldName}：`;
    },
    placeholderStr() {
      return this.placeholder ? this.placeholder : `請輸入${this.fieldName}`;
    },
    // 驗證條件
    rules() {
      let rule = this.inputType == "email" ? "email" : "";
      if (this.required) {
        rule += rule == "" ? "required" : "|required";
      }
      return rule;
    },
  },
};
</script>