<template lang="">
  <div  @click="showOption" class="select" style="position: relative">
                  <div class="combobox">
                    <div id="combobox__page_size" class="combobox__input">{{classActive}}
                    </div>
                    <div class="btn-select">
                      <div class="combobox__btn" :class="{rotate:isShow}"></div>
                    </div>
                  </div>
                  <ul v-click-away="closeOption" class="pageSize-ul" v-if="isShow">
                    <li v-for="(item, index) in optionPagings" :key="index" @click="activeClass(item)" :class="{'cbb_active list': item.value == classActive}">{{item.name}}</li>
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
    },
    activeClass(item){
      this.classActive = item.value;
    }
  },
  data() {
    return {
      isShow : false,
      optionPagings:[],
      classActive : 10
    }
  },
}
</script>
<style lang="">
  
</style>