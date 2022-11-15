<template lang="">
    <input
      :type="type"
      :value="modelValue"
      @input="changeValue"
      :class="{
        'm-input': type !== 'checkbox',
        'validate-error': isValidate
      }"
      :name="name"
      @blur="onBlur"
    />
    <div class="err-message" v-if="isValidate">
      {{errorValidate}}
    </div>
</template>
<script>
import MBaseComponent from '../../base/MBaseComponent.vue';
export default {
  name: "MBaseInput",
  extends:MBaseComponent,
  props: {
    type: String,
    modelValue: String,
    name: String,
    isRequire: {
      Type: Boolean,
      default: false,
    },
    fieldNameTxt: {
      Type: String,
      default: "",
    },
    name: {
      Type: String,
      default: "",
    },
    rules: {
      Type: String,
      default: "",
    }
  },
  data() {
    return {
      isDate: false,
      title: "",
    };
  },
  methods: {
    /**
     * Lấy ra giá trị của ô input
     * Hàm truyền dữ liệu từ input lên để xử lý
     * @param {*} val 
     */
    changeValue(val) {
      this.validate(val.target.value);
      this.$emit("update:modelValue", val.target.value);
    },
    /**
     * Hàm xửử lý khi blur
     */
     onBlur(val){
      this.validate(val.target.value);
    }
  },
};
</script>
<style lang="">
</style>