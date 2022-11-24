<template lang="">
  <MPopup :componentWidth="900">
    <template #header >
          <div class="popup-title">
            <div id="header-popup-title" class="header-popup-title">
              {{popupHeader}}
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
  <div class="popup-content__employee" ref="validate">
    <div class="popup-content__employee1">
      <div class="content__employee1-left">
        <div class="employee1-left__user">
          <div class="m-row" style="width: 40%; padding-right: 6px">
            <label class="m-label"
              >Mã nhân viên <span class="input--required">*</span></label
            >
            <MBaseInput
              type="text"
              name="EmployeeCode"
              rules="Empty"
              ref="EmployeeCode"
              :tabIndex="1"
              v-model:modelValue="employee.EmployeeCode"
            />
          </div>
          <div class="m-row" style="width: calc(60% - 6px)">
            <label class="m-label"
              >Tên nhân viên <span class="input--required">*</span></label
            >
            <MBaseInput
              type="text"
              name="Tên nhân viên"
              rules="Empty"
              tabIndex="2"
              v-model:modelValue="employee.EmployeeName"
            />
          </div>
        </div>
        <div class="m-row" style="z-index: 2">
          <div id="select" class="select" style="position: relative">
            <MComboboxDepartment
              name="Đơn vị"
              rules="Empty"
              :headers="headersDepartment"
              :option="dataDepartment"
              v-model:modelValue="employee.DepartmentID"
              displayField="DepartmentName"
              valueField="DepartmentID"
              displayFieldCode="DepartmentCode"
              @select="selectDepartment"
              label="Đơn vị"
              :tabIndex="3"
            />
          </div>
        </div>
        <div class="m-row" style="z-index: 1">
          <label class="m-label">Chức danh</label>
          <MComboboxPosition
            v-model="employee.PositionID"
            :option="dataPoisition"
            displayField="PositionName"
            valueField="PositionID"
            @select="selectPosition"
            :tabIndex="4"
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
              tabIndex="5"
            />
          </div>
          <div class="m-row" style="padding-left: 10px">
            <label class="m-label">Giới tính</label>
            <div class="option-gen">
              <div class="gen">
                <input
                  type="radio"
                  id="1"
                  value="1"
                  v-model="employee.Gender"
                  tabIndex="6"
                />
                <label class="label-gen" for="1">Nam</label>

                <input
                  type="radio"
                  id="0"
                  value="0"
                  v-model="employee.Gender"
                  tabIndex="7"
                />
                <label class="label-gen" for="0">Nữ</label>

                <input
                  type="radio"
                  id="2"
                  value="2"
                  tabIndex="8"
                  v-model="employee.Gender"
                />
                <label class="label-gen" for="2">Khác</label>
              </div>
            </div>
          </div>
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
              tabIndex="9"
            />
          </div>
          <div class="m-row" style="width: 40%">
            <label class="m-label">Ngày cấp</label>
            <MBaseInput
              type="date"
              name="input"
              tabIndex="10"
              v-model:modelValue="employee.IdentityIssuedDate"
            />
          </div>
        </div>
        <div class="m-row">
          <label class="m-label">Nơi cấp</label>
          <MBaseInput
            type="text"
            name="input"
            tabIndex="11"
            v-model:modelValue="employee.IdentityIssuedPlace"
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
          tabIndex="12"
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
            tabIndex="13"
            v-model:modelValue="employee.TelephoneNumber"
          />
        </div>
        <div class="m-row" title="Điện thoại cố định">
          <label class="m-label">ĐT cố định</label>
          <MBaseInput
            type="text"
            name="Số điện thoại"
            rules="checkValueNumber"
            tabIndex="14"
            v-model:modelValue="employee.PhoneNumber"
          />
        </div>
        <div class="m-row">
          <label class="m-label">Email</label>
          <MBaseInput
            name="Email"
            rules="checkValueEmail"
            type="text"
            tabIndex="15"
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
            tabIndex="16"
            v-model:modelValue="employee.BankAccountNumber"
          />
        </div>
        <div class="m-row">
          <label class="m-label">Tên ngân hàng</label>
          <MBaseInput
            type="text"
            name="input"
            tabIndex="17"
            v-model:modelValue="employee.BankName"
          />
        </div>
        <div class="m-row">
          <label class="m-label">Chi nhánh</label>
          <MBaseInput
            type="text"
            name="input"
            tabIndex="18"
            v-model:modelValue="employee.BankBranchName"
          />
        </div>
      </div>
    </div>
  </div>
</template>
    <template #footer>
  <div class="mess-footer">
    <MButton
      @click="closeOption"
      title="Hủy"
      index="1"
      text="Hủy"
      class="mess-footer__left"
      :tabIndex="21"
      @blur="handleTabIndex"
    />
    <div class="mess-footer__right">
      <MButton
        @click="insertOrUpdateEmployee(true)"
        title="Cất"
        index="1"
        text="Cất"
        class="mess-footer__mid"
        type="submit"
        :tabIndex="20"
      />
      <div class="m-l-8">
        <MButton
          @click="insertOrUpdateEmployee(false)"
          title="Cất và thêm"
          index="2"
          text="Cất và thêm"
          class="mess-footer_right"
          :tabIndex="19"
        />
      </div>
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
import { DEPARTMENT_HEADER, POISITION_HEADER,} from "../../const.js";
import { getDepartment } from "../../axios/departmentController/departmentController.js";
import { getPoisition } from "../../axios/poisitionController/poisitionController.js";
import {
  postEmployee,
  putEmployee,
  getNewCode,
  insertOrUpdate
} from "../../axios/employeeController/employeeController.js";
import { formatDateValue } from "../../script/base.js";
import Base from "@/veiw/base/Base.vue"

export default {
  name: "EMployeeDetail",
  extends: Base,
  components: {
    MRadio,
    MButton,
    MComboboxDepartment,
    MComboboxPosition,
    MBaseInput,
    MPopup,
  },
  data() {
    return {
      optionSavevalue: null,
      isShowTb: false,
      headersDepartment: DEPARTMENT_HEADER,
      headerPoisition: POISITION_HEADER,
      dataDepartment: [],
      dataPoisition: [],
      mode: "add",
      valueText: null,
      errorMessage:null,
      employeeCreate: {
        EmployeeCode: null,
        EmployeeName: null,
        DepartmentID: null,
        DepartmentName: null,
        PositionID: null,
        PositionName: null,
        DateOfBirth: null,
        IdentityNumber: null,
        IdentityIssuedDate: null,
        IdentityIssuedPlace: null,
        Address: null,
        TelephoneNumber: null,
        PhoneNumber: null,
        Email: null,
        BankAccountNumber: null,
        BankName: null,
        BankBranchName: null,
        Gender: 1,
        GenderName: null,
      },
      employee: null,
      messErr:null
    };
  },
  props: {
    dataDetail: {
      Type: Object,
      default: null,
    },
    popupHeader:{
      Type:String,
      default:""
    }
  },
  computed: {
    checkValueFiel: function () {
      return this.employee.every(
        (employee) =>
          employee.EmployeeCode != null &&
          employee.EmployeeCode != undefined &&
          employee.EmployeeCode != ""
      );
    },
  },
  watch: {
    employee: {
      handler(val) {},
      deep: true,
    },
    dataDetail: {
      handler(val) {
        if (val) {
          this.employee = {...val};
          if(val["IsDuplicate"]){
            this.mode = "add";
            this.employee.EmployeeID = null;
            //Tự động lấy mã Code nhân viên
            this.getNewCodeEmployee();
          }
          else{
            this.mode = "edit";
          }
          this.employee.DateOfBirth = formatDateValue(
            this.employee.DateOfBirth
          );
          this.employee.IdentityIssuedDate = formatDateValue(
            this.employee.IdentityIssuedDate
          );
        } else {
          this.mode = "add";
          this.employee = { ...this.employeeCreate };
          //Tự động lấy mã Code nhân viên
          this.getNewCodeEmployee();
        }
      },
      immediate: true,
    },
  },
  async created() {
    await this.getDataDepartment();
    this.getDataPoisition();
    //Auto focus vào ô Mã nhân viên
    setTimeout(x=>{
      this.$refs.EmployeeCode.handleFocus();
    },100)
  },
  methods: {
    /**
     * Hàm thực hiện sự kiện chon Poisition để xử lý bắn vào ô input Poisition
     * Author: NTLAM (02/11/2022)
     */
    selectPosition(item) {
      if (item) {
        this.employee.PositionName = item.PositionName;
        this.employee.PositionID = item.PositionID;
      } else {
        this.employee.PositionName = null;
        this.employee.PositionID = null;
      }
    },
    /**
     * Hàm thực hiện sự kiện cho Department để xử lý ô input Department
     * Author: NTLAM (02/11/2022)
     */
    selectDepartment(item) {
      if (item) {
        this.employee.DepartmentName = item.DepartmentName;
        this.employee.DepartmentID = item.DepartmentID;
      } else {
        this.employee.DepartmentName = null;
        this.employee.DepartmentID = null;
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
      try {
        var res = await getDepartment();
        this.dataDepartment = res.data;
      } catch (e) {
        console.log("Không lấy được danh sách phòng ban")
      }
    },
    /**
     * Hàm thực hiện gọi data Poisition
     * Author: NTLAM (02/11/2022)
     */
    getDataPoisition() {
      getPoisition().then((res) => {
        this.dataPoisition = res.data;
      }).catch((err)=>{
        console.log("Không thấy được danh sách phòng ban")
      });
    },
    /**
     * Hàm thực hiện lấy mã nhân viên tự động
     * Author:NTLAM (15/11/2022)
     */
    getNewCodeEmployee(){
      getNewCode().then((res)=>{
        this.employee.EmployeeCode = res.data;
      }).catch((err)=>{
        console.log("Không lấy được mã code mới")
      })
    },
    /**
     * Hàm thực hiện cất dữ liêu
     * Author:NTLAM 05/11/2022
     */
     insertOrUpdateEmployee(closeForm){
      if(!this.validate()){
        return
      };
      var empID = ""
      if (this.mode == "add") {
        insertOrUpdate(empID,this.employee)
          .then((res) => {
            if (closeForm == true) {
              this.$emit("closeDiaLogAddSucceed", closeForm, this.mode);
            } else {
              this.employee = { ...this.employeeCreate };
              this.$emit("closeDiaLogAddSucceed", closeForm, this.mode);
            }
          })
          .catch((err) => {
            debugger
            this.errorMessage = err.response.data.errorMessage;
            this.$emit("showToasErr", this.mode, this.errorMessage);
            return err.response.data.errorMessage;
          });
          debugger
      } if (this.mode == "edit") {
        debugger
        this.empID = "?recordID=" + this.employee.EmployeeID;
        insertOrUpdate(this.empID, this.employee)
          .then((res) => {
            if (closeForm == true) {
              this.$emit("closeDiaLogAddSucceed", closeForm, this.mode);
            } else {
              this.employee = { ...this.employeeCreate };
              this.$emit("closeDiaLogAddSucceed", closeForm, this.mode);
              this.mode = "add";
            }
          })
          .catch((err) => {
            this.errorMessage = err.response.data.errorMessage;
            this.$emit("showToasErr", this.mode,this.errorMessage);
            return err.response.data.errorMessage;
          });
      }
     },
     /**
      * Xử lý sự kiện tab Index
      */
      handleTabIndex(){
        debugger
        this.$refs.EmployeeCode.handleFocus();
      }
    /**
     * Hàm thực hiện cất dữ liêu
     * Author:NTLAM 05/11/2022
     */
    // postDataEmployee(closeForm) {
    //   this.validate();
    //   if (this.mode == "add") {
    //     postEmployee(this.employee)
    //       .then((res) => {
    //         if (closeForm == true) {
    //           this.$emit("closeDiaLogAddSucceed", closeForm, this.mode);
    //         } else {
    //           this.employee = { ...this.employeeCreate };
    //           this.$emit("closeDiaLogAddSucceed", closeForm, this.mode);
    //         }
    //       })
    //       .catch((err) => {
    //         this.messErr = err.response.data.ErrorMessage;
    //         this.$emit("showToasErr", this.mode);
    //       });
    //   } else {
    //     putEmployee(this.employee.EmployeeID, this.employee)
    //       .then((res) => {
    //         if (closeForm == true) {
    //           this.$emit("closeDiaLogAddSucceed", closeForm, this.mode);
    //         } else {
    //           this.employee = { ...this.employeeCreate };
    //           this.$emit("closeDiaLogAddSucceed", closeForm, this.mode);
    //           this.mode = "add";
    //         }
    //       })
    //       .catch((err) => {
    //         this.$emit("showToasErr", this.mode);
    //       });
    //   }
    // },
  },
};
</script>
<style  scoped>
.m-l-8{
  margin-left: 8px;
}
</style>