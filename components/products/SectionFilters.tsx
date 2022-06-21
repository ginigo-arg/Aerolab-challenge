import CategoryFilter from "./CategoryFilter";
import LowHighPrice from "./lowestHighestPrice";
import PagesNavigate from "./pagesNavigate";
import SearchProducts from "./SearchProducts";

export default function SectionFilters({ products }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between py-3 mb-8 space-y-4 lg:space-y-0 border-b ">
        <CategoryFilter products={products} />
        <LowHighPrice />
        <SearchProducts products={products} />
        <PagesNavigate />
      </div>
    </>
  );
}
