<template lang="">
  <div  @click="showOption" class="select" style="position: relative">
                  <div class="combobox">
                    <div id="combobox__page_size" class="combobox__input">
                      5
                    </div>
                    <div class="btn-select">
                      <div class="combobox__btn" :class="{rotate:isShow}"></div>
                    </div>
                  </div>
                  <ul v-click-away="closeOption" class="pageSize-ul" v-if="isShow">
                    <li v-for="optionPaging in optionPagings" :key="optionPaging">{{optionPaging.name}}</li>
                  </ul>
                </div>
</template>
<script>
import { OPTION_PAGING } from '../../../const.js'
export default {
  name:"McCombobox",
  created(){
    this.optionPagings = OPTION_PAGING;
  },
  methods:{
    showOption() {
      this.isShow = !this.isShow;
    },
    closeOption(){
      this.isShow =false;
    }
  },
  data() {
    return {
      isShow : false,
      optionPagings:[]
    }
  },
}
</script>
<style lang="">
  
</style>