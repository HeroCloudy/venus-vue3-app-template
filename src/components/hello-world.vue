<!--
 @name: hello-world.vue
 @description:
 @author: 程序员优雅哥 yygcoder
 @time: 2024/10/24 15:57
-->
<template>
  <h3 class="text-blue">Hello World, {{ msg }}</h3>
</template>

<script setup lang="ts">
defineProps<{
  msg?: string
}>()
</script>

<style scoped lang="scss"></style>
