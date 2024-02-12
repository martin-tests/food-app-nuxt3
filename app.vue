<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useFoodStore } from '~/stores/food';
const store = useFoodStore();
store.fetchDishes();
</script>
