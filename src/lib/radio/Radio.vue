<template>
  <label
          :class="classes" @click="onClick()">
    <span>
      <input type="radio" class="k-radio" v-bind="attrs"/>
    </span>
    <span class="k-radio-label">
      <slot/>
    </span>
  </label>


</template>

<script lang="ts">
import { computed ,defineComponent} from 'vue'
export default defineComponent({
  name: 'KRadio',
  props: {
    value: {
      required: true,
      type: [Boolean, String,Number]
    },

    checked: [ Boolean,String,Number],
    disabled: Boolean,
    name : String
  },
  setup(props,context) {
    const classes = computed(()=>{
      return [
        'k-radio-wrapper',
        {
          'k-radio-diabled': props.disabled,
          'k-radio-checked': isChecked()
        }
      ];
    });
    const isChecked = ()=> {
      return props.checked === props.value;
    };
    const attrs = computed(()=> ({
      name: props.name,
      value: props.value,
      checked: isChecked(),
      disabled: props.disabled
    }));
    const onClick =(e)=> {
      if(props.disable){return;}
      e.preventDefault();
      context.emit('update:checked',props.value);
    };
    return { classes,attrs ,onClick}
  }
})
</script>

<style lang="scss" scoped>
  @import "../../style/_var.scss";
  #{component(radio)}{
    border:none;
    outline:none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 1;
    &-wrapper {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      & +.k-radio-wrapper {
        margin-left: 1em;
      }
    }
    &-input {
      position: relative;
      width: 32px;
      height: 32px;
      border: 1px solid $border-color;
      border-radius: 50%;
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        transform: translate(-50%,-50%);
        border-radius: 50%;
      }
    }
    &-checked {
      #{component(radio)}{
        &-input {
          &:before {
            background: darken($grey,50%);
          }
        }
      }
    }
    &-indeterminate {//表示状态不确定的表单元素:
      &：before {
        border: 1px solid $border-color;
        background: none;
      }
    }
    &-disable {
      cursor: not-allowed;
      opacity: 0.48;
    }
    &-label {
      margin-left: 0.5em;
    }
  }
</style>
