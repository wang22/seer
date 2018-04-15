<template>
    <div class="wrapper">
        <div class="side-menu">
            <ScrollPanel>
                <Menu></Menu>
            </ScrollPanel>
        </div>
        <div class="content-page">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>


<style>
.wrapper {
  position: relative;
  background-color: #f4f6f9;
  width: 100%;
  height: 100%;
}
.side-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 260px;
  background: #fff;
}
.content-page {
  margin-left: 260px;
  bottom: 0;
  top: 0;
  right: 0;
  padding: 15px;
}
</style>
