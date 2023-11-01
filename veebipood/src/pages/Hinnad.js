import React, { useState } from 'react'

function Hinnad() {                 //     0   1  2  3 4  5   6 7 8
  const [hinnad, uuendaHinnad] = useState([11,22,55,44,8,123,23,3,9]);

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

  return (
    <div>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={filtreeriSuuremadKui30}>Jäta alles suuremad kui 30</button>
      <button onClick={lisaHind}>Lisa</button>
      {/*           11      0     */}
       {/*          22      1     */}
      {/*           55      2     */}
      {hinnad.map((hind, jrknr) => 
        <div key={jrknr}>
          {hind} 
          <button onClick={() => kustuta(jrknr)}>x</button> 
        </div> )}
    </div>
  )
}

export default Hinnad