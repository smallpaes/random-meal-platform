import { FC, ReactElement } from 'react';
import CategoryItem, {
  ICategory,
} from '../category-item/category-item.component';
import { CategoriesContainer } from './categories.styles';

export interface ICategoriesProps {
  categories: ICategory[];
  isLoading: boolean;
}

const Categories: FC<ICategoriesProps> = ({
  categories,
  isLoading = true,
}): ReactElement => {
  return (
    <CategoriesContainer>
      {isLoading
        ? Array.from({ length: 10 }).map((_, index) => (
            <CategoryItem key={index} category={null} isLoading={isLoading} />
          ))
        : categories.map((category: ICategory) => (
            <CategoryItem
              key={category.title}
              category={category}
              isLoading={isLoading}
            />
          ))}
    </CategoriesContainer>
  );
};

export default Categories;
