import { Route, Routes } from "react-router";

import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
