
    import React from 'react';
    import './NavbarStyle.css';
  import logo2 from '../../Assets/logo2.jpeg' ;


    const Navbar = () => {
      return (
        <div className='Container-navuno'>

<div className="logo">

<h1>Fisio-Roque</h1>

</div>

<ul className='barra'>
    
<a href="#">Inicio</a>
<a href="#">| Tratamientos</a> 
<a href=""> | Terapias </a>
<a href="#">| Unete a nosotros </a>
<a href="">| VideoBlog</a>
<a href="">| Contactanos</a>
    
</ul>



        </div>
      )
    }
    
    export default Navbar;