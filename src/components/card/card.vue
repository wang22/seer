<template>
<div class="card">
  <img class="card-img-top" v-if="image" :src="image" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title" v-if="title">{{title}}</h5>
    <h6 class="card-subtitle mb-2 text-muted" v-if="subtitle">{{subtitle}}</h6>
    <slot></slot>
  </div>
</div>
</template>

<style lang="scss" scoped>
.card {
  border: 0;
  margin-bottom: 30px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 10px 60px 0 rgba(29,29,31,.09)
}
.card-title {
  color: #000;
  font-size: 1.25rem;
  margin-bottom: 0.4rem;
}
.card-subtitle {
  color: #768093;
  font-size: 0.875rem;
}
</style>

<script>
  export default {
  name: "Card",
  props: {
    image: String,
    title: String,
    subtitle: String
  },
  computed: {
    classes() {
      let cls = `btn btn-${this.type}`;
      if(this.size){
        cls += ` btn-${this.size}`;
      }
      return cls;
    }
  }
};
</script>