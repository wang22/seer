<template>
  <button type="button" :class="buildClass" :disabled="disabled">
    <Icon v-if="loading" type="circle-o-notch" spin />
    <Icon v-if="icon && !loading" :type="icon" />
    <slot></slot>
  </button>
</template>

<script>
import {oneOf} from '../../utils/assert'

export default {
  name: "Button",
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
    outline: {
      type: Boolean,
      default: false
    },
    icon: String,
    disabled: Boolean,
    loading: Boolean
  },
  data() {
    return {
      isDefaultType: true,
      outType: this.type
    }
  },
  mounted(){
    this.outType = this.type;
    this.type = this.outType;
  },
  computed: {
    buildClass() {
      let cls = `btn`;
      if(this.outline){
        cls += ` btn-outline-${this.outType}`;
      } else {
        cls += ` btn-${this.outType}`;
      }
      if(this.size){
        cls += ` btn-${this.size}`;
      }
      if(this.type != "primary"){
        this.isDefaultType = false;
      }
      return cls;
    }
  },
  methods: {
    updateType(type) {
      this.outType = type;
    }
  }
};
</script>