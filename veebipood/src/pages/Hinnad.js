import React, { useRef, useState } from 'react'
import hinnadJson from "../data/hinnad.json"

function Hinnad() {                 //     0   1  2  3 4  5   6 7 8
  const [hinnad, uuendaHinnad] = useState(hinnadJson);

  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a - b);
    uuendaHinnad(hinnad.slice());
  }

  const filtreeriSuuremadKui30 = () => {
    const vastus = hinnad.filter(hind => hind > 30);
    uuendaHinnad(vastus);
  }

  // key={hind} <--- Reacti poolt meelde jätmiseks
  //    meelde jätta on vaja kui kutsutakse useState funktsioon välja
  //    see kehtib ainult tsüklitele

  const lisaHind = () => {
    hinnad.push(1234);
    uuendaHinnad(hinnad.slice());
  }

  const kustuta = (jrknr) => {
    hinnad.splice(jrknr, 1);
    uuendaHinnad(hinnad.slice());
  }

  // div ja span on tühjused, div teeb uue rea, span ei tee

  const hindViide = useRef();

  const lisaHindVormist = () => {
    hinnad.push(hindViide.current.value);
    uuendaHinnad(hinnad.slice());
    // uuendaHinnad([...hinnad])
  }

  const lisa = (uusHind) => {
    hinnad.push(uusHind);
    uuendaHinnad(hinnad.slice());
  }

  const alerdi = (hind) => {
    alert(hind);
  }

  // nimetus pole tähtis, järjekord on tähtis
  const korrutaKahega = (hind, jrknr) => {
    hinnad.splice(jrknr, 1, hind*2);
    uuendaHinnad(hinnad.slice());
  }

  return (
    <div>
      <br />
      <label>Uus hind</label> <br />
      <input ref={hindViide} type="text" /> <br />
      <button onClick={lisaHindVormist}>Lisa</button> 
      <br /><br />
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={filtreeriSuuremadKui30}>Jäta alles suuremad kui 30</button>
      <button onClick={lisaHind}>Lisa hind 1234</button>
      {/*           11      0     */}
       {/*          22      1     */}
      {/*           55      2     */}
      {hinnad.map((hind, jrknr) => 
        <div key={jrknr}>
          {hind} 
          <button onClick={() => kustuta(jrknr)}>x</button> 
          <button onClick={() => lisa(hind)}>+</button> 
          <button onClick={() => alerdi(hind)}>Viska välja alert</button> 
          <button onClick={() => korrutaKahega(hind, jrknr)}>Korruta kahega</button> 
        </div> )}
    </div>
  )
}

export default Hinnad