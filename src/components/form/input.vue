<template>
  <input type="text" :class="buildClass" :disabled="disabled" value="Some text value...">
</template>
<script>
export default {
    name: "Input",
    props: {
        size: {
            type: String,
            default: ""
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        buildClass() {
            let cls = "form-control";
            if(this.size != ""){
                cls += ` form-control-${this.size}`
            }
            return cls;
        }
    }
};
</script>