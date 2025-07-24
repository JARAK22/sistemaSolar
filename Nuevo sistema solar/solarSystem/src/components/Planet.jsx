import React from "react";

export default function Planet({ planet, onClick }) {

  const orbitStyle = {
    width: `${planet.orbitSize}px`,
    height: `${planet.orbitSize}px`,
    animation: `spin ${planet.speed}s linear infinite`,
  };

  const planetStyle = {
    width: `${planet.size}px`,
    height: `${planet.size}px`,
  };

  return (
    <div
      className="orbit-container"
      style={{ width: planet.orbitSize, height: planet.orbitSize }}
    >
      <div className="orbit cursor-pointer" data-planet={planet.id}
        onClick={() => onClick(planet)}>
        <img
          src={planet.image}
          alt={planet.name}
          className="planet rotar hover:scale-150 hover:brightness-150 hover:shadow-xl transition duration-300 ease-in-out"
          style={planetStyle}
        />
      </div>
    </div>
  );
}
