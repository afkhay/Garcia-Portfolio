import React, { useState } from "react";
import "./Activities.css";

const ActivitiesSection = () => {
  const [activeTab, setActiveTab] = useState("Competitions");
  const [modalImage, setModalImage] = useState(null);

  const activities = {
    Competitions: [
      {
        title: "Inhinyera's Next Top E-Model: Wave 3",
        org: "Inhinyera Youth Organization • October 2022",
        desc: "I represented the department as a first-year student. I created my own advocacy video and confidently participated in the question-and-answer portion, earning a title.",
        image: "/activitiesphotos/compe1.png",
        highlights: ["School","Program Representative","2nd Placer"]
      },
      {
        title: "61st Founding Anniversary: Festival Dance Competition",
        org: "Supreme Student Council (SSC) • February 2023",
        desc: "I joined the Computer Engineering (CpE) × Chemical Engineering (ChE) dance team in a bangus festival-inspired cultural performance, competing against other joint departments.",
        image: "/activitiesphotos/compe2.png",
        highlights: ["School","Program Representative","4th Placer"]
      },
      {
        title: "Nights of Lights and Carols: Jingle Jam Dance-Off",
        org: "Supreme Student Council (SSC) • December 2023",
        desc: "I was part of the CpElves team where we told a compelling Christmas love story through a festive and heartfelt dance performance, competing against other departments.",
        image: "/activitiesphotos/compe3.png",
        highlights: ["School","Program Representative","3rd Placer"]
      },
      {
        title: "Inhinyera's SABEL: Traditional Poster Making",
        org: "Inhinyera Youth Organization • March 2024",
        desc: "I, together with my teammates, created a hand-drawn poster that reflected women empowerment in the field of engineering, in celebration of International Women's Month.",
        image: "/activitiesphotos/compe4.png",
        highlights: ["School","Program Representative","Champion"]
      },
      {
        title: "CEA Days: Mr. and Ms. CEA",
        org: "College of Engineering and Architecture (CEA) • April 2024",
        desc: "I was chosen as the female candidate and took part in rehearsals, photoshoots, and promotions, proudly representing my program and supporting unity within the college.",
        image: "/activitiesphotos/compe5.png",
        highlights: ["School","Program Representative"]
      },
      {
        title: "Student Life Fair: RSO Competitions",
        org: "League of Recognized Student Organizations (LORSO) • October 2024",
        desc: "I contributed to the creative process of booth design, bulletin board design, movie poster, and advocacy video making, as the newly appointed Computer Engineering Student Society (CoESS) secretary.",
        image: "/activitiesphotos/compe6.png",
        highlights: ["School","Organization Representative"]
      },
      {
        title: "IP Circle League Festival of Stories: The Story",
        org: "Intellectual Property Office of the Philippines (IPOPHL) • October 2024",
        desc: "I joined the short film-making segment as scriptwriter and production designer. I helped create a film that highlighted the role of intellectual property in addressing social issues through film.",
        image: "/activitiesphotos/compe7.png",
        highlights: ["National","School Representative"]
      },
      {
        title: "ICpEP CpE Challenge: Quiz Bowl",
        org: "Institute of Computer Engineers of the Philippines (ICpEP) • December 2024",
        desc: "I competed in the national Quiz Bowl alongside two teammates. We showcased our knowledge in core CpE subjects while connecting with fellow engineering students across the country.",
        image: "/activitiesphotos/compe8.png",
        highlights: ["National","School Representative"]
      },
      {
        title: "Inhinyera KARERA: LeadHerAwards",
        org: "Inhinyera Youth Organization • March 2025",
        desc: "I was recognized as a recipient of an award which honored my excellence and leadership as one of the most outstanding female leaders in STEM.",
        image: "/activitiesphotos/compe9.png",
        highlights: ["School","Program Representative"]
      },
      {
        title: "8th MRSP National Skills Competition: AI in Robotics",
        org: "Mechatronics and Robotics Society of the Philippines (MRSP) • June 2025",
        desc: "I and my teammates competed against schools from across the country in building an AI-powered robot that scanned QR codes in sequence to solve a maze, earning a title for our institution.",
        image: "/activitiesphotos/compe10.png",
        highlights: ["National","School Representative","2nd Placer"]
      }
    ],

    Events: [
      {
        title: "PACUCOA Accreditation",
        org: "Computer Engineering Department • December 2022",
        desc: "I was selected, alongside other esteemed students, where we answered questions to help evaluate T.I.P.'s integrity and excellence in delivering quality programs and services.",
        image: "/eventsphotos/event16.png",
        highlights: ["School","Participant"]
      },
      {
        title: "CEA Days: Mr. and Ms. CEA",
        org: "College of Engineering and Architecture (CEA) • January 2023",
        desc: "I participated for our department’s male representative. I helped prepare his overall look during and in-between competition sets to ensure he was stage-ready for the event.",
        image: "/eventsphotos/event2.png",
        highlights: ["School","Participant", "Makeup Artist"]
      },
      {
        title: "Computer Hardware and Software Troubleshooting Workshop",
        org: "CpE Department Student Council (CpE-DSC) • May 2023",
        desc: "I helped facilitate a hands-on workshop for fellow first-year students, guiding them through disassembly, reassembly, and basic troubleshooting of PCs. I provided real-time support to ensure effective understanding.",
        image: "/eventsphotos/event1.png",
        highlights: ["School","Organizer","Organization Mentee"]
      },
      {
        title: "Finally Clean: Empowering Children for Enhanced W.A.S.H. Education",
        org: "G17 Philippines • March 2024",
        desc: "I volunteered to assist in delivering hygiene and sanitation education to children in Bagumbong, North Caloocan through interactive sessions and hands-on activities, supporting the SDG6 Ambassador’s outreach.",
        image: "/eventsphotos/event3.png",
        highlights: ["National","Volunteer"]
      },
      {
        title: "CoESS Cybersecurity Awareness Seminar",
        org: "Computer Engineering Student Society (CoESS) • October 2024",
        desc: "I led the technical preparations and coordinated with guest speakers for a cybersecurity seminar aimed at promoting digital safety. I helped ensure the event’s success by managing logistics and supporting engaging discussions.",
        image: "/eventsphotos/event4.png",
        highlights: ["School","Organizer","Organization Secretary"]
      },
      {
        title: "CoESS Sports Fest",
        org: "Computer Engineering Student Society (CoESS) • October 2024",
        desc: "I oversaw the flow of a two-day SportsFest, handling game result validation and announcing winners during the awarding. The event fostered CpE students' camaraderie while promoting a healthy academic-life balance.",
        image: "/eventsphotos/event5.png",
        highlights: ["School","Organizer","Organization Secretary"]
      },
      {
        title: "Dok Almiron Medical Mission: Free Evaluation Program",
        org: "Dok Francis Almiron, Brgy. 521, Brgy. 522, and Brgy. 523 • September 2024",
        desc: "I assisted physical therapy doctors, helping manage patient flow and support basic tasks. I also encouraged fellow students to participate and gain firsthand experience in community service and collaboration.",
        image: "/eventsphotos/event6.png",
        highlights: ["Local", "Volunteer"]
      },
      {
        title: "CoESS Elective Seminar",
        org: "Computer Engineering Student Society (CoESS) • November 2024",
        desc: "I helped organize a seminar that introduced second-year students to the four major CpE elective track. I managed event flow, handled documentation, and supported preparations to ensure a smooth and informative experience.",
        image: "/eventsphotos/event7.png",
        highlights: ["School","Organizer", "Organization Secretary"]
      },
      {
        title: "PTC-ACBET Accreditation",
        org: "Computer Engineering Department • March 2025",
        desc: "I was selected, alongside other esteemed students, where we answered questions to help evaluate T.I.P.'s integrity and excellence in delivering quality programs and services.",
        image: "/eventsphotos/event17.png",
        highlights: ["School","Participant"]
      },
      {
        title: "CoESS x CpE General Assembly: Tech Glam",
        org: "Computer Engineering Department • April 2025",
        desc: "I helped unify CpE students through updates, activities, and recognition segments. I managed key parts of the program, including competitions, while handling paperwork and live documentation.",
        image: "/eventsphotos/event8.png",
        highlights: ["School","Organizer","Organization Secretary"]
      },
      {
        title: "Globe Digital Thumbprint Program: Onboarding Seminar",
        org: "Office of Student Affairs (OSA) • May 2025",
        desc: "I attended as a selected future ambassador, representing T.I.P. in partnership with Globe Telecom. The seminar introduced my role in promoting digital responsibility through workshops, advocacy, and mentorship opportunities.",
        image: "/eventsphotos/event9.png",
        highlights: ["School","Participant","Program Ambassador"]
      },
      {
        title: "GAWAD T.I.P.",
        org: "Office of Student Affairs (OSA) • May 2025",
        desc: "I attended to receive a Service Award for Campus Stewardship, recognizing my contributions to student leadership and campus involvement. It was a memorable event that celebrated excellence and inspired continued service.",
        image: "/eventsphotos/event10.png",
        highlights: ["School","Awardee"]
      },
      {
        title: "Brigada Eskwela: Sama-sama Para sa Bayang Bumabasa",
        org: "Community Engagement Services Office (CESO) • June 2025",
        desc: "I volunteered to clean and troubleshoot PCs at V. Mapa High School as part of a community outreach effort. Beyond fulfilling course requirements, I contributed meaningfully to a school in need of technical support.",
        image: "/eventsphotos/event11.png",
        highlights: ["Local","Volunteer"]
      },
      {
        title: "Transforming Future: Computer Vision Generative AI in CpE",
        org: "Computer Engineering Department • June 2025",
        desc: "I attended to deepen my understanding of AI concepts and practical applications of prompt engineering. It strengthened my confidence in using these tools for future projects.",
        image: "/eventsphotos/event12.png",
        highlights: ["School","Participant"]
      },
      {
        title: "Globe Student Fest: Go For It",
        org: "Globe • June 2025",
        desc: "I joined the event to learn from student-focused talks and inspiring speakers. Being in social connection with Globe, I also helped promote the event and encourage fellow students to participate.",
        image: "/eventsphotos/event15.png",
        highlights: ["National","Participant", "Program Ambassador"]
      },
      {
        title: "Into the Cloud: The Future of Computing",
        org: "Computer Engineering Department • June 2025",
        desc: "I attended to broaden my understanding of cloud computing and its real-world applications and future potential. It left me inspired and motivated to explore a professional path in cloud technology.",
        image: "/eventsphotos/event13.png",
        highlights: ["School","Participant"]
      },
      {
        title: "CodeBuild Pocket Edition: Discover the Building Blocks of MobileDev",
        org: "Computer Engineering Department • July 2025",
        desc: "I led the organization of a seminar that introduced fellow Computer Engineering students to mobile development. The event combined learning with activities to make the experience both informative and enjoyable.",
        image: "/eventsphotos/event14.png",
        highlights: ["School","Organizer"]
      }
    ],
  };

  return (
    <section id="activities" className="activities-section">
      <h2 className="activities-title">Activities</h2>

      <div className="skills-tab">
        {["Competitions", "Events"].map((tab) => (
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
      <div className="activity-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}
      onClick={() => setModalImage(activity.image)}
      >
        <div className="activity-image">
          <img src={activity.image} alt="" />
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