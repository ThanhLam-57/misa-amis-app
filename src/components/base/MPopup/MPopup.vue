<template lang="">
    <div class="dialog">
      <div class="mw-900">
        <div class="message">
          <div class="popup">
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
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>