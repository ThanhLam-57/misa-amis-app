<template lang="">
    <input
        class="m-input input-search"
        :style="style"
        :type="type"
        :placeholder="placeholder"
    />
</template>
<script>
export default {
    name:"MInputIcon",
    props:{
        class: String,
        style:String,
        label:String,
        index:Number,
        type:String
    },
}
</script>
<style lang="">
    
</style>