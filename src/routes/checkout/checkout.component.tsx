import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutSidebar,
  SidebarTitle,
  CheckoutInfoContainer,
  CheckoutItems,
  CheckoutDivider,
  CheckoutOutTotal,
} from './checkout.styles';

const Checkout: FC = (): ReactElement => {
  const checkoutItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutSidebar>
        <SidebarTitle>Get Ready For Delicious Food</SidebarTitle>
      </CheckoutSidebar>
      <CheckoutInfoContainer>
        <CheckoutItems>
          {checkoutItems.map((item) => (
            <CheckoutItem key={item.id} checkoutItem={item} />
          ))}
        </CheckoutItems>
        <CheckoutDivider />
        <CheckoutOutTotal>
          Total: <span>${total}</span>
        </CheckoutOutTotal>
      </CheckoutInfoContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
