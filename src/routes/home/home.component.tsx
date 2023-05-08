import { FC, ReactElement } from 'react';
import Categories from '../../components/categories/categories.component';

const Home: FC = (): ReactElement => {
  const categories = [
    {
      id: '1',
      title: 'Beef',
      imageUrl: 'https://www.themealdb.com/images/category/beef.png',
    },
    {
      id: '2',
      title: 'Chicken',
      imageUrl: 'https://www.themealdb.com/images/category/chicken.png',
    },
    {
      id: '3',
      title: 'Dessert',
      imageUrl: 'https://www.themealdb.com/images/category/dessert.png',
    },
    {
      id: '4',
      title: 'Lamb',
      imageUrl: 'https://www.themealdb.com/images/category/lamb.png',
    },
    {
      id: '5',
      title: 'Miscellaneous',
      imageUrl: 'https://www.themealdb.com/images/category/miscellaneous.png',
    },
  ];

  return <Categories categories={categories} />;
};

export default Home;
