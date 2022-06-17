import React, {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
  useRef,
} from "react";
import { Products } from "../components/types";
import { userPage } from "../Hooks/usePager";
import { reducer } from "./Reducer";
interface Context {
  category: string;
  getAllProducts: (index: Products[]) => void;
  handleChangeFilter: (index: string) => void;
  handleChangePrice: (index: number) => void;
  handleSearchFilter: (index: string) => void;
  setProducts: (index: Products[]) => void;
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

const initialProducts = {
  products: [],
  filteredProducts: [],
};

export const useProvideFilters = () => {
  const [limit, setLimit] = useState<number>(16);
  const [category, setCategory] = useState<string>("All products");
  const { page, handleNavigate, handleNextPage, handlePrevPage } = userPage();
  const [sort, setSort] = useState<Sort>(Sort["Highest Price"]);
  const [state, dispatch] = useReducer(reducer, initialProducts);
  const totalPageAll = Math.ceil(state.products.length / limit);
  const totalPageFilter = Math.ceil(state.filteredProducts.length / limit);
  const totalPages = state.filteredProducts.length
    ? totalPageFilter
    : totalPageAll;

  useEffect(() => {
    if (page > totalPages && totalPages !== 0) handleNavigate(totalPages);
    else if (page < 1) handleNavigate(page + 1);
  });

  function getAllProducts(products: Products[]) {
    dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: products,
    });
  }
  const handleChangeFilter = (label: string, products) => {
    dispatch({
      type: "PRODUCTS_BY_CATEGORY",
      payload: {
        prod: products,
        category: label,
      },
    });
  };

  const handleChangePrice = (num: number) => {
    num === 0 ? setSort(Sort["Lowest Price"]) : setSort(Sort["Highest Price"]);
  };

  const handleSearchFilter = (query, products) => {
    dispatch({
      type: "PRODUCTS_BY_QUERY",
      payload: {
        produc: products,
        query: query,
      },
    });
  };

  return {
    getAllProducts,
    category,
    handleChangeFilter,
    handleChangePrice,
    handleSearchFilter,
    sort,
    state,
    page,
    handleNextPage,
    handlePrevPage,
    limit,
    totalPages,
  };
};
