import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Search from './Pages/Search';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
