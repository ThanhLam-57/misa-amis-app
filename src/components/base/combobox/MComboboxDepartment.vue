<template lang="">
    <div v-click-away="closeTable">
        <label class="m-label">{{label}} 
        <span v-if="index == 1" class="input--required">*</span>
    </label>
    <div class="row" style="width: 100%">
        <div class="input-wrapper">
            <input 
                v-model="textVale"
                propValue="DepartmentName" class="m-input" style="height: 30px;border: none;" type="text"/>
            <div @click="showTable"  id="btn-select__combobox" class="btn-select">
                <div class="combobox__btn" :class="{rotate:isShowTb}"></div>
            </div>
        </div>
    </div>
    <div id="ttable" class="ttable" v-if="isShowTb">
        <table class="table-select" style=" margin: 0px;z-index: 3;">
            <thead class="table-header" style="position: sticky;">
                <tr >
                    <th
                        v-for="(item, index) in headers"
                        :class="item.Class"
                        :style="{'width': item.Width +'%'}"
                        :key="index"
                    >{{item.Caption}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="department in dataSource" :key="department.DepartmentId">
                    <td
                    v-for="(item, index) in headers"
                    :style="{ 'width': item.Width +'%' }"
                    :value="department.DepartmentName"
                    :key="index"
                  >{{  department[item.propValue]}}</td>
                </tr>
            </tbody>
        </table>
        <div class="table-bot">
                Cập nhật cơ cấu tổ chức
        </div>
    </div>
        <!-- <div  id="ttable" class="ttable" v-if="isShowTb">
        <table class="table-select" style=" margin: 0px;z-index: 3;">
            <thead class="table-header" style="position: sticky;">
                <tr >
                    <th propValue="DepartmentCode" style="width: 30%;" class="DVid">Mã đơn vị</th>
                    <th propValue="DepartmentName" style="width: 70%;" class="DVname">Tên Đơn vị</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <div class="table-bot">
                Cập nhật cơ cấu tổ chức
        </div>
    </div> -->
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
    valueData:''
  },
  data() {
    return {
      isShowTb: false,
      textVale: null,
    };
  },
  methods: {
    showTable() {
      this.isShowTb = !this.isShowTb;
    },
    closeTable() {
      this.isShowTb = false;
    },
  },
};
</script>
<style lang="">
</style>