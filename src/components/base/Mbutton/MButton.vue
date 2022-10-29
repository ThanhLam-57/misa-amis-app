<template lang="">
        <div class="mess-footer_right" :title="textTitle">
            <div 
                :class="{
                    'btnCancel': index ==1,
                    'btnSave': index==2
                }"
                class="btn">{{text}}</div>
        </div>
</template>
<script>
export default {
    name:"MButton",
    props:["text","index","textTitle"
    ],
}
</script>
<style lang="">
    
</style>