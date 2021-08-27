<demo>
基础栅格
</demo>

<template>
  <div class="custom-grid">
    <Row>
      <Col span="12">col-12</Col>
      <Col span="12">col-12</Col>
    </Row>
    <Row>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
    </Row>
    <Row>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
    </Row>
  </div>
</template>
<script lang="ts">
import Row from '../../lib/grid/Row.vue';
import Col from '../../lib/grid/Col.vue';

export default {
 components: {
   Row,Col
 },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
