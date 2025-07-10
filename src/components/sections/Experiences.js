import React, { useState } from "react";
import "./Experiences.css";

const ExperiencesSection = () => {
  const [activeTab, setActiveTab] = useState("School");

  const experiences = {

    School: [
      {
        role: "Auditor",
        org: "Kalipunan ng Bagong Liga ng Kabataan • 2021 - 2022",
        desc: "Reviewed and verified financial statements for online events. Contributed to the organization by drafting event proposals that reflected the interests and needs of fellow members.",
      },
      {
        role: "Mentee",
        org: "Computer Engineering Department Student Council • 2022 - 2023",
        desc: "Underwent mentorship to become a secretary by taking on real organizational tasks such as writing meeting minutes, documentations, and drafting captions for social media posts.",
      },
      {
        role: "Member",
        org: "Inhinyera Youth Organization • 2022 - PRESENT",
        desc: "Actively involved in competitions and initiatives that promote women empowerment and inclusivity within engineering. Supported programs aligned with the organization’s advocacy.",
      },
      {
        role: "Secretary",
        org: "Computer Engineering Student Society • 2024 - PRESENT",
        desc: "Responsible for preparing official documents, managing extended communications, and ensuring smooth coordination for events that support the computer engineering student body.",
      },
    ],
    Work: [
      {
        role: "Business Owner",
        org: "Luv Blu • 2022 - 2023",
        desc: "Founded a small stationery brand where I designed, produced, and sold items such as notepads and planners on Shopee. Managed operations including marketing, and customer engagement.",
      },
      {
        role: "Virtual Assistant",
        org: "GT Business Group • 2023 - 2024",
        desc: "Prepared detailed financial and sales reports for various businesses. Also edited TikTok content, both informative and entertaining, for creators affiliated with the agency.",
      },
      {
        role: "Social Media Manager",
        org: "Mango Project PH • 2023 - 2024",
        desc: "Handled content planning, graphic design, and post scheduling for Facebook and Instagram. Maintained brand consistency while improving audience engagement through strategic visuals.",
      },
      {
        role: "Freelance Editor",
        org: "2022 - PRESENT",
        desc: "Offer freelance photo and video editing services as well as graphic design work for personal referrals and online clients. Projects range from casual content to commissioned designs.",
      },
    ],
  };

  return (
    <section id="experiences" className="experiences-section">
      <h2 className="experiences-title">Experiences</h2>

      <div className="skills-tab">
        <button
        className={`skills-tab-button ${activeTab === "School" ? "active" : ""}`}
        onClick={() => setActiveTab("School")}
        >
          School
          </button>
        <button
        className={`skills-tab-button ${activeTab === "Work" ? "active" : ""}`}
        onClick={() => setActiveTab("Work")}
        >
          Work
          </button>
        </div>
      <div
      className="experience-list"
      key={activeTab}
      >
        {experiences[activeTab].map((item, index) => (
          <div className="experience-item" key={index}>
            <h1 className="experience-role">{item.role}</h1>
            <p className="experience-org">{item.org}</p>
            <p className="experience-desc">{item.desc}</p>
            </div>
          ))}
          </div>
    </section>
  );
};

export default ExperiencesSection;