<template lang="">
    <div>
        <div class="content-header">
          <div class="content-header__title">Nhân viên</div>
          <m-button
            index="2"
            text="Thêm mới nhân viên"
            @click="onToggle"
          ></m-button>
        </div>
        <div class="content-layout">
          <div class="content-toolbar">
            <div class="content-toolbar__left">
              <div class="selectTest">Đã chọn: <b>{{employeeSelected.length}}</b> pageSize: {{valuePageSize}} pageNumber:{{pageNumber}}  {{filter}}</div>
            </div>
            <div class="content-toolbar__right">
            <div class="row" style="width: 250px">
              <div class="" style="padding-right: 10px">
                <MInputIcon
                  style="margin-right: 10px;"
                  type="text"
                  placeholder="Tìm theo mã, tên nhân viên"
                />
              </div>
            </div>
            <div class="icon hw-24 icon-reload" title="Lấy lại dữ liệu"></div>

            </div>
          </div>
          <MTableEmployeeList
            :headers="employeeHeader"
            :dataSource="employees"
            @changeSelect="changeSelected"
          />
          <m-paging
          :totalRecord="totalRecord"
          @prePage="getPrePage"
          @nextPage="getNextPage"></m-paging>
        </div>
    </div>

    <!-- Dialog danh sách nhân viên -->
    <EmployeeDetail
    v-if="isShow"
    @closeDiaLog="onToggle"
    @showDialog="onToggle"
    ></EmployeeDetail>
</template>
<script>
import { loadData } from "../../axios/employeeController/employeeController.js";
import EmployeeDetail from "../../veiw/employee/EmployeeDetail.vue";
import MPaging from "../../components/base/paging/MPaging.vue";
import MTableEmployeeList from "../../components/base/Mtable/MTableEmployee.vue";
import MButton from "../../components/base/Mbutton/MButton.vue";
import MInputIcon from "../../components/base/input/MInputIcon.vue";
import { EMPLOYEE_HEADER } from "../../const.js";
export default {
  name: "EmployeeList",
  components: {
    MPaging,
    MTableEmployeeList,
    MButton,
    EmployeeDetail,
    MInputIcon,
  },
  data() {
    return {
      isShow: false,
      employeeHeader: EMPLOYEE_HEADER,
      employees: [],
      totalRecord: 0,
      params: "",
      employeeSelected: [],
      valuePageSize: 10,
      pageNumber:1,
      filter:""
    };
  },
  created() {
    this.getDataPagings();
  },
  mounted() {
    //Lấy ra value page Size
    this.emitter.on("valueActive", (valueActive) => {
      this.valuePageSize = valueActive;
    });
  },
  methods: {
    getFilter() {
      this.filter="pageSize=" + this.valuePageSize + "&&pageIndex=" + this.pageNumber;
    },
    getPrePage(){
      if(this.pageNumber>1){
        this.pageNumber--;
      }
    },
    getNextPage(){
      this.pageNumber++;
    },
    /**
     * Lấy ra số bản ghi được select
     * Author:NTLAM 32/10/2022
     */
    changeSelected(val) {
      if (val) {
        this.employeeSelected = val;
      } else {
        this.employeeSelected = [];
      }
    },
    /**
     * Hàm show dialog thêm mới nhân viên
     * Author:NTLAM 27/10/2022
     */
    onToggle() {
      this.isShow = !this.isShow;
    },
    /**
     * Hàm lấy ra dữ liệu
     * Author:NTLAM 30/10/2022
     */
    getDataPagings() {
      loadData(this.params)
        .then((res) => {
          this.employees = res.data.Data;
          this.totalRecord = res.data.TotalRecord;
          return this.totalRecord;
        })
        .catch();
    },
  },
};
</script>
<style lang="">
</style>