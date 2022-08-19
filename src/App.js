import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Ideas from "./components/Ideas";
import "./App.css";

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
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ideas/Ongoing">Ideas</Link>
              </li>
              <li>
                <Link to="/ideas/Archived">Archived Ideas</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ideas/:stage" element={<Ideas />} />
            </Routes>
          </main>
        </div>
      )}
    </Router>
  );
}

export default App;
