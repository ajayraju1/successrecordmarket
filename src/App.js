import { Routes, Route } from "react-router-dom";

import Header from "./Componets/Header";
import Home from "./Componets/Home";
import Research from "./Componets/Research";
import "./App.css";
const App = () => {
  return (
    <div className="app-container">
      <div className="responsive-container">
        <Header />
        <div className="body-body">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/research" element={<Research />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
