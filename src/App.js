import './index.css';
import { Routes, Route } from 'react-router-dom'

// Components folder

// Data

// Pages folder
import Home from './Pages/Homepage';
import Pokedex from './Pages/Pokedex';
import PokeIndex from './Pages/Pokeindex';
import Contact from './Pages/Contact';


export default function App() {

  

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pokedex" element={<Pokedex />} /> {/* pData={pData} pokeInputChange={pokeInputChange} collectAndSend={collectAndSend} */}
          {/* creating props that cold information to pass in another component */}
          <Route path="/PokeIndex" element={<PokeIndex />} />
          <Route path="/Contact" element={<Contact />} />


        </Routes>
      </div>
    </>
  );
}


