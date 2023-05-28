import { FC, ReactElement } from 'react';
import {
  CategoryItemContainer,
  CategoryItemImg,
  CategoryItemContent,
  CategoryItemTitle,
} from './category-item.styles';
import { SkeletonContainer } from '../../theme/commonStyles';

export interface ICategory {
  title: string;
  imageUrl: string;
}

export type FetchingState = {
  isLoading: true;
  category: null;
};

export type RenderDataState = {
  isLoading: false;
  category: ICategory;
};

export type CategoryItemProps = FetchingState | RenderDataState;

const isLoadingType = (props: CategoryItemProps): props is FetchingState => {
  return props.isLoading;
};

const CategoryItem: FC<CategoryItemProps> = (props): ReactElement => {
  const renderedImage = isLoadingType(props) ? (
    <SkeletonContainer $height={'100px'} />
  ) : (
    <CategoryItemImg
      src={props.category.imageUrl}
      alt={`${props.category.title} category`}
    />
  );

  const rendererTitle = isLoadingType(props) ? (
    <SkeletonContainer $height=".9rem" $width="80%" />
  ) : (
    <CategoryItemTitle>{props.category.title}</CategoryItemTitle>
  );

  return (
    <CategoryItemContainer>
      {renderedImage}
      <CategoryItemContent className="content">
        {rendererTitle}
      </CategoryItemContent>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
