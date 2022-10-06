import React from 'react';
import './SliderStyles.css';
import Drcinco from '../../Assets/Drcinco.jpg';
import Drcuatro from '../../Assets/Drcuatro.jpg';
import Drseis from '../../Assets/Drseis.jpg';
import Druno from '../../Assets/Druno.jpg';
import Drdos from '../../Assets/Drdos.jpg';
import Drtres from '../../Assets/Drtres.jpg';
import Drsiete from '../../Assets/Drsiete.jpg';
import Drocho from '../../Assets/Drocho.jpg';
import Drnueve from '../../Assets/Drnueve.jpg';




const Slider = () => {
  return (

    <div className='Container-principal'>

<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  
  <div className="carousel-inner">

    <div className="carousel-item active" data-bs-interval="10000">
      
      <div className="row row-cols-1 row-cols-md-4 g-3">
       
       <div className="col">
       <div className="card h-100">
      <img src={Drcinco} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Dra Maria Castillo</h5>
        <p className="card-text">
        Neurologia
        <br />Reumatologia
        <br /> Fisioterapia 

        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Mar. a Jue. 9am a 5pm</small>
        <button type="button" class="btn btn-dark">Agendar</button>
      </div>
    </div>
       </div>
  
       <div className="col">
    <div className="card h-100">
      <img src={Drcuatro} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Dra Martha Pereira</h5>
        <p className="card-text">Radiologia
        <br />Traumatologia
        <br /> Reumatologia 

        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Lun. a Vie. 9am a 5pm</small>
        <button type="button" class="btn btn-dark">Agendar</button>
      </div>
    </div>
       </div>


       <div className="col">
    <div className="card h-100">
      <img src={Drseis} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Dra. Mariela Melendez</h5>
        <p className="card-text">Neurologia
        <br />Traumatologia
        <br /> Reumatologia 
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Lun. a Vie. 9am a 5pm</small>
        <button type="button" class="btn btn-dark">Agendar</button>
      </div>
    </div>
       </div>

       <div className="col">
    <div className="card h-100">
      <img src={Drnueve} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Lic. Jenny Paredes</h5>
        <p className="card-text">
        Fisioterapia
        <br />Traumatologia
        <br /> Deportiva  
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Mar. a Jue. 9am a 5pm</small>
        <button type="button" class="btn btn-dark">Agendar</button>
      </div>
    </div>
       </div>

      </div>

      </div>

      <div className="carousel-item" data-bs-interval="2000">
      <div className="row row-cols-1 row-cols-md-4 g-3">
       
       <div className="col">
       <div className="card h-100">
      <img src= {Druno} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
       </div>
  
       <div className="col">
    <div className="card h-100">
      <img src={Drdos} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
       </div>


       <div className="col">
    <div className="card h-100">
      <img src={Drseis} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
       </div>

       <div className="col">
    <div className="card h-100">
      <img src={Drnueve} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
       </div>

      </div>

      </div>

    <div className="carousel-item">
    <div className="row row-cols-1 row-cols-md-4 g-3">
       
       <div className="col">
       <div className="card h-100">
      <img src={Drsiete} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
       </div>
  
       <div className="col">
    <div className="card h-100">
      <img src={Drocho} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
       </div>


       <div className="col">
    <div className="card h-100">
      <img src={Drnueve} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
       </div>

       <div className="col">
    <div className="card h-100">
      <img src={Drnueve} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
       </div>

      </div>

    </div>

<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

    
    </div>
    </div>
    </div>
    

  )
}

export default Slider;