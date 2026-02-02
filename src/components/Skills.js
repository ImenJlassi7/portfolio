import React, { useEffect, useState, useRef, useMemo } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const containerRef = useRef(null);

  // Full list of available logos in public/skills-logos
  const skillImages = useMemo(() => [
    '11103355.png', '5968332.png', 'angular.png', 'flutter-removebg-preview.png',
    'images-removebg-preview (1).png', 'images__10_-removebg-preview.png',
    'images__11_-removebg-preview.png', 'images__12_-removebg-preview.png',
    'images__13_-removebg-preview.png', 'images__14_-removebg-preview.png',
    'images__15_-removebg-preview.png', 'images__1_-removebg-preview.png',
    'images__3_-removebg-preview.png', 'images__4_-removebg-preview.png',
    'images__5_-removebg-preview.png', 'images__6_-removebg-preview.png',
    'images__7_-removebg-preview.png', 'images__8_-removebg-preview (1).png',
    'images__9_-removebg-preview (1).png', 'logo-vertical-removebg-preview.png',
    'logo192-removebg-preview.png', 'lora.png', 'mongodb-removebg-preview.png',
    'nodejs-removebg-preview.png',
    'pngtree-illustration-of-iot-internet-of-things-concept-on-earth-vector-png-image_32605572.png',
    'powerbi.png', 'raspberry-removebg-preview.png', 'sqlite-removebg-preview.png',
    'talend_logo_icon_170648.png', 'yB0xE3NR_400x400-removebg-preview.png'
  ], []);

  // Animation state
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const requestRef = useRef();
  const startTimeRef = useRef();

  // Interactive rotation target (mouse)
  const targetRotation = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  // Sphere configuration
  const [radius, setRadius] = useState(300); // Radius of the sphere in px
  const autoRotateSpeed = 0.002; // Automatic rotation speed

  // Responsive radius
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 500) {
        setRadius(140);
      } else if (window.innerWidth < 768) {
        setRadius(200);
      } else {
        setRadius(300);
      }
    };

    window.addEventListener('resize', updateRadius);
    updateRadius(); // init

    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Animation Loop
  const animate = (time) => {
    if (!startTimeRef.current) startTimeRef.current = time;

    // Auto rotation
    const autoX = autoRotateSpeed;
    const autoY = autoRotateSpeed * 1.2;

    setRotation(prev => {
      // Smoothly interpolate towards target rotation if interacting, otherwise auto-rotate
      // For this version, we'll combine auto-rotation with continuous accumulation
      return {
        x: prev.x + autoX + targetRotation.current.x * 0.05,
        y: prev.y + autoY + targetRotation.current.y * 0.05
      };
    });

    // Decay target rotation (inertia)
    targetRotation.current.x *= 0.95;
    targetRotation.current.y *= 0.95;

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Mouse Interaction handlers
  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    // Calculate relative position [-1, 1]
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    // Influence rotation speed based on mouse position
    targetRotation.current = {
      x: y * 0.02, // Mouse Y controls X axis rotation
      y: -x * 0.02 // Mouse X controls Y axis rotation
    };
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMouseMove(e.touches[0]);
    }
  };

  // Helper: Fibonacci Sphere Algorithm
  const getPosition = (i, n) => {
    const phi = Math.acos(-1 + (2 * i) / n);
    const theta = Math.sqrt(n * Math.PI) * phi;

    return {
      x: radius * Math.cos(theta) * Math.sin(phi),
      y: radius * Math.sin(theta) * Math.sin(phi),
      z: radius * Math.cos(phi)
    };
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseLeave={() => { targetRotation.current = { x: 0, y: 0 }; }}
      >
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-3d-cloud-wrapper">
          <div className="skills-3d-cloud">
            {skillImages.map((img, i) => {
              // Calculate initial position
              const count = skillImages.length;
              const pos = getPosition(i, count);

              // Apply Rotation matrix
              // Rotate around X
              let y1 = pos.y * Math.cos(rotation.x) - pos.z * Math.sin(rotation.x);
              let z1 = pos.y * Math.sin(rotation.x) + pos.z * Math.cos(rotation.x);

              // Rotate around Y
              let x2 = pos.x * Math.cos(rotation.y) + z1 * Math.sin(rotation.y);
              let z2 = -pos.x * Math.sin(rotation.y) + z1 * Math.cos(rotation.y);

              // Project to 2D
              // Scale based on Z depth (closer = larger, further = smaller)
              // z2 range is roughly [-radius, radius]
              const scale = (z2 + radius * 2) / (radius * 1.5); // Perspective scaling factor
              const opacity = Math.max(0.1, (z2 + radius) / (2 * radius)); // Fade out back items

              const style = {
                transform: `translate3d(${x2}px, ${y1}px, 0) scale(${scale})`,
                opacity: opacity,
                zIndex: Math.floor(z2)
              };

              return (
                <div key={i} className="skill-3d-item" style={style}>
                  <img
                    src={`/skills-logos/${img}`}
                    alt="Skill"
                    className="skill-3d-img"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
