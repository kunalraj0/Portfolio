import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Ambience from "./components/Ambience";
import AshenApp from "./components/Ashen/AshenApp";
import "./ashen.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <Ambience />
      <div className="ashen-root" id={load ? "no-scroll" : "scroll"}>
        <AshenApp />
      </div>
    </>
  );
}

export default App;
