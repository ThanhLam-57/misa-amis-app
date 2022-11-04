<template lang="">
    <div v-click-away="closeTable">
        <label class="m-label">{{label}} 
        <span class="input--required">*</span>
    </label>
    <div class="row" style="width: 100%">
        <div class="input-wrapper">
            <input 
                @input="changeValue" :value="valueText"
               class="m-input" style="height: 30px;border: none;" type="text"
               @click="showTable"/>
            <div @click="showTable"  id="btn-select__combobox" class="btn-select">
                <div class="combobox__btn" :class="{rotate:isShowTb}"></div>
            </div>
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
                <div class="itemBody" v-for="(item, index) in optionData" :key="index" @click="selectItem(item)" :class="{'cbb_active list': item[valueField] == classActive}">
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
export default {
  name: "MComboboxDepartment",
  props: {
    class: String,
    label: String,
    index: Number,
    headers: {
      Type: Array,
      default: [],
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
  },
  data() {
    return {
      isShowTb: false,
      classActive: null,
      valueText: null,
      optionData: [],
    };
  },
  watch: {
    option: {
      handler(val) {
        this.optionData = val;
      },
      immediate: true,
    },
  },
  methods: {
    showTable() {
      this.isShowTb = !this.isShowTb;
    },
    closeTable() {
      this.isShowTb = false;
    },
    selectItem(item) {
      this.valueText = item[this.displayField];
      this.$emit("select", item);
      this.isShowTb=false;
    },
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
};
</script>
<style scoped>
.input-wrapper{
  height: 30px;
}
.btn-select{
  height: 30px;
}
.ttable{
  width: 402px;
}
.itemHeader{
  display: flex;
  height: 32px;
  align-items: center;
  font-weight: 700;
}
.itemBody{
  display: flex;
  height: 32px;
  align-items: center;
}
.itemBody:hover{
  background-color: #e5f3ff !important;
}
</style>