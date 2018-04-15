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
  position: absolute;
  background-color: #f4f6f9;
  height: 100%;
  width: 100%;
}
.side-menu {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 260px;
  background: #fff;
}
.content-page {
  margin-left: 260px;
  padding: 25px 25px 15px 25px;
}
</style>
