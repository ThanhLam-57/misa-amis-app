<template>
  <div class="container">
    <TheHeader />
    <Thenavbar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import Thenavbar from "./components/layout/TheNavbar.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    Thenavbar,
  }
};
</script>

<style>
@import url(./style/main.css);
@import url(./style/layout/container.css);
</style>
