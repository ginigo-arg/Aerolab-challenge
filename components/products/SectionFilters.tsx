import CategoryFilter from "./CategoryFilter";
import LowHighPrice from "./lowestHighestPrice";
import SearchProducts from "./SearchProducts";

export default function SectionFilters({ products }) {
  return (
    <>
      <div className="flex flex-row items-center justify-between py-3 mb-5">
        <CategoryFilter products={products} />
        <LowHighPrice />
        <SearchProducts products={products} />
      </div>
    </>
  );
}
