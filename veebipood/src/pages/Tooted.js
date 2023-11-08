import React from 'react';
import ostukorvFailist from "../data/ostukorv.json"; // ei tehta muud kui juurde lisamiseks
import tootedFailist from "../data/tooted.json"; // kuvab välja HTMLs
import { Link } from 'react-router-dom';

function Tooted() {
  const tooted = tootedFailist;

  const lisaOstukorvi = (lisatav) => {
    ostukorvFailist.push(lisatav);
  } 

  // filtreerida ja sorteerida
  // objekte nullist ei ole teinud

  // Bootstrapi Reactis
  // i18next ehk tõlge Reactis

  return (
    <div>
      { 
        tooted.map((toode, indeks) => 
          <div key={indeks}>
            <img className="pilt" src={toode.pilt} alt="" />
            <div>{toode.nimi}</div>
            <div>{toode.hind} €</div>
            <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
            <Link to={"/yksik-toode/" + indeks}>
              <button>Vaata detailsemalt</button>
            </Link>
          </div> ) 
      }
    </div>
  )
}

export default Tooted