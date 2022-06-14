import { useContext, useEffect, useState } from "react";
import { filterContext, useFilters } from "../../context/filterContext";
import CardProduct from "../cards/card-product";
import { Products } from "../types";

type Props = {
  products: Products;
};

export default function ProductList<Props>({ products }) {
  const [productsFiltered, setProductsFiltered] = useState<Products[]>([]);
  const { category } = useFilters();
  const filterAllProducts = "All products";
  let productCategory: string[] = [];
  useEffect(() => {
    // console.log("categorii:", category);
    const newProducts = products.filter((product) => {
      if (category === filterAllProducts) return true;
      else if (product.category === category) return true;
      return false;
    });
    productCategory = products.map((product) => product.category);
    // console.log("productCategory", productCategory);
    // console.log("news", newProducts);
    // console.log("filtered", productsFiltered);
    setProductsFiltered(newProducts);
  }, [category]);
  return (
    <div className="border grid grid-cols-4 gap-3">
      {productsFiltered.length > 0 ? (
        productsFiltered.map((product) => (
          <CardProduct
            name={product.name}
            category={product.category}
            price={product.cost}
            image={product.img.url}
          />
        ))
      ) : (
        <h2>No se encontraron productos</h2>
      )}
    </div>
  );
}
