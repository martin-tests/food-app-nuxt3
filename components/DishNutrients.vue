<template>
  <div class="mr-2 my-2">
    <div class="text-xs font-bold">{{ title }}</div>
    <div class="text-xs w-12">{{ nutrients }} gr</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  nutrients: Number
})
</script>