import React, { useEffect, useState } from "react";
import { AllStories } from "../components/AllStories";
import BottomHero from "../components/BottomHero";
import { HighlightContentCard } from "../components/cards/HighlightContentCard";
import { Resources } from "../components/Resources";
import { StudentTeacher } from "../components/StudentTeacher";
import TopHero from "../components/TopHero";
import { WeAreHere } from "../components/WeAreHere";

const Overview = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  // From the design, the layout should be changed when the screen size is below 1024px
  // refer to the size of the iPad Air.
  const isMobile = width <= 1024;
  return (
    <>
      <TopHero />
      <div className="pageWrapper bg_grey">
        <HighlightContentCard isMobile={isMobile} />
        <AllStories isMobile={isMobile} />
      </div>
      <StudentTeacher isMobile={isMobile} />
      <div className="pageWrapper bg_grey">
        <Resources />
      </div>
      <BottomHero />
      <WeAreHere isMobile={isMobile} />
    </>
  );
};

export default Overview;
