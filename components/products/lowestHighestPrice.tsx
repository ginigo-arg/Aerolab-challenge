import { useContext, useState } from "react";
import { filterContext, useFilters } from "../../context/filterContext";

export default function LowHighPrice() {
  const { handleChangePrice } = useContext(filterContext);
  const [active, setActive] = useState({
    lowPrice: 0,
    highPrice: 0,
  });
  const isActive =
    "bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-2 px-8 rounded-md mr-2 font-semibold";
  const notActive =
    "bg-gray-300 py-2 px-8 rounded-md mr-2 font-semibold text-gray-400";
  return (
    <div>
      <span className="mr-1">Sort By</span>
      <button
        onClick={() => (
          setActive({
            lowPrice: 1,
            highPrice: 0,
          }),
          handleChangePrice(0)
        )}
        className={`${
          active.lowPrice === 1 ? `${isActive}` : `${notActive}`
        } hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white py-2 px-8 rounded-md mr-2 font-semibold `}
      >
        Lowest price
      </button>
      <button
        onClick={() => (
          setActive({
            lowPrice: 0,
            highPrice: 1,
          }),
          handleChangePrice(1)
        )}
        className={`${
          active.lowPrice === 0 ? `${isActive}` : `${notActive}`
        } hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white py-2 px-8 rounded-md mr-2 font-semibold `}
      >
        Highest Price
      </button>
    </div>
  );
}
