//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <button className="nupu-stiil">Vajuta mind</button>
      <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
    
      <Routes>
        <Route path="avaleht" element={ <div>See on nähtav localhost:3000/avaleht aadressil</div> } />
        <Route path="ostukorv" element={ <div>See on nähtav localhost:3000/ostukorv aadressil <button>Lisa</button> </div> } />
        <Route path="lisa-toode" element={ <div>localhost:3000/lisa-toode aadress</div> } />
      </Routes>
    </div>
  );
}

export default App;
