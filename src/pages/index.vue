<!--
 @name: index.vue
 @description:
 @author: 程序员优雅哥 yygcoder
 @time: 2024/10/24 10:41
-->
<template>
  <div class="index">index</div>
  <div>msg: {{ msg }}</div>
  <div>isShow: {{ isShow }}</div>
  <button @click="toggle()">Toggle</button>
</template>

<script setup lang="ts">
const [isShow, toggle] = useToggle()
const msg = ref('Hello world')
</script>

<style scoped lang="scss"></style>
