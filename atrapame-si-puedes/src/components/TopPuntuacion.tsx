import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TopPuntuacion( { topPuntuacion }: { topPuntuacion: { nombre: string; puntos: number }[] } ) {
    const navigate = useNavigate();
    // ordenar topPuntuacion por puntos de mayor a menor
    const topPuntuacionOrdenada = topPuntuacion.sort((a, b) => b.puntos - a.puntos);
    // mostrar solo los 10 primeros
    const topPuntuacionTop10 = topPuntuacionOrdenada.slice(0, 5);
    
    useEffect(() => {
        // guardar topPuntuacion en localStorage
        localStorage.setItem("topPuntuacion", JSON.stringify(topPuntuacionTop10));
    }, [topPuntuacionTop10]);

    const volverAlJuego = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-white mb-8">Top Puntuaciones</h1>
            <div className="flex flex-col items-center justify-center mb-8">
                {topPuntuacionTop10.length > 0 ? (
                    topPuntuacionTop10.map((puntuacion, index) => (
                        <div key={index} className="text-2xl font-bold text-white mb-2">
                            {index + 1}. {puntuacion.nombre} - {puntuacion.puntos} puntos
                        </div>
                    ))
                ) : (
                    <div className="text-xl text-white">No hay puntuaciones registradas</div>
                )}
            </div>
            <button
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-mono text-lg"
                onClick={volverAlJuego}
            >
                Volver al Juego
            </button>
        </div>
    )
}