import { useContext } from "react";
import Select from "react-select";
import { filterContext, useFilters } from "../../context/filterContext";

const options = [
  { value: "all products", label: "All products" },
  { value: "phones", label: "Phones" },
  { value: "Tablets & E-readers", label: "Tablets & E-readers" },
  { value: "Phone Accessories", label: "Phone Accessories" },
  { value: "PC Accessories", label: "PC Accessories" },
  { value: "gaming", label: "Gaming" },
  { value: "laptops", label: "Laptops" },
  { value: "cameras", label: "Cameras" },
  { value: "audio", label: "Audio" },
  { value: "Smart Home", label: "Smart Home" },
  { value: "monitors_tv", label: "Monitors & TV" },
  { value: "drones", label: "Drones" },
];

export default function CategoryFilter() {
  const { handleChangeFilter } = useFilters();

  return (
    <>
      <div className="flex flex-row justify-start items-center">
        <span className="my-auto mr-1">Filter by</span>
        <Select
          options={options}
          defaultValue={options[0]}
          onChange={(value) => handleChangeFilter(value.label)}
        />
      </div>
    </>
  );
}
