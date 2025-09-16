import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryFilter, setSortOrder, applyFilters } from "../redux/productSlice";
import { AppDispatch } from "../redux/store";

const Filter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCategoryFilter(e.target.value));
    dispatch(applyFilters());
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortOrder(e.target.value as "asc" | "desc" | ""));
    dispatch(applyFilters());
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
      <select onChange={handleCategoryChange} className="border p-2 rounded">
        <option value="">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>

      <select onChange={handleSortChange} className="border p-2 rounded">
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
