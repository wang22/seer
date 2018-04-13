<template>
  <div>

  </div>
</template>

<script>
import $ from "jQuery";
import "metismenu";
import 'fontawesome';

export default {
  mounted: function() {
    $("#menu").metisMenu({ toggle: true });
  }
};
</script>