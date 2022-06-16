import { useContext, useEffect, useState, useReducer } from "react";
import { filterContext, useFilters } from "../../context/filterContext";
import CardProduct from "../cards/card-product";
import { Products } from "../types";
import { reducer } from "../../context/filterContext";

type Props = {
  products: Products;
};

export default function ProductList() {
  const { category, sort, state } = useFilters();
  console.log("state", state);
  let products =
    state.filteredProducts.length > 0 ? state.filteredProducts : state.products;

  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-5">
      {products?.length > 0 ? (
        products
          .map((product: Products, index) => {
            return {
              index: index,
              product: product,
            };
          })
          .sort((a, b) => {
            if (sort === 0) return a.product.cost - b.product.cost;
            if (sort === 1) return b.product.cost - a.product.cost;
            return a.index - b.index;
          })
          .map((product) => (
            <CardProduct
              key={product.product._id}
              name={product.product.name}
              category={product.product.category}
              price={product.product.cost}
              image={product.product.img.url}
            />
          ))
      ) : (
        <h1>No hay productos</h1>
      )}
    </div>
  );
}
