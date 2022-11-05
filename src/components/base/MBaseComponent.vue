<template lang="">
    <div>
        
    </div>
</template>
<script>
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
            if (this.isNumeric(val) == false) {
              this.isValidate = true;
              this.errorValidate = this.name + " phải là số";
              return;
            }
          }
          if (rule == "checkValueEmail") {
            if(this.checkEmailFormat(val) == null){
                this.isValidate = true;
                this.errorValidate = this.name + " không đúng định dạng";
            }
          }
        });
      console.log(this.checkEmailFormat());
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