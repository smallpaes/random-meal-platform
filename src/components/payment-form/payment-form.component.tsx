import { FC, ReactElement, useState, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';

import Button from '../button/button.component';
import PaymentFormDialog from '../payment-form-dialog/payment-form-dialog.component';

import {
  FormTitle,
  FormContainer,
  DialogSuccessImage,
  DialogFailedImage,
} from './payment-form.styles';
import {
  selectCartTotal,
  selectCartCount,
} from '../../store/cart/cart.selector';
import { selectUser } from '../../store/user/user.selector';
import { clearCart } from '../../store/cart/cart.action';

type PaymentMessage = {
  title: string;
  message: string;
  icon: ReactElement;
};

const defaultPaymentMessage: PaymentMessage = {
  title: '',
  message: '',
  icon: <></>,
};

const isValidCardElement = (
  cardElement: StripeCardElement | null,
): cardElement is StripeCardElement => {
  return cardElement !== null;
};

const PaymentForm: FC = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const strip = useStripe();
  const elements = useElements();
  const total = useSelector(selectCartTotal);
  const { user } = useSelector(selectUser);
  const cartCount = useSelector(selectCartCount);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<PaymentMessage>(
    defaultPaymentMessage,
  );

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!strip || !elements || cartCount <= 0) return;
    setIsProcessing(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: total * 100 }),
    }).then((res) => res.json());
    const clientSecret = response.paymentIntent.client_secret;
    const cardDetail = elements.getElement(CardElement);
    if (!isValidCardElement(cardDetail)) return;
    const paymentResult = await strip.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetail,
        billing_details: {
          name: user?.displayName || 'Guest',
        },
      },
    });
    setIsProcessing(false);

    if (
      !paymentResult.error &&
      paymentResult.paymentIntent.status === 'succeeded'
    ) {
      setPaymentStatus({
        title: 'Payment Success',
        message: 'Get Ready To Pick Them Up',
        icon: <DialogSuccessImage />,
      });
      dispatch(clearCart());
      setIsShowDialog(true);
    } else {
      setPaymentStatus({
        title: 'Payment Failed',
        message: 'Something went wrong, please try again later',
        icon: <DialogFailedImage />,
      });
      setIsShowDialog(true);
    }
  };

  const handleOnDialogClose = () => {
    setIsShowDialog(false);
    navigate('/');
  };

  return (
    <FormContainer onSubmit={paymentHandler}>
      <FormTitle>Pay With Credit Card</FormTitle>
      <CardElement />
      <Button disabled={isProcessing || cartCount === 0} type="submit">
        Pay
      </Button>
      <PaymentFormDialog
        title={paymentStatus.title}
        message={paymentStatus.message}
        icon={paymentStatus.icon}
        isOpen={isShowDialog}
        onClose={handleOnDialogClose}
      />
    </FormContainer>
  );
};

export default PaymentForm;
