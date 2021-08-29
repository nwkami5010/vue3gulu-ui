<demo>
 4种类型
</demo>
<template>
  <Button @click="openInfo">普通</Button>
  <Button @click="openSuccess">成功</Button>
  <Button @click="openError">失败</Button>
  <Button @click="openWarning">提醒</Button>


</template>

<script lang="ts">
import Message from "../../lib/Message.vue";
import Button from "../../lib/Button.vue";
import {openMessage} from "../../lib/Message";

export default {
  components: {Message, Button},
  setup() {
    const openSuccess = () => {
      openMessage({
        message: '消息发送成功',
        type: 'success',
      });
    };
    const openError = () => {
      openMessage({
        message: '发送失败',
        type: 'error',
      });
    };
    const openWarning = () => {
      openMessage({
        message: '有一条新提醒',
        type: 'warning',
      });
    };
    const openInfo = () => {
      openMessage({
        message: '新消息',
        type: 'info',
      });
    };
    return {openSuccess, openError,openWarning,openInfo};
  }




}
</script>

<style lang="scss" scoped>

</style>
