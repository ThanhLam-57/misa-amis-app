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
                      <input
                        tabindex="1"
                        id="txtEmployeeCode"
                        propValue="EmployeeCode"
                        input--error
                        title="Mã nhân viên"
                        class="m-input"
                        type="text"
                        name="input"
                        placeholder=""
                      />
                      <div class="err-message" hidden>
                        Thông tin này không được để trống
                      </div>
                    </div>
                    <div class="m-row" style="width: calc(60% - 6px)">
                      <label class="m-label"
                        >Tên nhân viên
                        <span class="input--required">*</span></label
                      >
                      <input
                        tabindex="2"
                        propValue="EmployeeName"
                        input--error
                        class="m-input"
                        type="text"
                        name="input"
                        placeholder=""
                      />
                      <div class="err-message" hidden>
                        Thông tin này không được để trống
                      </div>
                    </div>
                </div>
                <div class="m-row">
                  <div id="select" class="select" style="position: relative;">
                    <MComboboxDepartment label="Đơn vị"/>
                  </div>
                  <!-- <div class="err-message" hidden>Thông tin này không được để trống</div> -->
                </div>
                <div class="m-row">
                    <label class="m-label">Chức danh</label>
                    <input
                      tabindex="4"
                      propValue="PositionName"
                      class="m-input"
                      type="text"
                      name="input"
                      placeholder=""
                    />
                  </div>
              </div>
              <div class="content__employee1-right">
                <div class="employee1-right__user1">
                  <div class="m-row" style="width: 40%; padding-right: 6px">
                      <label class="m-label">Ngày sinh</label>
                      <input
                        tabindex="5"
                        propValue="DateOfBirth"
                        class="m-input"
                        type="date"
                        name="input"
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
                      <input
                        tabindex="9"
                        propValue="IdentityNumber"
                        class="m-input"
                        type="text"
                        name="input"
                        placeholder=""
                      />
                    </div>
                    <div class="m-row" style="width: 40%">
                      <label class="m-label">Ngày cấp</label>
                      <input
                        tabindex="10"
                        propValue="IdentityDate"
                        class="m-input"
                        type="date"
                        name="input"
                        placeholder=""
                      />
                    </div>
                </div>
                <div class="m-row">
                    <label class="m-label">Nơi cấp</label>
                    <input
                      tabindex="11"
                      propValue="IdentityPlace"
                      class="m-input"
                      type="text"
                      name="input"
                      placeholder=""
                    />
                  </div>
              </div>
            </div>
            <div class="popup-content__employee2">
              <div class="m-row">
                  <label class="m-label">Địa chỉ</label>
                  <input
                    tabindex="12"
                    propValue="Address"
                    class="m-input"
                    type="text"
                    name="input"
                    placeholder=""
                  />
                </div>
              <div class="employee1-left__user">
                <div class="m-row" title="Điện thoại di động">
                    <label class="m-label">ĐT di động</label>
                    <input
                      tabindex="13"
                      propValue="PhoneNumber"
                      class="m-input"
                      type="text"
                      name="input"
                      placeholder=""
                    />
                  </div>
                  <div class="m-row" title="Điện thoại cố định">
                    <label class="m-label">ĐT cố định</label>
                    <input
                      tabindex="14"
                      class="m-input"
                      type="text"
                      name="input"
                      placeholder=""
                    />
                  </div>
                  <div class="m-row">
                    <label class="m-label">Email</label>
                    <input
                      email
                      tabindex="15"
                      propValue="Email"
                      class="m-input"
                      type="text"
                      name="input"
                      placeholder=""
                    />
                  </div>
              </div>
              <div class="employee1-left__user">
                <div class="m-row">
                    <label class="m-label">Tài khoản ngân hàng</label>
                    <input
                      propValue="BankAccountNumber"
                      tabindex="16"
                      class="m-input"
                      type="text"
                      name="input"
                      placeholder=""
                    />
                  </div>
                  <div class="m-row">
                    <label class="m-label">Tên ngân hàng</label>
                    <input
                      propValue="BankName"
                      tabindex="17"
                      class="m-input"
                      type="text"
                      name="input"
                      placeholder=""
                    />
                  </div>
                  <div class="m-row">
                    <label class="m-label">Chi nhánh</label>
                    <input
                      propValue="BankBranchName"
                      tabindex="18"
                      class="m-input"
                      type="text"
                      name="input"
                      placeholder=""
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mess-line"></div>
        <div class="popup-footer">
          <div class="mess-footer">
            <MButton title="Hủy" index="1" text="Hủy" class="mess-footer__left" />
            <div class="mess-footer__right">
              <MButton title="Cất" index="1" text="Hủy" class="mess-footer__mid" />
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
import MRadio from "../../components/base/input/MRadio.vue";
import MButton from "../../components/base/Mbutton/MButton.vue";
import MComboboxDepartment from "../../components/base/combobox/MComboboxDepartment.vue";
export default {
  name: "EMployeeDetail",
  components: { MRadio, MButton, MComboboxDepartment },
  data() {
    return {
      isShowTb: false,
    };
  },
  methods: {
    /**
     * Hàm đóng dialog thêm mới nhân viên
     * Author:NTLAM 27/10/2022
     */
    closeOption() {
      this.$emit("closeDiaLog");
    },
  },
};
</script>
<style >
</style>