import {
  createAction,
  withMatcher,
  ActionWithPayload,
  Action,
} from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';
import { MealType } from '../../context/meals.context';
export type CartItemType = MealType & { quantity: number };

type CartItems = CartItemType[];

export type ToggleCart = Action<CART_ACTION_TYPES.TOGGLE_CART>;

export const toggleCart = withMatcher(
  (): ToggleCart => createAction(CART_ACTION_TYPES.TOGGLE_CART),
);

const addCartItem = (
  cartItems: CartItemType[] = [],
  item: MealType,
): CartItemType[] => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (!existingItem) return [...cartItems, { ...item, quantity: 1 }];
  return cartItems.map((cartItem) => {
    if (cartItem.id !== item.id) return cartItem;
    return { ...cartItem, quantity: cartItem.quantity + 1 };
  });
};

export type SetItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_ITEMS,
  CartItems
>;

export const addItem = withMatcher(
  (cartItems: CartItemType[], item: MealType): SetItems => {
    const newCartItems = addCartItem(cartItems, item);
    return createAction(CART_ACTION_TYPES.SET_ITEMS, newCartItems);
  },
);
