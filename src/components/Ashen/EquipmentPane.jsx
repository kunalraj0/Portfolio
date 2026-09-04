import React from "react";
import placeholderImg from "../../Assets/Projects/project-placeholder.svg";
import chatify from "../../Assets/Projects/chatify.png";
import globalOutbreak from "../../Assets/Projects/Screenshot (130).png";
import pomega from "../../Assets/Projects/ProjectOmega.png";
import blogImg from "../../Assets/Projects/blog.png";

const PROJECTS = [
  {
    mood: "#8a9aa8",
    img: placeholderImg,
    label: "CONCEPT — FIELD UNIT",
    type: "Right Hand — Field Instrument",
    title: "Surveillance Drone",
    desc: "Associated with the University of Mumbai. Designed the drone's frame, propulsion and power supply, then programmed the flight controller with GPS, camera telemetry and autonomous waypoint navigation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l3 4H9l3-4z" /><circle cx="12" cy="13" r="4" />
        <circle cx="4" cy="6" r="2" /><circle cx="20" cy="6" r="2" />
        <circle cx="4" cy="20" r="2" /><circle cx="20" cy="20" r="2" />
        <path d="M9 10L5.5 7M15 10l3.5-3M9 16l-3.5 3M15 16l3.5 3" />
      </svg>
    ),
  },
  {
    mood: "#9aa8a0",
    img: chatify,
    label: "CONCEPT — SUPPORT",
    type: "Left Hand — Ward",
    title: "CareTrack",
    desc: "A health-tracking and workflow dashboard built to improve patient-care coordination between teams.",
    link: { href: "https://github.com/kunalraj0/CareTrack", label: "Archive ↗" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.5 20S3 14.5 3 8.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 9 1.5c0 6-8.5 11.5-8.5 11.5z" />
        <path d="M4 12h3l1.5-3L11 15l1.5-5 1.5 3H20" />
      </svg>
    ),
  },
  {
    mood: "#a87d4a",
    img: globalOutbreak,
    label: "CONCEPT — SURVIVOR",
    type: "Chest Armor",
    title: "Global Outbreak",
    desc: "Led development of a zombie-themed multiplayer shooter in Unreal Engine with a co-op escape-room mode, built with the Technical Team at SIES GST.",
    link: { href: "https://youtu.be/Tsb8GgV5zhM", label: "Watch ↗" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 10V8a6 6 0 0 1 12 0v2" /><path d="M4 10h16l-1 9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
        <path d="M9 14v2M15 14v2M9 21l1-3h4l1 3" />
      </svg>
    ),
  },
  {
    mood: "#5b7a92",
    img: pomega,
    label: "CONCEPT — ANOMALY",
    type: "Ring — Trinket of Wit",
    title: "Project Omega",
    desc: "VR puzzle mechanics laced with an undercurrent of horror, built to bend the wearer's mind toward creative, strategic thought.",
    link: { href: "https://youtu.be/pX6Z9RqO-FE", label: "Watch ↗" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4h3a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 0 0 3h3v3a1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 0-3 0v3H6a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 0 0-3H4V7a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 0 3 0z" />
      </svg>
    ),
  },
  {
    mood: "#3f5f5c",
    img: blogImg,
    label: "CONCEPT — RESEARCH",
    type: "Catalyst — Sorcery",
    title: "Hydrophobia",
    desc: "A published chapter on VR exposure therapy for hydrophobia — mechanisms, patient experience, and future research directions.",
    link: { href: "https://www.igi-global.com/gateway/chapter/339320", label: "Read ↗" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5s3-2 6-2 6 2 6 2v14s-3-2-6-2-6 2-6 2z" /><path d="M21 5s-3-2-6-2v14c3 0 6 2 6 2z" />
      </svg>
    ),
  },
  {
    mood: "#6d5f86",
    img: placeholderImg,
    label: "CONCEPT — ILLUSION",
    type: "Sorcery — Illusion",
    title: "Social AR Canvas",
    desc: "A social AR app that lets others paint and share their art in 3D space.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15c4-8 7-9 11-11-1 3-2 6-1 8 3-1 5 0 7 2-6 0-9 2-11 6-2-3-4-4-6-5z" /><circle cx="6" cy="19" r="1.4" />
      </svg>
    ),
  },
];

function EquipmentPane() {
  return (
    <div className="equip-grid">
      {PROJECTS.map((p) => (
        <div
          className="slot frame"
          key={p.title}
          style={{ "--mood": p.mood, "--slot-img": `url(${p.img})` }}
        >
          <span className="plate-label">{p.label}</span>
          <div className="slot-top">
            <div className="slot-icon">{p.icon}</div>
            <div>
              <div className="slot-type">{p.type}</div>
              <div className="slot-name">{p.title}</div>
            </div>
          </div>
          <p className="slot-desc">{p.desc}</p>
          {p.link && (
            <a className="slot-link" href={p.link.href} target="_blank" rel="noreferrer">
              {p.link.label}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default EquipmentPane;
