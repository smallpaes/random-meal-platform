import { AnyAction } from 'redux';
import { MealType } from '../../context/meals.context';
import { addItem, toggleCart } from './cart.action';
export type CartItemType = MealType & { quantity: number };

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItemType[];
};

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as AnyAction,
): CartState => {
  console.log('toggleCart, out', action);
  if (addItem.match(action)) {
    return { ...state, cartItems: action.payload };
  }
  if (toggleCart.match(action)) {
    console.log('toggleCart');
    return { ...state, isCartOpen: !state.isCartOpen };
  }
  return state;
};
