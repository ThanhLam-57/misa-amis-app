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
                    <li v-for="(item, index) in option" :key="index" @click="activeClass(item),valueActive()" :class="{'cbb_active list': item.value == classActive}">{{item.name}}</li>
                  </ul>
                </div>
</template>
<script>
export default {
  name: "McCombobox",
  props:{
    classActive:Number,
    option: {
      value: Array,
      default: [],
    },
  },
  methods: {
    /**
     * Hàm show option
     * Author:NTLAM 26/10/2022
     */
    showOption() {
      this.isShow = !this.isShow;
    },
    /**
     * Hàm đóng option
     * Author:NTLAM 26/10/2022
     */
    closeOption() {
      this.isShow = false;
    },
    /**
     * Hàm thêm mới class vào option
     * Author:NTLAM 26/10/2022
     * @param {*} item
     */
    activeClass(item) {
      this.classActive = item.value;
    },
    /**
     * Hàm active tuỳ chọn sau khi chọn giá trị
     */
    valueActive() {
      this.emitter.emit("valueActive", this.classActive);
    },
  },
  mounted(){
    //Gửi sự kiện activeValue lên EmployeeList
    this.emitter.on("valueActive",(valuePageSize)=>{
      this.classActive = valuePageSize;
    });
  },
  data() {
    return {
      isShow: false,
      classActive: 20,
    };
  },
};
</script>
<style scoped>
.pageSize-ul{
  padding-left: 0px !important;
  width: 68px !important;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
}
.cbb_active{
  border-radius: 0px;
}
</style>