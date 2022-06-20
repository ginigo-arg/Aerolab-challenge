import React, { useContext, useReducer, useRef, useState } from "react";
import { filterContext } from "../../context/filterContext";

export default function SearchProducts({ products }) {
  const { handleSearchFilter } = useContext(filterContext);
  const [query, setQuery] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchFilter(query, products);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search product..."
        name="searcher"
        onChange={handleChange}
        className="w-64 h-10 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
      />
    </form>
  );
}
