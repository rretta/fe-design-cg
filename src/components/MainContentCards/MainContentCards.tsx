import { GameSearch } from "./GameSearch/GameSearch";
import "./MainContentCards.css";
import { SortDropdown } from "./SortDropdown/SortDropdown";
import { itemsCard } from "../../mock/ItemsCard";
import Card from "./Card/Card";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
export const MainContentCards = () => {
  return (
    <main>
      <div>
        <h2>Condimentum consectetur</h2>

        <div className="filters-container">
          <GameSearch />
        </div>
        <div className="cards-container">
          <div className="sort-info">
            <p>Showing 15 - from 125</p>
            <SortDropdown />
          </div>

          <div className="cards-container__cards">
            {itemsCard.map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>

          <ul className="paginate">
            <li className="paginate__buttons">
              <IoChevronBack />
            </li>
            <li className="page__selected">1</li>
            <li className="page">2</li>
            <li className="page">3</li>
            <li className="page">4</li>
            <li>...</li>
            <li className="page last_page ">11</li>
            <li className="paginate__buttons">
              <IoChevronForward />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
