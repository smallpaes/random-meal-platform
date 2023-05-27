import { FC, ReactElement, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MealCard } from '../meal-card/meal-card.component';
import { selectCategoriesTopThree } from '../../store/categories/categories.selector';
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
        {recommendedMeals.slice(0, page * MEALS_PER_PAGE).map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </RecommendedItemsContainer>
      <ReadMoreButton isOutline onClick={onReadMoreClick}>
        Load More
      </ReadMoreButton>
    </RecommendedContainer>
  );
};

export default Recommended;
