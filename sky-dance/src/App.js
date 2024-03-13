import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js";
import Photos from "./components/Photo.js";
import NavBar from "./components/NavBar";
import Header from './components/Header'
import './App.css'; 

function App() {
  return (
    <div>
    <Header/>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          
          <Route path="/nav" element={<NavBar/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
