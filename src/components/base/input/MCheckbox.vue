<template lang="">
     <label  class="ms-checkbox">
    <label
        class="checkbox custom-checkbox"
        >
            <input type="checkbox" id="table" hidden />
            <div class="wrap-icon__custom">
            <i class="icofont-check"></i>
        </div>
    </label>

    <div class="checkbox-text pd-l-10">{{text}}</div>
</label>
</template>
<script>
export default {
    name:"MCeckbox",
    props:["text"],
    component:{}
};
</script>
<style lang="">
</style>