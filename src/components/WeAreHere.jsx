import React from "react";
import "../styles/components/WeAreHere.scss";
import { ReactComponent as BookIcon } from "../../src/resources/icons/book_icon.svg";
import { ReactComponent as GearIcon } from "../../src/resources/icons/gear_icon.svg";

export const WeAreHere = ({ isMobile }) => {
  const helpList = [
    {
      name: "การศึกษาพิเศษ",
      icon: <BookIcon className="w_r_icon m_b_20" />,
      desc: "ความเป็นไปได้ถูกสร้างขึ้นจะเริ่มต้นจากที่นี่กับคุณ",
    },
    {
      name: "เทคโนโลยีสารสนเทศ",
      icon: <GearIcon className="w_r_icon m_b_20" />,
      desc: "จัดการอุปกรณ์และเนื้อหาสำหรับนักเรียนของคุณ ดูข้อมูลเพิ่มเติม",
    },
  ];
  return (
    <div className="we_are_here bg_grey">
      <div className="we_are_here_content">
        <h2 className="title text_45pt m_b_44">
          เราอยู่ที่นี่เพื่อช่วยเหลือคุณ
        </h2>
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
                    ดูเพิ่มเติม
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
