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

  <div>
    <div class="i-mdi-alarm text-orange-400" />
    <div class="text-3xl text-red bg-green-100">Hello world</div>
    <svg aria-hidden="true" class="svg">
      <use href="#icon-demo" fill="red" />
    </svg>
  </div>
</template>
<script setup lang="ts">
import { useDemoStore } from '@/stores/demo'
import { storeToRefs } from 'pinia'

const demoStore = useDemoStore()
const { counter } = storeToRefs(demoStore)
</script>
<style scoped lang="scss"></style>
