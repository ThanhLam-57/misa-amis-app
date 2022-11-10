<template lang="">
    <input
        class="m-input input-search"
        :style="style"
        :type="type"
        :value="modelValue"
        @input="changeValue"
        :placeholder="placeholder"
    />
</template>
<script>
export default {
    name:"MInputIcon",
    props:{
        class: String,
        style: {
            type :String,
            default:""
        },
        label:String,
        index:Number,
        type:String,
        modelValue: String,
        placeholder:{
            type:String,
            default:""
        }
    },
    methods:{
            /**
     * Lấy ra giá trị của ô input
     * Hàm truyền dữ liệu từ input lên để xử lý
     * @param {*} val 
     */
    changeValue(val) {   
      this.$emit("update:modelValue", val.target.value);
    },
    }
}
</script>
<style scoped>
 .m-input{
    margin-right: 10px;
   } 
</style>