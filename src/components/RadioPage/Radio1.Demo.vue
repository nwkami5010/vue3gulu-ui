<Demo>
  默认使用
</Demo>
<template>
  <div>
    <Radio v-model:checked="checkedValue" name="fruit" value="apple">apple</Radio>
    <Radio :checked="checkedValue" @update:checked="onChange" name="fruit" value="orange">orange</Radio>
  </div>
</template>
<script>
  import { ref } from 'vue';
  import Radio from '../../lib/radio/Radio.vue';
  import Demo from '../Demo.vue';
  export default {
    components: {Radio},
    setup() {
      const checkedValue = ref('');
      const onChange = (value) => {
        checkedValue.value = value;
      };
      return { onChange,checkedValue};
    }
  }
</script>
