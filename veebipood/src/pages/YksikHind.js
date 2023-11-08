import React from 'react'
import { useParams } from 'react-router-dom'

function YksikHind() {
  //App.js path="yksik-hind/:hinna_indeks/test/:hind_vaartus"
  const { hinna_indeks, hind_vaartus } = useParams();
  // const params = useParams();



  return (
    <div>
      <div>Indeks: {hinna_indeks}</div>
      {/* <div>Indeks: {params.hinna_indeks}</div> */}

      <div>Väärtus: {hind_vaartus}</div>
        {/* <div>Väärtus: {params.hind_vaartus}</div> */}
    </div>
  )
}

export default YksikHind