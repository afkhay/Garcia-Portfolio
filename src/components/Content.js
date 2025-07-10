import React from "react";
import AboutSection from "./sections/About";
import ExperiencesSection from "./sections/Experiences";
import ActivitiesSection from "./sections/Activities";

const Content = () => {
  return (
    <main className="content">
      <AboutSection />
      <ExperiencesSection />
      <ActivitiesSection />
    </main>
  );
};

export default Content;