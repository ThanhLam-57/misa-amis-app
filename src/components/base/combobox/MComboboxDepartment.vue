<template lang="">
    <div v-click-away="closeTable">
        <label class="m-label">{{label}} 
        <span class="input--required">*</span>
    </label>
    <div class="row" style="width: 100%" >
        <div class="input-wrapper"
          :class="[{'validate-error': isValidate },{'active': isFocus}]">
          <input 
          @click="openTable"
          
          :tabIndex="tabIndex"
                @input="changeValue" @blur="onBlur" :value="valueText"
               class="m-input" style="height: 34px;border: none;" type="text"
               @keyup="onKeyUp($event)" 
               @focus="focus($event)"/>
            <div @click="showTable"  id="btn-select__combobox" class="btn-select">
                <div class="combobox__btn" :class="{rotate:isShowTb}"></div>
            </div>
        </div>
        <div class="err-message" v-if="isValidate">
      {{errorValidate}}
    </div>
    </div>
    <div id="ttable" class="ttable" v-if="isShowTb">
        <div class="table-select" style=" margin: 0px;z-index: 3;">
            <div class="table-header" style="position: sticky;">
                <div class="itemHeader">
                    <div 
                    style="padding: 0 16px"
                        v-for="(item, index) in headers"
                        :class="item.Class"
                        :style="{'width': item.Width +'%'}"
                        :key="index"
                    >{{item.Caption}}</div>
                </div>
            </div>
            <div v-if="optionData && optionData.length > 0">
                <div class="itemBody" v-for="(item, index) in optionData" :key="index" @click="selectItem(item)" :class="{'cbb_active list': item[valueField] == modelValue}">
                    <div
                    style="padding: 0 16px; width:30%"
                  >{{  item[displayFieldCode]}}</div>
                  <div
                    style="padding: 0 16px; width:70%"
                  >{{  item[displayField]}}</div>
                </div>
            </div>
            <div class="itemBody" style="padding:0 16px" v-else>Không có dữ liệu</div>
        </div>
        <div class="table-bot">
                Cập nhật cơ cấu tổ chức
        </div>
    </div>
    </div>
        
</template>
<script>
import MBaseComponent from "../MBaseComponent.vue";
import {KEY_CODE} from "../../../const.js";
import {TXT_FIELD} from "../../../resource .js"
export default {
  extends: MBaseComponent,
  name: "MComboboxDepartment",
  props: {
    class: String,
    label: String,
    index: Number,
    headers: {
      Type: Array,
      default: [],
    },
    name: {
      Type: String,
      default: "",
    },
    rules: {
      Type: String,
      default: "",
    },
    dataSource: {
      Type: Array,
      default: [],
    },
    valueData: "",
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
    displayFieldCode: {
      value: String,
      default: "Name",
    },
    modelValue: {
      value: [String, Number],
      default: null,
    },
    tabIndex: {
      Type: String,
      default: null,
    },
  },
  data() {
    return {
      isShowTb: false,
      valueText: null,
      optionData: [],
      isFocus: false,
    };
  },
  watch: {
    /**
     * Bắt sự kiện thay đổi của optionData khi nhập vào ô input và thực hiện tìm kiếm
     * Author:NTLAM(30/10/2022)
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
    modelValue: {
      handler(val) {
        if (val) {
          var item = this.option.find((x) => x[this.valueField] == val);
          if (item) {
            this.valueText = item[this.displayField];
          } else {
            this.valueText = null;
          }
        } else {
          this.valueText = null;
        }
      },
      immediate: true,
    },
  },
  methods: {
    /**
     * Hàm thực hiện focus vào ô input
     * @param {*} e
     */
    focus(e) {
      this.isFocus = true;
      this.isShowTb = true;
    },
    /**
     * Sự kiện dùng bàn phím chọn item
     * @param {} val
     */
    onKeyUp(val) {
      switch (val.keyCode) {
        //Kiểm tra là enter
        case 13:
          this.showTable();
          break;
        //Kiểm tra là page down
        case 38:
          this.isShowTb = true;
          if (this.valueText) {
            var index = this.optionData.findIndex(
              (x) => x[this.displayField] == this.valueText
            );
            this.$emit("select", this.optionData[index - 1]);
          } else {
            this.$emit("select", this.optionData[0]);
          }
          break;
        //Kiểm tra là page up
        case 40:
          this.isShowTb = true;
          if (this.valueText) {
            var index = this.optionData.findIndex(
              (x) => x[this.displayField] == this.valueText
            );
            this.$emit("select", this.optionData[index + 1]);
          } else {
            this.$emit("select", this.optionData[0]);
          }
          break;
        default:
          break;
      }
    },
    /**
     * Hàm thực hiện đóng mở combobox Department
     * Author :NTLAM (02/10/2022)
     */
    showTable() {
      this.isShowTb = !this.isShowTb;
    },
    /**
     * Hàm thực hiện đóng combobox Department
     * Author :NTLAM (02/10/2022)
     */
    openTable() {
      this.isShowTb = true;
    },
    /**
     * Hàm thực hiện mở combobox Department
     * Author :NTLAM (02/10/2022)
     */
    closeTable() {
      this.isShowTb = false;
    },
    /**
     * Hàm thực hiện chọn item trong combobox
     * Author :NTLAM (02/10/2022)
     * @param {*} item
     */
    selectItem(item) {
      this.valueText = item[this.displayField];
      this.$emit("select", item);
      this.isShowTb = false;
      this.isValidate = false;
    },
    /**
     * Hàm thực hiện đưa value từ combobox lên input
     * Author :NTLAM (02/10/2022)
     * @param {} val
     */
    changeValue(val) {
      this.validate(val.target.value);
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
    /**
     * Hàm xửử lý khi blur
     */
    onBlur(val) {
      this.isFocus = false;
      //Kiểm tra giá trị đang nhập có trong danh sách hay không
      if(this.valueText){
        var item = this.optionData.find(x => x[this.displayField] == this.valueText);
        if(item){
          this.$emit("select", item);
        }
        else{
          this.valueText = null;
        }
      }
      setTimeout(() => {
        this.isShowTb = false;
        this.validate(val.target.value);
      }, 200);  
    },
  },
};
</script>
<style scoped>
.input-wrapper {
  height: 34px;
}
.input-wrapper:hover {
  border-color: #73c663;
}
.input-wrapper.active {
  border-color: #73c663;
}
.btn-select {
  height: 34px;
}
.ttable {
  width: 402px;
  border-radius: 4px;
}
.itemHeader {
  display: flex;
  height: 32px;
  align-items: center;
  font-weight: 700;
  padding: 0 8px;
}
.itemBody {
  display: flex;
  height: 36px;
  align-items: center;
  margin: 0 8px;
  border-radius: 4px;
}
.itemBody:hover {
  color: #2ca01c;
  background-color: #ebedf0;
  cursor: pointer;
}
.cbb_active {
  border-radius: 4px;
}
.m-input {
  height: 34px;
}
#ttable::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background: #f1f1f1;
}
#ttable::-webkit-scrollbar-thumb {
  background: #b8bcc3;
}
#ttable::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background: #f1f1f1;
}
</style>