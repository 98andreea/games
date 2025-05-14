import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import App from "./App";
import About from "./pages/About";
import Boardgames from "./pages/Boardgames";
import Consola from "./pages/Consola";
import PCGames from "./pages/PCGames";
import Settings from "./pages/Settings";
import Font from "./components/Font";
import LightDark from "./components/LightDark";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Font>
        <LightDark>
          <Layout />
          <Routes>
            <Route index element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/boardgames" element={<Boardgames />} />
            <Route path="/consola" element={<Consola />} />
            <Route path="/pcgames" element={<PCGames />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </LightDark>
      </Font>
    </BrowserRouter>
  </React.StrictMode>
);
