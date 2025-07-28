import { useState, useEffect } from "react";
import { FaAccessibleIcon } from "react-icons/fa";
import { colores, sizes } from "../data/data";
import Puntuacion from "./Puntuacion";


export default function Play() {
    // logica de juego
    const [x, setX] = useState(0); // coordenada x
    const [y, setY] = useState(0); // coordenada y
    const [color, setColor] = useState(colores[Math.floor(Math.random() * colores.length)]);
    const [size, setSize] = useState(sizes[Math.floor(Math.random() * sizes.length)]);
    const [puntos, setPuntos] = useState(0); // puntos
    const [tiempoRestante, setTiempoRestante] = useState(15); // tiempo restante
    const [finJuego, setFinJuego] = useState(false); // juego terminado
    const [juegoIniciado, setJuegoIniciado] = useState(false); // si el juego ha iniciado

    const movimientoAleatorio = () => {
        const interval = setInterval(() => {
            if (finJuego) {
                console.log("finJuego");    
                clearInterval(interval);
                return;
            };
            console.log("movimientoAleatorio");
            setColor(colores[Math.floor(Math.random() * colores.length)]);
            setSize(sizes[Math.floor(Math.random() * sizes.length)]);
            setX(Math.floor(Math.random() * 560));
            setY(Math.floor(Math.random() * 360));
        }, 800);
        return () => clearInterval(interval);
    }

    const atrapar = () => {
        if (!finJuego) {
            setPuntos(puntos + 1);
        }
    }

    const iniciarJuego = () => {
        setFinJuego(false);
        setPuntos(0);
        setTiempoRestante(15);
        setJuegoIniciado(true);
        movimientoAleatorio();
    }

    // Tiempo del juego
    useEffect(() => {
        if (!juegoIniciado || finJuego) return;

        const tiempoJuego = setInterval(() => {
            setTiempoRestante(prev => {
                if (prev <= 1) {
                    setFinJuego(true);
                    return 0;
                } else {
                    return prev - 1;
                }
            });
        }, 1000);

        return () => clearInterval(tiempoJuego);
    }, [juegoIniciado, finJuego]);


    return (
        <div className="flex flex-col items-center h-screen mt-10">
            <div className="flex flex-row gap-4">
                <p className="text-2xl font-mono text-white">Puntos: {puntos}</p>
                <p className="text-2xl font-mono text-white">Tiempo restante: {tiempoRestante} segundos</p>
            </div>
            <div className="flex flex-row gap-4">
                <Puntuacion finJuego={finJuego} puntos={puntos} />
            </div>
            <div className="relative bg-white w-150 h-100 mt-10 overflow-hidden">
                {!finJuego && (
                    <FaAccessibleIcon
                        onClick={atrapar}
                        className={`absolute cursor-pointer animate-bounce`}
                        style={{ top: `${y}px`, left: `${x}px`, color: color, fontSize: `${size}px` }}
                    />
                )}
            </div>
            <div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-5 hover:bg-blue-600 disabled:bg-gray-400 font-mono"
                    onClick={iniciarJuego}
                    disabled={juegoIniciado && !finJuego}
                >
                    {finJuego ? 'Jugar de nuevo' : (juegoIniciado ? 'Juego en curso...' : 'Atrápame')}
                </button>
            </div>
        </div>
    )
}