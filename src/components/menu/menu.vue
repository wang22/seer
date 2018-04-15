<template>
    <nav class="sidebar-nav" ref="menu">
      <ul class="metismenu" id="menu">
           <li>
             <router-link to="/">
              <Icon type="app-store" />
              Index
             </router-link>
             <router-link to="/button">
              <Icon type="app-store" />
              Button
             </router-link>
             <router-link to="/layout">
              <Icon type="app-store" />
              Layout
             </router-link>
           </li>
           <li>
             <a class="has-arrow" href="#" aria-expanded="false"><Icon type="500px" /> Menu 0</a>
             <ul aria-expanded="false" class="collapse">
               <li><a href="#">item 0.1</a></li>
               <li><a href="#">item 0.2</a></li>
               <li><a href="http://onokumus.com">onokumus</a></li>
               <li><a href="#">item 0.4</a></li>
             </ul>
           </li>
           <li id="removable">
             <a class="has-arrow" href="#" aria-expanded="false"><Icon type="angellist" /> Menu 1</a>
             <ul aria-expanded="false" class="collapse">
               <li><a href="#">item 1.1</a></li>
               <li><a href="#">item 1.2</a></li>
               <li>
                 <a class="has-arrow" href="#" aria-expanded="false">Menu 1.3</a>
                 <ul aria-expanded="false" class="collapse">
                   <li><a href="#">item 1.3.1</a></li>
                   <li><a href="#">item 1.3.2</a></li>
                   <li><a href="#">item 1.3.3</a></li>
                   <li><a href="#">item 1.3.4</a></li>
                 </ul>
               </li>
               <li><a href="#">item 1.4</a></li>
               <li>
                 <a class="has-arrow" href="#" aria-expanded="false">Menu 1.5</a>
                 <ul aria-expanded="false" class="collapse">
                   <li><a href="#">item 1.5.1</a></li>
                   <li><a href="#">item 1.5.2</a></li>
                   <li><a href="#">item 1.5.3</a></li>
                   <li><a href="#">item 1.5.4</a></li>
                 </ul>
               </li>
             </ul>
           </li>
           <li>
             <a class="has-arrow" href="#" aria-expanded="false"><Icon type="angellist" /> Menu 2</a>
             <ul aria-expanded="false" class="collapse">
               <li><a href="#">item 2.1</a></li>
               <li><a href="#">item 2.2</a></li>
               <li><a href="#">item 2.3</a></li>
               <li><a href="#">item 2.4</a></li>
             </ul>
           </li>
         </ul>
    </nav>
</template>

<style lang="sass" scoped>
@import '../../styles/menu.scss';
</style>

<script>
import "metismenu";
import 'fontawesome';

export default {
  mounted: function() {
    $(this.$refs.menu).metisMenu({ toggle: true });
  }
};
</script>