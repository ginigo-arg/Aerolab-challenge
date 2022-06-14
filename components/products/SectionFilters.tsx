import CategoryFilter from "./CategoryFilter";
import LowHighPrice from "./lowestHighestPrice";

export default function SectionFilters() {
  return (
    <>
      <div className="flex flex-row items-center border border-red-600">
        <CategoryFilter />
        <LowHighPrice />
      </div>
    </>
  );
}
