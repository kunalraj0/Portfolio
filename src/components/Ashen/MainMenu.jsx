import React from "react";
import forestBg from "../../Assets/ruin-forest.jpg";
import logo from "../../Assets/logo.png";

function MainMenu({ onOpen }) {
  return (
    <section className="view-menu">
      <div className="bg-photo" style={{ backgroundImage: `url(${forestBg})` }}></div>

      <div className="ruin-scene" aria-hidden="true">
        <div className="moon"></div>
        <svg viewBox="0 0 1000 420" preserveAspectRatio="xMidYMax slice">
          <path d="M0 300 L60 280 140 300 220 270 300 295 400 260 500 290 600 265 700 300 800 275 900 300 1000 280 1000 420 0 420 Z" fill="#161c20" opacity="0.9" />
          <path d="M660 420 V300 Q660 250 705 250 Q750 250 750 300 V330 H735 V300 Q735 268 705 268 Q678 268 678 300 V420 Z" fill="#0c0f11" />
          <path d="M760 420 V320 H778 V420 Z" fill="#0c0f11" />
          <path d="M110 420 V330 L90 300 L100 260 L80 230 M100 260 L130 235 M90 300 L60 285 M110 330 L145 310 M110 330 L150 345" stroke="#0c0f11" strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M905 420 V310 L925 275 L915 240 L935 210 M915 240 L890 220 M925 275 L955 260 M905 310 L875 295 M905 310 L865 320" stroke="#0c0f11" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M0 380 L120 360 260 385 420 355 560 390 720 360 860 385 1000 360 1000 420 0 420 Z" fill="#08090a" />
        </svg>
      </div>
      <div className="fogbank"></div>
      <div className="fogbank f2"></div>

      <div className="mm-top">
        <div className="mm-loc">
          Bearer of the Curse — <b>Mumbai, India</b>
        </div>
        <div className="mm-loc ashen-caps" style={{ letterSpacing: ".14em" }}>
          Ashen Portfolio
        </div>
      </div>

      <div className="mm-center">
        <div className="mm-title">
          <div className="sigil">
            <img src={logo} alt="" />
          </div>
          <h1>KUNALRAJ SINGH</h1>
          <p className="role">Associate XR Developer — Parallax Labs</p>
          <div className="flourish">
            <span></span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M12 3c2 2 2 4 0 6-2-2-2-4 0-6zM12 21c-2-2-2-4 0-6 2 2 2 4 0 6zM3 12c2-2 4-2 6 0-2 2-4 2-6 0zM21 12c-2 2-4 2-6 0 2-2 4-2 6 0z" />
            </svg>
            <span></span>
          </div>
        </div>

        <nav className="mm-menu">
          <button onClick={() => onOpen("status")}>Continue — Character</button>
          <button onClick={() => onOpen("equipment")}>Equipment</button>
          <button onClick={() => onOpen("covenants")}>Covenants</button>
          <button onClick={() => onOpen("records")}>Records</button>
        </nav>
      </div>

      <div className="mm-foot">Press any key to remember your purpose</div>
    </section>
  );
}

export default MainMenu;
