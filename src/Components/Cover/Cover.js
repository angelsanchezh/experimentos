import React from 'react';
import banner2 from '../../Assets/banner2.png';
import './CoverStyle.css';

const Cover = () => {
  return (
    <div className='Container-Cover'>

<img src={banner2} alt="" />
<div className='Texto'>
<p> Aprenda a vivir </p>
<p className='segundo'> una vida sin dolor ...</p>

</div>
    </div>
  )
}

export default Cover;