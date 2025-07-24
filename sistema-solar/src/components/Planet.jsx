import React from "react";

export default function Planet({ planet, onClick }) {
  return (
    <div
      onClick={() => onClick(planet)}
      className="cursor-pointer flex flex-col items-center transition-transform hover:scale-110 "
    >
      <img
        src={planet.image}
        alt={planet.name}
        className="w-16 h-16 rounded-full shadow-md object-cover rotar"
      />
      <span className="mt-2 text-sm text-white">{planet.name}</span>
    </div>
  );
}

