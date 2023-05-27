import { FC, ReactElement, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import MealsPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import {
  MealsBannerContainer,
  MealsBannerOverlay,
  MealsBannerContent,
  MealsDisplayContainer,
} from './meals.styles';

const Meals: FC = (): ReactElement => {
  return (
    <>
      <MealsBannerContainer url="https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80">
        <MealsBannerOverlay />
        <MealsBannerContent>Find your favorite meals</MealsBannerContent>
      </MealsBannerContainer>
      <MealsDisplayContainer>
        <Routes>
          <Route index element={<MealsPreview />} />
          <Route path=":category" element={<Category />} />
        </Routes>
      </MealsDisplayContainer>
    </>
  );
};

export default Meals;
