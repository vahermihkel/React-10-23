import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"

function YksikToode() {
  const { toote_indeks } = useParams();
  const leitudToode = tootedFailist[toote_indeks];
  // kui tahan leida õiget toodet, võtan kõik tooted ja panen kandilised sulud lõppu, mille sisse indeksi (jrknr)

  if (leitudToode === undefined) {
    return (<div>Pilt / Toodet ei leitud</div>)
  }

  return (
    <div>
      <img src={leitudToode.pilt} alt="" />
      <div>Toote nimi: {leitudToode.nimi}</div>
      <div>Toote järjekorranumber: {toote_indeks}</div>
      {/* <div>Toote pilt: TOOTE_PILT</div> */}
      <div>Toote hind: {leitudToode.hind}</div>
    </div>
  )
}

export default YksikToode