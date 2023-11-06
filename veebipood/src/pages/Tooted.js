import React from 'react';
import ostukorvFailist from "../data/ostukorv.json"; // ei tehta muud kui juurde lisamiseks
import tootedFailist from "../data/tooted.json"; // kuvab välja HTMLs
import { Link } from 'react-router-dom';

function Tooted() {
  const tooted = tootedFailist;

  const lisaOstukorvi = (lisatav) => {
    ostukorvFailist.push(lisatav);
  } 

  return (
    <div>
      { 
        tooted.map((toode, indeks) => 
          <div key={indeks}>
            {toode}
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