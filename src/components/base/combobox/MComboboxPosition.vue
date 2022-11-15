<template lang="">
    <div v-click-away="closeOption" class="select" style="position: relative">
        <div class="combobox">
          <input @input="changeValue" :value="valueText" class="m-input" @click="openOption"/>

          <div @click="showOption" class="btn-select">
              <div class="combobox__btn" :class="{rotate:isShow}"></div>
          </div>
        </div>
        <div class="menu-option"  v-if="isShow">
          <div v-if="optionData && optionData.length > 0">
            <div class="itemOption" v-for="(item, index) in optionData" :key="index" @click="selectItem(item)" :class="{'cbb_active list': item[valueField] == modelValue}">
              {{item[displayField]}}
            </div>
          </div>
          <div class="itemOption" v-else>Không có dữ liệu</div>
        </div>
    </div>
  </template>
  <script>
import MBaseInputVue from "../../base/input/MBaseInput.vue";
export default {
  name: "MComboboxPosition",
  components: { MBaseInputVue },
  methods: {
    /**
     * Hàm show option
     * Author:NTLAM 26/10/2022
     */
    showOption() {
      this.isShow = !this.isShow;
    },
    openOption(){
      this.isShow= true
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
    selectItem(item) {
      this.valueText = item[this.displayField];
      this.$emit("select", item);
      this.isShow=false
    },

    /**
     * Hàm thực hiện bắt sự kiện tìm kiếm trên imput Poisition
     * Author: NTLAM (02/11/2022)
     * @param {*} val 
     */
    changeValue(val) {
      var textSearch = val.target.value;
      this.valueText = textSearch;
      if (textSearch && textSearch.length > 0) {
        this.optionData = this.option.filter((x) =>
          x[this.displayField].includes(textSearch)
        );
      } else {
        this.optionData = this.option;
      }
    },
  },
  props: {
    option: {
      value: Array,
      default: [],
    },
    valueField: {
      value: String,
      default: "ID",
    },
    displayField: {
      value: String,
      default: "Name",
    },
    modelValue: {
      value: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      isShow: false,
      classActive: null,
      valueText: null,
      optionData: [],
    };
  },
  watch: {
    /**
     * Bắt sự kiện thay đổi của optionData khi nhập vào ô input và thực hiện tìm kiếm
     */
    option: {
      handler(val) {
        this.optionData = val;
      },
      immediate: true,
    },
    modelValue:{
      handler(val){
        if(val){
          var item = this.option.find(x => x[this.valueField] == val);
          if(item){
            this.valueText = item[this.displayField];
          }
          else{
            this.valueText = null;
          }
        }
        else{
          this.valueText = null;
        }
      },
      immediate:true
    }
  },
};
</script>
  <style scoped>
  .cbb_active{
    border-radius: 0%;
  }
.select {
  border: 1px solid #babec5;
  border-radius: 2px;
  z-index: 0;
}
.select .menu-option {
  position: absolute;
  top: 32px;
  background-color: white;
  border: 1px solid #babec5;
  /* display; */
}
.select ul {
  z-index: 11;
  border-radius: 4px;
  position: absolute;
  padding: 0px;
  border: 1px solid #babec5;
  width: 48px;
  overflow: auto;
  background-color: white;
  border-radius: 2px;
  margin-top: 0;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  width: 100%;
}
.itemOption {
  height: 32px;
  padding: 0 16px;
  width: 370px;
  align-items: center;
  display: flex;
  align-items: center;
}
.itemOption:hover {
    color: #2ca01c;
    background-color: #ebedf0;
}
.btn-select{
  height: 30px;
}
.select ul li {
  padding: 0 16px;
}
.combobox {
  padding: 0;
  height: 30px;
}
.m-input {
  border: none;
  height: 30px;
}
</style>