import { RootState } from '../store';
import { CartItemType } from './cart.action';

export const selectCartReducer = (state: RootState) => state.cart;

export const selectCartItems = (state: RootState): CartItemType[] =>
  state.cart.cartItems;

export const selectIsCartOpen = (state: RootState): boolean =>
  state.cart.isCartOpen;

export const selectCartCount = (state: RootState): number =>
  state.cart.cartItems?.reduce((acc, cartItem) => acc + cartItem.quantity, 0) ||
  0;
