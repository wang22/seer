<template>
  <div :class="buildClass" role="group">
    <slot></slot>
  </div>
</template>

<script>
import {oneOf} from '../../utils/assert'

export default {
  name: "ButtonGroup",
  props: {
    type: {
      validator (value){
        return oneOf(value, ['primary','secondary','success','danger','warning','info','light','dark','link'])
      },
      default: "primary"
    },
    size: {
      validator (value){
        return oneOf(value, ['sm', 'lg', '']);
      },
      default: ''
    },
    vertical: Boolean
  },
  computed: {
    buildClass() {
      if(this.vertical){
        return "btn-group-vertical";
      }
      return "btn-group";
    }
  },
  mounted(){
    var self = this;
    this.$children.forEach((child, index) => {
        if(child.$options.name == "Button" && child.isDefaultType){
          child.updateType(this.type);
        }
        if(child.$options.name == "Dropdown"){
          child.activeButtonGroup();
        }
    });

  }
};
</script>