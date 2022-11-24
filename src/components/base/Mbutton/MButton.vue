<template lang="">
        <div :tabIndex="tabIndex" class="mess-footer_right" :title="textTitle">
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
    props:{
        text:{
            Type:String,
            default:null
        },
        index:{
            Type:Number,
            default:null
        },
        textTitle:{
            Type:String,
            default:""
        },
        tabIndex:{
            Type:Number,
            default:null
        }
        //"text","index","textTitle"
    },
}
</script>
<style scoped>
    .btn{
        margin-left: 0px;
    }
</style>