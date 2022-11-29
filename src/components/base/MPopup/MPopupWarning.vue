<template lang="">
    <div class="dialog">
      <div class="mw-444">
        <div class="message">
          <div class="mess-content">
            <div class="icon mess-warning__icon"></div>
            <div class="mess-content__text">
              Mã nhân viên đã tồn tại trong hệ thống
            </div>
          </div>
          <div class="mess-line"></div>
          <div>
            <div class="mess-footer__alone">
                <div class="mess-footer_right">
                    <button class="btn btnSave"  @click="onOke">Đồng ý</button>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
</template>
<script>
import {DIALOG_TYPE} from "../../../const.js"
export default {
  props:{
    text:String,
    dialogType:String
  },
  data() {
    return {
      DIALOG_TYPE:DIALOG_TYPE,
      showDialogOnType:{
        alert: false,
        warning: false,
        askOption: false,
        ask: false,
      }
    }
  },
  created(){
    if (this.dialogType == DIALOG_TYPE.ALERT) {
      this.showDialogOnType.alert = true;
    } else if (this.dialogType == DIALOG_TYPE.WARNING) {
      this.showDialogOnType.warning = true;
    } else if (this.dialogType == DIALOG_TYPE.ASK_CANCELABLE) {
      this.showDialogOnType.ask = true;
    } else {
      this.showDialogOnType.askOption = true;
    }
  },
  methods:{
    /**
     * Kích hoạt sự kiện đồng ý
     * Author: NTLAM (05/11/2022)
     */
     onOke(){
      this.$emit("oke-warning")
    },
  }
};
</script>
<style scoped>
.message{
  width: 396px;
  border-radius: 4px;
}
.btnDelete{
  background-color: #EB3333;
  width: 80px;
  height: 36px;
}
.btnDelete:hover{
  background-color: #F06666;
}
.mess-content{
  display: flex !important;
  margin-bottom: 24px;

}
.mess-content__text{
  display: flex;
    padding-bottom: 0px !important;
    padding-top: 0px !important;
    align-items: center;
    margin-left: 24px;
}
.popup-close__icon{
  margin: 0 !important;
}
</style>