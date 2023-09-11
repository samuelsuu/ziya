import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home';
import JewPage from './pages/JewPage/Jewpage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className="app">
 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jewerry" element={<JewPage />} />
      </Routes>
    </Router>
 </div>
  )
}

export default App
