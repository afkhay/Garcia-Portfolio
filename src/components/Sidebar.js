import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const tabs = [
    { id: "about", label: "ABOUT" },
    { id: "experiences", label: "EXPERIENCES" },
    { id: "activities", label: "ACTIVITIES" },
  ];

  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter(entry => entry.isIntersecting);
      if (visible.length > 0) {
        const sorted = visible.sort((a, b) =>
          sectionIds.indexOf(a.target.id) - sectionIds.indexOf(b.target.id)
      );
      setActiveTab(sorted[0].target.id);
    }
  }
  );

  const sectionIds = ["about", "experiences", "activities"];
  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <div className="intro">
        <h1>Khayzel Garcia</h1>
        <h2>2025 Portfolio</h2>
        <p>
          I am a Computer Engineering student passionate about pursuing meaningful paths and experiences both within and beyond the field, all while advocating for greater diversity in the tech industry.
        </p>

        <nav>
          <ul className="tab-list">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  className={`tab-link ${activeTab === tab.id ? "active" : ""}`}
                >
                  <span className="line" />
                  <span className="tab-text">{tab.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>


      <div className="socials">
        <div className="tooltip">
          <a href="https://www.facebook.com/khyzl.grc28" target="_blank" rel="noopener noreferrer">
          <img src="/socmeds/facebook.png" alt="Facebook" />
          <span className="tooltip-text">Facebook</span>
          </a>
        </div>
        <div className="tooltip">
          <a href="https://www.instagram.com/khyzlgrc/" target="_blank" rel="noopener noreferrer">
          <img src="/socmeds/instagram.png" alt="Instagram" />
          <span className="tooltip-text">Instagram</span>
          </a>
        </div>
        <div className="tooltip">
          <a href="https://www.linkedin.com/in/khayzel-garcia-04907420b/" target="_blank" rel="noopener noreferrer">
          <img src="/socmeds/email.png" alt="Email" />
          <span className="tooltip-text">Contact me on LinkedIn.</span>
          </a>
        </div>
        <div className="tooltip">
          <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer">
          <img src="/socmeds/note.png" alt="Note" />
          <span className="tooltip-text">Visit my portfolio's design inspiration.</span>
          </a>
        </div>
      </div>
    </aside>
  );
};


export default Sidebar;