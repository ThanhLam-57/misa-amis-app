<template lang="">
    <div>
        
    </div>
</template>
<script>
import{formatDate,formatDateValue} from "../../script/base.js"
export default {
  data() {
    return {
      isValidate: false,
      errorValidate: "",
    };
  },
  methods: {
    validate(val) {
      this.isValidate = false;
      this.errorValidate = "";
      //Cắt điều kiện validate
      var lstRule = this.rules.split(",");
      lstRule &&
        lstRule.forEach((rule) => {
          if (rule == "Empty") {
            if (!val || val.trim() == "") {
              this.isValidate = true;
              this.errorValidate = this.name + " không thể để trống";
              return;
            }
          }
          if (rule == "checkValueNumber") {
            if (val && this.isNumeric(val) == false) {
              this.isValidate = true;
              this.errorValidate = this.name + " phải là số";
              return;
            }
          }
          if (rule == "checkValueEmail") {
            if(val && this.checkEmailFormat(val) == null){
                this.isValidate = true;
                this.errorValidate = this.name + " không đúng định dạng";
            }
          }
          if(rule =="dateTime"){
            var now = new Date();
            val;
            if(Date.parse(val)>Date.parse(now)){
              this.isValidate = true;
              this.errorValidate = this.name + " không được vượt quá ngày hiện tại"
              return;
            }
          }
        });
    },
    /**
     * Funtion check có phải là chuối số không
     * Chuyền vào string
     * @param {*} str
     */
    isNumeric(str) {
      if (typeof str != "string") return false;
      return !isNaN(str) && !isNaN(parseFloat(str));
    },
    checkEmailFormat(email) {
      try {
        const emailCheck =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return email.match(emailCheck);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
.validate-error {
  border-color: red !important;
}
</style>