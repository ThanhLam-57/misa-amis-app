<script>
export default {
    name: "Base",
    methods: {
        validate(){
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
                    if(component.type && component.type.name && components.includes(component.type.name)){
                        if(!this.validateComponent(component)){
                            isValidate = false;
                        };
                    }
                });
            }
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
            lstRule &&
                lstRule.forEach((rule) => {
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
            });
            return true;
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
    }
}
</script>
<style lang="">
    
</style>