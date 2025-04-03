import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Topic1 from "./pages/Topic1";
import Topic2 from "./pages/Topic2";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <nav style={{ width: "200px", padding: "1rem", background: "#f4f4f4", height: "100vh" }}>
          <h2>AI Concepts</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/topic1">Topic 1</Link></li>
            <li><Link to="/topic2">Topic 2</Link></li>
          </ul>
        </nav>
        <main style={{ flex: 1, padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topic1" element={<Topic1 />} />
            <Route path="/topic2" element={<Topic2 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
