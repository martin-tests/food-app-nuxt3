<template>
  <div class="flex my-8">
    <div>
      <h3 class="text-xl">{{ dish.name }}</h3>
      <div class="flex">
        <DishNutrients title="Proteins" :nutrients="dish.protein" />
        <DishNutrients title="Carbohydrates" :nutrients="dish.carbs" />
        <DishNutrients title="Fat" :nutrients="dish.fat" />
        <DishCalories :calories="dish.calories" class="-ml-4" />
      </div>
      <div class="flex items-center justify-start">
        <CartPicker :name="dish.name" />
        <div class="mx-2 font-light">${{ orderedQuantity ? (orderedQuantity * dish.price).toFixed(2) : dish.price }}</div>
      </div>
    </div>
    <div class="m-4">
      <img src="/images/plate.png" class="h-[80px] object-cover" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFoodStore } from '~/stores/food';
import type { Dish } from '~/types/food';

const props = defineProps({
  dish: {
    type: Object as PropType<Dish>,
    required: true
  }
});

const store = useFoodStore();
const { cart } = storeToRefs(store)
const orderedQuantity = computed(() => cart.value.items.find(item => item.name === props.dish.name)?.quantity);

</script>