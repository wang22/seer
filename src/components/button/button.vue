<template>
  <button type="button" :class="classes"><slot></slot></button>
</template>

<script>
// http://simplelineicons.com/
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    size: String,
    outline: Boolean
  },
  computed: {
    classes() {
      let cls = `btn`;
      if(this.outline){
        cls += ` btn-outline-${this.type}`;
      } else {
        cls += ` btn-${this.type}`;
      }
      if(this.size){
        cls += ` btn-${this.size}`;
      }
      return cls;
    }
  }
};
</script>