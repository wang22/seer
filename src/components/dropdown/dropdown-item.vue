<template>
  <a :class="buildClass" href="#"><slot></slot></a>
</template>

<script>
import {oneOf} from '../../utils/assert';

export default {
  name: "Dropdown",
  props: {
    disabled: Boolean,
    active: Boolean
  },
  computed: {
    buildClass(){
        return [
            'dropdown-item ',
            {
                [`active `]: !!this.active,
                [`disabled `]: !!this.disabled
            }
        ];
    }
  }
};
</script>