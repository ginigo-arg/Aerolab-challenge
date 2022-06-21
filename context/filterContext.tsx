import React, { createContext, useContext } from "react";
import { Products, User, IContext } from "../components/types";
import { useProvideFilters } from "../Hooks/useFilters";

interface Context {
  children: React.ReactNode;
  state: IContext[];
  totalPages: number;
  sort: number;
  limit: number;
  page: number;
  getAllProducts: (index: Products[]) => void;
  handleChangeFilter: (index: string) => void;
  handleChangePrice: (index: number) => void;
  handleSearchFilter: (index: string) => void;
  handleAddCoins: (index: number) => void;
  setProducts: (index: Products[]) => void;
  getUser: (index: User) => void;
  handleRestart: (index: number) => void;
}

export const filterContext = createContext({} as Context);

export const FilterProvide: React.FC<Context> = ({ children }) => {
  const filters = useProvideFilters();

  return (
    <filterContext.Provider value={filters}>{children}</filterContext.Provider>
  );
};

export const useFilters = () => {
  return useContext(filterContext);
};
