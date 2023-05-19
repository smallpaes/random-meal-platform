import { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import MealsPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Meals: FC = (): ReactElement => {
  return (
    <Routes>
      <Route index element={<MealsPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Meals;
