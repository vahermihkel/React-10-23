import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!");
  const inputiLuger = useRef();

  // function lisa() {
  //   uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
  // }

  const lisa = () => {
    uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toode</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode