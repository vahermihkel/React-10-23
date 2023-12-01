import React, { useState } from 'react';
// import ostukorvFailist from "../data/ostukorv.json"; // ei tehta muud kui juurde lisamiseks
// import tootedFailist from "../data/tooted.json"; // kuvab välja HTMLs
import { Link } from 'react-router-dom';

function Tooted() {
  const [tooted, uuendaTooted] = useState(JSON.parse(localStorage.getItem("tooted")) || []);

  const lisaOstukorvi = (lisatav) => {
    // ostukorvFailist.push(lisatav);
    const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
    ostukorvLS.push(lisatav);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
  } 

  // filtreerida ja sorteerida
  // objekte nullist ei ole teinud

  const sorteeriHindKasvavalt = () => {
    tooted.sort((a,b) => a.hind - b.hind);
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKahanevalt = () => {
    tooted.sort((a,b) => b.hind - a.hind);
    uuendaTooted(tooted.slice());
  }

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaTooted(tooted.slice());
  }

  // Bootstrapi Reactis
  // i18next ehk tõlge Reactis

  const filtreeriNimiB = () => {
    const vastus = (JSON.parse(localStorage.getItem("tooted")) || []).filter(toode => toode.nimi.startsWith("B"));
    uuendaTooted(vastus);
  }

  const filtreeriNimiN = () => {
    const vastus = (JSON.parse(localStorage.getItem("tooted")) || []).filter(toode => toode.nimi.startsWith("N"));
    uuendaTooted(vastus);
  }

  const filtreeriNimiT = () => {
    const vastus = (JSON.parse(localStorage.getItem("tooted")) || []).filter(toode => toode.nimi.startsWith("T"));
    uuendaTooted(vastus);
  }

  // .sort()  paneb järjekorda -> tingimuseks miinus või plussi tagastav väärtus
  // .filter()  filtreerib -> tingimus millisel juhul alles jäetakse
  // .map()    asendab -> kirjutame millega asendame
  // .forEach()   teeb igaühe juures mingisuguse funktsionaalsuse
  //    PRAEGU:  teeme muutuja ja lisame talle igaühe juurest midagi juurde

  return (
    <div>
      <button onClick={sorteeriHindKasvavalt}>Sorteeri hind kasvavalt</button>
      <button onClick={sorteeriHindKahanevalt}>Sorteeri hind kasvavalt</button>
      <button onClick={sorteeriAZ}>Sorteeri nimi A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri nimi Z-A</button>
      <br /><br />
      <button onClick={filtreeriNimiB}>B</button>
      <button onClick={filtreeriNimiN}>N</button>
      <button onClick={filtreeriNimiT}>T</button>
      { 
        tooted.map((toode, indeks) => 
          <div key={indeks}>
            <img className={toode.aktiivne === true ? "pilt" : "pilt-mitteaktiivne"} src={toode.pilt} alt="" />
            <div>{toode.nimi}</div>
            <div>{toode.hind} €</div>
            {
              toode.aktiivne === true ? 
              <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button> :
              <span>Toode mitteaktiivne</span>
            }

            {/* {toode.aktiivne === true && <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>}
            {toode.aktiivne === false && <span>Toode mitteaktiivne</span>} */}
            
            
            {/* <button disabled={toode.aktiivne === false} onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button> */}
            <Link to={"/yksik-toode/" + indeks}>
              <button>Vaata detailsemalt</button>
            </Link>
          </div> ) 
      }
    </div>
  )
}

export default Tooted