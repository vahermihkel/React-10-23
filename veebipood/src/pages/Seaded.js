import React, { useState } from 'react'

function Seaded() {
  // useState on HTMLs muutujate muutmine
  // HTMLs mingi sisu teisiti kuvamine ehk dünaamika
  const [keel, muudaKeel] = useState(localStorage.getItem("keel") || "ee");

  const uuendaKeelEE = () => {
    muudaKeel("ee");
    // localStorage on sissekirjutatud muutuja täpselt nagu console. 
    // setItem on sissekirjutatud funktsioon, 
    //        mis eksisteerib localStorage-l täpselt nagu .log() eksisteerib consolel
    localStorage.setItem("keel", "ee");
  }

  const uuendaKeelEN = () => {
    muudaKeel("en");
    localStorage.setItem("keel", "en");
  }

  const uuendaKeelRU = () => {
    muudaKeel("ru");
    localStorage.setItem("keel", "ru");
  }

  return (
    <div>
      {keel === "ee" && <div>Leht on eesti keelne</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "ru" && <div>Cтpaницaтa e на английски</div>}
      <button className={keel === "ee" ? "aktiivne" : undefined} onClick={uuendaKeelEE}>Estonian</button>
      <button className={keel === "en" ? "aktiivne" : undefined} onClick={uuendaKeelEN}>English</button>
      <button className={keel === "ru" ? "aktiivne" : undefined} onClick={uuendaKeelRU}>Russian</button>
    </div>
  )
}

export default Seaded