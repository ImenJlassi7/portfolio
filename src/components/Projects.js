import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'AI Generated Lessons Plans',
      description: 'Develop a web application that ensures the generation of a course plan using an AI model.',
      image: '/projects-logos/robot.png', // Updated to use image
      tags: ['MERN Stack', 'API Gemini'],
      category: 'fullstack',
      link: '#',
      videoUrl: '/videos/AI_Generated.mp4'
    },
    {
      id: 2,
      title: 'Ardhi Smart',
      description: 'Design and Development of an Intelligent Decision Support System for Crop Maintenance.',
      image: '/projects-logos/app_logo.png', // Updated to use image
      tags: ['MERN Stack', 'AI Model', 'C Language', 'Flutter'],
      category: 'mobile',
      link: '#',
      videoUrls: [
        { url: '/videos/admin.mp4', isMobile: false },
        { url: '/videos/AppVidedo.mp4', isMobile: true }
      ]
    },
    {
      id: 3,
      title: 'GPS Tracker',
      description: 'Design of an intelligent GPS tracker integrating an AI model capable of detecting objects and soil conditions (wet/dry).',
      image: '/projects-logos/gps.png', // Updated to use image
      tags: ['Flutter', 'Django', 'SQLite3', 'Teachable Machine', 'Roboflow', 'Python', 'YOLO', 'MongoDB', 'HiveMQ Cloud', 'MQTT', 'HTTP', ' Wi-Fi', 'WebSocket'],
      category: 'mobile',
      link: '#'
    },
    {
      id: 4,
      title: 'Sale and Purchase of Auto Parts',
      description: 'Development of a mobile application dedicated to the sale and purchase of automotive parts.',
      image: '/projects-logos/auto.png',
      tags: ['Kotlin', 'Node.js', 'Express.js', 'MongoDB'],
      category: 'iot',
      link: '#'
    },
    {
      id: 5,
      title: 'Development of a mobile IoT shop application',
      description: 'Design and development of a mobile application dedicated to the sale of connected objects (IoT)',
      image: '/projects-logos/iot.png',
      tags: ['Kotlin', 'Firebase'],
      category: 'fullstack',
      link: '#'
    },
    {
      id: 6,
      title: 'SMART GREENHOUSE ',
      description: 'Development of an intelligent security system for greenhouses, integrating email alerts and notifications through sensors and actuators to ensure environmental monitoring and protection.',
      image: '/projects-logos/SmartGreen.png',
      tags: ['Python', 'Raspberry Pi', 'Ultrasonic sensor', 'Servo motor', 'LED', 'Buzzer'],
      category: 'iot',
      link: '#'
    }
  ];

  const categories = ['all', 'fullstack', 'mobile', 'iot'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const handleViewProject = (project) => {
    if (project.videoUrl || project.videoUrls) {
      setSelectedProject(project);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveVideoIndex(0);
  };

  return (
    <section id="projects" className="projects">
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>✕</button>

            {selectedProject.videoUrls && selectedProject.videoUrls.length > 1 && (
              <div className="video-tabs">
                {selectedProject.videoUrls.map((video, idx) => (
                  <button
                    key={idx}
                    className={`video-tab ${activeVideoIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveVideoIndex(idx)}
                  >
                    {idx === 0 ? 'Admin Dashboard' : 'App Video'}
                  </button>
                ))}
              </div>
            )}

            <div className={`video-container ${selectedProject.videoUrls && selectedProject.videoUrls[activeVideoIndex] && selectedProject.videoUrls[activeVideoIndex].isMobile ? 'mobile-video' : ''}`}>
              <video
                controls
                autoPlay
                key={selectedProject.videoUrls ? selectedProject.videoUrls[activeVideoIndex].url : selectedProject.videoUrl}
                width="100%"
                height="auto"
              >
                <source src={selectedProject.videoUrls ? selectedProject.videoUrls[activeVideoIndex].url : selectedProject.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}

      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <div className="project-image">
                  {project.image.startsWith('/') ? (
                    <img src={project.image} alt={project.title} className="project-icon-img" />
                  ) : (
                    project.image
                  )}
                </div>
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className={`tag ${idx >= 3 ? 'tag-extra' : ''}`}>{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="tag-more">+{project.tags.length - 3}</span>
                    )}
                  </div>
                </div>
                <p>{project.description}</p>

                <button
                  type="button"
                  onClick={() => handleViewProject(project)}
                  className="project-link"
                >
                  View Project <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
