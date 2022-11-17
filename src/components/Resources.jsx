import React from "react";
import "../styles/components/Resources.scss";
import slide_icon from "../../src/resources/icons/slide_icon.png";
import note_icon from "../../src/resources/icons/note_icon.png";
import wps_icon from "../../src/resources/icons/wps_icon.png";
// import lekh_icon from "../../src/resources/icons/lekh_icon.png";

export const Resources = () => {
  const resources = [
    {
      name: "สไลด์",
      icon: slide_icon,
      desc: "เปลี่ยนอุปกรณ์ของคุณให้เป็นเม้าส์ที่รวดเร็วและน้ำหนักเบาสำหรับเดสก์ทอปของคุณ",
    },
    // Remove this item for SG and TH
    // {
    //   name: "Lekh Diagram",
    //   icon: lekh_icon,
    //   desc: "Express your ideas simply by sketching with your finger.",
    // },
    {
      name: "สำนักงาน WPS",
      icon: wps_icon,
      desc: "ทั้งหมดรวมในหนึ่งเดียว ฟรีชุดแอพออฟฟิศมุ่งเน้นไปที่การช่วยให้คุณสร้างแสดงภาพและทำการแก้ไขได้ตลอดเวลา",
    },
    {
      name: "ColorNote Notepad",
      icon: note_icon,
      desc: "ความเรียบง่ายและความเจ๋งของแอพ notepad ที่จะให้คุณได้สัมผัสประสบการณ์การแก้ไขที่รวดเร็วและง่ายดาย",
    },
  ];
  return (
    <div className="resources">
      <h2 className="title m_b_16">ทรัพยากร</h2>
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
