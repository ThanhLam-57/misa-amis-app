<template lang="">
      <div id="menu" class="menu big-menu">
        <div id="logo-container" class="logo-container">
          <div id="header-icon1" class="header-icon hw-24 display-none"></div>
          <a id="list-app" href="" class="hw-24 logo-icon--app"></a>
          <img
            id="logo-icon"
            class="h-32 logo--icon--app"
            src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg"
            alt=""
          />
        </div>
        <div class="menu-list--item">
          <div  v-for="(item, index) in menuItems " :key="index" @click="changeRouter(item)" class="list-item" :class="{'list-item__active': item.route == routeActive}">
            <div class="list-icon icon hw-24 " :style="{'background-position':(-item.iconCoordinates[0])+'px' + ' ' + (-item.iconCoordinates[1])+'px'}"
            ></div>
            <div class="menu-list--tittle">{{item.text}}</div>
          </div>
        </div>
      </div>
</template>
<script>
import { MENU_ITEMS } from "../../const.js";
export default {
  data() {
    return {
      menuItems: [],
      routeActive: null,
    };
  },
  created() {
    this.menuItems = MENU_ITEMS;
  },
  methods: {
    /**
     * Hàm đổi router
     * Author: NTLAM 28/10/2022
     * @param {*} item 
     */
    changeRouter(item) {
      this.routeActive = item.route;
      this.$router.push({ path: item.route });
    },
  },
};
</script>
<style scoped>
</style>