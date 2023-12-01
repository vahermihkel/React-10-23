import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import tootedFailist from "../data/tooted.json"
 
function MuudaToode() {
  const tootedLocalStoragest = JSON.parse(localStorage.getItem("tooted")) || [];

  const {toote_jrknr} = useParams();
  const leitudToode = tootedLocalStoragest[toote_jrknr];
  const nimiViide = useRef(); // nameRef();
  const hindViide = useRef();
  const piltViide = useRef();
  const aktiivneViide = useRef();
  const navigate = useNavigate(); // on hook JavaScripti poole peal URLi muutmiseks

  const muuda = () => {
    tootedLocalStoragest[toote_jrknr] = {
      "nimi": nimiViide.current.value, 
      "hind": Number(hindViide.current.value), 
      "aktiivne": aktiivneViide.current.checked, 
      "pilt": piltViide.current.value
    };
    // Suuna teda haldamise lehele
    navigate("/halda");
    localStorage.setItem("tooted", JSON.stringify(tootedLocalStoragest));
  }

  // muutmine ja kustutamine käivad mõlemad AINULT järjekorranumbri alusel
 
  if (leitudToode === undefined) {
    return (<div>Toodet ei leitud</div>)
  }
 
  return (
    <div>
      <div>Järjekorranumber: {toote_jrknr} </div>
      <br />
      {/* <div>Toote nimi: {leitudToode} </div> */}
      <label>Toote nimi</label> <br />
      <input ref={nimiViide} type="text" defaultValue={leitudToode.nimi} /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltViide} type="text" defaultValue={leitudToode.pilt} /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindViide} type="number" defaultValue={leitudToode.hind} /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneViide} type="checkbox" defaultChecked={leitudToode.aktiivne} /> <br />
      <button onClick={muuda}>Muuda</button> <br />
    </div>
 
  )
}
 
export default MuudaToode


// VÕTMINE
// Get the value "Volvo" from the cars array.

// const cars = ["Saab", "Volvo", "BMW"];
// let x = cars[1];

// MUUTMINE
// Change the first item of cars to "Ford".


// const cars = ["Volvo", "Jeep", "Mercedes"];
// cars[0] = "Ford";