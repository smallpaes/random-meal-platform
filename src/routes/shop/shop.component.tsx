import { FC, ReactElement, useContext } from 'react';
import { MealsContext } from '../../context/meals.context';
import { MealCard } from '../../components/meal-card/meal-card.component';
import { ShopContainer } from './shop.styles';

const Shop: FC = (): ReactElement => {
  const { meals } = useContext(MealsContext);
  return (
    <ShopContainer>
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </ShopContainer>
  );
};

export default Shop;
