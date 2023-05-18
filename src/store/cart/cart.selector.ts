import { RootState } from '../store';

export const selectCartReducer = (state: RootState) => state.cart;

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export const selectIsCartOpen = (state: RootState) => state.cart.isCartOpen;

export const selectCartCount = (state: RootState) =>
  state.cart.cartItems?.reduce((acc, cartItem) => acc + cartItem.quantity, 0) ||
  0;

export const selectCartTotal = (state: RootState) => {
  const cartItems = state.cart.cartItems || [];
  return cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0,
  );
};
