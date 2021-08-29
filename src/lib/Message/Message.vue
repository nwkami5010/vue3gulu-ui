<template>
  <teleport to="body">
    <div v-if="messageVisible" class="k-messageWrapper" :style=`top:${top}%`
      :class="'k-messsageWrapper-'+type">
<!--      <Icon :name="'icon-'+type"/>-->
      <span class="k-message">{{message}}</span>
      <span v-if="canClose" class="close" @click="close"></span>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent,ref} from 'vue';
//import Icon from "./Icon.vue";
export default defineComponent({
  name:"kMessage",
  //components: {Icon},
  props: {
    close: {
      type: Function
    },
    top: {
      type:Number
    },
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info'
    },
    canClose: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const messageVisible = ref(true);

    return { messageVisible,open}
  }
})
</script>

<style lang="scss" scoped>
@import "../../style/var.scss";

.k-messageWrapper {
  z-index: 9999;
  min-width: 380px;
  border-color: #EBEEF5;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  background-color: #edf2fc;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;

  &.k-messageWrapper-error {
    border-color: $k-type-error-disabled;
    border-style: solid;
    border-width: 1px;
    background: $k-type-error-light;
    .o-message {
      color: $k-type-error;
    }
    svg {
      fill: $k-type-error;
    }
    .close {
      color: $k-type-error;
    }
  }
  &.k-messageWrapper-success {
    border-color: $k-type-success-disabled;
    border-style: solid;
    border-width: 1px;
    background: $k-type-success-light;
    .o-message {
      color: $k-type-success;
    }
    svg {
      fill: $k-type-success;
    }
    .close {
      color: $k-type-success;
    }
  }
  &.k-messageWrapper-warning {
    border-color: $k-type-warning-disabled;
    border-style: solid;
    border-width: 1px;
    background: $k-type-warning-light;
    .o-message {
      color: $k-type-warning;
    }
    svg {
      fill: $k-type-warning;
    }
    .close {
      color: $k-type-warning;
    }
  }
  svg {
    fill: #999999;
    font-size: 18px;
    margin-right: 10px;
  }

  .k-message {
    flex-grow: 1;
    font-size: 14px;
    line-height: 1.5;
    color: #909399;
  }
  .close {
    color: #C0C4CC;
    cursor: pointer;

    &:hover {
      color: #666666;
    }
  }
}
</style>
