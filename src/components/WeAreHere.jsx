import React from "react";
import "../styles/WeAreHere.scss";
import { ReactComponent as BookIcon } from "../../src/resources/icons/book_icon.svg";
import { ReactComponent as GearIcon } from "../../src/resources/icons/gear_icon.svg";

export const WeAreHere = ({ isMobile }) => {
  const helpList = [
    {
      name: "Special Education",
      icon: <BookIcon className="w_r_icon m_b_20" />,
      desc: "Possibility is built starts from here.",
    },
    {
      name: "Information Technology",
      icon: <GearIcon className="w_r_icon m_b_20" />,
      desc: "Manage devices and content for your students",
    },
  ];
  return (
    <div className="we_are_here bg_grey">
      <div className="we_are_here_content">
        <h2 className="title text_45pt m_b_44">We are here to help.</h2>
        <div className="we_are_here_sub_content">
          <div
            className={`${
              !isMobile ? "grid_2c_gab_3rem" : "flex_column_gab_normal"
            }`}
          >
            {helpList.map((item) => {
              return (
                <div className="w_r_item" key={item.name}>
                  {item.icon}
                  <h3 className="title text_30pt m_b_12">{item.name}</h3>
                  <p className="normal_text text_16pt text_center m_b_8">
                    {item.desc}
                  </p>
                  <a href="/" className="blue_link text_16pt">
                    Learn more
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
