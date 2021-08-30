<demo>
手风琴mode
</demo>
<template>
  <div>
    <Collapse v-model:activeName="activeName" accordion>
      <CollapseItem name="1">
        <template #header>one last kiss</template>
        <template #body>第一次去卢浮宫时候，并没有特别的感觉</template>
      </CollapseItem>
      <CollapseItem name="2">
        <template #header>EVA:终</template>
        <template #body>
          <div>因为独属于我的蒙娜丽莎我早已遇见</div>
          <div>初次遇见你的那天，齿轮开始转动</div>
        </template>
      </CollapseItem>
      <CollapseItem name="3">
        <template #header>莫呼洛伽</template>
        <template #body>
          <div>天龙之女一区婆娑，心眼中了魔尽我角色意识美色</div>
        </template>
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script lang="ts">
import CollapseItem from "../../lib/Collapse/CollapseItem.vue";
import Collapse from "../../lib/Collapse/Collapse.vue";
import {ref} from "vue";
export default {
  components: {Collapse, CollapseItem},
  setup() {
    const activeName = ref(['2']);
    return {activeName};
  }
};
</script>

<style lang="scss">
</style>
