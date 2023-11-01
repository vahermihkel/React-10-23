import React, { useState } from 'react'

// tumesinine - JavaScriptis määratlus: function, const, let
//              HTMLs: <div>   <a>   <p>  <button>
//              JavaScriptis reserveeritud sõnad: false, true, undefined, null
// tavaline sinine - JavaScriptis muutujad (oleme need ise loonud)
//                   HTMLs muutujad (oleme need loonud JavaScriptis)
// helesinine - JavaScriptis sissekirjutatud muutujad    console.log()   localStorage.getItem()
// kollane - funktsioon, sulud käivad lõppu, mida on võimalik korduvalt välja kutsuda
// oranž/punane - jutumärkides sõnad
// tumeroheline - kommentaar
// heleroheline - numbrilised väärtused
// valged - märgid, HTMLs väljanäidatav tekst
// lillad - tegevused, import, export, return, if, else
//{{{{{{{{{{{{[[{{{([((([()])))])}}}]]}}}}}}}}}}}}

// loogelised sulud {} - JavaScript: koodiblokk    function {}  if() {} else {}
//                        HTML: JavaScript ehk dünaamika koodiblokk
//                      on useBLABLA ees kui muutujate arv on valikuline
// tavalised sulud - funktsiooni väljakutse      Avaleht()     muudaKogus(5)    if () <-- kontroll
// kandilised sulud - useState juures, sellepärast et meil läheb TÄPSELT kahte vaja: muutujat ja funktsiooni
// ; - semikoolon kui rea lõpetaja, pole kohustuslik, aga suur osa ettevõtetest paneb kohustuslikuks
// = - väärtuse andja, = useState, disabled={}, onClick={}
// === - vasak ja parem pool on võrdsed
// >   <   <=   >=    suurem, väiksem, väiksem võrdne, suurem võrdne
// && - kui vasakul pool on tõde, siis on parem pool nähtav
// ! - keerab väärtust tagurpidi
// () =>   funktsiooni tähis HTMLs kui tehakse onClick

function Avaleht() {
  // vasakpoolne sõna (muutuja) läheb HTMLi loogeliste sulgude sisse
  // parempoolse sõna (funktsiooni) abil uuendatakse vasakpoolset ja HTMLi korraga
  const [kogus, muudaKogus] = useState(localStorage.getItem("kogus") || 0);
  const [laigitud, uuendaLaigitud] = useState(false); // true/false, täisealine, makstud, aktiivne
  const [sonum, m22raSonum] = useState("Muuda kogust!");

  function nulli() {
    m22raSonum("Nullitud!");
    muudaKogus(0);
    // console.log()
    // localStorage.getItem("")
    localStorage.setItem("kogus", 0);
  } // <------------

  function vahenda() {
    m22raSonum("Vähendatud!");
    muudaKogus(kogus - 1);
    localStorage.setItem("kogus", kogus - 1);
  } // <------------

  function suurenda() {
    m22raSonum("Suurendatud!");
    muudaKogus(kogus + 1); 
    // sonum = "Suurendatud";
    // document.getElementById("sonum").innerText = "Suurendatud";
    // kogus = kogus + 1;
    // console.log(kogus);
    // HTMLi muutmiseks:
    // a) muudaKogus(kogus + 1); 
    // b) document.getElementById("kogus").innerText = kogus;
    // miks kasutada useState funktsionaalsust document.getElementById asemel:
    // 1. muutuja muutub igal pool HTMLs, aga kui document.getElementById siis ainult seal kus ise ütlen
    // 2. efektiivsem, käib ainult selle faili HTMLi läbi, muidu käbi kogu HTMLi läbi
    // 3. võib kogemata olla kaks sama ID-ga elementi

    localStorage.setItem("kogus", kogus + 1);
    // () => ei panema. () => on onClick sees
  }

  return (
    <div>
      {/*  */}
      <div id="sonum">{sonum}</div>
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
      <span id="kogus" className={kogus >= 10 ? "kuldne" : undefined}>Kokku: {kogus} tk</span>
      <button onClick={() => suurenda()}>+</button>
    </div>
  )
}

export default Avaleht