import { FC, ReactElement, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MealCard } from '../meal-card/meal-card.component';
import {
  selectCategoriesTopThree,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selector';
import {
  RecommendedItemsContainer,
  RecommendedContainer,
  ReadMoreButton,
} from './recommended.styles';

const MEALS_PER_PAGE = 8;

const Recommended: FC = (): ReactElement => {
  const navigate = useNavigate();
  const recommendedMeals = useSelector(selectCategoriesTopThree);
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const hasMoreToShow = useMemo(
    () => recommendedMeals.length > page * MEALS_PER_PAGE,
    [recommendedMeals, page],
  );

  const onReadMoreClick = () => {
    if (hasMoreToShow) {
      setPage(page + 1);
      return;
    }
    navigate('/meals');
  };

  return (
    <RecommendedContainer>
      <RecommendedItemsContainer>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <MealCard key={index} meal={null} isLoading={isLoading} />
            ))
          : recommendedMeals
              .slice(0, page * MEALS_PER_PAGE)
              .map((meal) => (
                <MealCard key={meal.id} meal={meal} isLoading={isLoading} />
              ))}
      </RecommendedItemsContainer>
      <ReadMoreButton isOutline onClick={onReadMoreClick}>
        Load More
      </ReadMoreButton>
    </RecommendedContainer>
  );
};

export default Recommended;
