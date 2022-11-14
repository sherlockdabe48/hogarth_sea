import React from "react";
import "../styles/components/Resources.scss";
import slide_icon from "../../src/resources/icons/slide_icon.png";
import note_icon from "../../src/resources/icons/note_icon.png";
import wps_icon from "../../src/resources/icons/wps_icon.png";
import lekh_icon from "../../src/resources/icons/lekh_icon.png";

export const Resources = ({ isMobile }) => {
  const resources = [
    {
      name: "Slide",
      icon: slide_icon,
      desc: "Transform your device into a fast and lightweight mouse for your desktop.",
    },
    // Remove this item for SG and TH
    // {
    //   name: "Lekh Diagram",
    //   icon: lekh_icon,
    //   desc: "Express your ideas simply by sketching with your finger.",
    // },
    {
      name: "WPS Office",
      icon: wps_icon,
      desc: "All-in-one free office suite app focusing on helping you to create, view and edit anytime.",
    },
    {
      name: "ColorNote Notepad",
      icon: note_icon,
      desc: "A simple and awesome notepad app to give you a quick simple editing experience.",
    },
  ];
  return (
    <div className="resources">
      <h2 className="title m_b_16">Resources</h2>
      <hr className="hr"></hr>
      <div className="resources_grid">
        {resources.map((resource) => {
          return (
            <div className="card resource_card" key={resource.name}>
              <div className="resource_content_wrapper">
                <img
                  className="resource_icon m_b_24"
                  src={resource.icon}
                  alt=""
                />
                <h3 className="title m_b_16">{resource.name}</h3>
                <p className="normal_text text_18pt">{resource.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
