import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();
const { STRIPE_SECRET_KEY, CURRENCY } = process.env;

let stripe: Stripe;
if (STRIPE_SECRET_KEY) {
  stripe = new Stripe(STRIPE_SECRET_KEY, {} as Stripe.StripeConfig);
}

exports.handler = async (event) => {
  try {
    if (!stripe) throw new Error('Stripe is not configured');
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: CURRENCY || 'gbp',
      payment_method_types: ['card'],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
