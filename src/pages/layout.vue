<template>
  <div>
      <Row class="topbar">
        <Col span="5"  class="title-box">
          <h4>Typography</h4>
          <Breadcrumb></Breadcrumb>
        </Col>
        <Col class="right-menu">
          asdf
        </Col>
      </Row>
      <Row>
        <Col span="6">sss</Col>
        <Col span="6">sss</Col>
        <Col span="3">
          <Input />
        </Col>
        <Col span="3">
          <Input size="sm" />
        </Col>
        <Col span="3">
          <Input size="lg" />
        </Col>
        <Col span="3">
          <Input size="lg" disabled />
        </Col>
        <Col span="6">
          <Card>ss</Card>
        </Col>
        <Col span="12">
          <Table></Table>
        </Col>
      </Row>
  </div>
</template>

<style lang="scss" scoped>
.topbar {
  display: inline-block;
  width: 100%;
}
.right-menu {
  float: left;
}
.title-box {
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
