<template>
    <div>
        <div v-if="type == 'ripple'" class="lds-ripple">
            <div :style="buildStyle"></div><div :style="buildStyle"></div>
        </div>
        <div v-else-if="type == 'circle'">
            <div class="lds-circle" :style="buildStyle"></div>
        </div>
        <div v-else-if="type == 'heart'">
            <div class="lds-heart" :style="buildStyle"><div></div></div>
        </div>
        <div v-else>
          <svg xmlns="http://www.w3.org/2000/svg" class="lds-message" width="80px" height="80px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(20 50)">
            <circle cx="0" cy="0" r="7" fill="#e15b64" transform="scale(0.00835173 0.00835173)">
              <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"/>
            </circle>
            </g><g transform="translate(40 50)">
            <circle cx="0" cy="0" r="7" fill="#f47e60" transform="scale(0.109726 0.109726)">
              <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"/>
            </circle>
            </g><g transform="translate(60 50)">
            <circle cx="0" cy="0" r="7" fill="#f8b26a" transform="scale(0.419709 0.419709)">
              <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"/>
            </circle>
            </g><g transform="translate(80 50)">
            <circle cx="0" cy="0" r="7" fill="#abbd81" transform="scale(0.768945 0.768945)">
              <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"/>
            </circle>
            </g>
          </svg>
        </div>
    </div>
</template>

<style lang="sass" scoped>
@import '../../styles/loading.scss';
</style>

<script>
export default {
  name: "Loading",
  props: {
    type: {
      type: String,
      default: "ripple"
    },
    color: String,
  },
  computed: {
    buildStyle() {
      switch(this.type){
        case "ripple": return `border-color:${this.color}`; break;
        case "circle": return `background:${this.color}`; break;
        default: return "";
      }
    }
  }
};
</script>