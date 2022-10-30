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
              <MCheckbox text="Là khách hàng"></MCheckbox>
            </label>
            <label class="ms-checkbox">             
              <MCheckbox text="Là nhân viên"></MCheckbox>
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
                    <MInput style="width: 40%; padding-right: 6px" index="1" label="Mã nhân viên " type="text"/>
                    <MInput style="width: calc(60% - 6px)" index="1" label="Tên nhân viên" type="text"/>
                </div>
                <div class="m-row">
                  <div id="select" class="select" style="position: relative;">
                    <MComboboxDepartment label="Đơn vị"/>
                  </div>
                  <!-- <div class="err-message" hidden>Thông tin này không được để trống</div> -->
                </div>
                  <MInput label="Chức danh" type="text" />
              </div>
              <div class="content__employee1-right">
                <div class="employee1-right__user1">
                    <MInput style="width: 40%; padding-right: 6px" label="Ngày sinh" type="date" />
                  <MRadio/>
                </div>
                <div class="employee1-left__user">
                    <MInput title="Số chứng minh nhân dân" style="width: 60%; padding-right: 6px" label="Số CMND" type="text" />
                    <MInput style="width: 40%" label="Ngày cấp" type="date" />
                </div>
                  <MInput label="Nơi cấp" type="text" />
              </div>
            </div>
            <div class="popup-content__employee2">
                <MInput label="Địa chỉ" type="text" />
              <div class="employee1-left__user">
                  <MInput label="Điện thoại di động" type="text" />
                  <MInput label="Điện thoại cố định" type="text" />
                  <MInput label="Email" type="text" />
              </div>
              <div class="employee1-left__user">
                  <MInput label="Tài khoản ngân hàng" type="text" />
                  <MInput label="Tên ngân hàng" type="text" />
                  <MInput label="Chi nhánh" type="text" />
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
import MCheckbox from "../../components/base/input/MCheckbox.vue"
import MRadio from "../../components/base/input/MRadio.vue"
import MInput from "../../components/base/input/MInput.vue";
import MButton from "../../components/base/Mbutton/MButton.vue"
import MComboboxDepartment from "../../components/base/combobox/MComboboxDepartment.vue"
export default {
  name:"EMployeeDetail",
  components:{MCheckbox,MRadio,MInput,MButton,MComboboxDepartment},
  data(){
    return{
      isShowTb : false,
    }
  },
  methods:{
    /**
     * Hàm đóng dialog thêm mới nhân viên
     * Author:NTLAM 27/10/2022
     */
    closeOption(){
      this.$emit("closeDiaLog");
    },
  }
}
</script>
<style >
</style>