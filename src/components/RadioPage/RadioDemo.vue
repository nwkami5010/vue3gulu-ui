<template>
  <div class="exp-content">
    <Demo :component="Radio1Demo"/>
    <Demo :component="Radio2Demo"/>
  </div>
</template>

<script lang="ts">
import Radio1Demo from './Radio1.demo.vue';
import Radio2Demo from './Radio2.demo.vue';
import Demo from '../Demo.vue';
export default {
  components: { Demo },
  setup() {return { Radio1Demo ,Radio2Demo};}
}
</script>

<style lang="scss" scoped>

</style>
