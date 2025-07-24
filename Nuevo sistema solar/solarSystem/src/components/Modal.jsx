import React from "react";

export default function Modal({ planet, onClose }) {
  if (!planet) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-[#0b0f19] text-white rounded-2xl p-8 w-full max-w-2xl shadow-2xl relative overflow-y-auto max-h-[90vh] scrollbar-hidden">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl hover:text-red-500 focus:outline-none"
          aria-label="Cerrar"
        >
          &times;
        </button>

        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-8 h-8 rounded-full border border-white"
            style={{ backgroundColor: planet.color }}
          ></div>
          <h2 className="text-3xl font-bold tracking-wide">{planet.name}</h2>
        </div>

        {/* Imagen del planeta */}
        <div className="flex justify-center mb-6">
          <img
            src={planet.image}
            alt={planet.name}
            className="w-32 h-32 rounded-full shadow-lg border-4 border-[#1a2236] object-cover animate-jelly"
          />
        </div>

        {/* Descripción */}
        <p className="text-center text-gray-300 mb-8 leading-relaxed text-base">
          {planet.description}
        </p>

        {/* Datos Clave */}
        <hr className="border-gray-700 mb-5" />
        <h3 className="text-xl font-semibold mb-4 text-white text-center">
          Datos Clave
        </h3>
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-300">
          <div>
            <p className="font-semibold text-white">🌍 Diámetro</p>
            <p>{planet.diameter || "Desconocido"}</p>
          </div>
          <div>
            <p className="font-semibold text-white">🕒 Duración del día</p>
            <p>{planet.dayLength || "Desconocido"}</p>
          </div>
          <div>
            <p className="font-semibold text-white">☀️ Distancia del Sol</p>
            <p>{planet.distanceFromSun || "Desconocido"}</p>
          </div>
          <div>
            <p className="font-semibold text-white">🌙 Número de lunas</p>
            <p>{planet.moons || "No tiene lunas"}</p>
          </div>
        </div>

        {/* Curiosidades */}
        <hr className="border-gray-700 mt-8 mb-4" />
        <h3 className="text-xl font-semibold mb-3 text-white text-center">
          Curiosidades
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-200 px-4">
          {planet.facts.map((curio, index) => (
            <li key={index}>{curio}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}