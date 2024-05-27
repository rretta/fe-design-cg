import React from "react";
import "./Card.css";
import { FaCircle } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  description: string;
  game: string;
  image: string;
  price?: number;
  realPrice?: number;
  onSale?: boolean;
  onStock: boolean;
  quantity: number;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const {
    id,
    name,
    description,
    game,
    image,
    price,
    realPrice,
    onSale,
    onStock,
    quantity,
  } = product;

  return (
    <div className="card" key={id}>
      <div className="card__header">
        <div className="card__header__status">
          {onSale && (
            <span className="card__sale">
              <FaCircle className="card__sale__icon" /> ON SALE
            </span>
          )}
          {onStock && <span className="stock-status">In Stock</span>}
        </div>
        <p className="card__header__quantity">{quantity}</p>
      </div>

      <img src={image} alt={name} className="card-image" />

      <div className="card__body">
        <div className="card__body__content">
          <div className="card__body__game-title-container">
            <h3 className="card__title">{name}</h3>
            <img src={game} alt={name} className="card__game" />
          </div>

          <div className="card-price">
            {price !== undefined ? (
              <p>${price.toFixed(2)}</p>
            ) : (
              <p className="card-price__unavailable">Price Unavailable</p>
            )}
            {realPrice !== undefined && (
              <p className="card-price__real-price">${realPrice.toFixed(2)}</p>
            )}
          </div>

          <p className="card-description">{description}</p>
        </div>

        <div className="card__buttons">
          <button className="details-button">DETAILS</button>
          <button className="add-button">
            <span>ADD</span>
            <div className="card__cart-icon__container">
              <FaShoppingCart className="card__cart-icon" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
