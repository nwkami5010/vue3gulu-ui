<demo>
组件调用方式
</demo>

<template>
  <Message message="你收到50w汇款" :canClose="true"></Message>
  <Button @click="openLoading">打开message</Button>>
</template>

<script lang="ts">
import Message from "../../lib/Message.vue";
import Button from "../../lib/Button.vue";
import {ref} from "vue";

export default {
  components: {Message, Button},
  setup(){
    const loading = ref(false);
    const openLoading = ()=> {
      loading.value = true;
      setTimeout(()=>{

        loading.value = false;

      },2000);
    };
    return { loading,openLoading}

  }
};
</script>

