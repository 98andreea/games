// App.jsx
import { Link } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import About from "./pages/About";
import Boardgames from "./pages/Boardgames";
import Consola from "./pages/Consola";
import PCGames from "./pages/PCGames";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/boardgames"
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          }
        >
          Boardgames
        </NavLink>

        <NavLink
          to="/consola"
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          }
        >
          Consola
        </NavLink>

        <NavLink
          to="/pcgames"
          className={({ isActive }) =>
            isActive
              ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          }
        >
          PCGames
        </NavLink>
      </nav>
    </div>
  );
}

export default App;
