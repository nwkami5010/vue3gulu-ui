<template>
  <h1>Collapse示例</h1>
  <Demo :component="Collapse1Demo"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Demo from "../Demo.vue";

import Collapse1Demo from './Collapse1.demo.vue';
export default defineComponent({
  name:"CollapseDemo",
  components: {Demo},
  setup(){
    return{Collapse1Demo}
  }
})

</script>

<style lang="scss" scoped>

</style>
