<template>
  <div class="flex items-center gap-3">
    <img src="/images/plate.png" class="h-[100px] m-2" />
    <div>{{ quantity }}</div>
    <div>x</div>
    <div class="w-[10rem]">{{ dishName }}</div>
    <div class="font-light">${{ cost }}</div>
    <div class="cursor-pointer" @click="removeDish">
      <font-awesome-icon icon="fa-solid fa-xmark" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFoodStore } from '~/stores/food';

const props = defineProps({
  dishName: {
    type: String,
    required: true
  }
});

const store = useFoodStore();
const { cart, dishes } = storeToRefs(store);
const quantity = computed(() => cart.value.items.find(item => item.name === props.dishName)?.quantity);
const price = computed(() => dishes.value.find(dish => dish.name === props.dishName)?.price);
const cost = computed(() => {
  if (quantity.value && price.value) {
    return (quantity.value * price.value).toFixed(2);
  } else {
    return 0;
  }
});
const removeDish = () => {
  store.removeDishFromCart(props.dishName);
}
</script>