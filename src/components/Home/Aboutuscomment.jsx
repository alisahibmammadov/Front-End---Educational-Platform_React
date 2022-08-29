import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Logo1 from '../../assets/images/2teach.png'
import Logo2 from '../../assets/images/3teach.png'


const Aboutuscomment = () => {
  return (
    <div className='container-fluid aboutuscomment-page'>
        <Carousel>
        <Carousel.Item interval={1000}>
            <div className='container center'>
                <img src={Logo1} alt="Logo1" />
                <h6>CAROLL M. DAVIS</h6>
                <p>Web Designer</p>
                <span>Stumptown polaroid skateboard single-origin coffee. Farm-to-table Vice authentic Truffaut put a bird on it, pug ethical tousled photo booth gluten-free cliche bicycle rights four dollar toast single-origin coffee taxidermy.</span>
            </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <div className='container center'>
                <img src={Logo2} alt="Logo1" />
                <h6>JOHN L. SMITH</h6>
                <p>CEO Founder</p>
                <span>Stumptown polaroid skateboard single-origin coffee. Farm-to-table Vice authentic Truffaut put a bird on it, pug ethical tousled photo booth gluten-free cliche bicycle rights four dollar toast single-origin coffee taxidermy.</span>
            </div>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Aboutuscomment