<template>
  <div>
  Button 示例
  </div>
  <h1>示例1</h1>
  <div><Button theme="button">你好</Button></div>
  <div><Button theme="link">你好</Button></div>
  <div><Button theme="text">你好</Button></div>
  <h1>示例2</h1>
  <div>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue"
export default {
  components:{Button},
  setup(){
    const onClick = ()=>{

    }
    return {onClick}
  }
  
}
</script>