import { useEffect, useReducer, useState } from "react";
import { userPage } from "../Hooks/usePager";
import { reducer } from "../context/Reducer";
import { postCoins, postReedem } from "../pages/api/api";

enum Sort {
  "Lowest Price" = 0,
  "Highest Price" = 1,
}
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
    try {
      dispatch({
        type: "UPDATE_COINS",
        payload: resp["New Points"],
      });
    } catch {
      () => window.alert("error al realizar la accion");
    }
    return resp;
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
