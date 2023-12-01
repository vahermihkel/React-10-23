import React, { useState } from 'react'
// import tootedFailist from '../data/tooted.json'
import { Link } from 'react-router-dom';

function HaldaTooted() {
    // const tootedLocalStoragest = JSON.parse(localStorage.getItem("tooted")) || [];
    // const [tooted, uuendaTooted] = useState(tootedLocalStoragest);


    const [tooted, uuendaTooted] = useState(JSON.parse(localStorage.getItem("tooted")) || []);

    const kustuta = (indeks) => {
        tooted.splice(indeks, 1);
        uuendaTooted(tooted.slice());
        localStorage.setItem("tooted", JSON.stringify(tooted));
    }

    // className={kogus >= 10 ? "kuldne" : undefined}
    // kui on toode aktiivne, näita teda rohelisena, kui on mitteaktiivne, näita punasena

    return (
        <div>
            {tooted.map((yksToode, indeks) =>
                <div key={indeks} className={yksToode.aktiivne === true ? "aktiivne-toode" : "mitteaktiivne-toode"}>
                    {/* {n2itaTooteid} */}
                    {/* Objects are not valid as a React child (found: object with keys {nimi, hind, aktiivne, pilt}) */}
                    <div>{yksToode.nimi}</div>
                    <div>{yksToode.hind}</div>
                    <div>{yksToode.pilt}</div>
                    <button onClick={() => kustuta(indeks)}>Kustuta toode</button>
                    <Link to={"/muuda-toode/" + indeks}>
                        <button>Muuda</button>
                    </Link>
                </div>)
            }
        </div>
    )
}

export default HaldaTooted