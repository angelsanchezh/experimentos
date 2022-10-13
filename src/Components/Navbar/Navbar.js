
import React from 'react';
import './NavbarStyle.css';
import logo2 from '../../Assets/logo2.jpeg';


const Navbar = () => {
  return (

    <div className='Container-superior'>

      <div className="Container-Contacto">



        <i class="bi bi-geo-fill">
          <a href="https://goo.gl/maps/gneVKMLaSu7evGUk8" target="_blank" rel='noreferrer'>Av Perú Nro 429 Dos de Mayo - Chimbote</a></i>

        <i class="bi bi-phone-vibrate"> <a href="tel:942033303" target="_blank" rel='noreferrer'>968 914 073</a> </i>
        <i class="bi bi-whatsapp"><a href="https://wa.me/511946589821" target="_blank" rel='noreferrer'>+51 968 914 073</a> </i>
        <i class="bi bi-envelope-paper-fill"><a href='mailto:elmeroque@gmail.com' target="_blank" rel='noreferrer'>elmeroque@gmail.com</a></i>

        <div className="Redes">
          <a href="https://www.linkedin.com/" target="_blank" rel='noreferrer'>
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel='noreferrer' >
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel='noreferrer' >
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://goo.gl/maps/gneVKMLaSu7evGUk8" target="_blank" rel='noreferrer'>
            <i class="bi bi-geo-alt"></i>
          </a>

        </div>


      </div>

      <div className='Container-navuno'>

        <div className="logo">

          <img src={logo2} alt="" />

        </div>
        <div className='Barra'>
          
          <ul>

            <a href="#">Inicio</a>
            <a href="#">Tratamientos</a>
            <a href="#"> Terapias </a>
            <a href="#"> Unete a nosotros </a>
            <a href="#"> VideoBlog</a>
            <a href="#"> Contactanos</a>

          </ul>

        </div>

      </div> </div>
  )
}

export default Navbar;