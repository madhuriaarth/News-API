import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Articles from "../Articles_Component/Articles";
import Dashboard from "../Dashboard_Component/Dashboard";

function Routing() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Articles</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* <li>
            <Link to="/blog">Blog</Link>
          </li> */}
        </ul>
        <Routes>
          <Route exact path="/" element={<Articles />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Routing;
