import React, { useEffect, useRef, useState } from "react";
import "./RotatingSkills.css"; // Ensure class names match the ones in your CSS

const SEMICIRCLE_ANGLE = 180; // Degrees for a semi-circle
const RADIUS = 150; // px - adjust this to control arc "size"
const ANIMATION_INTERVAL = 2000; // ms

export default function SemiRotatingArc({ skills, label }) {
  const [activeSkill, setActiveSkill] = useState(0);
  const total = skills.length;
  const timerRef = useRef(null);

  // Auto-rotate skills
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % total);
    }, ANIMATION_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [total]);

  // Click handler for manual navigation
  const handleClick = (idx) => setActiveSkill(idx);

  return (
    <div className="rotating-skills-arc-column">
      <div className="rotating-skills-arc-wheel">
        <div className="rotating-skills-arc">
          {skills.map((skill, idx) => {
            // Calculate arc position: evenly spaced along semi-circle
            const step = total > 1 ? SEMICIRCLE_ANGLE / (total - 1) : 0;
            const angle = 180 - idx * step; // Left (180°) to right (0°)
            const rad = (angle * Math.PI) / 180;
            const x = RADIUS * Math.cos(rad);
            const y = RADIUS * Math.sin(rad);
            const isActive = idx === activeSkill;
            return (
              <div
                className={`rotating-skills-arc-icon${
                  isActive ? " active" : ""
                }`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(88% - ${y}px)`,
                  zIndex: isActive ? 5 : 2,
                  pointerEvents: "auto",
                }}
                key={skill.name}
                onClick={() => handleClick(idx)}
                tabIndex={0}
                aria-label={skill.name}
              >
                <img src={skill.logo} alt={skill.name} />
              </div>
            );
          })}
        </div>
        <div className="rotating-skills-arc-center">
          <img
            src={skills[activeSkill].logo}
            alt={skills[activeSkill].name}
            className="rotating-skills-arc-center-logo"
          />
          <div className="rotating-skills-arc-center-name">
            {skills[activeSkill].name}
          </div>
        </div>
      </div>
      <div className="rotating-skills-arc-label">{label}</div>
    </div>
  );
}
