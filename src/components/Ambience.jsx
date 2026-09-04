import React, { useEffect, useRef } from "react";

// Site-wide atmosphere layer: vignette, film grain, and drifting embers.
// Purely decorative chrome — mounted once, sits behind all routed content.
function Ambience() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const count = 22;
    const embers = [];
    for (let i = 0; i < count; i++) {
      const e = document.createElement("div");
      e.className = "ashen-ember";
      const size = 2 + Math.random() * 3;
      e.style.width = size + "px";
      e.style.height = size + "px";
      e.style.left = Math.random() * 100 + "vw";
      e.style.setProperty("--drift", Math.random() * 60 - 30 + "px");
      e.style.animationDuration = 9 + Math.random() * 10 + "s";
      e.style.animationDelay = Math.random() * 12 + "s";
      wrap.appendChild(e);
      embers.push(e);
    }
    return () => embers.forEach((e) => e.remove());
  }, []);

  return (
    <div className="ashen-ambience" aria-hidden="true">
      <div className="ashen-vig"></div>
      <div className="ashen-grain"></div>
      <div className="ashen-embers" ref={wrapRef}></div>
    </div>
  );
}

export default Ambience;
