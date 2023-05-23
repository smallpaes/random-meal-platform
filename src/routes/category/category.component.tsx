import { FC, ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selector';
import { CategoryItem } from '../../store/categories/categories.types';
import { MealCard } from '../../components/meal-card/meal-card.component';
import Spinner from '../../components/spinner/spinner.component';

import {
  CategoryContainer,
  CategoryHeader,
  CategoryItems,
} from './category.styles';

const Category: FC = (): ReactElement => {
  const { category } = useParams();
  const [categoryMeals, setCategoryMeals] = useState<CategoryItem[]>([]);

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    if (!category) return;
    setCategoryMeals(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <CategoryContainer>
      <CategoryHeader>{category}</CategoryHeader>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryItems>
          {categoryMeals?.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </CategoryItems>
      )}
    </CategoryContainer>
  );
};

export default Category;
