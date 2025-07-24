import { useState } from "react";
import { planets } from "../data/planets";
import Planet from "./Planet";
import Modal from "./Modal";
import React from "react";
import space from "../assets/img/space.jpg";

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div
      className="relative min-h-screen text-white flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${space})` }}
    >
      <h1 className="text-3xl font-bold mb-8">Sistema Solar Interactivo</h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {planets.map((planet) => (
          <Planet key={planet.id} planet={planet} onClick={setSelectedPlanet} />
        ))}
      </div>

      <Modal planet={selectedPlanet} onClose={() => setSelectedPlanet(null)} />
    </div>
  );
}
