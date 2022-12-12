<template lang="">
    <input
      :type="type"
      :value="modelValue"
      :maxlength="maxlength"
      @input="changeValue"
      :class="{
        'm-input': type !== 'checkbox',
        'validate-error': isValidate
      }"
      :name="name"
      :tabIndex="tabIndex"
      ref="name"
      @blur="onBlur"
    />
    <div :title="errorValidate" class="err-message" v-if="isValidate">
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
    maxlength:Number,
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
    },
    tabIndex:{
      Type:Number,
      default:null
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
     * Author:NTLAM(30/10/2022)
     */
    changeValue(val) {
      this.validate(val.target.value);
      this.$emit("update:modelValue", val.target.value);
    },
    /**
     * Hàm xửử lý khi blur
     * Author:NTLAM(30/10/2022)
     */
     onBlur(val){
      this.validate(val.target.value);
    },
    /**
     * Sử lý sự kiện khi blur
     * Author:NTLAM(30/10/2022)
     */
    handleFocus(){
      this.$refs.name.focus();
    }
  },
};
</script>
<style lang="">
</style>