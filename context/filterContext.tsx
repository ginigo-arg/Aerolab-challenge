import React, { createContext, useState, useContext } from "react";

interface Context {
  category: string;
  handleChangeFilter: (index: string) => void;
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

  const handleChangeFilter = (label: string) => {
    if (label) setCategory(label);
  };

  return { category, handleChangeFilter };
};
