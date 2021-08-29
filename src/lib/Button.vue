<template>
  <button
    class="kiana-button"
    :class="classes"
    :disabled="loading ? true : disabled"
    v-bind="$attrs"
  >
    <span v-if="loading" class="kiana-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    round: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const { round, size, level ,disabled} = props;
    const classes = computed(() => {
      return {
        [`kiana-size-${size}`]: size,
        [`kiana-level-${level}`]: level,
        [`kiana-${round ? "round" : "normal"}`]: round,
      };
    });

    return { classes };
  },
};
</script>

<style lang="scss">
// 默认高度
$h: 32px;
// 边框默认颜色
$border-color: #333;
// 默认字体颜色
$color: #333;
// 颜色参数
$blue: #40a9ff;
$red: #f56c6c;
// 角度参数
$radius: 4px;
$roundRadius: 32px;
$grey: #909399;
.kiana-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  //   文本不换行显示
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 0.25s;
  margin: 0 10px 8px 0;

  @media (min-width: 500px) {
    &:hover {
      animation: button-hover 0.5s linear forwards;
      &[disabled] {
        animation: none;
      }
    }
  }

  &:focus {
    color: $blue;
    border-color: $blue;
    box-shadow: 0px 0px 10px #ccc;
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
  &.kiana-round {
    border-radius: $roundRadius;
  }

  &.kiana-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.kiana-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.kiana-level-primary {
    color: #fff;
    border: none;
    background-color: #1976d2;
  }
  &.kiana-level-success {
    color: #fff;
    border: none;
    background-color: #13ce66;
  }
  &.kiana-level-warning {
    color: #fff;
    border: none;
    background-color: #ffc107;
  }
  &.kiana-level-error {
    color: #fff;
    border: none;
    background-color: #ff4f57;
  }

  &.kiana-level-primary {
    color: #fff;
    border: none;
    background-color: #1976d2;
  }

  &[disabled] {
    cursor: not-allowed;
    color: #fff;
    background-color: #ddd;
    border: none;
  }

  > .kiana-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: lighten($blue, 20%) lighten($blue, 10%) $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: kaite-spin 1s infinite linear;
  }
  @keyframes kiana-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes button-hover {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-3px);
    }
  }
}
</style>
