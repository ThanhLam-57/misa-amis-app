<template>
  <div class="container">
    <TheHeader/>
    <TheContent/>
    <Thenavbar/>
  </div>
</template>

<script>
import  TheHeader from './components/layout/TheHeader.vue'
import TheContent from './components/layout/TheContent.vue'
import Thenavbar from './components/layout/TheNavbar.vue'
export default {
  name: "App",
  components: {
    TheHeader,TheContent,Thenavbar
  },
};
</script>

<style>
@import url(./style/main.css);
@import url(./style/layout/container.css);
</style>
