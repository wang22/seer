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
        <Col span="12">
          <Card title="DEFAULT BUTTONS" subtitle="Use the button classes on an <a>, <button>, or <input> element.">
            <Button type="primary" class="mb-2">Primary</Button>
            <Button type="secondary" class="mb-2">Secondary</Button>
            <Button type="success" class="mb-2">Success</Button>
            <Button type="danger" class="mb-2">Danger</Button>
            <Button type="warning" class="mb-2">Warning</Button>
            <Button type="info" class="mb-2">Info</Button>
            <Button type="light" class="mb-2">Light</Button>
            <Button type="dark" class="mb-2">Dark</Button>
            <Button type="link" class="mb-2">Link</Button>
          </Card>
          <Card title="OUTLINE BUTTONS" subtitle="In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors on any button.">
            <Button type="primary" class="mb-2" outline>Primary</Button>
            <Button type="secondary" class="mb-2" outline>Secondary</Button>
            <Button type="success" class="mb-2" outline>Success</Button>
            <Button type="danger" class="mb-2" outline>Danger</Button>
            <Button type="warning" class="mb-2" outline>Warning</Button>
            <Button type="info" class="mb-2" outline>Info</Button>
            <Button type="light" class="mb-2" outline>Light</Button>
            <Button type="dark" class="mb-2" outline>Dark</Button>
            <Button type="link" class="mb-2" outline>Link</Button>
            <div>{{code}}</div>
          </Card>
          <Card title="Sizes BUTTONS" subtitle="Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional sizes.">
            <Button type="primary" class="mb-2" size="sm">Small</Button>
            <Button type="primary" class="mb-2">Default</Button>
            <Button type="primary" class="mb-2" size="lg">Large</Button>
          </Card>
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

<script>
const fas = []
export default {
  data: function(){
    return {
      code: '<Button type="link" class="mb-2" outline>Link</Button>'
    }
  }
};
</script>
