<template lang="">
    <div v-click-away="closeOption" class="select" :class="{'active': isFocus}" style="position: relative">
        <div class="combobox" >
          <input @focus="focus($event)" @blur="onBlur" :tabIndex="tabIndex" @input="changeValue" :value="valueText" style="border: none;" class="m-input" @click="openOption" @keyup="onKeyUp($event)"/>
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
    focus(e){
      this.isFocus = true;
    },
    onBlur(val) {
      this.isFocus = false;
    },
    onKeyUp(val){
      switch(val.keyCode){
        //Kiểm tra là enter
        case 13:
        this.showTable();
          break;
        //Kiểm tra là page down
        case 38:
          this.isShowTb = true;
          if(this.valueText){
            var index = this.optionData.findIndex(x => x[this.displayField] == this.valueText);
            // this.valueText = this.optionData[index - 1][this.displayField];
            // this.modelValue = this.optionData[index - 1][this.valueField];
            this.$emit("select", this.optionData[index - 1]);
          }
          else{
            // this.valueText = this.optionData[0][this.displayField];
            // this.modelValue = this.optionData[0][this.valueField];
            this.$emit("select", this.optionData[0]);
          }
          break;
        //Kiểm tra là page up
        case 40:
          this.isShowTb = true;
          if(this.valueText){
            var index = this.optionData.findIndex(x => x[this.displayField] == this.valueText);
            // this.valueText = this.optionData[index + 1][this.displayField];
            // this.modelValue = this.optionData[index + 1][this.valueField];
            this.$emit("select", this.optionData[index + 1]);
          }
          else{
            this.$emit("select", this.optionData[0]);
          }
          break;
        default:
          break;
      }
    },
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
    tabIndex:{
      Type:String,
      default:null
    }
  },
  data() {
    return {
      isShow: false,
      classActive: null,
      valueText: null,
      optionData: [],
      isFocus: false
    };
  },
  watch: {
    /**
     * Bắt sự kiện thay đổi của optionData khi nhập vào ô input và thực hiện tìm kiếm
     */
    option: {
      handler(val) {
        this.optionData = val;
        if (val) {
          var item = this.option.find(
            (x) => x[this.valueField] == this.modelValue
          );
          if (item) {
            this.valueText = item[this.displayField];
          }
        }
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
  border-radius: 4px;
  z-index: 0;
}
.select.active {
  border-color: #73c663 !important;
}
.select .menu-option {
  position: absolute;
  top: 35px;
  background-color: white;
  max-height: 200px;
  overflow: auto;
  border: 1px solid #babec5;
  width: 400px;
  border-radius: 4px;
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
  height: 36px;
  padding: 0 16px;
  align-items: center;
  display: flex;
  align-items: center;
  margin: 0 8px;
  border-radius: 4px;
}
.itemOption:hover {
    color: #2ca01c;
    background-color: #ebedf0;
    cursor: pointer;
}
.btn-select{
  height: 34px;
}
.select ul li {
  padding: 0 16px;
}
.combobox {
  outline: none;
  padding: 0;
  height: 34px;
}
.select:hover{
  border-color: #73c663 !important;
  outline: none !important;
}
.m-input {
  outline: none;
  border: none;
  height: 34px;
}
.menu-option::-webkit-scrollbar{
    width: 6px;
    height: 6px;
    background: #f1f1f1;
}
.menu-option::-webkit-scrollbar-thumb{
    background: #b8bcc3;
}
.menu-option::-webkit-scrollbar{
    width: 6px;
    height: 6px;
    background: #f1f1f1;
}
</style>