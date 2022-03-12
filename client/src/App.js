import { Route, Routes, useLocation } from 'react-router';

import Landing from 'pages/Landing/Landing';
import Home from 'pages/Home';
import Pokemon from 'pages/Pokemon/Pokemon';
import PokemonList from 'components/PokemonList/PokemonList';
import Navbar from 'components/Navbar/Navbar';
import Error404 from 'pages/404/404';
import Errors from 'components/Errors/Errors';

import './App.css';

function App() {
  const location = useLocation();
  const isPokemon = location.pathname.includes('/pokemon');

  return (
    <div className="App">
      <Errors />
      {!isPokemon ? <Navbar /> : undefined}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/" element={<PokemonList />} />
          <Route path="/home/:type" element={<PokemonList />} />
        </Route>
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
