<template lang="">
    <div id="dlgEmployeeDetail" class="dialog">
    <div class="mw-900">
      <div class="popup">
        <div class="popup-header">
          <div class="popup-title">
            <div id="header-popup-title" class="header-popup-title">
              Thông tin nhân viên
            </div>
              <MCheckbox text="Là khách hàng"></MCheckbox>
              <MCheckbox text="Là nhân viên"></MCheckbox>
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
                    <MInput style="width: 40%; padding-right: 6px" index="1" label="Mã" type="text"/>
                    <MInput style="width: calc(60% - 6px)" index="1" label="Tên" type="text"/>
                </div>
                <div class="m-row">
                  <div id="select" class="select" style="position: relative;">
                    <MInputIcon style="height: 30px;" label="Đơn vị" index="1" />
                    <div id="ttable" class="ttable" hidden>
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
                    </div>

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
import MInputIcon from "../../components/base/input/MInputIcon.vue";
import MButton from "../../components/base/Mbutton/MButton.vue"
export default {
  name:"EMployeeDetail",
  components:{MCheckbox,MRadio,MInput,MInputIcon,MButton},
  methods:{
    closeOption(){
      this.$emit("closeDiaLog");
    }
  }
}
</script>
<style >
</style>