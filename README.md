<p align="center">
  <a href="https://random-meal-platform.netlify.app" target="_blank" rel="nofollow">
    <img src="./src/assets/logo.svg" alt="App Logo" width="40px" height="40px" style="fill" />
  </a>
</p>
<h3 align="center">Awesome Meal Platform</h3>

<p align="center">
  Online meal ordering platform that offers a variety of amazing cuisines.
  <br>
  <a href="https://random-meal-platform.netlify.app"><strong>Explore Our Website</strong></a>
  <br>
  <a href="https://app.netlify.com/sites/random-meal-platform/deploys" rel="Netlify deploy page link"><img src="https://api.netlify.com/api/v1/badges/10a4942d-2f44-43d0-b1e6-eee712537211/deploy-status" alt="Netlify Status"></a>
</p>

## Table of contents

- [Table of contents](#table-of-contents)
- [App first look](#app-first-look)
  - [Home Page](#home-page)
  - [Meals Explore](#meals-explore)
  - [Authentication](#authentication)
  - [Checkout](#checkout)
- [About the project](#about-the-project)
  - [Open source kits and API we have used](#open-source-kits-and-api-we-have-used)
- [What's included](#whats-included)
  - [Home page](#home-page-1)
  - [Meals Page](#meals-page)
  - [Category Detail Page](#category-detail-page)
  - [Checkout Page](#checkout-page)
  - [Sign In Page](#sign-in-page)
  - [Sign Up Page](#sign-up-page)
- [Run the app locally](#run-the-app-locally)
  - [Run App Locally](#run-app-locally)

## App first look

#### Home Page

<img src="https://ik.imagekit.io/mikank/RandomMeal/Github/homepage.png?updatedAt=1685295219347" alt="Homepage screenshot">

#### Meals Explore

<img src="https://ik.imagekit.io/mikank/RandomMeal/Github/meals-explore.png?updatedAt=1685295218601" alt="Meals page screenshot">

#### Authentication

<img src="https://ik.imagekit.io/mikank/RandomMeal/Github/sign-in.png?updatedAt=1685295202868" alt="Sign in page screenshot">
<img src="https://ik.imagekit.io/mikank/RandomMeal/Github/sign-up.png?updatedAt=1685295202830" alt="Sign up page screenshot">

#### Checkout

<img src="https://ik.imagekit.io/mikank/RandomMeal/Github/checkout.png?updatedAt=1685295205147" alt="Checkout page screenshot">

## About the project

Online meal ordering platform that offers a variety of amazing cuisines.

### Open source kits and API we have used

- Using [Redux](https://redux.js.org/) for state management in React.
- Using [Redux-Saga](https://redux-saga.js.org/) for asynchronous actions in Redux.
- Using [Reselect](https://github.com/reduxjs/reselect) for selectors memoization in Redux.
- Using [React Router](https://reacttraining.com/react-router/) for routing in React.
- Using [TypeScript](https://www.typescriptlang.org/) for static type checking.
- Using [Redux Persist](https://www.npmjs.com/package/redux-persist) for data persistence locally for redux data.
- Using [Stripe API](https://stripe.com/docs/api) for payment processing.
- Using [Redux Logger](https://www.npmjs.com/package/redux-logger) for logging redux actions.
- Using [Firebase Authentication](https://firebase.google.com/docs/auth) for user authentication.
- Using [Firebase Firestore](https://firebase.google.com/docs/firestore) for storing data.
- Using [TheMealDB API](https://www.themealdb.com/api.php) for meal data.
- Using [ImageKit](https://imagekit.io/) for image optimization.

## What's included

Here are the feature included:

#### Home page

- Explore various categories provided
- Explore recommended meals

#### Meals Page

- Preview meals from various categories
- Add meals to cart
- Redirect to category detail page

#### Category Detail Page

- Preview more meals from a specific category
- Add meals to cart

#### Checkout Page

- Preview meals in cart
- Remove meals from cart
- Increase or decrease quantity of meals in cart
- Checkout and pay for meals via Stripe

#### Sign In Page

- Sign in with Google
- Sign in with email and password

#### Sign Up Page

- Sign up with email and password

## Run the app locally

The following instructions will go through the setting needed to run the front-end app on your local machine.

### Run App Locally

**1. Clone the project**

```
git clone https://github.com/smallpaes/random-meal-platform.git
```

**2. Enter the project folder**

> Open a new terminal and enter the folder

```
$ cd random-meal-platform
```

**3. Install packages via npm**

```
$ npm install
```

**4. Create a [Stripe](https://dashboard.stripe.com/register) account and get the publishable key and secret key**

> More about the key, kindly check [This website](https://stripe.com/docs/keys?locale=en-GB#obtain-api-keys)

**5. Create .env file**

```
$ touch .env
```

**6. Store API Keys in .env file and save**

```
VITE_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

**7. Optionally specify the currency for Stripe in .env file and save(Default: gbp)**

> Supported currency, kindly check [This website](https://stripe.com/docs/currencies)

```
CURRENCY=
```

**8. Run the app for development**

```
$ npm run dev
```
