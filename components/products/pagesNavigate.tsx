import SvgArrow from "../icons/arrow";
import SvgArrowLeft from "../icons/arrowLeft";
import SvgArrowRight from "../icons/arrowRight";
import { GRAY_600, GRAY_400 } from "../../colors";
import { useFilters } from "../../context/filterContext";
export default function PagesNavigate() {
  const { page, totalPages, handleNextPage, handlePrevPage } = useFilters();

  return (
    <div className="border h-10 rounded-md flex flex-row justify-center items-center">
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className={`${
          page === 1
            ? "bg-gray-100 hover:cursor-not-allowed h-full"
            : "cursor-pointer bg-gray-100 hover:bg-gray-300 h-full my-auto rounded-sm"
        }`}
      >
        <SvgArrowLeft className="h-6 w-6" color={GRAY_400} />
      </button>
      <p className="mx-2">
        Page {page} of {totalPages}
      </p>
      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className={`${
          page === totalPages
            ? "bg-gray-100 hover:cursor-not-allowed h-full"
            : "cursor-pointer bg-gray-100 hover:bg-gray-300 h-full my-auto rounded-sm"
        }`}
      >
        <SvgArrowRight className="h-6 w-6" color={GRAY_400} />
      </button>
    </div>
  );
}
