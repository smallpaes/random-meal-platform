import { FC, ReactElement } from 'react';
import {
  CategoryItemContainer,
  CategoryItemImg,
  CategoryItemContent,
  CategoryItemTitle,
} from './category-item.styles';

export interface ICategory {
  title: string;
  imageUrl: string;
}

export interface ICategoryItemProps {
  category: ICategory;
}

const CategoryItem: FC<ICategoryItemProps> = ({ category }): ReactElement => {
  const { title, imageUrl } = category;
  return (
    <CategoryItemContainer>
      <CategoryItemImg src={imageUrl} alt={`${title} category`} />
      <CategoryItemContent className="content">
        <CategoryItemTitle>{title}</CategoryItemTitle>
      </CategoryItemContent>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
