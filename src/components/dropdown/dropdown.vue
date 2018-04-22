<template>
  <div :class="buildClass">
    <button v-if="split" type="button" :class="buildBtnClass">{{text}}</button>
    <button v-if="split" type="button" :class="buildDropClass" data-toggle="dropdown">
        <span class="sr-only">Toggle Dropdown</span>
    </button>
    <button v-if="!split" :class="buildBtnClass" data-toggle="dropdown">
        {{text}}
    </button>
    <div class="dropdown-menu">
        <slot></slot>
    </div>
  </div>
</template>


<script>
import {oneOf} from '../../utils/assert';

export default {
  name: "Dropdown",
  props: {
    text: String,
    split: Boolean,
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
    }
  },
  data() {
    return {
      inButtonGroup: false
    }
  },
  methods: {
    activeButtonGroup () {
      this.inButtonGroup = true;
    }
  },
  computed: {
    buildBtnClass(){
        return [
            'btn ',
            {
                [`btn-${this.type} `]: !!this.type,
                [`btn-${this.size} `]: !!this.size,
                ['dropdown-toggle ']: !this.split
            },
        ];
    },
    buildDropClass(){
        return [
            'btn ',
            {
                [`btn-${this.type} `]: !!this.type,
                [`btn-${this.size} `]: !!this.size
            },
            'dropdown-toggle ',
            'dropdown-toggle-split '
        ];
    },
    buildClass() {
      if(this.split || this.inButtonGroup){
          return "btn-group";
      }
      return "dropdown";
    }
  }
};
</script>