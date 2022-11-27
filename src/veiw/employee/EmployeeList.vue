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
              <div class="handle-option"  v-if="employeeSelected.length>0">
                <div class="selectValue">Đã chọn: <b>{{employeeSelected.length}}</b></div>
                <div class="textOption" @click="unSelected">Bỏ chọn</div>
                <MbuttonIcon class="btnDelete" @click="optionDeteleMultiple" actionButton="Xoá"></MbuttonIcon>
              </div>
            </div>
            <div class="content-toolbar__right">
            <div class="row" style="width: 250px">
              <div class="" style="padding-right: 10px">
                <MInputIcon
                  type="text"
                  v-model:modelValue="employeeFilter"
                  v-on:keyup.enter="getDataPagingSearch"
                  placeholder="Tìm theo mã, tên nhân viên"
                />
              </div>
            </div>
            <div @click="reLoadData" class="icon hw-24 icon-reload" title="Load lại dữ liệu"></div>
            <div @click="exportExcel" class="icon hw-24 icon-export" title="Xuất file Excel"></div>
            </div>
          </div>
          <MTableEmployeeList
            ref="unSelect"
            @showDialog="showEmployeeDetal"
            @duplicateEmployee="onToggleDuplicate"
            :headers="employeeHeader"
            :dataSource="employees"
            :selectedtoParent="employeeSelected"
            @changeSelect="changeSelected"
            @deleteEmployee="optionDetele"
          />
          <!-- <div class="mes-table" v-if="totalRecord == 0">
              Không có dữ liệu
          </div> -->
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
    @showToasErr="showToasErr"
    :dataDetail="dataDetail"
    :popupHeader="popupHeader"
    ></EmployeeDetail>
    <!-- Popup cảnh báo -->
    <MWarning
    v-if="isShowWarningDelete"
    :text="warningText"
    :dialogType="DIALOG_TYPE.ASK_CANCELABLE"
    @no-warning="cancelDelete"
    @yes-warning="deleteEmployeed"
    ></MWarning>
<!-- Popup xoá nhiều -->
    <MWarning
    v-if="isShowWarningDeleteMultiple"
    :text="warningText"
    :dialogType="DIALOG_TYPE.ASK_CANCELABLE"
    @no-warning="cancelDelete"
    @yes-warning="deleteMultipleEmployee"
    ></MWarning>
<!-- Popup thông báo trùng mã nhân viên -->
    <MWarning
    v-if="isShowMessDuplicate"
    :text="duplicateMess"
    :dialogType="DIALOG_TYPE.WARNING"
    @oke-warning="okeWarningDuplicate"
    ></MWarning>
<!-- Popup thông báo khi đóng Dialog thêm mới -->
    <MWarning
    v-if="isShowMessSaveData"
    :text="warningText"
    @cancel-warning="cancelWarning"
    @yes-warning="closeAndSaveData"
    ref="closeAndSaveData"
    @no-warning="closeAndDontSave"
    ></MWarning>
    <!-- Toast mess delete -->
     <MToas
      v-if="isShowToas"
      :headerMess="messToast.headerMess"
      :toastAct="messToast.toastAct"
      :classIcon="messToast.classIcon"
      :classColor="messToast.classColor"
      @closeOpenToast="closeOpenToast"
     ></MToas>
     <TheLoading v-if="showLoading"></TheLoading>
</template>
<script>
import MWarning from "../../components/base/MPopup/MWarning.vue";
import {
  loadData,
  deleteByEmployeeId,
  deleteMultiple,
  exportExcelEmployee
} from "../../axios/employeeController/employeeController.js";
import TheLoading from "../../components/base/TheLoading.vue";
import MbuttonIcon from "../../components/base/Mbutton/MbuttonIcon.vue";
import EmployeeDetail from "../../veiw/employee/EmployeeDetail.vue";
import MPaging from "../../components/base/paging/MPaging.vue";
import MTableEmployeeList from "../../components/base/Mtable/MTableEmployee.vue";
import MButton from "../../components/base/Mbutton/MButton.vue";
import MInputIcon from "../../components/base/input/MInputIcon.vue";
import MToas from "../../components/base/MToas.vue";
import { EMPLOYEE_HEADER, DEFAULT_PARAMS, DIALOG_TYPE, MESS_TOAST,HEADER_DETAIL } from "../../const.js";
export default {
  name: "EmployeeList",
  components: {
    MPaging,
    MTableEmployeeList,
    MButton,
    EmployeeDetail,
    MInputIcon,
    MWarning,
    MToas,
    TheLoading,
    MbuttonIcon,
  },
  data() {
    return {
      dialogType:null,
      popupHeader:HEADER_DETAIL.PopupAddEmployee,
      showLoading: false,
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
      warningText: "",
      duplicateMess:"",
      isShowWarningDelete: false,
      isShowWarningDeleteMultiple:false,
      isShowMessDuplicate:false,
      isShowMessSaveData:false,
      isShowToas: false,
      MESS_TOAST:MESS_TOAST,
      messToast:{
        toastAct: null,
        headerMess: null,
        classIcon:null,
        classColor:null,
      },
      stringEmpID:""
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
    /**
     * Xử lý sự kiện lấy thông số đầu vào cho employee Filter
     * Author:NTLAM (03/11/2022)
     */

    //Get page number
    pageNumber() {
      this.getFilter();
      this.getDataPagings();
      this.getPaging();
    },

    //Get page size
    valuePageSize() {
      this.pageNumber = 1;
      this.getFilter();
      this.getDataPagings();
      this.getPaging();
    },
  },
  methods: {
    //Get flter đưa vào xử lý API get emlpyee filter
    getEmployeeFilter() {
      this.pageNumber = 1;
      this.valuePageSize = 10;
      this.getFilter();
      this.getDataPagings();
    },
    /**
     * Sự kiện đóng toast
     * Author:NTLAM (03/11/2022)
     */
    closeOpenToast() {
      this.isShowToas = false;
    },

    /**
     * hàm cảnh báo xóa 1 nhân viên
     * Author:NTLAM (03/11/2022)
     */
    optionDetele(val) {
      this.EmpDeleted = val;
      this.isShowWarningDelete = true;
      this.warningText =
        "Bạn có thực sự muốn xoá nhân viên <" +
        this.EmpDeleted.EmployeeCode +
        "> không ?";
    },
    optionDeteleMultiple(){
      this.isShowWarningDeleteMultiple = true;
      this.warningText = "Bạn có muốn xoá danh sách nhân viên"
    },
    /**
     * Hàm hủy xóa
     * Author:NTLAM (03/11/2022)
     */
    cancelDelete() {
      this.isShowWarningDelete = false;
      this.isShowWarningDeleteMultiple = false;
    },
    /**
     * Hàm thực hiện đóng popup thông báo 
     * Sau khi đóng forcus input vào input lỗi
     * Author:NTLAM(10/11/2022)
     */
    okeWarningDuplicate(){
      this.isShowMessDuplicate = false;
      //Sau khi đóng forcus input vào input lỗi
    },
    /**
     * Hàm thực hiện xoá dữ liệu(Bắt được EmployeeID từ MTableEmployee) hoặc xoá theo danh sách ID
     * Author:NTLAM (03/11/2022)
     */
    deleteEmployeed() {
        deleteByEmployeeId(this.EmpDeleted.EmployeeID)
          .then((res) => {
            //Xử lí khi xoá bản ghi duy nhất ở trng cuối cùng
            if(this.pageNumber>1&&(this.pageNumber - 1) * this.valuePageSize == this.totalRecord - 1){
              this.pageNumber = this.pageNumber - 1;
            }
            this.getDataPagings();
            this.isShowWarningDelete = false;
            this.messToast=this.MESS_TOAST.DELETE_SUCCSES;
            this.showToastMess()
          })
          .catch((err) => {
            this.messToast=this.MESS_TOAST.DELETE_FAIL;
            this.showToastMess()
          }); 
    },
    /**
     * Hàm thực hiện lấy dữ liệu khi search
     * Author:NTLAM(19/11/2022)
     */
     getDataPagingSearch(){
      this.pageNumber = 1;
      this.getDataPagings();
     },
    /**
     * Reload data trong bảng
     * Author:NTLAM (03/11/2022)
     */
    reLoadData() {
      this.pageNumber = 1;
      this.getDataPagings();
    },
    /**
     * Hàm thực hiện export excel
     * Author:NTLAM (25/11/2022)
     */
     exportExcel(){
      try {
        exportExcelEmployee();
        this.messToast=this.MESS_TOAST.EXPORT_SUCCSES;
        this.showToastMess();
      } catch (error) {
        this.messToast=this.MESS_TOAST.EXPORT_FAIL;
        this.showToastMess()
      }
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
        this.filter = this.filter + "&employeeFilter=" + this.employeeFilter;
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
     * Author:NTLAM 22/10/2022
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
    /**
     * Hàm show dialog nhân bản nhân viên
     * Author:NTLAM 27/10/2022
     */
    onToggleDuplicate(item){
      this.dataDetail = item;
      this.dataDetail["IsDuplicate"] = true;
      this.isShow = true;
    },
    /**
     * Hàm sự liện click btn close Employee Detail
     * Author:NTLAM 27/10/2022
     */
    closeToggle() {
      //Hiển thị popup thông báo
      this.isShowMessSaveData = true;
      this.warningText = "Dữ liệu đã thay đổi. Bạn có muốn cất không?"
    },
    /**
     * Sự kiện huỷ đóng Dialog thêm mới
     */
    cancelWarning(){
      this.isShow = true;
      this.isShowMessSaveData = false;
    },
    /**
     * Sự kiện đóng dialog thêm mới vào không lưu
     */
     closeAndDontSave(){
      this.isShow = false;
      this.isShowMessSaveData = false;
     },
     /**
      * Sự kiện đóng dialof thêm mới và lưu thông tin
      */
      closeAndSaveData(){
        this.$refs.closeAndSaveData.insertOrUpdateEmployee(true);
      },
    /**
     * Hàm xử lý khi thêm mới/sửa thành công
     * Author: NTLAM (27/10/2022)
     */
    closeDiaLogAddSucceed(closeForm,mode) {
      this.getDataPagings();
      if (closeForm == true && mode =="edit") {
        this.isShow = false;
        this.messToast= this.MESS_TOAST.EDIT_SUCCSES;
        this.showToastMess()
      }
      else if(closeForm == false && mode =="edit"){
        this.messToast= this.MESS_TOAST.EDIT_SUCCSES;
        this.showToastMess()
      }
      else if(closeForm == true && mode =="add"){
        this.isShow = false;
        this.messToast= this.MESS_TOAST.ADD_SUCCSES;
        this.showToastMess()
      }
      else if(closeForm == false && mode =="add"){
        this.messToast= this.MESS_TOAST.ADD_SUCCSES;
        this.showToastMess()
      }
    },
    /**
     * Hàm xử lý khi thêm/sửa thất bại
     * Author:NTLAM(27/10/2022)
     * @param {*} mode 
     */
    showToasErr(mode,messErr){
      if(mode=="add"){
        this.isShow=true;
        this.messToast= this.MESS_TOAST.ADD_FAIL;
        this.showToastMess()
        this.duplicateMess = messErr
        this.isShowMessDuplicate = true
      }else{
        this.isShow=true;
        this.messToast= this.MESS_TOAST.EDIT_FAIL;
        this.showToastMess()
      }
    },
    /**
     * Hàm lấy ra dữ liệu
     * Author:NTLAM 30/10/2022
     */
    getDataPagings() {
      this.showLoading = true;
      this.getFilter();
      this.pageNumber
      loadData(this.filter)
        .then((res) => {
          this.employees = res.data.Data;
          if (this.totalRecord != null) {
            this.totalRecord = res.data.TotalCount;
          } 
          this.showLoading = false;
          return this.totalRecord;
        })
        .catch((err)=>{

        });
    },
    /**
     * Hàm thực hiện xoá nhiều
     */
    deleteMultipleEmployee(){
      deleteMultiple(this.employeeSelected).then((res)=>{
          if(res.data){
            this.getDataPagings();
            this.isShowWarningDeleteMultiple = false;
            this.messToast=this.MESS_TOAST.DELETE_SUCCSES;
            this.showToastMess()
            this.$refs.unSelect.unSelectAll();
          }
          else{
            this.messToast=this.MESS_TOAST.DELETE_FAIL;
            this.showToastMess()
          }
        })
        .catch( (err) => {
            this.messToast = this.MESS_TOAST.DELETE_FAIL;
            this.showToastMess()
          }
        );
    },
    /**
     * Ham sau khi bấn sửa truyền dữ liệu xuống cpn EmployeeDetal
     * Author: NTLAM (27/10/2022)
     */
    showEmployeeDetal(val) {
      this.popupHeader = HEADER_DETAIL.PopupEditEmployee;
      this.dataDetail = val;
      this.isShow = true;
    },

    /**
     * Hàm show Toast
     * Author:NTLAM(27/10/2022)
     */
    showToastMess(){
      this.isShowToas=true;
        setTimeout(() => {
        this.isShowToas = false;
      }, 4000);
    },
    /**
     * Sự kiện bỏ chọn tất cả select box
     * Author:NTLAM (15/11/2022)
     */
    unSelected(){
      this.$refs.unSelect.unSelectAll();
    }
  },
};
</script>
<style scoped>
.selectValue {
  font-size: 14px;
  width: 80px;
}
.handle-option {
  align-items: center;
  display: flex;
  font-size: 14px;
}
.textOption{
  cursor: pointer;
  /* margin-left: 8px;*/
  margin-right: 8px;
  color: #EB3333;
}
.btnDelete{
  background-color: #EB3333;
  width: 80px;
}
.btnDelete:hover{
  background-color: #F06666;
}
</style>