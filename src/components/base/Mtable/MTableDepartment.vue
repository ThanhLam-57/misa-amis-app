<template lang="">
    <div id="ttable" class="ttable">
        <table class="table-select" style=" margin: 0px;z-index: 3;">
            <thead class="table-header" style="position: sticky;">
                <tr >
                    <th
                        v-for="(item, index) in headers"
                        :class="item.Class"
                        :style="{'width': item.Width +'%'}"
                        :key="index"
                    >{{item.Caption}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="department in dataDepartment" :key="department.DepartmentId">
                    <td
                    v-for="(item, index) in headers"
                    :class="item.Class"
                    :style="{ 'width': item.Width +'%' }"
                    :key="index"
                  >{{  getValueTxt(department,item)}}</td>
                </tr>
            </tbody>
        </table>
        <div class="table-bot">
                Cập nhật cơ cấu tổ chức
        </div>
    </div>
</template>
<script>
export default {
  name: "MTableDerpartment",
  props: {
    headers: {
      Type: Array,
      default: [],
    },
    dataDepartment: {
      Type: Array,
      default: [],
    },
  },
};
</script>
<style lang="">
</style>