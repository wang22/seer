<template>
  <div ref="sp">
    <slot></slot>
  </div>
</template>

<script>
import "jquery-slimscroll";

export default {
  name: "ScrollPanel",
  props: {
    height: {
      type: String,
      default: "parent"
    },
  },
  mounted: function() {
    let h = $(this.$refs.sp).parent().height();
    if(this.height != "parent"){
      h = this.height;
    }
    $(this.$refs.sp).slimScroll({
      height: h,
      position: "right",
			size: "7px",
			color: "#98a6ad",
			wheelStep: 10
    });
  }
};
</script>