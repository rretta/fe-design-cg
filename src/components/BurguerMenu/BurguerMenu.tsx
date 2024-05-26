import React, { useEffect } from "react";
import "./BurguerMenu.css";

interface Props {
  handlerBurger: () => void;
}

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

export const BurguerMenu: React.FC<Props> = ({ handlerBurger }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <div className="burguer">
      <ul className="burguer__list">
        {items.map((item, index) => (
          <li onClick={handlerBurger} key={index}>
            <a onClick={handlerBurger} href="#">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
