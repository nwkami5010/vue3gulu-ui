<demo>
常规用法
</demo>
<template>
  <div>
    <Collapse v-model:activeName="activeName">
      <CollapseItem name="1">
        <template #heading>标题1</template>
        <template #body>士官是星界军指挥结构中的军士阶层。他们被指派作为每个班的领袖，并负责协调班组在每个帝国卫队团的每个排中进行日常训练和其他团队行动 作者：帝皇毒刃不屈要塞号 https://www.bilibili.com/read/cv12286748?from=search 出处：bilibili。</template>
      </CollapseItem>
      <CollapseItem name="2">
        <template #heading>标题2</template>
        <template #body>内容2....</template>
      </CollapseItem>

    </Collapse>

  </div>
</template>

<script lang="ts">
import CollapseItem from "../../lib/Collapse/CollapseItem.vue";
import Collapse from "../../lib/Collapse/Collapse.vue";
import {ref} from "vue";
export default {
  components: {Collapse,CollapseItem},
  setup() {
    const activeName = ref('1');
    return { activeName}
  }
};
</script>
<style lang="scss"></style>
