<template lang="">
        <label
        class="checkbox custom-checkbox"
        >
        <input 
                :value="modelValue"
                :v-model="textModel"
                type="checkbox" hidden />
            <div class="wrap-icon__custom">
            <i class="icofont-check"></i>
        </div>
    </label>

    <div class="checkbox-text pd-l-10">{{text}}</div>

</template>
<script>
export default {
    name:"MCheckbox",
    props:{
        modelValue: {
            default:""
        },
        textModel:{
            Type:String,
            default:""
        }
        
    },
    component:{}
};
</script>
<style lang="">
</style>