import Select from "react-select";
import { useFilters } from "../../context/filterContext";

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
const customStyles = {
  menu: (provided: any) => ({
    ...provided,
    color: "#991b1b",
    width: "200px",
  }),
  option: (provided: any, state: Props) => ({
    ...provided,
    color: "#4b5563",
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    backgroundColor:
      state.isFocused || state.isSelected ? "#818cf8" : "#ffffff",
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: "200px",
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "8px",
    color: "#f6f6f6",
    cursor: "pointer",
    border: "1px solid",
    paddingLeft: "14px",
    paddingRight: "6px",
    borderColor: "#818cf8",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1",
  }),
  container: (provided: any) => ({
    ...provided,
    width: "200px",
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
export default function CategoryFilter({ products }) {
  const { handleChangeFilter } = useFilters();
  return (
    <>
      <div className="flex flex-row justify-start items-center">
        <span className="my-auto mr-1">Filter by</span>
        <Select
          options={options}
          defaultValue={options[0]}
          styles={customStyles}
          onChange={(value) => handleChangeFilter(value.label, products)}
        />
      </div>
    </>
  );
}
