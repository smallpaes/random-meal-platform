import { FC, ReactElement, useContext } from 'react';

import { CategoriesContext } from '../../context/categories.context';

import MealsPreview from '../../components/meals-preview/meals-preview.component';

const CategoriesPreview: FC = (): ReactElement => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title: string) => (
        <MealsPreview key={title} title={title} meals={categoriesMap[title]} />
      ))}
    </>
  );
};

export default CategoriesPreview;
