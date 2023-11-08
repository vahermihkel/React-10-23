//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import MitteLeitud from './pages/MitteLeitud';
import { useState } from 'react';
import Seaded from './pages/Seaded';
import Hinnad from './pages/Hinnad';
import Tooted from './pages/Tooted';
import Poed from './pages/Poed';
import YksikToode from './pages/YksikToode';
import YksikPood from './pages/YksikPood';
import MuudaToode from './pages/MuudaToode';
import HaldaTooteid from './pages/HaldaTooteid';
import YksikHind from './pages/YksikHind';


function App() {
  const [stiil, uuendaStiil] = useState(localStorage.getItem("stiil") || "hele");

  const stiilTumedaks = () => {
    uuendaStiil("tume");
    localStorage.setItem("stiil", "tume");
  }

  const stiilHeledaks = () => {
    uuendaStiil("hele");
    localStorage.setItem("stiil", "hele");
  }

  return (
    <div className={stiil}>
      <button onClick={stiilTumedaks}>Tumedaks</button>
      <button onClick={stiilHeledaks}>Heledaks</button>

      <Link to="/">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupu-stiil">Ostukorvi</button>
      </Link>

      <Link to="/lisa">
        <button className="nupu-stiil">Lisa uus toode</button>
      </Link>

      <Link to="/seaded">
        <button className="nupu-stiil">Seaded</button>
      </Link>

      <Link to="/hinnad">
        <button className="nupu-stiil">Hinnad</button>
      </Link>

      <Link to="/tooted">
        <button className="nupu-stiil">Tooted</button>
      </Link>

      <Link to="/poed">
        <button className="nupu-stiil">Poed</button>
      </Link>

      <Link to="/halda">
        <button className="nupu-stiil">Muuda/kustuta tooteid</button>
      </Link>

      <Routes>
        <Route path="" element={<Avaleht />} />
        <Route path="ostukorv" element={<Ostukorv />} />
        <Route path="lisa" element={<LisaToode />} />
        <Route path="seaded" element={<Seaded />} />
        <Route path="hinnad" element={<Hinnad />} />
        <Route path="tooted" element={<Tooted />} />
        <Route path="halda" element={<HaldaTooteid />} />
        <Route path="poed" element={<Poed />} />
        <Route path="yksik-toode/:toote_indeks" element={<YksikToode />} />
        <Route path="yksik-pood/:poe_indeks" element={<YksikPood />} />
        <Route path="yksik-hind/:hinna_indeks/test/:hind_vaartus" element={<YksikHind />} />
        <Route path="muuda-toode/:toote_jrknr" element={<MuudaToode />} />
        <Route path="*" element={<MitteLeitud />} />
      </Routes>

      {/* SIIN ON FOOTER
      kõik mis jääb Routes-dest allapoole on igal lehel
      */}
    </div>
  );
}

export default App;
