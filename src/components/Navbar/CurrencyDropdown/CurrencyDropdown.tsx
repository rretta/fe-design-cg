import { RiArrowDropDownLine } from "react-icons/ri";
import "./CurrencyDropdown.css";

export const CurrencyDropdown: React.FC = () => {
  return (
    <div>
      <summary className="currency-dropdown__select">
        USD
        <RiArrowDropDownLine />
      </summary>
    </div>
  );
};
