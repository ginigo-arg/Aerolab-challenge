import React, {
  createContext,
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { Products, User, IContext, Amount } from "../components/types";
import { userPage } from "../Hooks/usePager";
import { reducer } from "./Reducer";
import { postCoins, postReedem } from "../pages/api/api";
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

enum Sort {
  "Lowest Price" = 0,
  "Highest Price" = 1,
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

const initialProducts = {
  products: [],
  filteredProducts: [],
  user: [],
};

export const useProvideFilters = () => {
  const limit: number = 16;
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
  }, [totalPages]);

  function getAllProducts(products: Products[]) {
    dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: products,
    });
  }
  const getUser = (user: User) => {
    dispatch({
      type: "GET_USER",
      payload: user,
    });
  };

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

  const handleSearchFilter = (query: string, products: Products) => {
    dispatch({
      type: "PRODUCTS_BY_QUERY",
      payload: {
        produc: products,
        query: query,
      },
    });
  };

  const handleAddCoins = async (coins: Amount) => {
    const resp = await postCoins(coins);
    dispatch({
      type: "UPDATE_COINS",
      payload: resp["New Points"],
    });
  };
  const handleRestart = (price: number) => {
    dispatch({
      type: "RESTART_COINS",
      payload: price,
    });
  };

  return {
    state,
    totalPages,
    sort,
    limit,
    page,
    getAllProducts,
    handleChangeFilter,
    handleChangePrice,
    handleSearchFilter,
    handleNextPage,
    handlePrevPage,
    getUser,
    handleAddCoins,
    handleRestart,
  };
};
