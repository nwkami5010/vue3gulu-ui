<template>
  <div class="k-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent,computed,inject,Ref} from 'vue';

  const ColProps= {
    gutter:{
      type:[String,Number],
      default:0
    },
    span: {
      type:[String,Number],
      default: 0
    },
    offset:{
      type:[String,Number],
      default: 0
    },
  };
 export default defineComponent({
   name: 'KCol',
   props: ColProps,
   setup(props){
     const fatherGutter = inject<Ref<boolean>>('gutter');
     const colStyle = computed(()=>{
       return {
         paddingLeft: `${-fatherGutter! / 2}px`,
         paddingRight: `${-fatherGutter! / 2 }px`,
       };
     });

     const colClass = computed(()=>{
       const { span,offset } = props;
       return [
         {'k-col-gutter': fatherGutter },
           `k-col-span-${span}`,
           `k-col-offset-${offset}`
       ];
     });
     return { colClass,colStyle};
   }
 })
</script>
<style lang="scss">
  @import "../../style/var.scss";
  #{component(col)} {
    height: 100%;
    $class-prefix: k-col-offset-;
    @for $n from 1  through 24{
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
    $class-prefix: k-col-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{
      width: ($n/24) *100%
    }
  }
  &.k-col-span-0{
    display:none;
  }

  }

</style>
