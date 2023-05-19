import { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import MealsPreview from '../categories-preview/categories-preview.component';

const Meals: FC = (): ReactElement => {
  return (
    <Routes>
      <Route index element={<MealsPreview />} />
    </Routes>
  );
};

export default Meals;
