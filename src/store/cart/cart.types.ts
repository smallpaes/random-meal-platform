import { CategoryItem } from '../categories/categories.types';

export type CartItem = CategoryItem & { quantity: number };

export enum CART_ACTION_TYPES {
  SET_ITEMS = 'SET_ITEMS',
  TOGGLE_CART = 'TOGGLE_CART',
}
