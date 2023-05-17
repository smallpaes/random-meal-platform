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
} from './meal-card.styles';

import { MealType } from '../../context/meals.context';

interface IMealCard {
  meal: MealType;
}

export const MealCard: FC<IMealCard> = ({ meal }): ReactElement => {
  const { name, price, imageUrl } = meal;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addMealToCart = () => dispatch(addItem(cartItems, meal));
  return (
    <MealCardContainer>
      <MealCardImage src={imageUrl} alt={name} />
      <MealCardContent>
        <MealCardTitleContainer>
          <h3>{name}</h3>
          <MealCardPrice>{`$ ${price}`}</MealCardPrice>
        </MealCardTitleContainer>
        <Button buttonType={ButtonTypes.SECONDARY} onClick={addMealToCart}>
          Add to cart
        </Button>
      </MealCardContent>
    </MealCardContainer>
  );
};
