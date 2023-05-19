import { createContext, useState, FC, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export type MealType = {
  name: string;
  id: string;
  price: number;
  imageUrl: string;
};

export type CategoriesMap = {
  [category: string]: MealType[];
};

type MealContextType = {
  categoriesMap: CategoriesMap;
};

interface ICategoriesProvider {
  children: React.ReactNode;
}

export const CategoriesContext = createContext<MealContextType>({
  categoriesMap: {} as CategoriesMap,
});

export const CategoriesProvider: FC<ICategoriesProvider> = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState<CategoriesMap>(
    {} as CategoriesMap,
  );
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap as CategoriesMap);
    };

    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
