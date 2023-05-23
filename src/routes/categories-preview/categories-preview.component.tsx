import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selector';

import MealsPreview from '../../components/meals-preview/meals-preview.component';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview: FC = (): ReactElement => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title: string) => (
          <MealsPreview
            key={title}
            title={title}
            meals={categoriesMap[title]}
          />
        ))
      )}
    </>
  );
};

export default CategoriesPreview;
