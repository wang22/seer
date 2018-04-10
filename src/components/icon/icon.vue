<template>
  <i :class="classes"></i>
</template>

<style lang="sass" scoped>
@import '../../assets/styles/fontawesome/scss/fontawesome.scss'
// @import '../../assets/styles/fontawesome/scss/fa-brands.scss'
// @import '../../assets/styles/fontawesome/scss/fa-regular.scss'
// @import '../../assets/styles/fontawesome/scss/fa-solid.scss'
</style>

<script>
const fas = []
export default {
  name: "Icon",
  props: {
    type: String,
  },
  computed: {
    classes() {
      return `faw fa-${this.type}`;
    }
  }
};
</script>