<template lang="">
    <label class="m-label">{{label}} 
        <span v-if="index == 1" class="input--required">*</span>
    </label>
    <div class="row" style="width: 100%">
        <div class="input-wrapper">
            <input propValue="DepartmentName" class="m__input" style="height: 30px;border: none;" type="text"/>
            <div id="btn-select__combobox" class="btn-select">
                <div class="combobox__btn"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"MInputIcon",
    props:{
        class: String,
        label:String,
        index:Number
    }
}
</script>
<style lang="">
    
</style>