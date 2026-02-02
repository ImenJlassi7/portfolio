import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              Highly motivated and dynamic junior professional with a deep passion for cutting-edge technologies. I hold a degree in Embedded Systems and Mobile Development and am currently pursuing a Professional Master’s in Data Analysis & Business Intelligence.            </p>
            <p>
              With a versatile and inquisitive mindset, I am deeply interested in Artificial Intelligence, the Internet of Things (IoT), data analytics, Business Intelligence, as well as web and mobile development.            </p>
            <p>I have strong expertise in the MERN stack and modern development frameworks, coupled with a proactive approach to learning and problem-solving. I am eager to leverage my technical skills and analytical mindset to design innovative, data-driven, and user-centric solutions that drive real-world impact.</p>
          </div>

          <div className="about-image">
            <img
              src="/profile.png"
              alt="Imen Jlassi"
              className="profile-img"
            />
          </div>
        </div>

        <div className="about-highlights">
          <div className="highlight-item">
            <div className="highlight-icon">🎓</div>
            <h4>Education</h4>
            <ul className="education-list">
              <li><strong>Master Pro:</strong> Data Analysis & BI <span className="status-badge">In Progress</span></li>
              <li><strong>license:</strong> Embedded Systems & Mobile</li>
            </ul>
          </div>
          <div className="highlight-item experience-item">
            <div className="highlight-icon">💼</div>
            <h4>Experience</h4>
            <div className="experience-list">
              <div className="exp-entry">
                <span className="exp-date">Feb 2025 - May 2025</span>
                <p className="exp-role">End of Studies Internship</p>
                <p className="exp-company">Technix Informatique</p>
                <p className="exp-desc">Intelligent decision support system for crop maintenance (MERN, AI, Flutter).</p>
              </div>
              <div className="exp-entry">
                <span className="exp-date">Jul 2024 - Aug 2024</span>
                <p className="exp-role">Advanced Internship</p>
                <p className="exp-company">Technix Informatique</p>
                <p className="exp-desc">AI-powered course plan generation web app (MERN Stack, AI Model).</p>
              </div>
              <div className="exp-entry">
                <span className="exp-date">Jan 2022 - Feb 2022</span>
                <p className="exp-role">Introductory Internship</p>
                <p className="exp-company">Habib Thamer Hospital</p>
                <p className="exp-desc">Hospital information systems management.</p>
              </div>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🎯</div>
            <h4>Focus</h4>
            <ul className="education-list">
              <li><strong>primary Interest:</strong> Data Intelligence & IoT</li>
              <li><strong>Soft Skills:</strong> Self-Learning & Autonomy</li>
              <li><strong>Mindset:</strong> Entrepreneurial Spirit</li>
            </ul>
            <p className="focus-subtitle">Turning ideas into reality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
