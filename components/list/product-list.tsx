import CardProduct from "../cards/card-product";
import { Products } from "../../pages/index";

export default function ProductList({ products }: Products) {
  console.log("products", products);
  return (
    <div className="border grid grid-cols-4 gap-3">
      {products.map((product) => (
        <CardProduct
          name={product.name}
          category={product.category}
          price={product.cost}
          image={product.img.url}
        />
      ))}
    </div>
  );
}
