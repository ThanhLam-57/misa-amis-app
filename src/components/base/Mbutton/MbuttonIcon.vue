<template lang="">
    <button class="btn btn-icon">
            <div class="btn__icon">
            </div>
            <div class="btn__text">{{actionButton}}</div>
        </button>
</template>
<script>
export default {
    props:{
        actionButton:{
            type:String,
            default:""
        }
    }
}
</script>
<style scoped>
.btn {
    height: 34px;
    min-width: 80px;
    border-radius: 4px;
    padding: 0 16px;
    border: unset;
    background-color: #50b83c;
    color: #fff;
    cursor: pointer;
}
.btn:hover{
    background-color: #57C841;
}
.btn-icon {
    display: flex;
    align-items: center;
    padding: 0 12px;
}
    .btn__icon {
    /* font-size: 20px;
    background: url(../../../assets/img/Sprites.64af8f61.svg);
    background-repeat: no-repeat;
    margin-right: 10px;
    background-position:-464px -313px;
    height: 15px;
    width: 15px; */
}
</style>