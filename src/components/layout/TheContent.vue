<template lang="">
    <div class="content">
        <div class="content-header">
          <div class="content-header__title">Nhân viên</div>
          <button id="btnAdd" class="content-header__button">
            Thêm mới nhân viên
          </button>
        </div>
        <div class="content-layout">
          <div class="content-toolbar">
            <div class="row" style="width: 250px">
              <div class="" style="padding-right: 10px">
                <input
                  class="m-input input-search"
                  style="margin-right: 10px"
                  type="text"
                  placeholder="Tìm theo mã, tên nhân viên"
                />
              </div>
            </div>
            <div class="icon hw-24 icon-reload" title="Lấy lại dữ liệu"></div>
          </div>
          <div class="content-table" id="style">
            <table id="tbEmployeeList" class="table">
              <thead class="table-header">
                <tr>
                  <th
                    propValue="check"
                    format="sticky_header_left"
                    class="text-align--center sticky_header_left"
                  >
                    <label
                      html-for="table-check"
                      class="checkbox custom-checkbox"
                    >
                      <input type="checkbox" id="table" hidden />
                      <div class="wrap-icon__custom">
                        <i class="icofont-check"></i>
                      </div>
                    </label>
                  </th>
                  <th
                    propValue="EmployeeCode"
                    format="sticky_header_left_1"
                    class="text-align--left sticky_header_left_1"
                    title=""
                    style="min-width: 100px"
                  >
                    MÃ NHÂN VIÊN
                  </th>
                  <th
                    propValue="EmployeeName"
                    class="text-align--left"
                    style="min-width: 200px"
                  >
                    TÊN NHÂN VIÊN
                  </th>
                  <th
                    propValue="Gender"
                    class="text-align--left"
                    style="min-width: 70px"
                  >
                    GIỚI TÍNH
                  </th>
                  <th
                    propValue="DateOfBirth"
                    format="date"
                    class="text-align--center"
                    style="min-width: 100px"
                  >
                    NGÀY SINH
                  </th>
                  <th
                    propValue="IdentityNumber"
                    title="Số chứng minh nhân dân"
                    class="text-align--left"
                    style="min-width: 120px"
                  >
                    SỐ CMND
                  </th>
                  <th
                    propValue="IdentityDate"
                    format="date"
                    class="text-align--center"
                    style="min-width: 120px"
                  >
                    NGÀY CẤP
                  </th>
                  <th
                    propValue="IdentityPlace"
                    class="text-align--left"
                    style="min-width: 150px"
                  >
                    NƠI CẤP
                  </th>
                  <th
                    propValue="PositionName"
                    class="text-align--left"
                    style="min-width: 150px"
                  >
                    CHỨC DANH
                  </th>
                  <th
                    propValue="DepartmentCode"
                    class="text-align--left"
                    style="min-width: 150px"
                  >
                    MÃ ĐƠN VỊ
                  </th>
                  <th
                    propValue="DepartmentName"
                    class="text-align--left"
                    style="min-width: 150px"
                  >
                    TÊN ĐƠN VỊ
                  </th>
                  <th
                    propValue="PhoneNumber"
                    title="Điện thoại di động"
                    class="text-align--left"
                    style="min-width: 150px"
                  >
                    ĐT DI ĐỘNG
                  </th>
                  <th
                    propValue
                    title="điện thoại cố định"
                    class="text-align--left"
                    style="min-width: 150px"
                  >
                    ĐT CỐ ĐỊNH
                  </th>
                  <th
                    propValue="Email"
                    class="text-align--left"
                    style="min-width: 150px"
                  >
                    EMAIL
                  </th>
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
              <tbody></tbody>
            </table>
          </div>
          <div class="content-table-paging">
            <div class="paging-left"></div>
            <div class="paging-right">
              <div class="option-number__list">
                Số bản ghi /trang
                <div id="select" class="select" style="position: relative">
                  <div id="combobox" class="combobox">
                    <div id="combobox__page_size" class="combobox__input">
                      5
                    </div>
                    <div id="btn-select" class="btn-select">
                      <div class="combobox__btn"></div>
                    </div>
                  </div>
                  <ul class="pageSize-ul">
                    <li id="departmentName" class="cbb_active list">5</li>
                    <li class="list">10</li>
                    <li class="list">15</li>
                    <li class="list">20</li>
                  </ul>
                </div>
              </div>
              <div class="number-record">1 - 4 bản ghi</div>
              <div class="paging-option">
                <div
                  id="icon-paging__before"
                  class="icon hw-24 icon-paging__before"
                ></div>
                <div
                  id="icon-paging__after"
                  class="icon hw-24 icon-paging__after"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    @import url(../../style/layout/content.css);
</style>