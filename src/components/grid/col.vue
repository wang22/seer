<template>
  <div :class="buildClass"><slot></slot></div>
</template>

<script>
export default {
  name: "GridCol",
  props: {
    span: {
      type: String,
      default: ""
    },
  },
  computed: {
    buildClass() {
      if(this.span == ""){
        return "col"
      }
      return `col-${this.span}`;
    }
  }
};
</script>