import { useFilters } from "../../context/filterContext";

export default function LowHighPrice() {
  const { handleChangePrice } = useFilters();
  return (
    <div>
      <button onClick={() => handleChangePrice(0)}>Lowest price</button>
      <button onClick={() => handleChangePrice(1)}>Highest Price</button>
    </div>
  );
}
