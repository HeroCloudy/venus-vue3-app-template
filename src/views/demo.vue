<!--
 @name: demo.vue
 @description: 测试页面
 @author: 程序员优雅哥 yygcoder
 @time: 2024/10/22 11:11
-->
<template>
  <div class="demo">demo</div>
  <h3>{{ counter }}</h3>
  <button @click="demoStore.increment()">点击+1</button>
</template>
<script setup lang="ts">
import { useDemoStore } from '@/stores/demo'
import { storeToRefs } from 'pinia'

const demoStore = useDemoStore()
const { counter } = storeToRefs(demoStore)
</script>
<style scoped lang="scss">
$demo-color: red;

.demo {
  background-color: $demo-color;
}
</style>
