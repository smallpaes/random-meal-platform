import { FC, ReactElement, useContext } from 'react';
import {
  CategoriesContext,
  CategoriesMap,
} from '../../context/categories.context';
import { ButtonTypes } from '../../components/button/button.component';
import { MealCard } from '../../components/meal-card/meal-card.component';
import {
  ShopContainer,
  CategoryContainer,
  CategoryHeader,
  CategoryItems,
  CategoryButton,
} from './shop.styles';

const Shop: FC = (): ReactElement => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <ShopContainer>
      {Object.keys(categoriesMap).map((title: keyof CategoriesMap) => (
        <CategoryContainer key={title}>
          <CategoryHeader>{title}</CategoryHeader>
          <CategoryItems>
            {categoriesMap[title].slice(0, 4).map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </CategoryItems>
          <CategoryButton isOutline={true} buttonType={ButtonTypes.PRIMARY}>
            Discover More
          </CategoryButton>
        </CategoryContainer>
      ))}
    </ShopContainer>
  );
};

export default Shop;
