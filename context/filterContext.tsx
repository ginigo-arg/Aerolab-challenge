import React, { createContext, useContext } from "react";
import { Products, User, State, Amount } from "../components/types";
import { useProvideFilters } from "../Hooks/useFilters";

interface Context {
  state: State;
  totalPages: number;
  sort: number;
  limit: number;
  page: number;
  getAllProducts: (index: Products[]) => void;
  handleChangeFilter: (label: string, products: Products) => void;
  handleChangePrice: (number: number) => void;
  handleSearchFilter: (query: string, products: Products) => void;

  handleNextPage: () => void;
  handlePrevPage: () => void;
}

export const Context = createContext({} as Context);

export const ProvideFilters = ({ children }) => {
  const filters = useProvideFilters();
  return <Context.Provider value={filters}>{children}</Context.Provider>;
};

export const useFilters = () => {
  return useContext(Context);
};
