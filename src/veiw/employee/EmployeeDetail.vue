<template lang="">
  <MPopup :componentWidth="900">
    <template #header >
          <div class="popup-title">
            <div id="header-popup-title" class="header-popup-title">
              Thông tin nhân viên
            </div>
            <label class="ms-checkbox">
              <input 
                :value="modelValue"
                :v-model="textModel"
                type="checkbox" />
              <div class="checkbox-text pd-l-10">Là khách hàng</div>
            </label>
            <label class="ms-checkbox">
              <input 
                :value="modelValue"
                :v-model="textModel"
                type="checkbox" />
              <div class="checkbox-text pd-l-10">Là nhân viên</div>
            </label>
          </div>
          <div class="dialog-icon">
            <div class="popup-help__icon icon hw-24"  title="Giúp (F1)"></div>
            <div  class="popup-close__icon icon hw-24" @click="closeOption" title="Đóng (ESC)"></div>
          </div>
    </template>
    <template #content>
      <div class="popup-content__employee">
            <div class="popup-content__employee1">
              <div class="content__employee1-left">
                <div class="employee1-left__user">
                  <div class="m-row" style="width: 40%; padding-right: 6px">
                      <label class="m-label"
                        >Mã nhân viên
                        <span class="input--required">*</span></label
                      >
                      <MBaseInput
                        type="text"
                        name="Mã nhân viên"
                        rules="Empty"
                        v-model:modelValue="employee.EmployeeCode"
                      />
                    </div>
                    <div class="m-row" style="width: calc(60% - 6px)">
                      <label class="m-label"
                        >Tên nhân viên
                        <span class="input--required">*</span></label
                      >
                      <MBaseInput
                      type="text"
                      name="Tên nhân viên"
                      rules="Empty"
                      v-model:modelValue="employee.EmployeeName"
                    />
                    </div>
                </div>
                <div class="m-row" style="z-index:2;">
                  <div id="select" class="select" style="position: relative;">
                    <MComboboxDepartment 
                    name="Đơn vị"
                    rules="Empty"
                    :headers="headersDepartment"
                    :option="dataDepartment"
                    v-model:modelValue="employee.DepartmentId"
                    displayField="DepartmentName"
                    valueField="DepartmentId"
                    displayFieldCode="DepartmentCode"
                    @select="selectDepartment"
                    label="Đơn vị"/>
                  </div>
                </div>
                <div class="m-row" style="z-index:1;">
                    <label class="m-label">Chức danh</label>
                    <MComboboxPosition
                    :modelValue="employee.PositionId"
                    :option="dataPoisition"
                    displayField="PositionName"
                    valueField="PositionId"
                    @select="selectPosition"
                    />
                  </div>
              </div>
              <div class="content__employee1-right">
                <div class="employee1-right__user1">
                  <div class="m-row" style="width: 40%; padding-right: 6px">
                      <label class="m-label">Ngày sinh</label>
                      <MBaseInput
                      type="date"
                      name="input"
                      v-model:modelValue="employee.DateOfBirth"
                    />
                    </div>
                  <MRadio/>
                </div>
                <div class="employee1-left__user">
                  <div
                      class="m-row"
                      title="Số chứng minh nhân dân"
                      style="width: 60%; padding-right: 6px"
                    >
                      <label class="m-label">Số CMND</label>
                      <MBaseInput
                      name="Số CMND"
                      rules="checkValueNumber"
                      type="text"
                      v-model:modelValue="employee.IdentityNumber"
                    />
                    </div>
                    <div class="m-row" style="width: 40%">
                      <label class="m-label">Ngày cấp</label>
                      <MBaseInput
                      type="date"
                      name="input"
                      v-model:modelValue="employee.IdentityDate"
                    />
                    </div>
                </div>
                <div class="m-row">
                    <label class="m-label">Nơi cấp</label>
                    <MBaseInput
                      type="text"
                      name="input"
                      v-model:modelValue="employee.IdentityPlace"
                    />
                  </div>
              </div>
            </div>
            <div class="popup-content__employee2">
              <div class="m-row">
                  <label class="m-label">Địa chỉ</label>
                  <MBaseInput
                      type="text"
                      name="input"
                      v-model:modelValue="employee.Address"
                    />
                </div>
              <div class="employee1-left__user">
                <div class="m-row" title="Điện thoại di động">
                    <label class="m-label">ĐT di động</label>
                    <MBaseInput
                      type="text"
                      name="Số điện thoại"
                      rules="checkValueNumber"
                      v-model:modelValue="employee.TelephoneNumber"
                    />
                  </div>
                  <div class="m-row" title="Điện thoại cố định">
                    <label class="m-label">ĐT cố định</label>
                    <MBaseInput
                      type="text"
                      name="Số điện thoại"
                      rules="checkValueNumber"
                      v-model:modelValue="employee.PhoneNumber"
                    />
                  </div>
                  <div class="m-row">
                    <label class="m-label">Email</label>
                    <MBaseInput
                      name="Email"
                      rules="checkValueEmail"
                      type="text"
                      v-model:modelValue="employee.Email"
                    />
                  </div>
              </div>
              <div class="employee1-left__user">
                <div class="m-row">
                    <label class="m-label">Tài khoản ngân hàng</label>
                    <MBaseInput
                      type="text"
                      name="Tài khoản ngân hàng"
                      rules="checkValueNumber"
                      v-model:modelValue="employee.BankAccountNumber"
                    />
                  </div>
                  <div class="m-row">
                    <label class="m-label">Tên ngân hàng</label>
                    <MBaseInput
                      type="text"
                      name="input"
                      v-model:modelValue="employee.BankName"
                    />
                  </div>
                  <div class="m-row">
                    <label class="m-label">Chi nhánh</label>
                    <MBaseInput
                      type="text"
                      name="input"
                      v-model:modelValue="employee.BankBranchName"
                    />
                  </div>
              </div>
            </div>
          </div>
    </template>
    <template #footer>
      <div class="mess-footer">
            <MButton @click="closeOption" title="Hủy" text="Hủy" class="mess-footer__left" />
            <div class="mess-footer__right">
              <MButton @click="saveDataEmployee" title="Cất" index="1" text="Cất" class="mess-footer__mid" />
              <MButton @click="onlySaveDataEmployee" title="Cất và thêm" index="2" text="Cất và thêm" class="mess-footer_right" />
            </div>
          </div>
    </template>
  </MPopup>
</template>
<script>
import MBaseInput from "../../components/base/input/MBaseInput.vue";
import MRadio from "../../components/base/input/MRadio.vue";
import MButton from "../../components/base/Mbutton/MButton.vue";
import MComboboxPosition from "../../components/base/combobox/MComboboxPosition.vue";
import MComboboxDepartment from "../../components/base/combobox/MComboboxDepartment.vue";
import MPopup from "../../components/base/MPopup/MPopup.vue";
import { DEPARTMENT_HEADER, POISITION_HEADER } from "../../const.js";
import { getDepartment } from "../../axios/departmentController/departmentController.js";
import { getPoisition } from "../../axios/poisitionController/poisitionController.js";
import { postEmployee, putEmployee } from "../../axios/employeeController/employeeController.js";
export default {
  name: "EMployeeDetail",
  components: {
    MRadio,
    MButton,
    MComboboxDepartment,
    MComboboxPosition,
    MBaseInput,
    MPopup
  },
  data() {
    return {
      isShowTb: false,
      headersDepartment: DEPARTMENT_HEADER,
      headerPoisition: POISITION_HEADER,
      dataDepartment: [],
      dataPoisition: [],
      mode: "add",
      employee: {
        EmployeeCode: null,
        EmployeeName: null,
        DepartmentName: null,
        PositionName: null,
        DateOfBirth: null,
        IdentityNumber: null,
        IdentityDate: null,
        IdentityPlace: null,
        Address: null,
        TelephoneNumber: null,
        PhoneNumber: null,
        Email: null,
        BankAccountNumber: null,
        BankName: null,
        BankBranchName: null,
      },
    };
  },
  props: {
    dataDetail: {
      Type: Object,
      default: null,
    },
  },
  watch: {
    employee: {
      handler(val) {
      },
      deep: true,
    },
    dataDetail: {
      handler(val) {
        if (val) {
          this.mode = "edit";
          this.employee = val;
        } else {
          this.mode = "add";
        }
      },
      immediate: true,
    },
  },
  async created() {
    await this.getDataDepartment();
    this.getDataPoisition();
  },
  methods: {
    /**
     * Hàm thực hiện sự kiện chon Poisition để xử lý bắn vào ô input Poisition
     * Author: NTLAM (02/11/2022)
     */
    selectPosition(item) {
      if (item) {
        this.employee.PositionName = item.PositionName;
        this.employee.PositionId = item.PositionId;
      } else {
        this.employee.PositionName = null;
        this.employee.PositionId = null;
      }
    },
    /**
     * Hàm thực hiện sự kiện cho Department để xử lý ô input Department
     * Author: NTLAM (02/11/2022)
     */
    selectDepartment(item) {
      if (item) {
        this.employee.DepartmentName = item.DepartmentName;
        this.employee.DepartmentId = item.DepartmentId;
      } else {
        this.employee.DepartmentName = null;
        this.employee.DepartmentId = null;
      }
    },
    /**
     * Hàm đóng dialog thêm mới nhân viên
     * Author:NTLAM 27/10/2022
     */
    closeOption() {
      this.$emit("closeDiaLog");
    },
    /**
     * Hàm thực hiện gọi data Department
     */
    async getDataDepartment() {
      try{
        var res = await getDepartment();
        this.dataDepartment = res.data;
      }
      catch(e){
        
      }
    },
    /**
     * Hàm thực hiện gọi data Poisition
     * Author: NTLAM (02/11/2022)
     */
    getDataPoisition() {
      getPoisition().then((res) => {
        this.dataPoisition = res.data;
      });
    },
    /**
     * Hàm cất dữ liệu và đóng form
     * Author:NTLAM 07/11/2022
     */
    saveDataEmployee() {
      this.postDataEmployee();
      this.$emit("closeDiaLogAddSucceed");
    },
    /**
     * Sự kiện cất và thêm
     * Author:NTLAM 05/11/2022
     */
     onlySaveDataEmployee(){
      this.postDataEmployee();
      this.$emit("onlyAddSucceed")
     },
    /**
     * Hàm thực hiện cất dữ liêu
     * Author:NTLAM 05/11/2022
     */
    postDataEmployee() {
      postEmployee(this.employee).then((res) => {
        console.log("Post thanh cong");
      }).catch((err)=>{
        debugger
        this.$emit("showToasErr")
        return err.request.responseText;
      });
    },
    /**
     * Hàm thực hiện sửa dữ liệu
     */
     putDataEmployee(){
      putEmployee(this.employeeID,this.employee).then((res)=>{

      });
     }
    /**
     * Hàm thực hiện tắt Popup cảnh báo
     */

    /**
     * Hàm tự động lấy mã nhân viên mới
     */
  },
};
</script>
<style  scoped>
</style>