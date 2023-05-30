import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footerHero-container">
      <div className="footerlogo-container">
        <p className="logo-h1">PLATEFUL</p>
        <p className="logo-p">Discover your culinary kingdom</p>
      </div>

      <div className="footer-msg">
        <p>
          Thank you for exploring your culinary kingdom with Plateful - where
          cooking experts, novices, and all who enjoy sharing their recipes come
          together to discover, create, and inspire.
        </p>
      </div>
        <p className="copyright">© 2023 Plateful. All rights reserved.</p>
    </div>
  );
};

export default Footer;
