<demo>
组件调用方式
</demo>

<template>

  <Button @click="open">打开message</Button>>
</template>

<script lang="ts">
import Message from "../../lib/Message.vue";
import Button from "../../lib/Button.vue";
import {openMessage} from "../../lib/Message";

export default {
  components: {Message, Button},
  setup(){

    const open = ()=> {
     openMessage({
       message:'此信息是通过函数调用',
       canClose: true,
       type: 'error',
       displayTime: 300,
      top:30
     });
    };
    return { open}

  }
};
</script>

