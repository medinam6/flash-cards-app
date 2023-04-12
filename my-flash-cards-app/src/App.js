import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import CardsListPage from './pages/CardsListPage';
import AddCardPage from './pages/AddCardPage';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
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
