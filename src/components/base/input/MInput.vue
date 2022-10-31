<template lang="">
  <div class="m-row" :style="style">
    <label class="m-label">{{label}} 
          <span v-if="index == 1" class="input--required">*</span>
        </label>
        <input
            :index="index"
            :id="id"
            :type="type"
            :value="modelValue"
            :name="name"
            :class="{
              m__input: type!=='checkbox'
            }"
            @input="updateInput" />
        <!-- <div class="err-message">Thông tin này không được để trống</div> -->
  </div>

</template>
<script>
export default {
  name: "MInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    index:Number,
    style:String
  },
  methods:{
    /**
     * Hàm up date input
     * Author:NTLAM 28/10/2022
     * @param {event} event 
     */
    updateInput(event){
        this.$emit("update:modelValue",event.target.value);
    }
  },
  directives: {
  focus: {
    inserted: function (el) {
      el.focus()
    }
  }
}
};
</script>
<style lang="">
</style>