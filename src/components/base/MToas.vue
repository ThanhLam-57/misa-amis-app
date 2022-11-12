<template>
  <div class="m-toast">
    <div class="m-toast-main" :class="classColor">
      <div class="left-toast">
        <div class="icon ml-16 mr-16" :class="classIcon"></div>
        <div class="toast-content">
          <b for="" class="title-toast">{{ headerMess }}</b>
          <label for="">{{ toastAct }} </label>
        </div>
      </div>
      <div class="icon icon-close mr-8" @click="closeOpenToast()"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["toastAct", "headerMess","classIcon","classColor"],
  methods: {
    /**
     * Thực hiện đóng Toast
     * Author:
     */
    closeOpenToast() {
      this.$emit("closeOpenToast");
    },
  },
};
</script>
<style scoped>
.m-toast {
  position: fixed;
  right: 32px;
  bottom: 32px;
  z-index: 9999;
  display: block;
}
.m-toast-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 80px;
  background-color: #eef8ec;
  border-radius: 4px;
  animation: toastLeft ease 0.3s, toastOut linear 1s 3s forwards;
}
.color-succses{
  border-left: 5px solid #50b83c;
}
.color-fail{
  border-left: 5px solid red;
}
.left-toast {
  display: flex;
}
.toast-content {
  align-items: center;
  flex-direction: column;
  justify-content: start;
}
.title-toast {
  display: block;
  font-size: 20px;
}
.ml-16 {
  margin-left: 16px;
}
.mr-16 {
  margin-right: 16px;
}
.mr-8 {
  margin-right: 8px;
}
@keyframes toastLeft {
  from {
    opacity: 0;
    transform: translateX(calc(100% + 32px));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes toastOut {
  to {
    opacity: 0;
  }
}
</style>
