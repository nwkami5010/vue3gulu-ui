<template>
  <h1>Message 提示</h1>
  <Demo :component="Message1Demo"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Demo from "../Demo.vue";
import {Message1Demo} from '../MessagePage';


export default  defineComponent({
  name: "MessageDemo",
  components: { Demo },
  setup() {
    return { Message1Demo }
  }
})
</script>

<style lang="scss" scoped>

</style>
