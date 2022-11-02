<template lang="">
    <input
    :type="type"
    :value="modelValue"
    :class="{
      'm-input': type !== 'checkbox',
    }"
    :name="name"
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
};
</script>
<style lang="">
</style>