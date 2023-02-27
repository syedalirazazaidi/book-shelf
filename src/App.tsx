import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./pages/banner";
import Search from "./pages/search";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <ul style={{textDecoration:'none',listStyleType:'none' }} >
        <li  >
          <Link to="/" style={{textDecoration:'none' }}>Banner </Link>
        </li>
        <li>
          <Link to="/search" style={{textDecoration:'none' }}>Search </Link>
        </li>
      </ul> */}
      <Routes>
    
        <Route path="/" element={<Banner />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
