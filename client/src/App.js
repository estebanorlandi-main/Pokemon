import { Route, Routes } from "react-router";

import Landing from "pages/Landing/Landing";
import Home from "pages/Home";
import Pokemon from "pages/Pokemon/Pokemon";

import "./App.css";
import { HomeType } from "pages/Home/HomeType";
import { HomeDefault } from "pages/Home/HomeDefault";
import { Error404 } from "pages/404/404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/" element={<HomeDefault />} />
          <Route path="/home/:type" element={<HomeType />} />
        </Route>
        <Route path="/pokemon/:id" element={<Pokemon />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
