import React from "react";
import "../styles/components/AllStories.scss";
import { MainContentCard } from "./cards/MainContentCard";

export const AllStories = ({ isMobile }) => {
  const stories = [
    {
      name: "สิ่งที่ดีที่สุดที่เกิดขึ้น",
      describe:
        "จะเห็นว่ามันง่ายแค่ไหนในการสร้างบทเรียน ให้คะแนนการบ้าน และการเชื่อมต่อ",
      layout: "grid_image_top",
    },
    {
      name: "เติบโตไปพร้อมกับประสบการณ์ที่ลึกซึ้ง",
      describe:
        "ให้ตัวคุณเองอยู่ในขอบเขตและเตรียมพร้อมสำหรับการเรียนรู้ของคุณ เมื่อคุณสร้างหรือแก้ไขงานที่ได้รับมอบหมายหรือตอบการอภิปราย พวกเขาจะทราบได้ทันที",
      layout: "grid_image_bottom",
    },
  ];
  return (
    <div className="all_stories">
      <h2 className="title text_45pt m_b_16">เรื่องราวทั้งหมดในประเทศไทย</h2>
      <hr className="hr"></hr>

      <div
        className={`all_stories_card_wrapper ${
          !isMobile ? "grid_2c_gab_3rem" : ""
        }`}
      >
        {stories.map((story) => {
          return (
            <MainContentCard
              key={story.name}
              layout={story.layout}
              topic={story.name}
              desc={story.describe}
            />
          );
        })}
      </div>
    </div>
  );
};
