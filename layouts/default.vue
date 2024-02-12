<template>
  <div class="max-w-[960px] mx-auto">
    <slot />
    <div class="flex justify-center my-10">
      <NuxtLink to="/" class="mx-10">
        <font-awesome-icon icon="fa-solid fa-house" size="xl" style="color: #ffca51;" />
      </NuxtLink>
      <NuxtLink to="/order" class="mx-10 relative">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" size="xl" style="color: #9e9e9e;" />
        <div class="absolute -top-2 left-3 bg-gray-200 font-bold rounded-full text-xs px-1" v-if="cartTotalItems">{{ cartTotalItems }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFoodStore } from '~/stores/food';
const store = useFoodStore();
const { cartTotalItems } = storeToRefs(store);
</script>