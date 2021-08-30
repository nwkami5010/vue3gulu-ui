<template>
  <div class="k-collapse-item" :classs="{isActive}">
    <div class="k-collapse-item-header" :class="{disabled}" @click="headerClickHandle">
      <slot name="header"></slot>
      <Icon  name="icon-menuright"/>
    </div>
    <div v-show="isActive" class="k=collapse-item-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent,ref,computed,inject,getCurrentInstance} from 'vue';
//import Icon from "./Icon.vue";
import { emitter }from './Collapse.vue';
export default defineComponent({
  name: "CollapseItem",
  components: {},
  props: {
    selected:{
      type: Boolean,
      default: false
    },
    name: {
      type:String,
      required:true
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  inject:['collapse'],
  setup(props,context) {
    const internalInstance = getCurrentInstance();
    const isActive = computed(() => {
      return inject('collapse').activeName.findIndex(item=> item=== props.name) >=0
    }) ;

    const headerClickHandle =()=> {

      emitter.emit('itemClick', {newActiveName:
      props.name,uid:internalInstance.parent.uid});
    }


    return {isActive,headerClickHandle};
  }
});
</script>

<style lang="scss" scoped>
@import "./src/style/_var.scss";

.k-collapse-item {
  .k-collapse-item-header {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    color: #303133;
    cursor: pointer;//设定鼠标为游标指针
    border-bottom: 1px solid #ebeef5;
    font-size: 13px;
    font-weight:500;
    transition: border-bottom-color .3s;
    outline: none;
    &.disabled {
      cursor:not-allowed;
      color: rgba(0,0,0,.25);

      svg{
        fill:rgba(0,0,0,.25);
      }
    }
    &.isActive {
      border-bottom-color: transparent;
    }

    svg {
      margin: 0 8px 0 auto;
      transition: transform .3s;
      font-weight: 300;

      &.isActive {
        transform: rotate(90deg);
      }
    }
  }
  .k-collapse-item-body {
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: 1px solid #ebeef5;
    padding-bottom: 25px;
    font-size: 13px;
    color: #303133;
    line-height: 2;
  }
  &.isActive {

    .k-collapse-item-header {
      border-bottom-color: transparent;

      svg {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
