import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Slider from '../Components/Slider/Slider';
import Cover from '../Components/Cover/Cover';
import Tratamientos from '../Components/Tratamientos/Tratamientos';

const HomePages = () => {
  return (
    <div>
      <Navbar />
      <Cover />
      <Tratamientos/> 
      <Slider />


    </div>
  )
}

export default HomePages;