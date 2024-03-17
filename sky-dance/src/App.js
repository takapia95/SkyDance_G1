import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js";
import Mars from "./components/Mars";
import Photos from "./components/Photos";
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import './App.css'; 

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/photos" element={<Photos/>} />
          <Route path="/mars" element={<Mars/>} />
          <Route path="/about-us" element={<AboutUs/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
