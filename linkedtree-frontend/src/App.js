import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import {
  Navbar,
  Nav,
  Container,
  Col,
  NavDropdown
} from "react-bootstrap"; */

import HomePage from './components/Pages/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
