import React, { useState } from "react";
import "./styles.css";
import TierList from "./components/TierList";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Artifacts from "./components/Artifacts";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Dashbar from "./components/Dashbar";
import Weapons from "./components/Weapons";
import GenshinMap from "./components/Map";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "characters":
        return <Characters isCollapsed={isCollapsed} />;
      case "artifacts":
        return <Artifacts />;
      case "weapons":
        return <Weapons />;
      case "tierList":
        return <TierList />;
      case "about":
        return <About />;
      case "map":
        return <GenshinMap />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Dashbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Sidebar
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        isCollapsed={isCollapsed}
      />
      <div className="content">{renderPage()}</div>
    </div>
  );
}

export default App;
