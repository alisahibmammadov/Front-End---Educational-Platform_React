import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Crslone from '../../assets/images/crsl-4.jpg'
import Crsltwo from '../../assets/images/crsl-5.jpg'

const Homecarousel = () => {
  return (
    <div className='container-fluid home-carousel-bg'>
        <div className='container home-carousel-page'>
        <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={Crslone}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Are you ready to study? <br /> <h6> We have the <span>SOLUTION</span> </h6> </h3>
          <p>Ugh chambray lumbersexual food artisan meditation sartorial well post-ironic wes</p>
          <button>BUY NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block  w-100"
          src={Crsltwo}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Next year more intersting? <br /> <h6> Check next <span>FEATURES</span> </h6> </h3>
          <p>Ugh chambray lumbersexual food artisan meditation sartorial well post-ironic wes</p>
          <button>BUY NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    </div>
  )
}

export default Homecarousel