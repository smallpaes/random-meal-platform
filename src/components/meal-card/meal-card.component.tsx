import { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button, { ButtonTypes } from '../../components/button/button.component';
import {
  MealCardContainer,
  MealCardContent,
  MealCardImage,
  MealCardTitleContainer,
  MealCardPrice,
  MealCardTitle,
} from './meal-card.styles';
import { SkeletonContainer } from '../../theme/commonStyles';

import { CategoryItem } from '../../store/categories/categories.types';

export type FetchingState = {
  isLoading: true;
  meal: null;
};

export type RenderDataState = {
  isLoading: false;
  meal: CategoryItem;
};

type MealCard = FetchingState | RenderDataState;

const isLoadingType = (props: MealCard): props is FetchingState => {
  return props.isLoading;
};

export const MealCard: FC<MealCard> = (props): ReactElement => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addMealToCart = () => {
    if (isLoadingType(props)) return;
    dispatch(addItem(cartItems, props.meal));
  };

  const renderedImage = isLoadingType(props) ? (
    <SkeletonContainer />
  ) : (
    <MealCardImage src={props.meal.imageUrl} alt={props.meal.name} />
  );

  const rendererContainer = isLoadingType(props) ? (
    <>
      <SkeletonContainer $height="25px" $width="80%" />
      <SkeletonContainer $height="15px" $width="20%" />
    </>
  ) : (
    <>
      <MealCardTitle>{props.meal.name}</MealCardTitle>
      <MealCardPrice>{`$ ${props.meal.price}`}</MealCardPrice>
    </>
  );

  return (
    <MealCardContainer>
      {renderedImage}
      <MealCardContent>
        <MealCardTitleContainer>{rendererContainer}</MealCardTitleContainer>
        <Button
          disabled={props.isLoading}
          buttonType={ButtonTypes.SECONDARY}
          onClick={addMealToCart}
        >
          Add to cart
        </Button>
      </MealCardContent>
    </MealCardContainer>
  );
};
