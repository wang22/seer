<template>
  <button type="button" :class="classes"><slot></slot></button>
</template>

<script>
// http://simplelineicons.com/
export default {
  name: "Button",
  props: {
    type: String,
    size: String,
  },
  computed: {
    classes() {
      let cls = `btn btn-${this.type}`;
      if(this.size){
        cls += ` btn-${this.size}`;
      }
      return cls;
    }
  }
};
</script>