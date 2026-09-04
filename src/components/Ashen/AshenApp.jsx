import React, { useEffect, useState } from "react";
import { GiCrossedSwords } from "react-icons/gi";
import { BsShieldFill, BsMask, BsArrowReturnLeft } from "react-icons/bs";
import { GiCandleLight } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";
import MainMenu from "./MainMenu";
import StatusPane from "./StatusPane";
import EquipmentPane from "./EquipmentPane";
import EffectsPane from "./EffectsPane";
import CovenantsPane from "./CovenantsPane";
import RecordsPane from "./RecordsPane";

const TABS = [
  { key: "status", label: "Status", kicker: "Status", title: "Character", icon: <BsShieldFill /> },
  { key: "equipment", label: "Equip", kicker: "Inventory", title: "Equipment", icon: <GiCrossedSwords /> },
  { key: "effects", label: "Effects", kicker: "Grimoire", title: "Effects Archive", icon: <BsMask /> },
  { key: "covenants", label: "Covenant", kicker: "Allegiances", title: "Covenants", icon: <GiCandleLight /> },
  { key: "records", label: "Records", kicker: "Rest", title: "Records", icon: <CgFileDocument /> },
];

function AshenApp() {
  const [view, setView] = useState("menu");
  const [tab, setTab] = useState("status");

  function openTab(key) {
    setTab(key);
    setView("tabs");
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && view === "tabs") setView("menu");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view]);

  if (view === "menu") {
    return <MainMenu onOpen={openTab} />;
  }

  const active = TABS.find((t) => t.key === tab);

  return (
    <section className="view-tabs">
      <div className="tabs-shell">
        <aside className="tab-rail">
          <button className="brand" onClick={() => setView("menu")} title="Main Menu">
            KS
          </button>
          {TABS.map((t) => (
            <button
              key={t.key}
              className={"tab-btn" + (tab === t.key ? " active" : "")}
              onClick={() => setTab(t.key)}
            >
              <span className="icon">{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
          <button className="tab-btn back" onClick={() => setView("menu")}>
            <span className="icon"><BsArrowReturnLeft /></span>
            <span>Menu</span>
          </button>
        </aside>

        <div className="tab-main">
          <div className="tab-header">
            <div className="kicker">{active.kicker}</div>
            <h2>{active.title}</h2>
            <div className="rule"><span></span></div>
          </div>

          <div className="pane">
            {tab === "status" && <StatusPane />}
            {tab === "equipment" && <EquipmentPane />}
            {tab === "effects" && <EffectsPane />}
            {tab === "covenants" && <CovenantsPane />}
            {tab === "records" && <RecordsPane />}
          </div>
        </div>
      </div>

      <footer className="hint-bar">
        <span><kbd>Click</kbd>Select</span>
        <span><kbd>Esc</kbd>Main Menu</span>
      </footer>
    </section>
  );
}

export default AshenApp;
