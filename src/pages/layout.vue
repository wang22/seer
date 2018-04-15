<template>
  <div>
      <div class="topbar">
          <div class="title-box">
            <h4>Typography</h4>
            <Breadcrumb></Breadcrumb>
          </div>
          <div class="right-menu">
            asdf
          </div>
      </div>
      <Input />
      <Input size="sm" />
      <Input size="lg" />
      <Input size="lg" disabled />
      <Card>ss</Card>
      <Table></Table>
  </div>
</template>

<style lang="scss" scoped>
.topbar {
  display: inline-block;
  width: 100%;
}
.right-menu {
  width: 50%;
  float: left;
}
.title-box {
  width: 50%;
  float: left;
  h4 {
    font-size: 1.1rem;
    color: #000;
    font-weight: 700;
    margin-bottom: 0;
  }
  .breadcrumb {
    padding: 0;
  }
}
</style>
