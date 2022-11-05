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
              <div class="selectTest">Đã chọn: <b>{{employeeSelected.length}}</b></div>
            </div>
            <div class="content-toolbar__right">
            <div class="row" style="width: 250px">
              <div class="" style="padding-right: 10px">
                <MInputIcon
                  style="margin-right: 10px;"
                  type="text"
                  v-model:modelValue="employeeFilter"
                  placeholder="Tìm theo mã, tên nhân viên"
                />
              </div>
            </div>
            <div @click="reLoadData" class="icon hw-24 icon-reload" title="Load lại dữ liệu"></div>

            </div>
          </div>
          <MTableEmployeeList
            @showDialog="showEmployeeDetal"
            :headers="employeeHeader"
            :dataSource="employees"
            @changeSelect="changeSelected"
            @deleteEmployee="deleteEmployeed"
          />
          <m-paging
          :totalRecord="totalRecord"
          :numberStart="numberStart"
          :numberEnd="numberEnd"
          :classActive="valuePageSize"
          @prePage="getPrePage"
          @nextPage="getNextPage"></m-paging>
        </div>
    </div>

    <!-- Dialog danh sách nhân viên -->
    <EmployeeDetail
    v-if="isShow"
    @closeDiaLog="closeToggle"
    :dataDetail="dataDetail"
    ></EmployeeDetail>
</template>
<script>
import {
  loadData,
  deleteByEmployeeId,
} from "../../axios/employeeController/employeeController.js";
import EmployeeDetail from "../../veiw/employee/EmployeeDetail.vue";
import MPaging from "../../components/base/paging/MPaging.vue";
import MTableEmployeeList from "../../components/base/Mtable/MTableEmployee.vue";
import MButton from "../../components/base/Mbutton/MButton.vue";
import MInputIcon from "../../components/base/input/MInputIcon.vue";
import { EMPLOYEE_HEADER, DEFAULT_PARAMS } from "../../const.js";
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
      defaultParams: DEFAULT_PARAMS,
      employees: [],
      totalRecord: 0,
      employeeSelected: [],
      valuePageSize: 10,
      employeeFilter: null,
      pageNumber: 1,
      filter: "",
      numberStart: 1,
      numberEnd: 10,
      idDeleted: null,
      dataDetail: null,
    };
  },
  created() {
    this.getDataPagings();
  },
  mounted() {
    //Lấy ra value page Size nhận sự kiện từ combobox
    this.emitter.on("valueActive", (valueActive) => {
      this.valuePageSize = valueActive;
    });
  },
  watch: {
    //Xử lý sự kiện lấy thông số đầu vào cho employee Filter
     pageNumber() {
      this.getFilter();
      this.getDataPagings();
     this.getPaging();
    },
     valuePageSize() {
      this.pageNumber = 1;
      this.getFilter();
       this.getDataPagings();
     this.getPaging();
    },
     employeeFilter() {
      this.pageNumber=1;
      this.valuePageSize=10;
      this.getFilter();
       this.getDataPagings();
    },
  },
  methods: {
    /**
     * hàm cảnh báo xóa 1 nhân viên
     */

    /**
     * Hàm cảnh báo xóa nhiều nhân viên
     */

    /**
     * Reload data trong bảng
     * Author:NTLAM (03/11/2022)
     */
    reLoadData() {
      this.valuePageSize = 10;
      this.pageNumber = 1;
      this.getDataPagings();
      //Combobox pageSize  sau khi reLoad chưa hiển thị về mặc định
    },

    /**
     * Hàm lấy thông số paging
     * Autthor:NTTLAM 02/11/2022
     */
    getPaging() {
      if (this.pageNumber == 1) {
        this.numberStart = 1;
        this.numberEnd = this.valuePageSize;
      }
      this.numberStart = this.valuePageSize * (this.pageNumber - 1) + 1;
      if (this.valuePageSize * this.pageNumber > this.totalRecord) {
        this.numberEnd = this.totalRecord;
      } else {
        this.numberEnd = this.valuePageSize * this.pageNumber;
      }
    },
    /**
     * Hàm thực hiện xoá dữ liệu(Bắt được EmployeeID từ MTableEmployee)
     * Author:NTLAM (03/11/2022)
     */
     deleteEmployeed(val) {
      this.idDeleted = val;
       deleteByEmployeeId(this.idDeleted);
      //Khi xoá xong chưa load lại được trang
       this.getDataPagings();
    },
    /**
     * Hàm lấy chuỗi filter ghép vào API
     * Author:NTLAM 01/11/2022
     */
    getFilter() {
      this.filter =
      "pageSize=" + this.valuePageSize + "&pageNumber=" + this.pageNumber;
      if (this.employeeFilter && this.employeeFilter.length > 0) {
        this.filter =this.filter + "&employeeFilter=" + this.employeeFilter;
      }
    },
    /**
     * Hàm bắt sự kiện và xử lý ntm PrePage
     * Author:MTLAM 01/11/2022
     */
    getPrePage() {
      if (this.pageNumber > 1) {
        this.pageNumber--;
      }
    },
    /**
     * Hàm bắt sự kiện và xử lý ntm NextPage
     * Author:MTLAM 01/11/2022
     */
    getNextPage() {
      if (this.pageNumber < this.totalRecord / this.valuePageSize) {
        this.pageNumber++;
      }
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
      this.dataDetail = null;
      this.isShow = true;
    },
    closeToggle() {
      this.isShow = false;
    },
    /**
     * Hàm lấy ra dữ liệu
     * Author:NTLAM 30/10/2022
     */
    async getDataPagings() {
      this.getFilter();
      loadData(this.filter)
        .then((res)=>{
        this.employees =  res.data.Data;
        this.totalRecord = res.data.TotalRecord;
        return this.totalRecord;
      })
      .catch();
      // try{
      //   var res = await loadData(this.filter);
      //   this.employees =  res.data.Data;
      //   this.totalRecord = res.data.TotalRecord;
      //   return this.totalRecord;
      // }
      // catch(e){}
    },
    /**
     * Hàm show employee Detail và thực hiện sửa
     */
    showEmployeeDetal(val) {
      this.dataDetail = val;
      this.isShow = true;
    },
  },
};
</script>
<style lang="">
</style>