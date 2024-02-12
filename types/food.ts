export interface Dish {
  category: string;
  name: string;
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
  price: number;
  url: string;
}

export interface CartItem {
  name: string;
  quantity: number;
  itemTotalPrice: number;
}

export interface Cart {
  cartTotalPrice: number;
  items: CartItem[];
}