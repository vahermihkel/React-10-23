import React, { useRef, useState } from 'react'
import poedFailist from "../data/poed.json" 

function Poed() {
  const [poed, muudaPoed] = useState(poedFailist.slice());
  const poodViide = useRef(); // viide <- tõlge referencest, mis on ref lühidalt

  const originaali = () => {
    muudaPoed(poedFailist.slice());
  }

  const sorteeriAZ = () => {
    //poed.sort();
    poed.sort((a,b) => a.localeCompare(b));
    muudaPoed(poed.slice()); // slice kustutab ära mälukoha
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.localeCompare(a));
    muudaPoed(poed.slice()); // slice kustutab ära mälukoha
  }

  const sorteeriTahedKasvavalt = () => {
    poed.sort((a,b) => a.length - b.length); // sorteerimiseks
    muudaPoed(poed.slice()); // HTMLi muutmiseks
  }

  const sorteeriTahedKahanevalt = () => {
    poed.sort((a,b) => b.length - a.length); // sorteerimiseks
    muudaPoed(poed.slice()); // HTMLi muutmiseks
  }

  const sorteeriKolmandaTaheJargi = () => {                       //  012345678
    poed.sort((a,b) => a[2].localeCompare(b[2])); // sorteerimiseks   Kristiine
    muudaPoed(poed.slice()); // HTMLi muutmiseks
  }

  const sorteeriSonadeArvuJargi = () => {                       //  012345678
    poed.sort((a,b) => a.split(" ").length - b.split(" ").length); // sorteerimiseks   Kristiine
    muudaPoed(poed.slice()); // HTMLi muutmiseks
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.endsWith("e"));
    muudaPoed(vastus);
  }

  const filtreeriKesSisaldabIsLyhendit = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.includes("is"));
    muudaPoed(vastus);
  }

  const filtreeriKellelOn9Tahte = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.length === 9);
    muudaPoed(vastus);
  }

  const filtreeriKellelOnVahemalt7Tahte = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.length >= 7);
    muudaPoed(vastus);
  }

  const filtreeriKellelOnKolmasTahtI = () => {
    const vastus = poedFailist.filter(yksPood => yksPood[2] === 'i');
    muudaPoed(vastus);
  }

  const filtreeriKellelOnRohkemKui1Sona = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.split(" ").length > 1);
    muudaPoed(vastus);
  }

  // antakse tööülesanne
  // 1. vaatate sellest samast projektist kus arendust tegema peab, kas on sarnast asja tehtud
  // 2. otsite enda olemasolevatest projektidest näidet, kas olete sama asja teinud
  // 3. googeldate, küsite chatGPT (2h-3h, 2 päeva)
  // 4. töökaaslane

  const lisa = () => {
    poed.push(poodViide.current.value);
    muudaPoed(poed.slice());
    // console.log("KÄIVITUS");
  }

  // render <-- HTMLi väljakuvamine
  // re-render <-- HTMLi uuendamine (useState funktsiooni abil)

  const kustuta = (jrknr) => {
    poed.splice(jrknr, 1);
    muudaPoed(poed.slice());
  }

  return (
    <div>

      <label>Pood</label> <br />
      <input ref={poodViide} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>

      <button onClick={originaali}>Tagasi originaali</button>
      <br /><br />

      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähtede arv kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähtede arv kahanevalt</button>
      <button onClick={sorteeriKolmandaTaheJargi}>Sorteeri kolmanda tähe järgi</button>
      <button onClick={sorteeriSonadeArvuJargi}>Sorteeri sõnade arvu järgi</button>
      <br /><br />

      <button onClick={filtreeriEgaLoppevad}>Jäta alles 'e'ga lõppevad</button>
      <button onClick={filtreeriKesSisaldabIsLyhendit}>Jäta alles 'is' lühendiga</button>
      <button onClick={filtreeriKellelOn9Tahte}>Jäta alles kellel on 9 tähte</button>
      <button onClick={filtreeriKellelOnVahemalt7Tahte}>Jäta alles kellel on vähemalt 7 tähte</button>
      <button onClick={filtreeriKellelOnKolmasTahtI}>Jäta alles kellel on 3-s täht 'i'</button>
      <button onClick={filtreeriKellelOnRohkemKui1Sona}>Jäta alles kellel on rohkem kui 1 sõna</button>
      { poed.map((yksPood, index) => 
        <div key={yksPood} className="pood">
          {yksPood}
          <button onClick={() => kustuta(index)}>x</button>
        </div> )}
    </div>
  )
}

export default Poed


  //const telefonid = ["iPhone", "Samsung", "Huawei"];
  // const [telefonid, uuendaTelefonid] = useState(["iPhone", "Samsung", "Huawei"]);

  // const uuenda = () => {
  //   telefonid.sort(); // siia tuleb tagataustal ["Huawei", "iPhone", "Samsung"]
  //   uuendaTelefonid(telefonid.slice()); // sulgude sisse tuleb tagataustal ["Huawei", "iPhone", "Samsung"]
  // }                                     // aga ilma pärinemisjäljeta (mälukohata)

