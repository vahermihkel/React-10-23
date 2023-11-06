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
      <div>Toote nimi: { leitudToode }</div>
      <div>Toote järjekorranumber: { toote_indeks }</div>
      <div>Toote pilt: TOOTE_PILT</div>
      <div>Toote hind: TOOTE_HIND</div>
    </div>
  )
}

export default YksikToode