<demo>
常规用法
</demo>
<template>
  <div>
    <Collapse v-model:activeName="activeName">
      <CollapseItem name="1">
        <template #header>常见的士官阶级 </template>
        <template #body>士官&老兵士官：指挥一个星界军步兵班组（最低的组织架构） </template>
      </CollapseItem>
      <CollapseItem name="2" :disabled="true">
        <template #header>卫兵最好的老大哥——士官</template>
        <template #body>
          <div>士官都是是受人尊敬的军官，他们在帝国卫队中担任许多领导职务。作为帝国卫队的中坚力量，士官们负责每个班的领导工作，部队的大部分日常运作都落在他们能干的肩上。 </div>
          <div>士官是星界军指挥结构中的军士阶层。他们被指派作为每个班的领袖，并负责协调班组在每个帝国卫队团的每个排中进行日常训练和其他团队行动。</div></template>
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
