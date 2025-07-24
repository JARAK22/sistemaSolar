// App.jsx
import "./App.css";
import Modal from "./components/Modal";
import React from "react";
import { useState } from "react";
import { planets } from "./data/planets";
import Planet from "./components/Planet";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div className="solar-system">
      <div className="sun hover:brightness-110"></div>
      {planets.map((planet) => (
        <Planet
          key={planet.id}
          planet={planet}
          onClick={setSelectedPlanet}
        />
      ))}
      <Modal planet={selectedPlanet} onClose={() => setSelectedPlanet(null)} />
    </div>
  );
}

export default App;
