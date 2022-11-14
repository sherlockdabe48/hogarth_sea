import React from "react";
import "../styles/components/TopHero.scss";

const TopHero = () => {
  return (
    <div className="top_hero">
      <div className="top_hero_content">
        <h1 className="title m_b_40 text_nowrap">The sky is the limit.</h1>
        <p className="description normal_text text_22pt">
          Some resources claim that 'the sky's the limit' was coined by
          Cervantes in Don Quizote. This appears to add to the list of popular
          fallacies about coinages attributed to Cervantes; for example, 'don’t
          put all your eggs in one basket'.
        </p>
      </div>
    </div>
  );
};

export default TopHero;
