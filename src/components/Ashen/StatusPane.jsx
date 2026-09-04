import React from "react";
import { ImPointRight } from "react-icons/im";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from "react-icons/di";
import { SiPytorch, SiFirebase, SiNextdotjs, SiLinux, SiVisualstudiocode, SiPostman, SiHeroku, SiVercel } from "react-icons/si";
import { GitHubCalendar } from "react-github-calendar";
import avatar from "../../Assets/avatar-2.jpg";

const LOADOUT = [
  { icon: <CgCPlusPlus />, label: "C++" },
  { icon: <DiJavascript1 />, label: "JavaScript" },
  { icon: <DiNodejs />, label: "Node.js" },
  { icon: <DiReact />, label: "React" },
  { icon: <DiMongodb />, label: "MongoDB" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <DiGit />, label: "Git" },
  { icon: <SiFirebase />, label: "Firebase" },
  { icon: <DiPython />, label: "Python" },
  { icon: <SiPytorch />, label: "PyTorch" },
  { icon: <SiLinux />, label: "Linux" },
  { icon: <SiVisualstudiocode />, label: "VS Code" },
  { icon: <SiPostman />, label: "Postman" },
  { icon: <SiVercel />, label: "Vercel" },
  { icon: <SiHeroku />, label: "Heroku" },
];

function StatusPane() {
  return (
    <>
      <div className="status-grid">
        <div className="char-card frame">
          <div className="char-portrait">
            <img src={avatar} alt="Kunalraj Singh" />
          </div>
          <div className="char-name ashen-caps">Kunalraj Singh</div>
          <div className="char-class">Associate XR Developer — Parallax Labs</div>
          <div className="char-meta">
            <div><b>Mumbai</b>Origin</div>
            <div><b>CS Engineering</b>IoT &amp; Cybersecurity</div>
          </div>
          <p style={{ marginTop: 14, color: "var(--bone-dim)", fontSize: ".86rem", lineHeight: 1.5, textAlign: "left" }}>
            Hi everyone, I'm Kunalraj Singh from Mumbai, India — an engineering student in Computer Science, specializing in IoT and Cybersecurity, including Blockchain technology.
          </p>
          <ul className="about-activities">
            <li><ImPointRight /> Playing Games</li>
            <li><ImPointRight /> Writing Tech Blogs</li>
            <li><ImPointRight /> Travelling</li>
          </ul>
          <div className="burial-gift">
            <span className="ashen-caps">Burial Gift</span>
            "Strive to build things that make a difference." — Loki
          </div>
        </div>

        <div className="stat-list">
          <div className="stat-row"><span className="label">Vigor</span><span className="leader"></span><span className="value">Unreal Engine, Unity, C#</span></div>
          <div className="stat-row"><span className="label">Endurance</span><span className="leader"></span><span className="value">XR / AR — Spark AR (Meta Spark)</span></div>
          <div className="stat-row"><span className="label">Vitality</span><span className="leader"></span><span className="value">Google Cloud Platform &amp; DevOps</span></div>
          <div className="stat-row"><span className="label">Strength</span><span className="leader"></span><span className="value">C++ &amp; Systems, Robotics</span></div>
          <div className="stat-row"><span className="label">Dexterity</span><span className="leader"></span><span className="value">JavaScript, React, Node.js, Next.js</span></div>
          <div className="stat-row"><span className="label">Intelligence</span><span className="leader"></span><span className="value">Python, PyTorch</span></div>
          <div className="stat-row"><span className="label">Faith</span><span className="leader"></span><span className="value">Published Research — VR Exposure Therapy</span></div>
          <div className="stat-row"><span className="label">Luck</span><span className="leader"></span><span className="value">IoT, Cybersecurity &amp; Blockchain</span></div>
        </div>
      </div>

      <div className="frame" style={{ marginBottom: 22 }}>
        <div className="frame-title ashen-caps">Loadout — Tools &amp; Stack</div>
        <div className="loadout">
          {LOADOUT.map((item) => (
            <div className="loadout-icon" key={item.label} title={item.label}>
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      <div className="frame commits-frame" style={{ marginBottom: 22 }}>
        <div className="frame-title ashen-caps">Commits Etched</div>
        <GitHubCalendar
          username="kunalraj0"
          blockSize={11}
          blockMargin={4}
          fontSize={12}
          colorScheme="dark"
          theme={{ dark: ["#1c150d", "#4a3a1e", "#7a5f2a", "#a8813d", "#e6bd72"] }}
        />
      </div>

      <div className="frame">
        <div className="frame-title ashen-caps">Bonfires Lit — The Journey So Far</div>
        <ul className="waypoints">
          <li><span className="wp-flame">🔥</span><div><div className="wp-role">Associate XR Developer <em>— Parallax Labs</em></div><div className="wp-when">Jun 2025 — Present</div></div></li>
          <li><span className="wp-flame">🔥</span><div><div className="wp-role">XR Developer, Intern <em>— Parallax Labs</em></div><div className="wp-when">Dec 2023 — Sep 2024 (two engagements)</div></div></li>
          <li><span className="wp-flame">🔥</span><div><div className="wp-role">Senior Game Developer <em>— Technical Team, SIES GST</em></div><div className="wp-when">Jun 2023 — May 2025</div></div></li>
          <li><span className="wp-flame">🔥</span><div><div className="wp-role">AR/VR Lead <em>— Google Developer Student Clubs, SIES GST</em></div><div className="wp-when">Jul 2023 — Jul 2024</div></div></li>
          <li><span className="wp-flame">🔥</span><div><div className="wp-role">Junior Game Developer <em>— Technical Team, SIES GST</em></div><div className="wp-when">Jul 2022 — May 2023</div></div></li>
          <li><span className="wp-flame">🔥</span><div><div className="wp-role">Programming Coordinator <em>— Google Developer Student Clubs, SIES GST</em></div><div className="wp-when">Jul 2022 — Aug 2023</div></div></li>
        </ul>
      </div>
    </>
  );
}

export default StatusPane;
