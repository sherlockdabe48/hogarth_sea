import React from "react";
import "../../styles/components/cards/HighlightContentCard.scss";

export const HighlightContentCard = ({ isMobile }) => {
  return (
    <div className="highlightContentCard grid_1c">
      <div className="hi_img_wrapper">
        <div className="hi_img_1"></div>
        <div className={`hi_desc_wrapper ${!isMobile ? "grid_2c" : ""}`}>
          <div className="hi_img_2"></div>
          <div className={`hi_content_wrapper ${isMobile ? "m_t_20" : ""}`}>
            <h3 className="title text_36pt m_b_20">
              ดึงความสร้างสรรค์ในตัวคุณ
            </h3>
            <p className="normal_text text_20pt">
              ความสามารถในการสร้างสรรค์โครงการของคุณที่ไร้ขีดจำกัด
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
