import React, { useState } from "react";
import "./Activities.css";

const ActivitiesSection = () => {
  const [activeTab, setActiveTab] = useState("Competitions");
  const [modalImage, setModalImage] = useState(null);

  const activities = {
    Competitions: [
      {
        title: "Title",
        org: "Org • Date",
        desc: "Description",
        image: "/activitiesphotos/image.png",
        highlights: ["1", "2", "3"]
      },
      {
        title: "Title",
        org: "Org • Date",
        desc: "Description",
        image: "/activitiesphotos/image.png",
        highlights: ["1", "2", "3"]
      }
    ],
    Events: [],
    Charities: [],
    Projects: [],
  };

  return (
    <section id="activities" className="activities-section">
      <h2 className="activities-title">Activities</h2>

      <div className="skills-tab">
        {["Competitions", "Events", "Charities", "Projects"].map((tab) => (
          <button
            key={tab}
            className={`skills-tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="activity-list" key={activeTab}>
        {activities[activeTab].map((activity, index) => (
          <div
            className="activity-card"
            key={index}
            onClick={() => setModalImage(activity.image)}
          >
            <div className="activity-image">
              <img src={activity.image} alt={activity.title} />
            </div>
            <div className="activity-content">
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-org">{activity.org}</p>
              <p className="activity-desc">{activity.desc}</p>
              <div className="activity-tags">
                {activity.highlights.map((tag, i) => (
                  <span className="activity-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <div className="modal-content">
            <img src={modalImage} alt="Full view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default ActivitiesSection;