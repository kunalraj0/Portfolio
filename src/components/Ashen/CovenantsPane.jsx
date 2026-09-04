import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const COVENANTS = [
  { href: "https://github.com/kunalraj0", icon: <AiFillGithub />, name: "Forge", tag: "GitHub" },
  { href: "https://www.linkedin.com/in/kunalrajsingh/", icon: <FaLinkedinIn />, name: "Council", tag: "LinkedIn" },
  { href: "https://twitter.com/kunalraj_0", icon: <AiOutlineTwitter />, name: "Herald", tag: "X / Twitter" },
  { href: "https://www.instagram.com/kunalraj_0", icon: <AiFillInstagram />, name: "Wanderer", tag: "Instagram" },
];

function CovenantsPane() {
  return (
    <div className="covenant-grid">
      {COVENANTS.map((c) => (
        <a className="covenant" href={c.href} target="_blank" rel="noreferrer" key={c.tag}>
          <div className="emblem">{c.icon}</div>
          <div>
            <div className="cname ashen-caps">{c.name}</div>
            <div className="ctag">{c.tag}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default CovenantsPane;
