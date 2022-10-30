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
          <MTableEmployeeList
            :headers="employeeHeader"
          />
          <m-paging></m-paging>
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
import EmployeeDetail from '../../veiw/employee/EmployeeDetail.vue'
import MPaging from "../../components/base/paging/MPaging.vue";
import MTableEmployeeList from '../../components/base/Mtable/MTableEmployee.vue'
import MButton from '../../components/base/Mbutton/MButton.vue'
import MInputIcon from  "../../components/base/input/MInputIcon.vue"
import{EMPLOYEE_HEADER} from '../../const.js'
export default {
  name: "EmployeeList",
  components: { MPaging ,MTableEmployeeList,MButton,EmployeeDetail,MInputIcon},
  data(){
    return{
      isShow : false,
      employeeHeader: EMPLOYEE_HEADER

    }
  },
  methods:{
    /**
     * Hàm show dialog thêm mới nhân viên
     * Author:NTLAM 27/10/2022
     */
    onToggle(){
      this.isShow = !this.isShow;
    }
  }
};
</script>
<style lang="">
</style>