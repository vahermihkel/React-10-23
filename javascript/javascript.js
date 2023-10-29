console.log("Töötab");
// teine funktsioon: uuenda / muuda / m22ra
// setQuantity()  <--- muutuja muutmiseks, AGA KA HTMLi muutmiseks
// const [i, setI] = useState(2);

// const vs let
let kogus = 3;
kogus = 4; // muudaKogus(4)
kogus = kogus + 1; // muudaKogus(kogus + 1)
kogus = kogus + 1;
kogus = kogus + 1;
console.log(kogus);

let nimi = "Anne";
nimi = nimi + 1;
console.log(nimi);

const pi = 3.18;
console.log(pi);

let aktiivne = true;
console.log(aktiivne);

if (aktiivne) {
  console.log("LÄKSIN!!"); // kas läheb siia või üldse mitte kuhugi
}

if (aktiivne === true) { // läheb kumbagi, mitte kunagi mõlemasse, mitte kunagi mitte kummassegi
  console.log("LÄKSIN ülemisse blokki"); // läksin siia
} else {
  console.log("LÄksin alumisse blokki"); // või läksin siia
}

if (kogus > 10000) {
  console.log("Legendaarne");
} else {
  console.log("Kurb");
}

if (nimi.startsWith("A")) { // .endsWith()  .includes()   .length > 5
  console.log("Algab A'ga");
} else {
  console.log("Ei alga A'ga");
}


const sonad = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// .filter() jätab originaali alles esialgsesse muutujasse
const result = sonad.filter(word => word.length > 6); 

const resultNew = [];
sonad.forEach(word => {
  if (word.length > 6) {
    resultNew.push(word);
  }
});

console.log(sonad); // <-- siin on ikka originaalne alles
console.log(result); // <-- siin on tulem
console.log(resultNew);

// .length <-- sõna jaoks
// .filter() ja .forEach() <-- array jaoks


const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort((a,b) => a.localeCompare(b));
console.log(months);

// .sort() <-- array jaoks
// .localeCompare <-- sõna jaoks


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice());

// .slice() <--- array jaoks
// on tähtis Reacti useState jaoks, et oskaks uuendada HTMLi array osas



const array1 = [3, 12, 33, 11];

// Pass a function to map
const map1 = array1.map((x) => x * 2);
// React on selle tavalise JavaScripti funktsionaalsuse nö üle võtnud
const map2 = array1.map((x) => "<div>{x}</div>");

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

console.log(map2);


const loomad = ['pigs', 'goats', 'sheep'];

loomad.push('cows');
loomad.push('horses');
loomad.push('lambs');
console.log(loomad);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

loomad.push('chickens', 'cats', 'dogs');
console.log("Peale 3-e asja juurde lisamist:");
console.log(loomad); //     0        1          2       3       4           5       6         7       8
// Expected output: Array ['pigs', 'goats', 'sheep', 'cows', 'horses', 'lambs', 'chickens', 'cats', 'dogs']

loomad.splice(0, 1); // esimene on mitmendat alustades 0st, teine on mitu tükki
console.log("Peale esimese asja kustutamist:");
console.log(loomad);

loomad.splice(0, 1)
console.log("Peale jälle esimese asja kustutamist:");
console.log(loomad);

loomad.splice(6, 1)
console.log("Peale viimase asja kustutamist:");
console.log(loomad);

// .delete(0) esimest     .remove(4) viiendat


const kuupaev = new Date();
console.log(kuupaev)
const kuupaev2 = new Date("2023-10-27");
console.log(kuupaev2)
const kuupaev3 = new Date("2023-10-25");
console.log(kuupaev3)
const kuupaev4 = new Date("2023-10-28");
console.log(kuupaev4)
const kuupaevad = [kuupaev, kuupaev2, kuupaev3, kuupaev4];
kuupaevad.sort((a,b) => a - b);
console.log(kuupaevad);

const tana = new Date();
console.log(tana);
const tahtaeg = new Date(tana);
tahtaeg.setDate(tana.getDate() + 3);

if (tana > tahtaeg) {
  // kirjuta midagi või tee midagi
  console.log(tana);
  console.log(tahtaeg);
}

const month = kuupaev.getMonth(); // 9    (algab 0st)
const year = kuupaev.getFullYear(); // 2023
const day = kuupaev.getDate(); // 29
const nr = kuupaev.getDay(); // 6 <--- pühapäev

