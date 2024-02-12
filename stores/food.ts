import { defineStore } from 'pinia'
import type { Cart, Dish } from '~/types/food'

export const useFoodStore = defineStore('food', () => {

  const dishes = ref<Dish[]>([]);
  const cart = ref<Cart>({
    cartTotalPrice: 0,
    items: []
  });

  const foodCategories = computed(() => {
    return [... new Set(dishes.value.map(dish => dish.category))];
  });

  const cartTotalItems = computed(() => cart.value.items.reduce((accumulator, item) => accumulator + item.quantity, 0));

  const dishesTotalCost = computed(() => {
    return cart.value.items.reduce((accumulator, item) => {
      const itemPrice = dishes.value.find(dish => dish.name === item.name)?.price;
      const itemCost = itemPrice ? (itemPrice * item.quantity) : 0;
      return accumulator + itemCost;
    }, 0);
  });


  const fetchDishes = async () => {
    const { data } = await useFetch('/api/dishes');
    if (data.value?.dishes) {
      dishes.value = data.value.dishes;
    }
  };

  const adjustDishQuantity = (dishName: string, quantity: number) => {
    const dishPrice = dishes.value.find(dish => dish.name === dishName)?.price;
    if (!dishPrice) {
      return;
    }
    const dishIdx = cart.value.items.findIndex(item => item.name === dishName);
    if (dishIdx > -1) {
      cart.value.items[dishIdx].quantity += quantity;
      cart.value.items[dishIdx].itemTotalPrice += dishPrice * quantity;
      if (quantity <= 0 && cart.value.items[dishIdx].quantity === 0) {
        cart.value.items.splice(dishIdx, 1);
      }
    } else {
      if (quantity > 0) {
        cart.value.items.push({
          name: dishName,
          quantity: 1,
          itemTotalPrice: dishPrice
        });
      }
    }
  };

  const removeDishFromCart = (dishName: string) => {
    const dishIdx = cart.value.items.findIndex(item => item.name === dishName);
    if (dishIdx > -1) {
      cart.value.items.splice(dishIdx, 1);
    }
  };

  const emptyCart = () => {
    cart.value.items = [];
  }

  return { 
    cart,
    dishes,
    foodCategories,
    cartTotalItems,
    dishesTotalCost,
    fetchDishes,
    adjustDishQuantity,
    removeDishFromCart,
    emptyCart
  };
})