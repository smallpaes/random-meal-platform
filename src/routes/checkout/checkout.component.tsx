import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
  CheckoutContainer,
  CheckoutSidebar,
  SidebarTitle,
  CheckoutInfoContainer,
  CheckoutItems,
  CheckoutDivider,
  CheckoutOutTotal,
  CheckoutSummary,
  BowlIcon,
  EmptyMessageContainer,
  EmptyMessageTitle,
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
        <CheckoutSummary>
          {checkoutItems.length > 0 ? (
            <>
              <CheckoutItems>
                {checkoutItems.map((item) => (
                  <CheckoutItem key={item.id} checkoutItem={item} />
                ))}
              </CheckoutItems>
              <CheckoutDivider />
              <CheckoutOutTotal>
                Total: <span> &pound;{total}</span>
              </CheckoutOutTotal>
            </>
          ) : (
            <EmptyMessageContainer>
              <BowlIcon />
              <EmptyMessageTitle>Your cart is empty</EmptyMessageTitle>
            </EmptyMessageContainer>
          )}
        </CheckoutSummary>
        <PaymentForm />
      </CheckoutInfoContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
