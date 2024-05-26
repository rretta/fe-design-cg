import { IoSearch } from "react-icons/io5";
import "./GameSearch.css";
import { GiSwapBag } from "react-icons/gi";
import { GameDropdown } from "./GameDropdown/GameDropdown";
import { FaFeatherAlt } from "react-icons/fa";
export const GameSearch = () => {
  return (
    <div className="searchbar">
      <GameDropdown />
      <div className="searchbar__input">
        <IoSearch />
        <input name="search" type="text" placeholder="Search" />
      </div>
      <div className="searchbar__filters">
        <div className="searchbar__filters__type">
          <GiSwapBag className="searchbar__filters__icons" />
          <div className="searchbar__filters__dropdown">
            <label>Price</label>
            <select>
              <option value="1">All</option>
              <option value="2">200</option>
              <option value="3">300</option>
              <option value="4">400</option>
            </select>
          </div>
        </div>

        <div className="searchbar__filters__type">
          <FaFeatherAlt className="searchbar__filters__icons" />
          <div className="searchbar__filters__dropdown">
            <label>Item Type</label>
            <select>
              <option value="1">All</option>
              <option value="2">Armor</option>
              <option value="3">Magic</option>
              <option value="4">Other</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
