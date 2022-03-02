import { Route, Routes } from "react-router";

import Landing from "pages/Landing/Landing";
import Home from "pages/Home";
import Pokemon from "pages/Pokemon/Pokemon";
import PokemonList from "components/PokemonList/PokemonList";
import { Error404 } from "pages/404/404";

import "./App.css";
import { Errors } from "components/Errors/Errors";

function App() {
  return (
    <div className="App">
      <Errors />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/" element={<PokemonList />} />
          <Route path="/home/:type" element={<PokemonList />} />
        </Route>
        <Route path="/pokemon/:id" element={<Pokemon />}></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
