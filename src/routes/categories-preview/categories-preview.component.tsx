import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

import MealsPreview from '../../components/meals-preview/meals-preview.component';

const CategoriesPreview: FC = (): ReactElement => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title: string) => (
        <MealsPreview key={title} title={title} meals={categoriesMap[title]} />
      ))}
    </>
  );
};

export default CategoriesPreview;
