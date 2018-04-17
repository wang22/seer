<template>
  <span :class="buildClass"><slot></slot></span>
</template>

<script>
export default {
  name: "Badge",
  props: {
    type: String,
    size: String,
    pill: Boolean
  },
  computed: {
    buildClass() {
      let cls = `badge badge-${this.type}`;
      if(this.pill){
          cls += " badge badge-pill";
      }
      if(this.size){
        cls += ` badge-${this.size}`;
      }
      return cls;
    }
  }
};
</script>