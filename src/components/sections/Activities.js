import React, { useState } from "react";
import "./Activities.css";

const ActivitiesSection = () => {
  const [activeTab, setActiveTab] = useState("Competitions");
  const [modalImage, setModalImage] = useState(null);

  const activities = {
    Competitions: [
      {
        title: "Inhinyera's Next Top E-Model: Wave 3",
        org: "T.I.P. Manila • Inhinyera Youth Organization • October 2022",
        desc: "I represented the department as a first-year student. I created my own advocacy video and confidently participated in the question-and-answer portion, earning a title.",
        image: "/activitiesphotos/compe1.png",
        highlights: ["CpE Representative","2nd Placer"]
      },
      {
        title: "61st Founding Anniversary: Festival Dance Competition",
        org: "T.I.P. Manila • Supreme Student Council (SSC) • February 2023",
        desc: "I joined the Computer Engineering × Chemical Engineering team in a bangus festival-inspired dance performance, competing against other joint departments.",
        image: "/activitiesphotos/compe2.png",
        highlights: ["CpE Representative","4th Placer"]
      },
      {
        title: "Nights of Lights and Carols: Jingle Jam Dance-Off",
        org: "T.I.P. Manila • Supreme Student Council (SSC) • December 2023",
        desc: "I represented the Computer Engineering Department as part of the CpElves team. We told a Christmas love story through dance, competing against other departments.",
        image: "/activitiesphotos/compe3.png",
        highlights: ["Cpe Representative","3rd Placer"]
      },
      {
        title: "Inhinyera's SABEL: Traditional Poster Making",
        org: "T.I.P. Manila • Inhinyera Youth Organization • March 2024",
        desc: "I represented the Computer Engineering Department, together with my teammates, we created a hand-drawn poster that reflected women empowerment in engineering.",
        image: "/activitiesphotos/compe4.png",
        highlights: ["CpE Representative","Champion"]
      },
      {
        title: "CEA Days: Mr. and Ms. CEA",
        org: "T.I.P. Manila • College of Engineering and Architecture (CEA) • April 2024",
        desc: "Although the main event was cancelled, I took part in rehearsals, photoshoots, and promotions, proudly representing the Computer Engineering Department and supporting unity within the college.",
        image: "/activitiesphotos/compe5.png",
        highlights: ["CpE Representative"]
      },
      {
        title: "Student Life Fair: RSO Competitions",
        org: "T.I.P. Manila • League of Recognized Student Organizations (LORSO) • October 2024",
        desc: "As the newly appointed Computer Engineering Student Society (CoESS) secretary, I contributed to the creative process of booth design, bulletin board design, movie poster, and advocacy video making.",
        image: "/activitiesphotos/compe6.png",
        highlights: ["CoESS Representative"]
      },
      {
        title: "IP Circle League Festival of Stories: The Story",
        org: "Intellectual Property Office of the Philippines (IPOPHL) • October 2024",
        desc: "I joined the short film-making segment as scriptwriter and production designer. I helped create a film that highlighted the role of intellectual property in addressing social issues through film.",
        image: "/activitiesphotos/compe7.png",
        highlights: ["T.I.P. Manila Representative"]
      },
      {
        title: "ICpEP CpE Challenge: Quiz Bowl",
        org: "Institute of Computer Engineers of the Philippines (ICpEP) • December 2024",
        desc: "I competed in the national Quiz Bowl alongside two teammates. We showcased our knowledge in core CpE subjects while connecting with fellow engineering students across the country.",
        image: "/activitiesphotos/compe8.png",
        highlights: ["T.I.P. Manila Representative"]
      },
      {
        title: "Inhinyera KARERA: LeadHerAwards",
        org: "T.I.P. Manila • Inhinyera Youth Organization • March 2025",
        desc: "I was recognized as a recipient of an award which honored my excellence and leadership as one of the most outstanding female leaders in STEM.",
        image: "/activitiesphotos/compe9.png",
        highlights: ["T.I.P. Manila Representative"]
      },
      {
        title: "8th MRSP National Skills Competition: AI in Robotics",
        org: "Mechatronics and Robotics Society of the Philippines (MRSP) • June 2025",
        desc: "I and my teammates competed against schools from across the country in building an AI-powered robot that scanned QR codes in sequence to solve a maze, earning a title for our institution.",
        image: "/activitiesphotos/compe10.png",
        highlights: ["T.I.P. Manila Representative","2nd Placer"]
      }
    ],
    Events: [
      {
        title: "Computer Hardware and Software Troubleshooting Workshop",
        org: "Computer Engineering Department Student Council • May 2023",
        desc: "Insert",
        image: "/activitiesphotos/compe3.png",
        highlights: ["Participant", "3rd Placer"]
      }
    ],
    Projects: [],
  };

  return (
    <section id="activities" className="activities-section">
      <h2 className="activities-title">Activities</h2>

      <div className="skills-tab">
        {["Competitions", "Events", "Projects"].map((tab) => (
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