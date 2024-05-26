import "./Footer.css";
import visa from "../../assets/payment/visa.svg";
import mastercard from "../../assets/payment/mastercard.svg";
import americanExpress from "../../assets/payment/amex.svg";
import skrill from "../../assets/payment/skrill.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { DesktopCompanyInfo } from "./DesktopCompanyInfo/DesktopCompanyInfo";
import { MobileCompanyInfo } from "./MobileCompanyInfo/MobileCompanyInfo";

export const Footer = () => {
  return (
    <footer>
      <section className="payment__methods">
        <img src={visa} alt="visa" />
        <img src={mastercard} alt="Mastercard" />
        <img src={americanExpress} alt="American Express" />
        <img src={skrill} alt="Skrill" />
        <p>and 50+ more</p>
      </section>

      <section className="social__networks__container">
        <div className="social__networks">
          <a href="#">
            <FaFacebook className="social__networks__icon" />
          </a>
          <a href="#">
            <FaInstagram className="social__networks__icon" />
          </a>
          <a href="#">
            <FaTwitterSquare className="social__networks__icon" />
          </a>
          <a href="#">
            <FaDiscord className="social__networks__icon" />
          </a>
        </div>
        <div className="social__networks__separator"></div>
      </section>

      <DesktopCompanyInfo />

      <MobileCompanyInfo />

      <p className="copyright__text">
        © 2017 - 2024 ChicksGold.com All Rights Reserved
      </p>
    </footer>
  );
};
