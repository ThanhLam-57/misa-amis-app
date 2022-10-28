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
              <!-- <label  tabindex="22" html-for="table-check" class="checkbox custom-checkbox">
                <input  type="checkbox" id="table" hidden />
                <div class="wrap-icon__custom">
                  <i class="icofont-check"></i>
                </div>
              </label> -->
              <MCheckbox></MCheckbox>
              <div class="checkbox-text pd-l-10">Là khách hàng</div>
            </label>
            <label  class="ms-checkbox">
              <!-- <label id="tabindex23" tabindex="23" class="checkbox custom-checkbox">
                <input type="checkbox" id="table" hidden />
                <div class="wrap-icon__custom">
                  <i class="icofont-check"></i>
                </div>
              </label> -->
              <MCheckbox></MCheckbox>
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
                    <label class="m-label">Mã <span class="input--required">*</span></label>
                    <input tabindex="1" id="txtEmployeeCode" propValue="EmployeeCode" input--error title="Mã nhân viên" class="m-input" type="text" name="input" placeholder="" />
                    <div class="err-message" hidden>Thông tin này không được để trống</div>
                  </div>
                  <div class="m-row" style="width: calc(60% - 6px)">
                    <label class="m-label">Tên <span class="input--required">*</span></label>
                    <input tabindex="2" propValue="EmployeeName" input--error class="m-input" type="text" name="input" placeholder="" />
                    <div class="err-message" hidden>Thông tin này không được để trống</div>
                  </div>
                </div>
                <div class="m-row">
                  <label class="m-label">Đơn vị <span class="input--required">*</span></label>
                  <div id="select" class="select" style="position: relative;">
                    <div class="row" style="width: 100%">
                      <div class="input-wrapper">
                        <input tabindex="3"  propValue="DepartmentName" class="m-input" style="border: none;" type="text"/>
                        <div id="btn-select__combobox" class="btn-select">
                          <div class="combobox__btn"></div>
                        </div>
                      </div>
                    </div>
                    <div id="ttable" class="ttable">
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
                  <div class="err-message" hidden>Thông tin này không được để trống</div>
                </div>
                <div class="m-row">
                  <label  class="m-label">Chức danh</label>
                  <input tabindex="4" propValue="PositionName" class="m-input" type="text" name="input" placeholder="" />
                </div>
              </div>
              <div class="content__employee1-right">
                <div class="employee1-right__user1">
                  <div class="m-row" style="width: 40%; padding-right: 6px">
                    <label class="m-label">Ngày sinh</label>
                    <input tabindex="5" propValue="DateOfBirth" class="m-input" type="date" name="input" />
                  </div>
                  <MRadio/>
                </div>
                <div class="employee1-left__user">
                  <div class="m-row" title="Số chứng minh nhân dân" style="width: 60%; padding-right: 6px">
                    <label class="m-label">Số CMND</label>
                    <input tabindex="9" propValue="IdentityNumber" class="m-input" type="text" name="input" placeholder="" />
                  </div>
                  <div class="m-row" style="width: 40%">
                    <label class="m-label">Ngày cấp</label>
                    <input tabindex="10" propValue="IdentityDate" class="m-input" type="date" name="input" placeholder="" />
                  </div>
                </div>
                <div class="m-row">
                  <label class="m-label">Nơi cấp</label>
                  <input tabindex="11" propValue="IdentityPlace" class="m-input" type="text" name="input" placeholder="" />
                </div>
              </div>
            </div>
            <div class="popup-content__employee2">
              <div class="m-row">
                <label class="m-label">Địa chỉ</label>
                <input tabindex="12" class="m-input" type="text" name="input" placeholder="" />
              </div>
              <div class="employee1-left__user">
                <div class="m-row" title="Điện thoại di động">
                  <label class="m-label">ĐT di động</label>
                  <input tabindex="13" propValue="PhoneNumber" class="m-input" type="text" name="input" placeholder="" />
                </div>
                <div class="m-row" title="Điện thoại cố định">
                  <label class="m-label">ĐT cố định</label>
                  <input tabindex="14" class="m-input" type="text" name="input" placeholder="" />
                </div>
                <div class="m-row">
                  <label class="m-label">Email</label>
                  <input tabindex="15" propValue="Email" class="m-input" type="text" name="input" placeholder="" />
                </div>
              </div>
              <div class="employee1-left__user">
                <div class="m-row">
                  <label class="m-label">Tài khoản ngân hàng</label>
                  <input tabindex="16" class="m-input" type="text" name="input" placeholder="" />
                </div>
                <div class="m-row">
                  <label class="m-label">Tên ngân hàng</label>
                  <input tabindex="17" class="m-input" type="text" name="input" placeholder="" />
                </div>
                <div class="m-row">
                  <label class="m-label">Chi nhánh</label>
                  <input tabindex="18" class="m-input" type="text" name="input" placeholder="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mess-line"></div>
        <div class="popup-footer">
          <div class="mess-footer">
            <div tabindex="20" id="btnCancel" class="mess-footer__left btn btnCancel">
              Huỷ
            </div>
            <div class="mess-footer__right">
              <div class="mess-footer__mid" title="Cất (Ctrl + S)">
                <div tabindex="19" class="btn btnCancel">Cất</div>
              </div>
              <div class="mess-footer_right" title="Cất và thêm(Ctrl + Shift + S)">
                <div id="tabindex21" tabindex="21" class="btn btnSave">Cất và thêm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MCheckbox from "../../components/base/input/MCheckbox.vue"
import MRadio from "../../components/base/input/MRadio.vue"
export default {
  name:"EMployeeDetail",
  components:{MCheckbox,MRadio},
  methods:{
    closeOption(){
      this.$emit("closeDiaLog");
    }
  }
}
</script>
<style >
</style>