import React from "react";
import "../styles/Footer.scss";

export const Footer = () => {
  return (
    <div className="footer bg_white">
      <div className="footer_content">
        <p className="text_12pt text_gray">
          Disclaimer: The example images and copies depicted in the sample are
          fictitious. Any resemblance to actual companies, persons or other
          real-life entities is purely coincidental and no association with any
          real entity is intended or should be inferred.
        </p>
      </div>
    </div>
  );
};

export default Footer;
