<template>
  <i :class="buildClass"></i>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/fontawesome4/scss/font-awesome.scss';
</style>

<script>
const fas = []
export default {
  name: "Icon",
  props: {
    type: String,
    spin: Boolean
  },
  computed: {
    buildClass() {
      return [
        'fa ',
        {
          [`fa-${this.type} `]: !!this.type,
          [`fa-spin `]: !!this.spin
        }
      ]
    }
  }
};
</script>