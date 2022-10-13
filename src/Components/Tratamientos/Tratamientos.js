import React from 'react';
import './TratamientoStyle.css';
import Terapia1 from '../../Assets/Terapia1.jpeg';
import Terapia2 from '../../Assets/Terapia2.jpeg';
import Terapia3 from '../../Assets/Terapia3.jpeg';
import Terapia4 from '../../Assets/Terapia4.jpeg';

const Tratamientos = () => {
  return (

    <div className='Container-Principal'>
       
       <div className="Texto-Cabecera">
        <p> Nuestras Terapias</p>
        <hr/>

       </div>
       

<div className="card1">
  <img src={Terapia1} className="card-img-top" alt="foto de terapia"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div className="card2">
  <img src={Terapia2} className="card-img-top" alt="foto de terapia"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div className="card3">
  <img src={Terapia3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div className="card4">
  <img src={Terapia4} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
  
  )
};


export default Tratamientos;