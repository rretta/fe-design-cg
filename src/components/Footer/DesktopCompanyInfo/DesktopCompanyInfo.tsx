import "./DesktopCompanyInfo.css";
import { MdOutlineStar } from "react-icons/md";
export const DesktopCompanyInfo = () => {
  return (
    <section className="info__company">
      <div className="column__logo">
        <img
          src="https://chicksgold.com/logo/chicks-logo-large.svg"
          alt="Chicks Gold Logo"
        />
        <a href="mailto:support@chicksgold.com">support@chicksgold.com</a>
      </div>

      <div className="column__chicks-gold">
        <h3>Chicks Gold</h3>
        <ul>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>

      <div className="column__support">
        <h3>Chicks Gold</h3>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>

      <div className="column__legal">
        <h3>Legal</h3>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Copyright Policy</a>
          </li>
        </ul>
      </div>

      <div className="column__trustpilot">
        <div>
          <MdOutlineStar className="trustpilot__icon" />
          <MdOutlineStar className="trustpilot__icon" />
          <MdOutlineStar className="trustpilot__icon" />
          <MdOutlineStar className="trustpilot__icon" />
          <MdOutlineStar className="trustpilot__icon" />
        </div>
        <p>Trustpilot Reviews</p>
      </div>
    </section>
  );
};
