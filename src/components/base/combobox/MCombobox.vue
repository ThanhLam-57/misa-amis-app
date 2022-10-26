<template lang="">
    <div class="content-table-paging">
            <div class="paging-left"></div>
            <div class="paging-right">
              <div class="option-number__list">
                Số bản ghi /trang
                <div  @click="showOption" class="select" style="position: relative">
                  <div id="combobox" class="combobox">
                    <div id="combobox__page_size" class="combobox__input">
                      5
                    </div>
                    <div id="btn-select" class="btn-select">
                      <div class="combobox__btn" :class="{rotate:isShow}"></div>
                    </div>
                  </div>
                  <ul class="pageSize-ul" v-if="isShow">
                    <li id="departmentName" class="cbb_active list">5</li>
                    <li class="list">10</li>
                    <li class="list">15</li>
                    <li class="list">20</li>
                  </ul>
                </div>
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
export default {
  methods:{
    showOption() {
      this.isShow = !this.isShow;
    },
  },
  data() {
    return {
      isShow : false
    }
  },
    
}
</script>
<style scoped>
    
</style>