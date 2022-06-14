import { FilterProvide } from "../../context/filterContext";
import CategoryFilter from "./CategoryFilter";

export default function SectionFilters() {
  return (
    <>
      <div className="border border-red-600">
        <CategoryFilter />
      </div>
    </>
  );
}
