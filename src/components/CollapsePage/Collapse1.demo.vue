<demo>
常规用法
</demo>
<template>
  <div>
    <Collapse v-model:activeName="activeName">
      <CollapseItem name="1">
        <template #header>让子弹飞 </template>
        <template #body>你想想，你坐在火车上，吃着火锅唱着歌，突然就被麻匪给劫了！这麻匪必须得缴，不缴不行  </template>
      </CollapseItem>
      <CollapseItem name="2" :disabled="true">
        <template #header>支持disabled</template>
        <template #body>
          <div>是不是只有一碗！是不是只有一碗！—小六 。 </div>
          <div>士官是星界军指挥结构中的军士阶层。他们被指派作为每个班的领袖，并负责协调班组在每个帝国卫队团的每个排中进行日常训练和其他团队行动。</div></template>
      </CollapseItem>
      <CollapseItem name="3">
        <template #header>黄四爷</template>
        <template #body>
          <div>走几步，走出一个一日千里，走出一个虎虎生风，走出一个恍如隔世 </div>
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
  components: {Collapse,CollapseItem},
  setup() {
    const activeName = ref(['1']);
    return { activeName}
  }
};
</script>
<style lang="scss"></style>
