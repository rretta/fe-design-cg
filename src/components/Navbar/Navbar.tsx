import "./Navbar.css";
import { TiThMenu } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CurrencyDropdown } from "./CurrencyDropdown/CurrencyDropdown";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const items = [
  {
    title: "currency",
  },
  {
    title: "items",
  },
  {
    title: "accounts",
  },
  {
    title: "services",
  },
  {
    title: "more",
  },
  {
    title: "sell",
  },
];

interface props {
  handlerBurger: () => void;
}

export const Navbar = ({ handlerBurger }: props) => {
  return (
    <header>
      <nav className="navbar">
        <section className="section-1">
          <button onClick={handlerBurger} className="section-1__burguer">
            <TiThMenu />
          </button>
          <img
            className="section-1__logo"
            src="https://chicksgold.com/logo/chicks-logo-large.svg"
            alt="Chicks Gold Logo"
          />
        </section>
        <section className="section-2">
          <ul className="section-2__listitems">
            {items.map((item, index) => (
              <li key={index} className="section-2__item">
                {item.title} <RiArrowDropDownLine />
              </li>
            ))}
          </ul>
        </section>

        <section className="section-3">
          <div className="section-3__currency">
            <CurrencyDropdown />
          </div>

          <div className="section-3__cart">
            <FaShoppingCart />
            <span>Cart (5)</span>
          </div>

          <button className="section-3__login-button">
            SIGN IN
            <IoMdPerson />
          </button>
        </section>
      </nav>
    </header>
  );
};
