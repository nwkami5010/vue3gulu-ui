<demo>
常规使用
</demo>
<template>
  <div>
    <Radio v-model:checked="checkedValue" name="fruit" value="apple">apple</Radio>
    <Radio :checked="checkedValue" @update:checked="onChange" name="fruit" value="orange">orange</Radio>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Radio from '../../lib/radio/Radio.vue';
export default {
  components: {
    Radio
  },
  setup() {
    const checkedValue = ref('');
    const onChange = (value) => {
      checkedValue.value = value;
    };
    return { onChange, checkedValue };
  }
};
</script>
