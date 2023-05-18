import {
  createAction,
  withMatcher,
  ActionWithPayload,
  Action,
} from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';
import { MealType } from '../../context/meals.context';
import { CartItem } from './cart.types';

export type ToggleCart = Action<CART_ACTION_TYPES.TOGGLE_CART>;

export const toggleCart = withMatcher(
  (): ToggleCart => createAction(CART_ACTION_TYPES.TOGGLE_CART),
);

const addCartItem = (
  cartItems: CartItem[] = [],
  item: MealType,
): CartItem[] => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (!existingItem) return [...cartItems, { ...item, quantity: 1 }];
  return cartItems.map((cartItem) => {
    if (cartItem.id !== item.id) return cartItem;
    return { ...cartItem, quantity: cartItem.quantity + 1 };
  });
};

const removeCartItem = (
  cartItems: CartItem[] = [],
  item: MealType,
): CartItem[] => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (!existingItem) return cartItems;
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }
  return cartItems.map((cartItem) => {
    if (cartItem.id !== item.id) return cartItem;
    return { ...cartItem, quantity: cartItem.quantity - 1 };
  });
};

const clearCartItem = (
  cartItems: CartItem[] = [],
  item: MealType,
): CartItem[] => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (!existingItem) return cartItems;
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export type SetItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_ITEMS,
  CartItem[]
>;

export const setItems = withMatcher((cartItems: CartItem[]): SetItems => {
  return createAction(CART_ACTION_TYPES.SET_ITEMS, cartItems);
});

export const addItem = (cartItems: CartItem[], item: MealType): SetItems => {
  const newCartItems = addCartItem(cartItems, item);
  return setItems(newCartItems);
};

export const removeItem = (cartItems: CartItem[], item: MealType): SetItems => {
  const newCartItems = removeCartItem(cartItems, item);
  return setItems(newCartItems);
};

export const clearItem = (cartItems: CartItem[], item: MealType): SetItems => {
  const newCartItems = clearCartItem(cartItems, item);
  return setItems(newCartItems);
};
