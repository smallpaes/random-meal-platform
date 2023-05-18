import { MealType } from '../../context/meals.context';

export type CartItem = MealType & { quantity: number };

export enum CART_ACTION_TYPES {
  SET_ITEMS = 'SET_ITEMS',
  TOGGLE_CART = 'TOGGLE_CART',
}
