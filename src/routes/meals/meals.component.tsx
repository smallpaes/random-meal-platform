import { FC, ReactElement, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCategoriesStart } from '../../store/categories/categories.action';

import MealsPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Meals: FC = (): ReactElement => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<MealsPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Meals;
