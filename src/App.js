import React from 'react';
import Home from './Componenst/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='signin' element={<Login/>} />
        </Routes>
    </>
  );
}

export default App;
