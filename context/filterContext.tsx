import React, { createContext, useState, useContext } from "react";

interface Context {
  category: string;
  handleChangeFilter: (index: string) => void;
  handleChangePrice: (index: number) => void;
}

enum Sort {
  "Lowest Price" = 0,
  "Highest Price" = 1,
}

export const filterContext = createContext({} as Context);

export const FilterProvide: React.FC = ({ children }) => {
  const filters = useProvideFilters();
  return (
    <filterContext.Provider value={filters}>{children}</filterContext.Provider>
  );
};
export const useFilters = () => {
  return useContext(filterContext);
};

export const useProvideFilters = () => {
  const [category, setCategory] = useState<string>("All products");
  const [sort, setSort] = useState<Sort>(Sort["Lowest Price"]);

  const handleChangeFilter = (label: string) => {
    if (label) setCategory(label);
  };

  const handleChangePrice = (num: number) => {
    if (num === 0) setSort(Sort["Lowest Price"]);
    else {
      setSort(Sort["Highest Price"]);
    }
  };

  return { category, handleChangeFilter, handleChangePrice, sort };
};
