<template lang="">
    <div class="content-table-paging">
      <div class="paging-left">Tổng số: &nbsp;<b> {{totalRecord}} </b><span class="m-l-4">bản ghi</span></div>
            <div class="paging-right">
              <div class="option-number__list">
                Số bản ghi /trang
                <MCombobox
                  :option="optionPaging"
                />
              </div>
              <div class="number-record">{{numberStart}} - {{numberEnd}} bản ghi</div>
              <div class="paging-option">
                <div
                  @click="prePage"
                  id="icon-paging__before"
                  class="icon hw-24 icon-paging__before"
                ></div>
                <div
                @click="nextPage"
                  id="icon-paging__after"
                  class="icon hw-24 icon-paging__after"
                ></div>
              </div>
            </div>
          </div>
</template>
<script>
import  { OPTION_PAGING } from"../../../const.js"
import MCombobox from "../combobox/MCombobox.vue";
export default {
  name: "MPaging",
  components: { MCombobox },
  props:{
    totalRecord:{
      Type:Number,
      default:null
    },
    numberStart:String,
    numberEnd:Number,
  },
  data(){
    return{
      optionPaging : OPTION_PAGING,
    }
  },
  methods:{
    /**
     * Hàm thực hiện prePage và nextPage và gửi sự kiện lên EMployeelisst
     */
    prePage(){
      this.$emit("prePage");
    },
    nextPage(){
      this.$emit("nextPage");
    }
  }
};
</script>
<style scoped>
.m-l-4{
  margin-left: 4px ;
}
</style>