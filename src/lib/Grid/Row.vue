<template>
  <div class="k-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent,computed,provide } from 'vue'
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
        return ['top','center','bottom'].includes(val);
      }
    },

  };
  export default defineComponent({
    name: 'KRow',
    props:RowProps,
    setup(props){
      provide('gutter',props.gutter);
      const rowStyle = computed(()=>{
        let { gutter } = props;
        return {
          marginLeft: `${-gutter! / 2}px`,
          marginRight: `${-gutter! / 2}px`,
        };
      });

      const rowClass = computed(()=> {
        let { align, verticalAlign} =props;
        return [
            align !== 'left' && `k-row-align-${align}`,
            verticalAlign !== 'top' && `k-row-verticalAlign-${verticalAlign}`
        ];
      });
      return { rowStyle,rowClass};
    }
  })


</script>

<style lang="scss" scoped>
 @import "../../style/var.scss";
 #{component(row)} {
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   &-align-right {
     justify-content :end;
   }
   &-align-center {
     justify-content: center;
   }
   &-align-spaceBetween {
     justify-content :space-between;
   }
   &-align-spaceAround {
     justify-content: space-around;
   }
   &-verticalAlign-center {
     align-items: center
   }
   &-verticalAlign-bottom {
     align-items :flex-end
   }
 }
</style>
