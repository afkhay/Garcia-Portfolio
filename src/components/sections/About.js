import React, { useState } from "react";
import "./About.css";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("Technical");
  const [interestIndex, setInterestIndex] = useState(0);

  const skillsContent = {
    Technical: (
      <div>
        <p><p1>Language</p1><br /> C++ • Python • JavaScript • Assembly</p>
        <p><p1>Git</p1><br /> Git • GitHub</p>
        <p><p1>Web</p1><br /> Canva • Figma • Wix</p>
        <p><p1>Adobe</p1><br /> Premiere Pro • Illustrator • Photoshop</p>
        <p><p1>Microsoft</p1><br /> Word • PowerPoint • Excel</p>
        <p><p1>Google</p1><br /> Docs • Forms • Sheets • Slides • Sites</p>
      </div>
    ),
    Visual: (
      <div>
        <p><p1>Illustrating</p1><br /> creates traditional and digital art</p>
        <p><p1>Filming</p1><br /> captures photo and video content</p>
        <p><p1>Editing</p1><br /> enhances and refines visual content</p>
        <p><p1>Designing</p1><br /> designs visually appealing templates</p>
        <p><p1>Branding</p1><br /> develops cohesive identity kits</p>
        <p><p1>Marketing</p1><br /> creates graphics for social media ads</p>
      </div>
    )
  };

  const interestsData = [
    {
      title: "Listening to Music",
      link: "https://open.spotify.com/track/3r73OmpBtQAwMgawxOmlg0",
      buttonText: "Listen to my favorite song."
    },
    {
      title: "Playing Online Games",
      link: "https://playvalorant.com/en-gb/",
      buttonText: "Play my favorite video game."
    },
    {
      title: "Exploring Fashion Styles",
      link: "https://www.pinterest.com/search/pins/?q=classy%20streetwear%20fashion&rs=typed",
      buttonText: "Explore my current style."
    },
    {
      title: "Journaling Daily Life",
      link: "https://www.betterup.com/blog/how-to-start-journaling",
      buttonText: "Journal the same way I do."
    }
  ];

  return (
    <section id="about" className="about-section">

      <div className="about-wrapper">
        <div className="about-text">
          <p>
            With a strong mindset of constant growth and a commitment to seizing every opportunity, I've shaped myself into the woman I am today, both within the multifaceted field of Computer Engineering and beyond it. My journey has involved not only technical development but also leadership roles and active participation in a wide range of pursuits.
            <br /><br />
            This website serves as my personal portfolio, showcasing all the skills and experiences I've gained as of July 2025. I invite you to get to know what makes me, Khayzel Garcia.
          </p>

          <div className="skills-wrapper">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-tab">
              {["Technical", "Visual"].map((tab) => (
                <button
                  key={tab}
                  className={`skills-tab-button ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="skills-box">
              <div className="fade-in-box" key={activeTab}>
                {skillsContent[activeTab]}
              </div>
            </div>
          </div>
          
          <div className="interests-wrapper">
            <h2 className="skills-title">Interests</h2>
            <div className="interests-box">
              <div className="fade-in-box" key={interestIndex}>
                <div className="interest-header">
                  <button
                    className="arrow-button"
                    onClick={() =>
                      setInterestIndex((interestIndex - 1 + interestsData.length) % interestsData.length)
                    }
                  >
                    &#8249;
                  </button>
                  <strong className="interest-title">
                    {interestsData[interestIndex].title}
                  </strong>
                  <button
                    className="arrow-button"
                    onClick={() =>
                      setInterestIndex((interestIndex + 1) % interestsData.length)
                    }
                  >
                    &#8250;
                  </button>
                </div>

                <a
                  className="interest-link-button"
                  href={interestsData[interestIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {interestsData[interestIndex].buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="photo-collage">
          <div className="photo-card card1">
            <img src="/aboutphotos/photo1.png" alt="Khay 1" />
          </div>
          <div className="photo-card card2">
            <img src="/aboutphotos/photo2.png" alt="Khay 2" />
          </div>
          <div className="photo-card card3">
            <img src="/aboutphotos/photo3.png" alt="Khay 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;