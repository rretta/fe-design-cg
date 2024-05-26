import "./SortDropdown.css";
import { IoFilterSharp } from "react-icons/io5";
export const SortDropdown = () => {
  return (
    <div className="filer-dropdown">
      <IoFilterSharp className="filer-dropdown__icon" />
      <div className="searchbar__filters__dropdown">
        <label>Sort By</label>
        <select>
          <option value="1">Featured</option>
          <option value="2">Newest</option>
          <option value="3">Price: High to Low</option>
          <option value="4">Price: Low to High</option>
        </select>
      </div>
    </div>
  );
};
