import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Man from './components/Man/Man'
import Women from './components/Women/Women'
import Kids from './components/Kids/Kids'


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='man/*' element={<Man />} />
        <Route path='women/*' element={<Women />} />
        <Route path='kids/*' element={<Kids />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;