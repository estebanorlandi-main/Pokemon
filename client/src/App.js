import { Route, Routes } from "react-router";

import Landing from "pages/Landing/Landing";
import Home from "pages/Home";
import Pokemon from "pages/Pokemon/Pokemon";

import "./App.css";
import { Navbar } from "components/Navbar/Navbar";
import { HomeType } from "pages/Home/HomeType";
import { HomeDefault } from "pages/Home/HomeDefault";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/" element={<HomeDefault />} />
          <Route path="/home/:type" element={<HomeType />} />
        </Route>
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
