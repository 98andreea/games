// App.jsx
import { Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div>
      <h1>Bine ai venit în aplicația Games!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">Despre</Link>
          </li>
          <li>
            <Link to="/boardgames">Board Games</Link>
          </li>
          <li>
            <Link to="/consola">Consolă</Link>
          </li>
          <li>
            <Link to="/pcgames">PC Games</Link>
          </li>
          <li>
            <Link to="/settings">Setări</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App; // Asigură-te că folosești export default
