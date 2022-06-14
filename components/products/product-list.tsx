import { useContext, useEffect, useState } from "react";
import { filterContext, useFilters } from "../../context/filterContext";
import CardProduct from "../cards/card-product";
import { Products } from "../types";

type Props = {
  products: Products;
};

export default function ProductList<Props>({ products }) {
  const [productsFiltered, setProductsFiltered] = useState<Products[]>([]);
  const { category, sort } = useFilters();
  let productCategory: string[] = [];
  useEffect(() => {
    // console.log("categorii:", category);
    const newProducts = products.filter((product) => {
      if (category === "All products") return true;
      else if (product.category === category) return true;
      return false;
    });
    productCategory = products.map((product) => product.category);
    // console.log("productCategory", productCategory);
    // console.log("news", newProducts);
    // console.log("filtered", productsFiltered);
    setProductsFiltered(newProducts);
  }, [category, sort]);
  return (
    <div className="border grid grid-cols-4 gap-3">
      {productsFiltered.length > 0 ? (
        productsFiltered
          .map((product, index) => {
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
          .map((product, index) => (
            <CardProduct
              key={product.product._id}
              name={product.product.name}
              category={product.product.category}
              price={product.product.cost}
              image={product.product.img.url}
            />
          ))
      ) : (
        <h2>No se encontraron productos</h2>
      )}
    </div>
  );
}
