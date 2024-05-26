import "./MobileCompanyInfo.css";
import { MdOutlineStar } from "react-icons/md";
export const MobileCompanyInfo = () => {
  return (
    <div className="columns-container__mobile">
      <div className="column__chicks-gold__mobile">
        <details>
          <summary>Chicks Gold</summary>
          <a href="#">Games</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Sitemap</a>
        </details>
      </div>

      <div className="column__support__mobile">
        <details>
          <summary>Support</summary>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
        </details>
      </div>

      <div className="column__legal__mobile">
        <details>
          <summary>Legal</summary>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Copyright Policy</a>
        </details>
      </div>
      <div className="column__trustpilot__mobile">
        <div>
          <MdOutlineStar className="trustpilot__icon__mobile" />
          <MdOutlineStar className="trustpilot__icon__mobile" />
          <MdOutlineStar className="trustpilot__icon__mobile" />
          <MdOutlineStar className="trustpilot__icon__mobile" />
          <MdOutlineStar className="trustpilot__icon__mobile" />
        </div>
        <p>Trustpilot Reviews</p>
      </div>
    </div>
  );
};
