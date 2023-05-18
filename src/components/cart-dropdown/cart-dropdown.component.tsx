import { FC, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleCart } from '../../store/cart/cart.action';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  CartDropdownContainer,
  CartDropdownItems,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const handleOnCheckout = () => {
    dispatch(toggleCart());
    navigate('/checkout');
  };
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
      <Button disabled={cartItems.length === 0} onClick={handleOnCheckout}>
        Checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
