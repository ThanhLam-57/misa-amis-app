<script>
export default {
    data:{
        inputFalse:null
    },
    name: "Base",
    methods: {
        /**
         * Hàm vailidate khi submit
         * Author:NTLAM(15/11/2022)
         */
        validate(){
            this.inputFalse = null;
            var isValidate = true;
            if(this.$refs.validate){
                
                //Danh sách Component được sử dụng cần quét validate
                var components = [
                    "MBaseInput",
                    "MComboboxPosition",
                    "MComboboxDepartment"
                ]
                //Lấy ra tất cả danh sách input trong form
                var inputs = this.$refs.validate.querySelectorAll("input");
                //Duyệt qua từng Input để kiểm tra validate
                inputs && inputs.forEach(input => {
                    //Lấy ra component chứa input
                    var component = input.__vueParentComponent;
                    //check xem component có thuoc danh sách component cần validate hay không
                    if(component.type && component.type.name && components.includes(component.type.name)){
                        //Nêys không thuộc return falsr
                        if(!this.validateComponent(component)){
                            isValidate = false;
                            if(!this.inputFalse){
                                this.inputFalse = input;
                            }
                        };
                    }
                });
            }
            setTimeout(() =>{
                //forcus vào input lỗi đầu tiên
                if(this.inputFalse){
                    this.inputFalse.focus();
                }
            },100)
            return isValidate;
        },
        validateComponent(component) {
            var data = component.data;
            var props = component.props;
            var val = props.modelValue;
            data.isValidate = false;
            data.errorValidate = "";
            //Cắt điều kiện validate
            if(!props.rules){
                return true;
            }
            var lstRule = props.rules.split(",");
            for(var i = 0; i < lstRule.length ; i++){
                var rule = lstRule[i];
                if (rule == "Empty") {
                    if (!val || val.trim() == "") {
                        data.isValidate = true;
                        data.errorValidate = props.name + " không thể để trống";
                        return false;
                    }
                }
                if (rule == "checkValueNumber") {
                    if (val && this.isNumeric(val) == false) {
                        data.isValidate = true;
                        data.errorValidate = props.name + " phải là số";
                        return false;
                    }
                }
                if (rule == "checkValueEmail") {
                    if(val && this.checkEmailFormat(val) == null){
                        data.isValidate = true;
                        data.errorValidate = props.name + " không đúng định dạng";
                        return false;
                    }
                }
                if(rule =="dateTime"){
                    var now = new Date();
                    if(Date.parse(val)>Date.parse(now)){
                        data.isValidate = true;
                        data.errorValidate = props.name + " không được vượt quá ngày hiện tại"
                        return false;
                    }
                } 
            }
           
            return true;
        },
        /**
         * Funtion check có phải là chuối số không
         * Chuyền vào string
         * @param {*} str
         * Author:NTLAM(15/11/2022)
         */
        isNumeric(str) {
            if (typeof str != "string") return false;
            return !isNaN(str) && !isNaN(parseFloat(str));
        },
        /**
         * Funtion check validate email
         * @param {*} email 
         * Author:NTLAM(15/11/2022)
         */
        checkEmailFormat(email) {
            try {
                const emailCheck =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return email.match(emailCheck);
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>
<style lang="">
    
</style>