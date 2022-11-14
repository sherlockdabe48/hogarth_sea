import React from "react";
import "../styles/components/AllStories.scss";
import { MainContentCard } from "./cards/MainContentCard";

export const AllStories = ({ isMobile }) => {
  const stories = [
    {
      name: "The best to happen.",
      describe:
        "See how simple it is to conduct lessons, mark assignments and stay connected.",
      type: "grid_image_top",
    },
    {
      name: "Grow into an immersive experience.",
      describe:
        "Keep yourself in the loop and prepare for your class. When you create or update an assignment or reply to a discussion, they'll know right away.",
      type: "grid_image_bottom",
    },
  ];
  return (
    <div className="all_stories">
      <h2 className="title text_45pt m_b_16">All the stories in the world</h2>
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
              type={story.type}
              topic={story.name}
              desc={story.describe}
            />
          );
        })}
      </div>
    </div>
  );
};
