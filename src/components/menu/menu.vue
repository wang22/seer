<template>
    <nav class="sidebar-nav">
      <ul class="metismenu" id="menu">
           <li>
             <a class="has-arrow" href="#">
               <Icon type="app-store" />
               Apps
             </a>
             <ul aria-expanded="false" class="collapse">
               <li>
                 <a href="https://github.com/onokumus/metisMenu">
                   Fork
                 </a>
               </li>
               <li>
                 <a href="https://github.com/onokumus/metisMenu">
                   <span class="fa fa-fw fa-star"></span> Star
                 </a>
               </li>
               <li>
                 <a href="https://github.com/onokumus/metisMenu/issues">
                   <span class="fa fa-fw fa-exclamation-triangle"></span> Issues
                 </a>
               </li>
             </ul>
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
import $ from "jQuery";
import "metismenu";
import 'fontawesome';

export default {
  mounted: function() {
    $("#menu").metisMenu({ toggle: true });
  }
};
</script>