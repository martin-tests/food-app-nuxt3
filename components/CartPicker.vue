<template>
  <div class="flex bg-gray-200 text-lg rounded-xl">
    <span class="mx-2 cursor-pointer font-semibold" @click="decrement">-</span>
    <span class="mx-2">{{ count }}</span>
    <span class="mx-2 cursor-pointer font-semibold" @click="increment">+</span>
  </div>
</template>

<script setup lang="ts">
import { useFoodStore } from '~/stores/food';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const store = useFoodStore();

const count = computed(() => {
  const dishCount = store.cart.items.find(item => item.name === props.name)?.quantity;
  return dishCount || 0;
});

const increment = () => {
  if (props.name) {
    store.adjustDishQuantity(props.name, 1);
  }
};

const decrement = () => {
  if (props.name) {
    store.adjustDishQuantity(props.name, -1);
  }
};
</script>