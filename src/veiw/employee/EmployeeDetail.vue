<template lang="">
    <div id="dlgEmployeeDetail" class="dialog">
    <div class="mw-900">
      <div class="popup">
        <div class="popup-header">
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
        </div>
        <div class="popup-content">
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
                        name="input"
                        v-model:modelValue="employee.EmployeeCode"
                      />
                      <div class="err-message">
                        Thông tin này không được để trống
                      </div>
                    </div>
                    <div class="m-row" style="width: calc(60% - 6px)">
                      <label class="m-label"
                        >Tên nhân viên
                        <span class="input--required">*</span></label
                      >
                      <MBaseInput
                      type="text"
                      name="input"
                      v-model:modelValue="employee.EmployeeName"
                    />
                      <div class="err-message">
                        Thông tin này không được để trống
                      </div>
                    </div>
                </div>
                <div class="m-row" style="z-index:2;">
                  <div id="select" class="select" style="position: relative;">
                    <MComboboxDepartment 
                    :headers="headersDepartment"
                    :option="dataDepartment"
                    displayField="DepartmentName"
                    valueField="DepartmentId"
                    displayFieldCode="DepartmentCode"
                    @select="selectDepartment"
                    label="Đơn vị"/>
                  </div>
                  <!-- <div class="err-message">Thông tin này không được để trống</div> -->
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
                      type="text"
                      name="input"
                      v-model:modelValue="employee.IdentityNumber"
                    />
                    <div class="err-message">
                        Thông tin này phải là số
                      </div>
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
                      name="input"
                      v-model:modelValue="employee.TelephoneNumber"
                    />
                    <div class="err-message">
                        Thông tin này phải là số
                      </div>
                  </div>
                  <div class="m-row" title="Điện thoại cố định">
                    <label class="m-label">ĐT cố định</label>
                    <MBaseInput
                      type="text"
                      name="input"
                      v-model:modelValue="employee.PhoneNumber"
                    />
                    <div class="err-message">
                        Thông tin này phải là số
                      </div>
                  </div>
                  <div class="m-row">
                    <label class="m-label">Email</label>
                    <MBaseInput
                      type="text"
                      name="input"
                      v-model:modelValue="employee.Email"
                    />
                    <div class="err-message">
                        Email không đúng định dangj
                      </div>
                  </div>
              </div>
              <div class="employee1-left__user">
                <div class="m-row">
                    <label class="m-label">Tài khoản ngân hàng</label>
                    <MBaseInput
                      type="text"
                      name="input"
                      v-model:modelValue="employee.BankAccountNumber"
                    />
                    <div class="err-message">
                        Thông tin này phải là số
                      </div>
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
        </div>
        <div class="mess-line"></div>
        <div class="popup-footer">
          <div class="mess-footer">
            <MButton @click="closeOption" title="Hủy" index="1" text="Hủy" class="mess-footer__left" />
            <div class="mess-footer__right">
              <MButton @click="saveDataEmployee" title="Cất" index="1" text="Cất" class="mess-footer__mid" />
              <MButton title="Cất và thêm" index="2" text="Cất và thêm" class="mess-footer_right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MButton/>
</template>
<script>
import MBaseInput from "../../components/base/input/MBaseInput.vue";
import MRadio from "../../components/base/input/MRadio.vue";
import MButton from "../../components/base/Mbutton/MButton.vue";
import MComboboxPosition from "../../components/base/combobox/MComboboxPosition.vue";
import MComboboxDepartment from "../../components/base/combobox/MComboboxDepartment.vue";
import { DEPARTMENT_HEADER, POISITION_HEADER } from "../../const.js";
import { getDepartment } from "../../axios/departmentController/departmentController.js";
import { getPoisition } from "../../axios/poisitionController/poisitionController.js";
import {postEmployee} from "../../axios/employeeController/employeeController.js"
export default {
  name: "EMployeeDetail",
  components: {
    MRadio,
    MButton,
    MComboboxDepartment,
    MComboboxPosition,
    MBaseInput,
  },
  data() {
    return {
      isShowTb: false,
      headersDepartment: DEPARTMENT_HEADER,
      headerPoisition: POISITION_HEADER,
      dataDepartment: [],
      dataPoisition: [],
      mode:"add",
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
        BankBranchName: null
      },
    };
  },
  props:{
    dataDetail:{
      Type:Object,
      default:null
    }
  },
  watch: {
    employee: {
      handler(val) {
        // debugger;
      },
      deep: true,
    },
    dataDetail:{
      handler(val){
        if(val){
          this.mode = "edit";
          this.employee=val;
        }
        else{
          this.mode = "add";
        }
      },
      immediate:true
    },
  },
  created() {
    this.getDataDepartment();
    this.getDataPoisition();
    console.log(this.dataDepartment);
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
    getDataDepartment() {
      getDepartment()
        .then((res) => {
          this.dataDepartment = res.data;
        })
        .catch();
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
     * Hàm cất và thêm(Cất dữ liệu sau đó clear form để tiếp tục thêm mới)
     */
     saveDataEmployee(){
      this.postDataEmployee();
      this.$emit("closeDiaLog");
     },
    /**
     * Hàm thực hiện cất dữ liêu
     */
    postDataEmployee(){
      postEmployee(this.employee).then(res =>{
        console.log("Post thanh cong")
      })
    }
    /**
     * Hàm clear form
     */

    /**
     * API thực hiện thêm mới nhân viên
     */

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