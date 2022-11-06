<template lang="">
    <div class="dialog">
          <div class="popup" :style='{
        "min-width": componentWidth + "px",
        "height": componentHeight ? (componentHeight + "px") : "auto",
        "padding": componentPadding + "px",
    }'>
            <div class="popup-header">
              <slot name="header"></slot>
            </div>
            <div class="popup-content">
              <slot name="content"></slot>
            </div>
            <div class="mess-line"></div>
            <div class="popup-footer">
              <slot name="footer"></slot>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  props: {
    componentWidth: {
      Type: [Number, String],
      default: 100,
    },
    componentHeight: {
      Type: [Number, String],
      default: null,
    },
  },
};
</script>
<style lang="">
</style>