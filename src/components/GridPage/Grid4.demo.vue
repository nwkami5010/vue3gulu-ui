<template>
  <Row>
    <Button @click="onToggle({align: 'center',verticalAlign:'left'})">vrtical + align=top +center</Button>
  </Row>
  <Row>
    <Button @click="onToggle({align:'spaceAround',verticalAlign: 'center'})"> vertical + align = center + center</Button>
  </Row>
  <Row>
    <Button @click="onToggle({align:'right',verticalAlign:'center'})">vertical + align = top + right</Button>
  </Row>
  <Button @click="onToggle({align: 'spaceBetween',verticalAlign:'bottom'})">vertical+ align = center + spaceBetween</Button>
  <Row>
    <Button @click="onToggle({align: 'spaceBetween',verticalAlign:'center'})">vertical + align = center + spaceBetween</Button>
  </Row>
  <div class="custom-grid">
    <Row :align="align" :verticalAlign="verticalAlign">
      <Col span="4">
        <div style="height: 100px">col-4-1</div>
      </Col>
      <Col span="4">
        <div style="height: 50px">col-4-2</div>
      </Col>
      <Col span="4">
        <div style="height: 120px">col-4-3</div>
      </Col>
      <Col span="4">
        <div style="height: 80px">col-4-4</div>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
//import Button from '../../lib/button/Button.vue';
import Row from '../../lib/grid/Row.vue';
import Col from '../../lib/grid/Col.vue';
import { ref } from 'vue';
export default {
  components: {
    Row,Col,//Button
  },
  setup(props,context) {
    const align = ref('center');
    const verticalAlign = ref ('left');
    const onToggle = (obj)=> {
      if(obj.align) {
        align.value = obj.align;
      }
      if(obj.verticalAlign) {
        verticalAlign.value =obj.verticalAlign;
      }
    };
    return { align, verticalAlign,onToggle};
  }
};

</script>

<style lang="scss" scoped>
  .k-row {padding: 10px 0;}
  @import "./index.scss";
</style>
