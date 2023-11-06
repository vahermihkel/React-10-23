import React from 'react'
import { useParams } from 'react-router-dom'
import poedFailist from "../data/poed.json"

function YksikPood() {
  // hookid:
  // useState - andmete muutmiseks HTMLs      React
  // useRef - inputi seest väärtuste kättesaamiseks    React
  // useParams - URLst muutujate kättesaamiseks      react-router-dom
  // useNavigate - navigeeri mitte HTMLs vaid JavaScripti poole peal uuele URL-le
  // useTranslation - tõlkimiseks
  // useEffect - API päringuteks ehk teistesse rakendustesse ligi pääsemiseks
  //            Omniva pakiautomaadid
  // useContext - andmete failide vahel saatmiseks

  // Hookide Reeglid:
  // 1. algavad use algusega, selle on React ise valinud
  // 2. peab importima
  // 3. neil peavad olema sulud lõpus
  // 4. nad ei tohi olla funktsiooni sees loodud
  // 5. nad ei tohi olla tingimuslikult loodud

  const { poe_indeks } = useParams();
  // useParams on URL muutuvate kohtade kättesaamiseks
  const leitudPood = poedFailist[poe_indeks];

  if (leitudPood === undefined) { // undefined on tühjus, seda ei leitud
    return (<div>Pilt / Toodet ei leitud</div>)
  }

  return (
    <div>
      <div>Järjekorranumber: { poe_indeks }</div>
      <div>Poe nimi: { leitudPood }</div>
      <div>Telefon: POE_TELEFON</div>
      <div>Aadress: POE_AADRESS</div>
    </div>
  )
}

export default YksikPood