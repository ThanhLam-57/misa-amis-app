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
                  <MCheckbox></MCheckbox>
                  </th>
                  <th
                    v-for="(item, index) in headers"
                    :class="item.Class"
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
              <tbody>
                <tr v-for="employee in employees" :key="employee.EmployeeId">
                  <td
                  propValue="check"
                    format="sticky_header_left"
                    class="text-align--center sticky_body_left"><MCheckbox></MCheckbox></td>
                  <td
                    v-for="(item, index) in headers"
                    :class="item.CellClass"
                    :style="{ 'min-width': item.Width + 'px' }"
                    :key="index"
                  >{{ employee[item.propValue] }}</td>
                  <td
                    format="stickyRight"
                    propValue="function"
                    class="text-align--center sticky_body_right"
                    :class="{'index-td-selection' : isShowOption && itemSelected.EmployeeId == employee.EmployeeId}"
                    style="min-width: 120px"
                  >
                    <div class="edit-option">
                      <div @click="showDialog" class="text-edit">Sửa</div>
                      <button @click="showOpttion(employee)" class="icon arrow-up--blueicon hw-16">
                      </button>
                    </div>
                    <div v-show="isShowOption && itemSelected.EmployeeId == employee.EmployeeId" class="dlg-option">
                      <div class="option option-delete">Xoá</div>
                      <div class="option option-stop__use">Ngừng sử dụng</div>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
</template>
<script>
import MCheckbox from "../input/MCheckbox.vue";
import { getData } from "../../../axios/employeeController/employeeController.js";
export default {
  name: "MTableEmployeeList",
  components: { MCheckbox },
  props: {
    headers: {
      Type: Array,
      default: [],
    },
  },
  created() {
    this.getDataPaging();
  },
  data() {
    return {
      isShowOption :false,
      employees: [],
      itemSelected: null
    };
  },
  methods: {
    getDataPaging() {
      getData()
        .then((res) => {
          this.employees = res.data;
        })
        .catch();
    },
    showDialog(){
      this.$emit("showDialog")
    },
    showOpttion(item){
      if(this.itemSelected && this.itemSelected.EmployeeId == item.EmployeeId){
        this.itemSelected = null;
        this.isShowOption = false;
      }
      else{
        this.itemSelected = item;
        this.isShowOption = true;
      }
      //this.isShowOption = !this.isShowOption;
    },
  },

};
</script>
<style>
.index-td-selection{
  z-index: 1;
}
</style>