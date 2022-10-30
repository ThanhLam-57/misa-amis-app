<template lang="">
        <label
        class="checkbox custom-checkbox"
        >
            <input type="checkbox" id="table" hidden />
            <div class="wrap-icon__custom">
            <i class="icofont-check"></i>
        </div>
    </label>

    <div class="checkbox-text pd-l-10">{{text}}</div>

</template>
<script>
export default {
    name:"MCheckbox",
    props:["text"],
    component:{}
};
</script>
<style lang="">
</style>