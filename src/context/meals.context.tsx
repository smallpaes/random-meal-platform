import { createContext, useState, FC } from 'react';
import MEALS from '../meal-data.json';

export type MealType = {
  name: string;
  id: string;
  price: number;
  imageUrl: string;
};

type MealContextType = {
  meals: MealType[];
};

interface IMealsProvider {
  children: React.ReactNode;
}

export const MealsContext = createContext<MealContextType>({
  meals: [],
});

export const MealsProvider: FC<IMealsProvider> = ({ children }) => {
  const [meals, setMeals] = useState<MealType[]>(MEALS);
  const value = { meals };
  return (
    <MealsContext.Provider value={value}>{children}</MealsContext.Provider>
  );
};
