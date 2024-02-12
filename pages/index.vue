<template>
  <div class="max-w-screen-md mx-auto">
    <h1 class="text-center font-bold text-3xl m-4">Categories</h1>
    <div class="grid grid-cols-2 gap-4 m-4">
      <FoodCategory v-for="category of categories" :category="category" :key="category" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFoodStore } from '~/stores/food';
const store = useFoodStore();
const categories = store.foodCategories;
</script>