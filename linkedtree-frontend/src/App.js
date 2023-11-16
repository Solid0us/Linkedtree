import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/Pages/Homepage';
import MainNav from './components/Navbar';
import Admin from './components/Pages/Admin';

function App() {
  return (
    <>
    <div className="navDiv">
        <MainNav />
    </div>
      <div className="mainDiv">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
