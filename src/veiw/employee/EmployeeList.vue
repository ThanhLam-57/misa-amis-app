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
              <div v-if="employeeSelected.length>0" class="selectTest">Đã chọn: <b>{{employeeSelected.length}}</b></div>
            </div>
            <div class="content-toolbar__right">
            <div class="row" style="width: 250px">
              <div class="" style="padding-right: 10px">
                <MInputIcon
                  type="text"
                  v-model:modelValue="employeeFilter"
                  v-on:keyup.enter="getDataPagings"
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
            @deleteEmployee="optionDetele"
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
    @closeDiaLogAddSucceed="closeDiaLogAddSucceed"
    @onlyAddSucceed="onlyAddSucceed"
    @showToasErr="showToasAddErr"
    :dataDetail="dataDetail"
    ></EmployeeDetail>
    <!-- Popup cảnh báo -->
    <MWarning
    v-if="isShowWarningDelete"
    :text="warningText"
    :dialogType="DIALOG_TYPE.ASK_CANCELABLE"
    @no-warning="cancelDelete"
    @yes-warning="deleteEmployeed"
    ></MWarning>
    <!-- Toast mess delete -->
     <MToas
      v-if="isShowToas"
      :toastAct="toastAct"
      @closeOpenToast="closeOpenToast"
     ></MToas>
     <TheLoading v-if="showLoading"></TheLoading>
</template>
<script>
import MWarning from "../../components/base/MPopup/MWarning.vue"
import {
  loadData,
  deleteByEmployeeId,
} from "../../axios/employeeController/employeeController.js";
import TheLoading from "../../components/base/TheLoading.vue"
import EmployeeDetail from "../../veiw/employee/EmployeeDetail.vue";
import MPaging from "../../components/base/paging/MPaging.vue";
import MTableEmployeeList from "../../components/base/Mtable/MTableEmployee.vue";
import MButton from "../../components/base/Mbutton/MButton.vue";
import MInputIcon from "../../components/base/input/MInputIcon.vue";
import MToas from "../../components/base/MToas.vue";
import { EMPLOYEE_HEADER, DEFAULT_PARAMS, DIALOG_TYPE } from "../../const.js";
export default {
  name: "EmployeeList",
  components: {
    MPaging,
    MTableEmployeeList,
    MButton,
    EmployeeDetail,
    MInputIcon,
    MWarning,
    MToas,TheLoading
  },
  data() {
    return {
      showLoading:false,
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
      EmpDeleted: null,
      dataDetail: null,
      DIALOG_TYPE: DIALOG_TYPE,
      warningText:"abc",
      isShowWarningDelete:false,
      isShowToas:false,
      toastAct:null,
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
     * Sự kiện đóng toast
     */
     closeOpenToast(){
      this.isShowToas= false;
     },

    /**
     * hàm cảnh báo xóa 1 nhân viên
     */
    optionDetele(val){
      this.EmpDeleted = val;
      this.isShowWarningDelete = true
      this.warningText="Bạn có thực sự muốn xoá nhân viên <" + this.EmpDeleted.EmployeeCode +"> không ?"
    },

    /**
     * Hàm hủy xóa
     */
     cancelDelete(){
      this.isShowWarningDelete=false
     },

    /**
     * Hàm thực hiện xoá dữ liệu(Bắt được EmployeeID từ MTableEmployee)
     * Author:NTLAM (03/11/2022)
     */
     deleteEmployeed() {
       deleteByEmployeeId(this.EmpDeleted.EmployeeId).then((res)=>{
        this.pageNumber=1;
        this.getDataPagings();
        this.isShowWarningDelete=false
        this.toastAct="xoá"
        this.isShowToas= true;
        //Hàm xử lý Toast xoá
        setTimeout(() => {
                 this.isShowToas = false;
             }, 3000);
       }).catch((err)=>{

       });
    },

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
    //Khi chọn btn close
    closeToggle() {
      this.isShow = false;
    },
    //Khi thêm mới thành công và đóng
    closeDiaLogAddSucceed(){
      this.getDataPagings();
      this.isShow = false;
      this.toastAct="thêm"
      this.isShowToas= true;
        //Hàm xử lý Toast thêm
        setTimeout(() => {
                 this.isShowToas = false;
             }, 4000);
    },
    /**
     * Hàm showToast thêm mới bị lỗi
     */
     showToasAddErr(){

     },
    /**
     * Hàm lấy ra dữ liệu
     * Author:NTLAM 30/10/2022
     */
    getDataPagings() {
      this.showLoading=true
      this.getFilter();
      loadData(this.filter)
        .then((res)=>{
        this.employees =  res.data.Data;
        this.totalRecord = res.data.TotalRecord;
        this.showLoading=false
        return this.totalRecord;
      })
      .catch(
        this.showLoading=false
      );

    },
    /**
     * Sau khi bấn sửa truyền dữ liệu xuống cpn EmployeeDetal
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