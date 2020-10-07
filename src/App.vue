<template>
  <div>导航栏 | 
  <router-link to="/">frank</router-link>| 
  <router-link to="/xxx">xiang2</router-link></div>
<router-view />
</template>

<script>
import xiang from './components/xiang.vue'

export default {
    name: 'App',
    
}
</script>
