<template lang="">
    <div class="content-table-paging">
      <div class="paging-left">Tổng số: <b>{{totalRecord}}</b> bản ghi</div>
            <div class="paging-right">
              <div class="option-number__list">
                Số bản ghi /trang
                <McCombobox/>
              </div>
              <div class="number-record">1 - 4 bản ghi</div>
              <div class="paging-option">
                <div
                  id="icon-paging__before"
                  class="icon hw-24 icon-paging__before"
                ></div>
                <div
                  id="icon-paging__after"
                  class="icon hw-24 icon-paging__after"
                ></div>
              </div>
            </div>
          </div>
</template>
<script>
import McCombobox from "../combobox/MCombobox.vue";
export default {
  name: "MPaging",
  components: { McCombobox },
  props:{
    totalRecord:{
      Type:Number,
      default:null
    }
  }
};
</script>
<style scoped>
</style>