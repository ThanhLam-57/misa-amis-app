<template lang="">
  <div  @click="showOption" class="select" style="position: relative">
                  <div class="combobox">
                    <div id="combobox__page_size" class="combobox__input">{{classActive}}
                    </div>
                    <div class="btn-select">
                      <div class="combobox__btn" :class="{rotate:isShow}"></div>
                    </div>
                  </div>
                  <ul v-click-away="closeOption" class="pageSize-ul" v-if="isShow">
                    <li v-for="(item, index) in option" :key="index" @click="activeClass(item),valueActive()" :class="{'cbb_active list': item.value == classActive}">{{item.name}}</li>
                  </ul>
                </div>
</template>
<script>
export default {
  name: "McCombobox",
  methods: {
    /**
     * Hàm show option
     * Author:NTLAM 26/10/2022
     */
    showOption() {
      this.isShow = !this.isShow;
    },
    /**
     * Hàm đóng option
     * Author:NTLAM 26/10/2022
     */
    closeOption() {
      this.isShow = false;
    },
    /**
     * Hàm thêm mới class vào option
     * Author:NTLAM 26/10/2022
     * @param {*} item
     */
    activeClass(item) {
      this.classActive = item.value;
    },

    valueActive() {
      this.emitter.emit("valueActive", this.classActive);
    },
  },
  props: {
    option: {
      value: Array,
      default: [],
    },
  },
  data() {
    return {
      isShow: false,
      classActive: 10,
    };
  },
};
</script>
<style lang="">
</style>