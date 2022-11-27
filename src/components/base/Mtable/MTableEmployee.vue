<template lang="">
    <div class="content-table" id="style">
            <table id="tbEmployeeList" class="table">
              <thead class="table-header">
                <tr>
                  <th
                    propValue="check"
                    format="sticky_header_left"
                    class="text-align--center sticky_header_left"
                  >
                  <input v-model="selectAll" type="checkbox">
                  </th>
                  <th
                    v-for="(item, index) in headers"
                    :class="item.Class"
                    :title="item.Title"
                    :style="{ 'min-width': item.Width + 'px' }"
                    :key="index"
                  >{{ item.Caption }}</th>
                  <th
                    format="stickyRight"
                    propValue="function"
                    class="text-align--center sticky_header_right"
                    style="min-width: 120px"
                  >
                    CHỨC NĂNG
                  </th>
                </tr>
              </thead>
              <tbody >
                <tr v-for="employee in dataSource" :key="employee.EmployeeID" @dblclick="showDialog(employee)">
                  <td
                    propValue="check"
                    format="sticky_header_left"
                    class="text-align--center sticky_body_left">
                    <input v-model="selected" :value="employee.EmployeeID" type="checkbox"></td>
                  <td
                    v-for="(item, index) in headers"
                    :class="item.CellClass"
                    :style="{ 'min-width': item.Width + 'px' }"
                    :key="index"
                  >{{  getValueTxt(employee,item)}}</td>
                  <td
                    format="stickyRight"
                    propValue="function"
                    class="text-align--center sticky_body_right"
                    :class="{'index-td-selection' : isShowOption && itemSelected.EmployeeID == employee.EmployeeID}"
                    style="min-width: 120px"
                  >
                    <div class="edit-option">
                      <div @click="showDialog(employee)" class="text-edit">Sửa</div>
                      <button @click="showOpttion(employee)" class="icon arrow-up--blueicon hw-16">
                      </button>
                    </div>
                    <div v-show="isShowOption && itemSelected.EmployeeID == employee.EmployeeID"  class="dlg-option"  v-if="this.isShowOption==true" v-click-away="closeOption">
                      <div @click="deleteEmployee" class="option option-delete">Xoá</div>
                      <div @click="duplicateEmployee" class="option option-stop__use">Nhân bản</div>
                    </div>
                  </td>
                </tr>
                <div class="mes-table" v-if="dataSource.length == 0">
                  Không có dữ liệu
                </div>
              </tbody>
            </table>
          </div>
</template>
<script>
import { formatDate } from "../../../script/base.js";
export default {
  name: "MTableEmployeeList",
  components: {},
  props: {
    headers: {
      Type: Array,
      default: [],
    },
    dataSource: {
      Type: Array,
      default: [],
    },
  },
  computed: {
    /**
     * Xử lí select checkbox
     * Author:NTLAM 31/10/2022
     */
    selectAll: {
      get: function () {
        return this.dataSource
          ? this.selected.length == this.dataSource.length
          : false;
      },
      set: function (value) {
        var selected = [];
        if (value) {
          this.dataSource.forEach(function (employee) {
            selected.push(employee.EmployeeID);
          });
        }
        this.selected = selected;
      },
    },
  },
  data() {
    return {
      isShowOption: false,
      employees: [],
      itemSelected: null,
      selected: [],
      idDelete: {
        Type: [String, Number],
        default: null,
      },
    };
  },
  watch: {
    selected: {
      handler(val) {
        this.$emit("changeSelect", val);       
      },
      deep: true,
    },
  },
  methods: {
    /**
     * Bắt sự kiện bỏ chọn tất cả check bõ từ EmployeeLIst
     * Author:NTLAM (15/11/2022)
     */
    unSelectAll(){
      this.selected = [];
    },
    /**
     * Bắt sự kiên button xóa bắn ID cần xoá lên EmployeeLisst
     */
    deleteEmployee() {
      this.$emit("deleteEmployee", this.itemSelected);
      // deleteByEmployeeId(this.idDelete)
    },
    duplicateEmployee(){
      this.$emit("duplicateEmployee", this.itemSelected);
    },
    /**
     * Hàm show dialog sửa
     * Author: NTLAM 29/10/2022
     */
    showDialog(employee) {
      this.$emit("showDialog", employee);
    },
    /**
     * Hàm Show tùy chọn của từng nhân viên
     * Author: NTLAM 29/10/2022
     * @param {*} item
     */
    showOpttion(item) {
      if (
        this.itemSelected &&
        this.itemSelected.EmployeeID == item.EmployeeID
      ) {
        this.itemSelected = null;
        this.isShowOption = false;
      } else {
        this.itemSelected = item;
        this.isShowOption = true;
        this.idDelete = this.itemSelected.EmployeeID;
      }
    },
    /**
     * Author: NTLAM 29/10/2022
     * Hàm đóng option tùy chọn
     */
    closeOption() {
      this.isShowOption = false;
      this.itemSelected = null;
    },
    /**
     * Hamf format và lấy ra các trường đưa lên table
     * Author NTLAM 31/10/2022
     * @param {*} employee
     * @param {*} item
     */
    getValueTxt(employee, item) {
      var data = null;
      if (item.propValue == "DateOfBirth") {
        data = formatDate(employee[item.propValue]);
        return data;
      }
      if (item.propValue == "GenderName") {
        if (employee[item.propValue] == null) return "Khác";
      }
      if (item.propValue == "Gender"){
        if(employee[item.propValue] == 1){
          return "Nữ";
        }
        else if(employee[item.propValue]==0){
          return "Nam";
        }
        else if(employee[item.propValue]==2){
          return "Khác";
        }
      }
      return employee[item.propValue];
    },
  },
};
</script>
<style>
.index-td-selection {
  z-index: 1;
}
.selectedTd {
  background-color: #dcf1d8 !important;
}
.mes-table {
  justify-content: center;
  /* height: 300px; */
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 700;


  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(calc(-50%  100px), -50%);
}
</style>