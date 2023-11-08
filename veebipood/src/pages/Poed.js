import React, { useRef, useState } from 'react'
import poedFailist from "../data/poed.json" 
import { Link } from 'react-router-dom';

function Poed() {
  const [poed, muudaPoed] = useState(poedFailist.slice());
  const poodViide = useRef(); // viide <- tõlge referencest, mis on ref lühidalt

  const originaali = () => {
    muudaPoed(poedFailist.slice());
  }

  const sorteeriAZ = () => {
    //poed.sort();
    poed.sort((a,b) => a.nimi.localeCompare(b.nimi));
    muudaPoed(poed.slice()); // slice kustutab ära mälukoha
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.nimi.localeCompare(a.nimi));
    muudaPoed(poed.slice()); // slice kustutab ära mälukoha
  }

  const sorteeriTahedKasvavalt = () => {
    poed.sort((a,b) => a.nimi.length - b.nimi.length); // sorteerimiseks
    muudaPoed(poed.slice()); // HTMLi muutmiseks
  }

  const sorteeriTahedKahanevalt = () => {
    poed.sort((a,b) => b.nimi.length - a.nimi.length); // sorteerimiseks
    muudaPoed(poed.slice()); // HTMLi muutmiseks
  }

  const sorteeriKolmandaTaheJargi = () => {                       //  012345678
    poed.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2])); // sorteerimiseks   Kristiine
    muudaPoed(poed.slice()); // HTMLi muutmiseks
  }

  const sorteeriSonadeArvuJargi = () => {                       //  012345678
    poed.sort((a,b) => a.nimi.split(" ").length - b.nimi.split(" ").length); // sorteerimiseks   Kristiine
    muudaPoed(poed.slice()); // HTMLi muutmiseks
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi.endsWith("e"));
    muudaPoed(vastus);
  }

  const filtreeriKesSisaldabIsLyhendit = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi.includes("is"));
    muudaPoed(vastus);
  }

  const filtreeriKellelOn9Tahte = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi.length === 9);
    muudaPoed(vastus);
  }

  const filtreeriKellelOnVahemalt7Tahte = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi.length >= 7);
    muudaPoed(vastus);
  }

  const filtreeriKellelOnKolmasTahtI = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi[2] === 'i');
    muudaPoed(vastus);
  }

  const filtreeriKellelOnRohkemKui1Sona = () => {
    const vastus = poedFailist.filter(yksPood => yksPood.nimi.split(" ").length > 1);
    muudaPoed(vastus);
  }

  // antakse tööülesanne
  // 1. vaatate sellest samast projektist kus arendust tegema peab, kas on sarnast asja tehtud
  // 2. otsite enda olemasolevatest projektidest näidet, kas olete sama asja teinud
  // 3. googeldate, küsite chatGPT (2h-3h, 2 päeva)
  // 4. töökaaslane

  // 1. Poed.js failis, lisa 2 labelit ja inputi juurde (aadress ja telefon)
  // 2. Lisa 2 useRefi juurde mõlemale uuele inputile
  // 3. Pushi objekt
  // 4. Kui pushid, siis võtmete väärtused tulevad ref.current.value kaudu
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
      <div>{poed.length} tk</div>

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
        <div key={yksPood.nimi} className="pood">
          {yksPood.nimi}
          <button onClick={() => kustuta(index)}>x</button>
          {/*App.js failis: path="yksik-pood/:poe_indeks" */}
          <Link to={"/yksik-pood/" + index}>
            <button>Vaata detailsemalt</button>
          </Link>
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

