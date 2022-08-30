import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Ideas from "./components/Ideas";
import "./App.css";
import Archived from "./components/Archived.js";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";

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
          <>
            <NavBar />
            <h1> Welcome to the Ideas Board </h1>
          </>
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
