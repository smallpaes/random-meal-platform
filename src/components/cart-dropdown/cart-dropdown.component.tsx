import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  CartDropdownContainer,
  CartDropdownItems,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown: FC = (): ReactElement => {
  const cartItems = useSelector(selectCartItems);
  return (
    <CartDropdownContainer>
      {cartItems.length > 0 ? (
        <CartDropdownItems>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </CartDropdownItems>
      ) : (
        <EmptyMessage>No Items Yet</EmptyMessage>
      )}
      <Button>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
