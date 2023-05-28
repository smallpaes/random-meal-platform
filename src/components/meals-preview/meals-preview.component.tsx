import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoryItem } from '../../store/categories/categories.types';
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
  meals: CategoryItem[];
}

const CategoriesPreview: FC<IMealsPreview> = ({
  title,
  meals,
}): ReactElement => {
  const navigate = useNavigate();
  return (
    <>
      <CategoryContainer>
        <CategoryHeader>{title}</CategoryHeader>
        <CategoryItems>
          {meals.slice(0, 4).map((meal) => (
            <MealCard key={meal.id} meal={meal} isLoading={false} />
          ))}
        </CategoryItems>
        <CategoryButton
          onClick={() => navigate(`${title}`)}
          isOutline={true}
          buttonType={ButtonTypes.PRIMARY}
        >
          Discover More
        </CategoryButton>
      </CategoryContainer>
    </>
  );
};

export default CategoriesPreview;
