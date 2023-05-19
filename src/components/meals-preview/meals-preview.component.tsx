import { FC, ReactElement } from 'react';

import { MealType } from '../../context/categories.context';
import { ButtonTypes } from '../button/button.component';
import { MealCard } from '../meal-card/meal-card.component';
import {
  CategoryContainer,
  CategoryHeader,
  CategoryItems,
  CategoryButton,
} from './meals-preview.styles';

export interface IMealsPreview {
  title: string;
  meals: MealType[];
}

const CategoriesPreview: FC<IMealsPreview> = ({
  title,
  meals,
}): ReactElement => {
  return (
    <>
      <CategoryContainer>
        <CategoryHeader>{title}</CategoryHeader>
        <CategoryItems>
          {meals.slice(0, 4).map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </CategoryItems>
        <CategoryButton isOutline={true} buttonType={ButtonTypes.PRIMARY}>
          Discover More
        </CategoryButton>
      </CategoryContainer>
    </>
  );
};

export default CategoriesPreview;
