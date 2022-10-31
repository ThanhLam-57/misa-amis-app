<template lang="">
    <input
    :type="type"
    :value="modelValue"
    @input="handleInput($event)"
    :class="{
      'm-input': type !== 'checkbox',
      'input--error': !isValidate || !isValidData.value,
    }"
    :name="name"
    @focusout="checkInvalidInput($event)"
    :title="title || isValidData.msg"
    :ref="fieldNameTxt"
  />
</template>
<script>
export default {
  name: "BsaeInput",
  props: {
    Type: String,
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
    needMountedFocus: {
      Type: Boolean,
      default: false
    }
  },
  data (){
    return{
        isDate: false,
        title:"",
        isValidate:true,
        isValiData:{
            value:true,
            msg:"",
        }
    }
  },
  mounted() {
    if(this.needMountedFocus) {
      this.$nextTick(() => this.$refs[this.fieldNameTxt].focus())
    }
  },
};
</script>
<style lang="">
</style>