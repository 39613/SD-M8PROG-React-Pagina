import "./App.css";
import "./AboutMe/AboutMe.css";
import { AboutMe } from "./AboutMe/AboutMe.jsx";
import { Top10 } from "./Top10/Top10";
import { CookieClicker } from "./CookieClicker/CookieClicker";
import { Pokemon } from "./pokemon/Pokemon.jsx";
import { About } from "./About/About.jsx";
import { HashRouter, Link, Routes, Route } from "react-router";
import { Game } from "./Game/Game.jsx";
import { Contact } from "./Contact/Caontact.jsx";
function App() {
  return (
    <main className="Main">
      <div className="navbar">
        <ul className="list">
          <li className="listItem">
            <Link className="aLink" to="/">
              Home
            </Link>
          </li>
          <li className="listItem">
            <Link className="aLink" to="/game">
              Game
            </Link>
          </li>
          <li className="listItem">
            <Link className="aLink" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route index element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
