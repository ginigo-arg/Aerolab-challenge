import { useFilters } from "../../context/filterContext";
import CardProduct from "../cards/card-product";
import { Products } from "../types";
import { TEXT_GRADIENT } from "../../colors";

type Props = {
  products: Products;
};

export default function ProductList() {
  const { sort, state, page, limit, totalPages } = useFilters();
  let products =
    state.filteredProducts.length > 0 ? state.filteredProducts : state.products;
  const offset = (page - 1) * limit;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5">
        {products.length > 0 ? (
          products
            .map((product: Products, index: Number) => {
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
            .map((product, index) => {
              if (index >= offset && index < offset + limit) {
                return (
                  <CardProduct
                    key={product.product._id}
                    name={product.product.name}
                    category={product.product.category}
                    price={product.product.cost}
                    image={product.product.img.url}
                  />
                );
              }
            })
        ) : (
          <h1>No hay productos</h1>
        )}
      </div>
      <div className=" mt-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-700 font-bold px-1">
        <p>
          {products.length / totalPages} of{" "}
          {state.filteredProducts.length || state.products.length} products
        </p>
      </div>
    </>
  );
}
