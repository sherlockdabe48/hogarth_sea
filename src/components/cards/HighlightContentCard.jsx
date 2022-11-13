import React from "react";
import "../../styles/cards/HighlightContentCard.scss";

export const HighlightContentCard = ({ isMobile }) => {
  return (
    <div className="highlightContentCard grid_1c">
      <div className="hi_img_wrapper">
        <div className="hi_img_1"></div>
        <div className={`hi_desc_wrapper ${!isMobile ? "grid_2c" : ""}`}>
          <div className="hi_img_2"></div>
          <div className={`hi_content_wrapper ${isMobile ? "m_t_20" : ""}`}>
            <h3 className="title text_36pt m_b_20">Get creative</h3>
            <p className="normal_text text_20pt">
              There's no limit to how creative your project homeworks can be.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
