import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json"

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist); 

  const lisa = (uus) => {
    ostukorv.push(uus);
    uuendaOstukorv(ostukorv.slice());
  }
  
  const kustuta = (jrknr) => {
    ostukorv.splice(jrknr,1); // mitmendat, mitu tk
    uuendaOstukorv(ostukorv.slice());
  }

  // kus on võimalik tekitada uusi muutujaid?
  // 1. const [muutuja, uuendaMuutuja]  <--- useState sees
  // 2. const vastus = <--- funktsiooni sees
  // 3. () => <--- sulu sees, noole ees  

  const tyhjenda = () => {
    ostukorv.splice(0);
    uuendaOstukorv(ostukorv.slice());
  }

// tavaline JavaScripti forEach funktsioon

  return (
    <div>
      {ostukorv.length > 0 && <div>Kokku {ostukorv.length} toode(t)</div>}
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      { ostukorv.map((toode, indeks) => 
        <div key={indeks}>
          <img className="pilt" src={toode.pilt} alt="" />
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          <button onClick={() => lisa(toode)}>Lisa</button> 
          <button onClick={() => kustuta(indeks)}>Kustuta</button>
        </div> ) }
      {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}
      <Link to="/tooted">
        <button>Lisa mõni toode ostukorvi</button>
      </Link>
    </div>
  )
}

export default Ostukorv