import { useFilters } from "../../context/filterContext";
import CategoryFilter from "./CategoryFilter";
import LowHighPrice from "./lowestHighestPrice";
import PagesNavigate from "./pagesNavigate";
import SearchProducts from "./SearchProducts";

export default function SectionFilters({ products }) {
  const { handleNextPage, handlePrevPage } = useFilters();
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between py-3 mb-5">
        <CategoryFilter products={products} />
        <LowHighPrice />
        <SearchProducts products={products} />
        <PagesNavigate />
      </div>
    </>
  );
}
