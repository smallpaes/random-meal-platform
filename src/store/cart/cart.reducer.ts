import { AnyAction } from 'redux';
import { setItems, toggleCart } from './cart.action';
import { CartItem } from './cart.types';

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction,
): CartState => {
  if (setItems.match(action)) {
    return { ...state, cartItems: action.payload };
  }
  if (toggleCart.match(action)) {
    return { ...state, isCartOpen: !state.isCartOpen };
  }
  return state;
};
