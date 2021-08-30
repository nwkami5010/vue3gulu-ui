<template>
<div class="k=collapse">
  <slot></slot>
</div>
</template>

<script lang="ts">
import { defineComponent,onMounted,ref,watchEffect } from 'vue';
export default defineComponent({
  name: "Collapse",
  props: {
      activeName: {
        type: String
      }
  },
  setup(props,context){
    const defaults = context.slots.default()
    return {defaults};
  }
});
</script>

<style lang="scss" scoped>
@import "./src/style/_var.scss";

.k-collapse {
  border-top: 1px solid #ebeef5;
}
</style>
