<demo>
  disabled状态
</demo>
<template>
  <div>
    <Radio v-model:checked="checkedValue" name="fruit" value="apple">apple</Radio>
    <Radio v-model:checked="checkedValue" name="fruit" value="orange" >orange</Radio>
    <Radio v-model:checked="checkedValue" name="fruit" value="banana" disabled>banana</Radio>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Radio from '../../lib/radio/Radio.vue';

export default {
  components:{
    Radio
  },
  setup(){
    const checkedValue = ref('apple');
    const onChange = (value) => {
      checkedValue.value = value;
    }
    return {onChange,checkedValue}
  }
}
</script>

<style lang="scss" scoped>

</style>
