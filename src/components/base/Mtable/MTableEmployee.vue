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
                    {{handleOption.FUNCTION}}
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
                      <div @click="showDialog(employee)" class="text-edit">{{handleOption.EDIT}}</div>
                      <button @click="showOpttion(employee)" class="icon arrow-up--blueicon hw-16">
                      </button>
                    </div>
                    <div v-show="isShowOption && itemSelected.EmployeeID == employee.EmployeeID"  class="dlg-option"  v-if="this.isShowOption==true" v-click-away="closeOption">
                      <div @click="deleteEmployee" class="option option-delete">{{handleOption.DELETE}}</div>
                      <div @click="duplicateEmployee" class="option option-stop__use">{{handleOption.DUPLICATE_RECORD}}</div>
                    </div>
                  </td>
                </tr>
                <div class="mes-table" v-if="dataSource.length == 0">
                  {{txtField.NOT_DATA}}
                </div>
              </tbody>
            </table>
          </div>
</template>
<script>
import { formatDate } from "../../../script/base.js";
import { TXT_FIELD,HANDLE_OPTION } from "../../../resource .js";
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
     * X??? l?? select checkbox
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
      txtField:TXT_FIELD,
      handleOption:HANDLE_OPTION,
    };
  },
  watch: {
    /**
     * S??? ki???n chi selec input checkbox
     */
    selected: {
      handler(val) {
        this.$emit("changeSelect", val);
      },
      deep: true,
    },
  },
  methods: {
    /**
     * B???t s??? ki???n b??? ch???n t???t c??? check b?? t??? EmployeeLIst
     * Author:NTLAM (15/11/2022)
     */
    unSelectAll() {
      this.selected = [];
    },
    /**
     * B???t s??? ki??n button x??a b???n ID c???n xo?? l??n EmployeeLisst
     */
    deleteEmployee() {
      this.$emit("deleteEmployee", this.itemSelected);
      // deleteByEmployeeId(this.idDelete)
    },
    duplicateEmployee() {
      this.$emit("duplicateEmployee", this.itemSelected);
    },
    /**
     * H??m show dialog s???a
     * Author: NTLAM 29/10/2022
     */
    showDialog(employee) {
      this.$emit("showDialog", employee);
    },
    /**
     * H??m Show t??y ch???n c???a t???ng nh??n vi??n
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
     * H??m ????ng option t??y ch???n
     */
    closeOption() {
      this.isShowOption = false;
      this.itemSelected = null;
    },
    /**
     * Hamf format v?? l???y ra c??c tr?????ng ????a l??n table
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
        if (employee[item.propValue] == null) return "Kh??c";
      }
      if (item.propValue == "Gender") {
        if (employee[item.propValue] == 1) {
          return "Nam";
        } else if (employee[item.propValue] == 0) {
          return "N???";
        } else if (employee[item.propValue] == 2) {
          return "Kh??c";
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
.option{
  text-align: left;
}
.selectedTd {
  background-color: #dcf1d8 !important;
}
.mes-table {
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 700;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% 100px), -50%);
}
</style>