<template>
  <div class="m-toast">
    <div class="m-toast-main" :class="classColor">
      <div class="left-toast">
        <div class="icon ml-10 mr-10" :class="classIcon"></div>
        <div class="toast-content">
          <b for="" class="title-toast">{{ headerMess }}</b>
          <label class="label-content" for="">{{ toastAct }} </label>
        </div>
      </div>
      <div class="icon icon-close mr-16" @click="closeOpenToast()"></div>
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
    top: 112px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999999;
}
.m-toast-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 450px;
    max-width: 650px;
    height: 56px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    animation: toastLeft ease 0.3s, toastOut linear 1s 3s forwards;
}
.m-toast-main-error {
    border-left: 5px solid red;
    background-color: #fce6e6;
}
.left-toast {
    display: flex;
}
.toast-content {
  display: contents;
    align-items: center;
    flex-direction: column;
    justify-content: start;
}
.label-content{
  display: flex;
  align-items: center;
}
.title-toast {
  display: flex;
    color: #50b83c;
    font-weight: 700;
    align-items: center;
    font-size: 13px;
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
.ml-10 {
  margin-left: 10px;
}
.mr-10 {
  margin-right: 10px;
}
.mr-16{
  margin-right: 16px;
}
</style>
