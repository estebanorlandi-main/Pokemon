import { useEffect, useState } from "react";
import { getPokemons } from "./utils";

import "./App.css";

const colors = {
  grass: "#78c850",
  fire: "#f08030",
  water: "#6890f0",
  bug: "#a8b820",
  normal: "#a8a878",
  poison: "#a040a0",
  electric: "#f8d030",
  ground: "#e0c068",
  fairy: "#ee99ac",
  fighting: "#c03028",
  psychic: "#f85888",
  rock: "#b8a038",
  ghost: "#705898",
  ice: "#98d8d8",
  dragon: "#7038f8",
};

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((res) => {
      setPokemons(res.map(({ data }) => data));
    });
  }, []);

  return (
    <div className="App">
      {pokemons.map(({ id, name, types }) => (
        <div key={id}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          />
          <p>{name}</p>
          <ul>
            {types.map(({ type: { name } }) => (
              <li style={{ backgroundColor: colors[name] }}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
