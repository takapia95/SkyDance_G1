import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js";
import Photos from "./components/Photos";
import NavBar from "./components/NavBar"
import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/photos" element={<Photos/>} />
          <Route path="/nav" element={<NavBar/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
