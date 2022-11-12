<template lang="">
    <input  :value="modelValue" type="radio" />
</template>
<script>
export default {
  name: "MRadio",
  props: {
    modelValue: String,
  },
  data() {
    return {
    };
  },
};
</script>
<style lang="">
</style>