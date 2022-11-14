import React from "react";
import "../../styles/components/cards/MainContentCard.scss";

export const MainContentCard = ({ topic, desc, type = "grid_image_top" }) => {
  const layout = () => {
    if (type === "grid_image_top") {
      return (
        <div className={`card mainContentCard ${type}`}>
          <div className="mainContentImage_top"></div>
          <div className="main_content_text_wrapper">
            <h3 className="title text_36pt m_b_12">{topic}</h3>
            <p className="normal_text text_18pt">{desc}</p>
          </div>
        </div>
      );
    } else if (type === "grid_image_bottom") {
      return (
        <div className={`card mainContentCard ${type}`}>
          <div className="main_content_text_wrapper">
            <h3 className="title text_36pt m_b_12">{topic}</h3>
            <p className="normal_text text_18pt">{desc}</p>
          </div>
          <div className="mainContentImage_bottom"></div>
        </div>
      );
    }
  };
  return layout();
};
