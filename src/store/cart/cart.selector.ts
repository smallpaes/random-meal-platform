import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectCartReducer = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems,
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen,
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems?.reduce((acc, cartItem) => acc + cartItem.quantity, 0) || 0,
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0,
  ),
);
