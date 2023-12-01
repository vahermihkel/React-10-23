import React, { useRef, useState } from 'react'
// import tootedFailist from "../data/tooted.json"

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  // function lisa() {
  //   uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
  // }

  const lisa = () => {
    const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
    tooted.push({
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value), 
      "aktiivne": aktiivneRef.current.checked, 
      "pilt": piltRef.current.value
    });
    localStorage.setItem("tooted", JSON.stringify(tooted));

    uuendaSonum("Toode lisatud: " + nimiRef.current.value);
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Aktiivne</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode