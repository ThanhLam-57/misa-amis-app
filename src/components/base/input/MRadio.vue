<template lang="">
    <div class="m-row" style="padding-left: 10px">
                    <label class="m-label">Giới tính</label>
                    <div class="option-gen">
                      <div v-for="(item, index) in listGender" :key="index" class="gen">
                        <input type="radio" name="Nam" id="" />
                        <label class="label-gen">{{item.name}}</label>
                      </div>
                    </div>
                  </div>
</template>
<script>
import{LIST_GENDER} from "../../../const.js"
export default {
    name:"MRadio",
    data(){
        return{
            listGender:[]
        }
    },
    created(){
        this.listGender = LIST_GENDER;
    }
};
</script>
<style lang="">
</style>