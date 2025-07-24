import React from "react";
import "./SolarSystem.css"; // Los estilos los pondremos aparte

const SolarSystem = () => {
  return (
    <div className="solar-container">
      <div className="sol"></div>

      <div className="orbita orbita-mercurio">
        <div className="planeta mercurio"></div>
      </div>

      <div className="orbita orbita-venus">
        <div className="planeta venus"></div>
      </div>

      <div className="orbita orbita-tierra">
        <div className="planeta tierra"></div>
      </div>

      <div className="orbita orbita-marte">
        <div className="planeta marte"></div>
      </div>

      {/* Agrega más planetas si quieres */}
    </div>
  );
};

export default SolarSystem;
