import { FC, ReactElement, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/categories.action';

import MealsPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Meals: FC = (): ReactElement => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArr = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArr));
    };
    getCategoriesMap();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<MealsPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Meals;
