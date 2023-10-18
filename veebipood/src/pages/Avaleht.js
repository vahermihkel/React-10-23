import React, { useState } from 'react'

function Avaleht() {
  // vasakpoolne sõna (muutuja) läheb HTMLi loogeliste sulgude sisse
  // parempoolse sõna (funktsiooni) abil uuendatakse vasakpoolset ja HTMLi korraga
  const [kogus, muudaKogus] = useState(8);
  const [laigitud, uuendaLaigitud] = useState(false); // true/false
  const [sonum, m22raSonum] = useState("Muuda kogust!");

  function nulli() {
    m22raSonum("Nullitud!");
    muudaKogus(0);
  } // <------------

  function vahenda() {
    m22raSonum("Vähendatud!");
    muudaKogus(kogus - 1);
  } // <------------

  function suurenda() {
    m22raSonum("Suurendatud!");
    muudaKogus(kogus + 1);
    // () => ei panema. () => on onClick sees
  }

  return (
    <div>
      {/*  */}
      <div>{sonum}</div>
      {laigitud === true && kogus < 10 && <img src="/laigitud.svg" alt="" onClick={() => m22raSonum("Punane süda - sul on laigitud, aga kogus on vähem kui 10")} />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" onClick={() => m22raSonum("Läbipaistev süda - laikimata")}  />}
      {laigitud === true && kogus >= 10 && <img src="/legendaarne.svg" alt="" onClick={() => m22raSonum("Kuldne süda - laigitud ja kogus 10 või rohkem")} />}
      <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda laigitut</button>
      {/* {kogus > 0 && <button onClick={() => muudaKogus(0)}>Nulli</button>} */}
      <br />
      <br />
      <button disabled={kogus === 0} onClick={() => nulli()}>Nulli</button>
      <br />
      {/* {kogus > 0 && <button onClick={() => muudaKogus(kogus - 1)}>-</button>} */}
      <button disabled={kogus === 0} onClick={() => vahenda()}>-</button>
      <span>Kokku: {kogus} tk</span>
      <button onClick={() => suurenda()}>+</button>
    </div>
  )
}

export default Avaleht