import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AboutPages from '../Pages/AboutPages';
import HomePages from '../Pages/HomePages';
import UserPages from '../Pages/UserPages';

const Rutas = () => {
  return (

   < BrowserRouter>
   <Routes>
    
    <Route path="/" element={<HomePages/>}/>
    <Route path="/about" element={<AboutPages/>}/>
    <Route path="/usuarios" element={<UserPages/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Rutas;