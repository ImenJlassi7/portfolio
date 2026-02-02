import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Imen Jlassi</span>
        </h1>
        <p className="hero-subtitle">
          Embedded Systems and Mobile Developer | Data Analyst and Business Intelligence
        </p>
        <p className="hero-description">
          Motivated, dynamic junior developer passionate about innovative technologies. Specialized in embedded systems, mobile development, and Data Intelligence. Versatile and curious, particularly interested in AI, IoT, and the MERN Stack.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="#projects" className="btn btn-secondary">View My Work</a>
        </div>

        <div className="hero-social">
          <a href="https://github.com/ImenJlassi7" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/imen-jlassi7" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>

        </div>
      </div>

      <div className="hero-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="code-window">
            <div className="window-header">
              <span className="window-dot red"></span>
              <span className="window-dot yellow"></span>
              <span className="window-dot green"></span>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="keyword">const</span> <span className="property">developer</span> = {'{'}</div>
              <div className="code-line">&nbsp;&nbsp;<span className="property">name:</span> <span className="string">'Imen Jlassi'</span>,</div>
              <div className="code-line">&nbsp;&nbsp;<span className="property">role:</span> <span className="string">'Learning by building.'</span>,</div>
              <div className="code-line">&nbsp;&nbsp;<span className="property">passion:</span> <span className="bool">true</span></div>
              <div className="code-line">{'};'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
