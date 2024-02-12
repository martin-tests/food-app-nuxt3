<template>
  <div>
    <div class="relative">
      <div class="bg-[url('/images/food.jpg')] h-[200px] brightness-50"></div>
      <button class="absolute top-5 ml-4" @click="$router.back()">
        <font-awesome-icon icon="fa-solid fa-angle-left" size="xl" style="color: #ffffff;"/>
      </button>
      <h1 class="text-white font-bold text-3xl absolute top-[100px] left-[50px]">{{ category }}</h1>
    </div>
    <div class="mx-auto max-w-mob pl-2">
      <DishTile v-for="dish of dishes" :key="dish.name" :dish="dish" />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { useFoodStore } from '~/stores/food';

const store = useFoodStore();
const route = useRoute();

const category = route.params.id;
const dishes = store.dishes.filter(dish => dish.category === category);
</script>