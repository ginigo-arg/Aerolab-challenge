import { useEffect, useReducer, useState } from "react";
import { userPage } from "../Hooks/usePager";
import { reducer } from "../context/Reducer";
import { postCoins } from "../pages/api/api";
import { Products, User, Amount } from "../components/types";

enum Sort {
  "Lowest Price" = 0,
  "Highest Price" = 1,
}
const initialProducts = {
  products: [],
  filteredProducts: [],
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

  const getAllProducts = (products: Products[]) => {
    dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: products,
    });
  };
  const handleChangePrice = (num: number) => {
    num === 0 ? setSort(Sort["Lowest Price"]) : setSort(Sort["Highest Price"]);
  };

  const handleChangeFilter = (label: string, products: Products) => {
    dispatch({
      type: "PRODUCTS_BY_CATEGORY",
      payload: {
        prod: products,
        category: label,
      },
    });
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
  };
};
