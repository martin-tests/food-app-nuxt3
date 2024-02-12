<template>
  <main>
    <div class="relative">
      <button class="absolute top-2 ml-4" @click="$router.back()">
        <font-awesome-icon icon="fa-solid fa-angle-left" size="xl" />
      </button>
      <h1 class="text-center font-bold text-3xl m-4">Order</h1>
    </div>
    <div class="mx-auto max-w-mob px-2">
      <div class="fixed h-[90vw] w-[375px] mx-auto bg-white z-10 flex flex-col pr-4" v-if="modalVisible">
        <div class="text-center mb-10">Thank you for your order! Food is on the way!</div>
        <button class="bg-gray-700 text-center text-white rounded-lg py-2" @click="$router.push('/')">Close</button>
      </div>
      <OrderDish v-for="dish of cart.items" :key="dish.name" :dish-name="dish.name" />
      <div class="flex items-center gap-3 pb-4" v-if="Number(deliveryFee) > 0">
        <img src="/images/delivery.png" class="m-2 h-[100px]" />
        <span class="w-[10rem]">Delivery</span>
        <span>${{ deliveryFee }}</span>
      </div>
      <div class="flex justify-between border-t border-gray-700 border-dashed pt-4">
        <div class="text-xl">Total:</div>
        <div class="text-xl font-bold">${{ cartTotalCost }}</div>
      </div>
      <div class="bg-orange flex justify-between align-middle mt-10 p-2 rounded-lg cursor-pointer" @click="checkout">
        <span class="text-base uppercase">Checkout</span>
        <span class="text-base">${{ cartTotalCost }}</span>
      </div>
      
    </div>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFoodStore } from '~/stores/food';

const store = useFoodStore();
const { cart, dishesTotalCost } = storeToRefs(store);
const deliveryFee = computed(() => Number(0.05 * dishesTotalCost.value).toFixed(2));
const cartTotalCost = computed(() => (Number(dishesTotalCost.value) + Number(deliveryFee.value)).toFixed(2));
const modalVisible = ref(false);

const checkout = () => {
  modalVisible.value = true;
  store.emptyCart();
}
</script>