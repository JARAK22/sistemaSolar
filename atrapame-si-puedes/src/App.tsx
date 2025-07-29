import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Play from './components/Play'
import TopPuntuacion from './components/TopPuntuacion'

interface Puntuacion {
  nombre: string;
  puntos: number;
}

export default function App() {
  const [topPuntuacion, setTopPuntuacion] = useState<Puntuacion[]>([]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Play topPuntuacion={topPuntuacion} setTopPuntuacion={setTopPuntuacion} />} />
        <Route path="/top-puntuacion" element={<TopPuntuacion topPuntuacion={topPuntuacion} />} />
      </Routes>
    </>
  )
}
