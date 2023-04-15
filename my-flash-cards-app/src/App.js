import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './Navbar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/study' element={<StudyCards />} /> */}
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
