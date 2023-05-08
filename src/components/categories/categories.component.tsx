import { FC, ReactElement } from 'react';
import CategoryItem, {
  ICategory,
} from '../category-item/category-item.component';
import { CategoriesContainer } from './categories.styles';

export interface ICategoriesProps {
  categories: ICategory[];
}

const Categories: FC<ICategoriesProps> = ({ categories }): ReactElement => {
  return (
    <CategoriesContainer>
      {categories.map((category: ICategory) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
