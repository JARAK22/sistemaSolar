import { useState, useEffect } from "react";
import { palabrasMotivadoras } from "../data/data";

export default function Puntuacion({ finJuego, puntos }: { finJuego: boolean, puntos: number }) {
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
                    <div className="text-2xl font-bold text-red-600 mt-4 font-mono">
                        {palabra}
                    </div>
                </>
            )}
        </div>
    );
}