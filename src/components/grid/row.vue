<template>
  <div :class="buildClass">
      <div class="row">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "GridRow",
  props: {
    fluid: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    buildClass() {
      if(this.fluid){
        return "container-fluid"
      }
      return "container";
    }
  }
};
</script>