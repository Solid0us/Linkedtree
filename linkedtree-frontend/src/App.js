import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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
