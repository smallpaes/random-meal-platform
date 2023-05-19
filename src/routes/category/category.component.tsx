import { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext, MealType } from '../../context/categories.context';

import { MealCard } from '../../components/meal-card/meal-card.component';

import {
  CategoryContainer,
  CategoryHeader,
  CategoryItems,
} from './category.styles';

const Category: FC = (): ReactElement => {
  const { category } = useParams();
  const [categoryMeals, setCategoryMeals] = useState<MealType[]>([]);
  const { categoriesMap } = useContext(CategoriesContext);

  useEffect(() => {
    if (!category) return;
    setCategoryMeals(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <CategoryContainer>
      <CategoryHeader>{category}</CategoryHeader>
      <CategoryItems>
        {categoryMeals?.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </CategoryItems>
    </CategoryContainer>
  );
};

export default Category;
