import { FC, ReactElement } from 'react';
import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemTotal,
} from './cart-item.styles';
import { CartItem as CartItemType } from '../../store/cart/cart.types';

export interface CartItemProps {
  cartItem: CartItemType;
}

const CartItem: FC<CartItemProps> = ({ cartItem }): ReactElement => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <CartItemDetails>
        <h5>{name}</h5>
        <CartItemTotal>
          {quantity} x &pound;{price}
        </CartItemTotal>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
