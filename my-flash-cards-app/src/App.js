import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './pages/Home';
import Study from './pages/Study';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/study' element={<Study />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
