<template lang="">
    <div class="content-table-paging">
      <div class="paging-left">Tổng số: <b>{{totalRecord}}</b> bản ghi</div>
            <div class="paging-right">
              <div class="option-number__list">
                Số bản ghi /trang
                <McCombobox
                  :optionPagings="optionPaging"
                />
              </div>
              <div class="number-record">1 - 4 bản ghi</div>
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
import McCombobox from "../combobox/MCombobox.vue";
export default {
  name: "MPaging",
  components: { McCombobox },
  props:{
    totalRecord:{
      Type:Number,
      default:null
    }
  },
  data(){
    return{
      optionPaging : OPTION_PAGING,
    }
  },
  methods:{
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
</style>