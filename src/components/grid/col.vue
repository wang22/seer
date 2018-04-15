<template>
  <div class="col"></div>
</template>

<script>
export default {
  name: "GridCol",
  props: {
    span: {
      type: Number,
      default: 0
    },
  },
  computed: {
    buildClass() {
      if(this.span == 0){
        return "col"
      }
      return `col-${this.span}`;
    }
  }
};
</script>