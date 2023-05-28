import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import {
  HomeContainer,
  HomeSectionContainer,
  CarouselContainer,
  HomeSectionTitle,
} from './home.styles';

import Categories from '../../components/categories/categories.component';
import Carousel from '../../components/carousel/carousel.component';
import Recommended from '../../components/recommended/recommended.component';
import {
  selectCategoriesBasicInfo,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selector';

import BANNER_IMAGES from './banner-images.json';

const Home: FC = (): ReactElement => {
  const categories = useSelector(selectCategoriesBasicInfo);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <HomeContainer>
      <CarouselContainer>
        <Carousel opacity="sm" images={BANNER_IMAGES} />
      </CarouselContainer>
      <HomeSectionContainer>
        <HomeSectionTitle>Explore Various Cuisines</HomeSectionTitle>
        <Categories categories={categories} isLoading={isLoading} />
      </HomeSectionContainer>
      <HomeSectionContainer>
        <HomeSectionTitle>Recommended For You</HomeSectionTitle>
        <Recommended />
      </HomeSectionContainer>
    </HomeContainer>
  );
};

export default Home;
