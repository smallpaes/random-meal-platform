import { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearItem } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  CheckoutItemContainer,
  CheckoutItemImage,
  CheckoutItemQuantity,
  RemoveButton,
  ArrowUpIcon,
  ArrowDownIcon,
} from './checkout-item.styles';
import { CartItem } from '../../store/cart/cart.types';

export interface ICheckoutItem {
  checkoutItem: CartItem;
}

const CheckoutItem: FC<ICheckoutItem> = ({ checkoutItem }): ReactElement => {
  const { name, imageUrl, quantity, price } = checkoutItem;
  const checkoutItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItem(checkoutItems, checkoutItem));
  const addItemHandler = () => dispatch(addItem(checkoutItems, checkoutItem));
  const removeItemHandler = () =>
    dispatch(removeItem(checkoutItems, checkoutItem));

  return (
    <CheckoutItemContainer>
      <CheckoutItemImage src={imageUrl} alt={name} />
      <span>{name}</span>
      <CheckoutItemQuantity>
        <ArrowUpIcon onClick={addItemHandler} />
        <span>{quantity}</span>
        <ArrowDownIcon onClick={removeItemHandler} />
      </CheckoutItemQuantity>
      <span>&pound; {price}</span>
      <RemoveButton onClick={clearItemHandler}>X</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
