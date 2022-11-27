<template lang="">
    <div class="dialog">
      <div class="mw-444">
        <div class="message">
          <div class="mess-content">
            <div class="icon hw-48 mess-warning__icon" v-if="showDialogOnType.warning"></div>
            <div class="icon hw-48 mess-err-icon" v-if="showDialogOnType.err"></div>
            <div class="icon hw-48 mess-ask-icon" v-if="showDialogOnType.ask | showDialogOnType.askOption"></div>
            <div class="mess-content__text">
              {{text}}
            </div>
          </div>
          <div class="mess-line"></div>
          <div>
            <div class="mess-footer" v-if="showDialogOnType.ask">
                <div class="mess-footer__left btn btnCancel" @click="onNo"> Không </div>
                <div class="mess-footer_right">
                    <button class="btn btnSave btnDelete" @click="onYes">Có</button>
                </div>
            </div>
            <div class="mess-footer__alone" v-if="showDialogOnType.err | showDialogOnType.warning">
                <div class="mess-footer_right">
                    <button class="btn btnSave"  @click="onOke">Đồng ý</button>
                </div>
            </div>
            <div class="mess-footer" v-if="showDialogOnType.askOption">
                <div class="mess-footer__left btn btnCancel"  @click="onCancel">Hủy</div>
                <div class="mess-footer__right">
                    <div class="mess-footer__mid" >
                        <div class="btn btnCancel" @click="onNo">Không</div>
                    </div>
                    <div class="mess-footer_right" style="margin-left: 8px;">
                        <div class="btn btnSave" @click="onYes">Có</div>
                    </div>
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
     * Kích hoạt sự kiện cps
     * Author: NTLAM (05/11/2022)
     */
    onYes(){
      this.$emit("yes-warning")
    },
    /**
     * Kích hoạt sự kiện không
     * Author: NTLAM (05/11/2022)
     */
    onNo(){
      this.$emit("no-warning")
    },
    /**
     * Kích hoạt sự kiện đồng ý
     * Author: NTLAM (05/11/2022)
     */
     onOke(){
      this.$emit("oke-warning")
    },
    /**
     * Kích hoạt sự kiện hủy
     * Author: NTLAM (05/11/2022)
     */
    onCancel(){
      this.$emit("cancel-warning")
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
</style>