<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, provide } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible", menuVisible); //set

    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
<style>

/* 滚动槽 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  border-radius: 3px;
  background: rgba(0,0,0,0.06);
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.08);
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0,0,0,0.12);
  -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
}
</style>
