import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CardsListPage from './pages/CardsListPage';

import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<CardsListPage />} />
          {/* <Rout path='/study' element={<StudyCards />} /> */}
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
