import React, { useState } from 'react'

function Poed() {
  const [poed, muudaPoed] = useState(["Ülemiste", "Viimsi", "Rocca al Mare",  "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);

  const sorteeriAZ = () => {
    //poed.sort();
    poed.sort((a,b) => a.localeCompare(b));
    muudaPoed(poed.slice()); // slice kustutab ära mälukoha
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.localeCompare(a));
    muudaPoed(poed.slice()); // slice kustutab ära mälukoha
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = poed.filter(yksPood => yksPood.endsWith("e"));
    muudaPoed(vastus);
  }

  const filtreeriKesSisaldabIsLyhendit = () => {
    const vastus = poed.filter(yksPood => yksPood.includes("is"));
    muudaPoed(vastus);
  }

  const originaali = () => {
    muudaPoed(["Ülemiste", "Viimsi", "Rocca al Mare",  "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);
  }

  return (
    <div>
      <button onClick={originaali}>Tagasi originaali</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={filtreeriEgaLoppevad}>Filtreeri e-ga lõppevad</button>
      <button onClick={filtreeriKesSisaldabIsLyhendit}>Jäta alles kellel on 'is' lühend</button>
      {poed.map(yksPood => <div className="pood">{yksPood}</div> )}
      {/* <div className="pood">Ülemiste</div>
      <div className="pood">Viimsi</div>
      <div className="pood">Rocca al Mare</div>
      <div className="pood">Magistrali</div>
      <div className="pood">Vesse</div>
      <div className="pood">Kristiine</div>
      <div className="pood">Järveotsa</div> */}
    </div>
  )
}

export default Poed