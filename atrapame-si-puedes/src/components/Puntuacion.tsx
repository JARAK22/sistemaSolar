import { useState, useEffect } from "react";
import { palabrasMotivadoras } from "../data/data";

export default function Puntuacion({ finJuego, puntos, guardarPuntuacion, setNombre, nombre }: { finJuego: boolean, puntos: number, guardarPuntuacion: () => void, setNombre: (nombre: string) => void, nombre: string }) {
    const [palabra, setPalabra] = useState('');

    useEffect(() => {
        if (puntos < 10) {
            setPalabra(palabrasMotivadoras[0]);
        } else if (puntos < 20) {
            setPalabra(palabrasMotivadoras[1]);
        } else {
            setPalabra(palabrasMotivadoras[2]);
        }
    }, [puntos]);

    return (
        <div>
            {finJuego && (
                <>
                    <div className="text-2xl font-bold text-red-600 mt-4 font-mono">
                        ¡Juego terminado! Puntuación final: {puntos}
                    </div>
                    <div className="flex flex-row gap-4">
                        <input className="border-2 border-gray-300 rounded-md p-2 text-white bg-gray-800" type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                        <button onClick={guardarPuntuacion} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-5 hover:bg-blue-600 disabled:bg-gray-400 font-mono">Guardar</button>
                    </div>
                    <div className="text-2xl font-bold text-red-600 mt-4 font-mono">
                        {palabra}
                    </div>
                </>
            )}
        </div>
    );
}