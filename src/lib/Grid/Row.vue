<template>
  <div class="k-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  const RowProps = {
    gutter: {
      type: Number,
    },
    align: {
      type: String,
      default: 'left',
      validator(val:string){
        return ['left','center','right','spaceBetween','spaceAround'].includes(val);
      }
      },
    verticalAlign: {
      type: String,
      default: 'left',
      validator(val) {
        return ['top',]
      }
    }

  }
export default {

}
</script>

<style lang="scss" scoped>

</style>
