<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
// http://simplelineicons.com/
export default {
  name: "Alert",
  props: {
    type: String,
  },
  computed: {
    classes() {
      return `alert alert-${this.type}`;
    }
  }
};
</script>