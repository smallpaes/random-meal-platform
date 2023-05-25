import { FC, ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button from '../button/button.component';
import { FormTitle, FormContainer } from './payment-form.styles';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectUser } from '../../store/user/user.selector';

const PaymentForm: FC = (): ReactElement => {
  const strip = useStripe();
  const elements = useElements();
  const total = useSelector(selectCartTotal);
  const { user } = useSelector(selectUser);
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!strip || !elements) return;
    setIsProcessing(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: total * 100 }),
    }).then((res) => res.json());
    const clientSecret = response.paymentIntent.client_secret;
    const paymentResult = await strip.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: user?.displayName || 'Guest',
        },
      },
    });
    setIsProcessing(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment successful');
      }
    }
  };

  return (
    <FormContainer onSubmit={paymentHandler}>
      <FormTitle>Pay With Credit Card</FormTitle>
      <CardElement />
      <Button disabled={isProcessing} type="submit">
        Pay
      </Button>
    </FormContainer>
  );
};

export default PaymentForm;
