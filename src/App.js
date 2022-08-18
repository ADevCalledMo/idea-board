import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Ideas from "./components/Ideas";
import "./App.css";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
