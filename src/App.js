import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import Ideas from "./components/Ideas";
import "./App.css";
import Archived from "./components/Archived.js";
import NotFound from "./components/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        {!isLoggedIn ? (
          <h1> Please Login: </h1>
        ) : (
          <h1> Welcome to the Ideas Board </h1>
        )}
        <button onClick={handleLoginClick} disabled={isLoggedIn}>
          Login
        </button>
        <button onClick={handleLogoutClick} disabled={!isLoggedIn}>
          Logout
        </button>
      </div>
      {isLoggedIn && (
        <div className="App">
          <nav className="App__navbar">
            <ul>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "green" : "blue",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ideas/"
                  style={({ isActive }) => ({
                    color: isActive ? "green" : "blue",
                  })}
                >
                  Ideas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ideas/Archived"
                  style={({ isActive }) => ({
                    color: isActive ? "green" : "blue",
                  })}
                >
                  Archived Ideas
                </NavLink>
              </li>
            </ul>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ideas/" element={<Ideas />} />
              <Route path="/ideas/Archived" element={<Archived />} />
              <Route element={<NotFound />} />
            </Routes>
          </main>
        </div>
      )}
    </Router>
  );
}

export default App;
