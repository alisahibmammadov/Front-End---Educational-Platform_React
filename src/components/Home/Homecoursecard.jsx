import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from 'react-bootstrap/Carousel'
import Course1 from '../../assets/images/course-1.jpg'
import Course2 from '../../assets/images/course-2.jpg'
import Course3 from '../../assets/images/course-3.jpg'
import Course4 from '../../assets/images/course-4.jpg'
import Course5 from '../../assets/images/course-5.jpg'
import Course6 from '../../assets/images/course-6.jpg'
import Course7 from '../../assets/images/course-7.jpg'
import Course8 from '../../assets/images/course-8.jpg'
import Course9 from '../../assets/images/course-9.jpg'
import Cardprofil from '../../assets/images/card-profil.png'

const Homecoursecard = () => {

 const responsiveOlcu =  {
    0: {
        items: 1,
    },
    1080: {
        items: 3
    }
  }


  return (
    <div className='container-fluid homecoursecard'>
        <div className='container homecoursecard-page'>
            <div className='homecoursecard-page-head'>
            <h2>Popular Courses</h2>
            <nav></nav>
            <p>Twee Vice synth stumptown distillery aesthetic slow carb</p>
            </div>
         <AliceCarousel responsive={responsiveOlcu} autoPlay={true}>
                <div className='grids-course-card'>
                    <img src={Course1} alt="Course-Card" className='course-card' />
                    <img src={Cardprofil} alt="Card-profil" className='card-profil' />
                    <div className='course-card-price'>
                        <span>$19.99</span>
                    </div>
                    <div className='card-base'></div>
                    <pre>Ernest Byrd</pre>
                    <h1>How to become <br /> a powerful speaker</h1>
                    <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson.</p>
                    <a href="#" className='course-card-view'>VIEW MORE<i class="fa-solid fa-chevron-right"></i></a>
                </div>
                <div className='grids-course-card'>
                    <img src={Course2} alt="Course-Card" className='course-card' />
                    <img src={Cardprofil} alt="Card-profil" className='card-profil' />
                    <div className='course-card-price'>
                        <span>$19.99</span>
                    </div>
                    <div className='card-base'></div>
                    <pre>Ernest Byrd</pre>
                    <h1>How to become <br /> a powerful speaker</h1>
                    <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson.</p>
                    <a href="#" className='course-card-view'>VIEW MORE<i class="fa-solid fa-chevron-right"></i></a>
                </div>
                <div className='grids-course-card'>
                    <img src={Course3} alt="Course-Card" className='course-card' />
                    <img src={Cardprofil} alt="Card-profil" className='card-profil' />
                    <div className='course-card-price'>
                        <span>$19.99</span>
                    </div>
                    <div className='card-base'></div>
                    <pre>Ernest Byrd</pre>
                    <h1>How to become <br /> a powerful speaker</h1>
                    <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson.</p>
                    <a href="#" className='course-card-view'>VIEW MORE<i class="fa-solid fa-chevron-right"></i></a>
                </div>
             
         
                <div className='grids-course-card'>
                    <img src={Course4} alt="Course-Card" className='course-card' />
                    <img src={Cardprofil} alt="Card-profil" className='card-profil' />
                    <div className='course-card-price'>
                        <span>$19.99</span>
                    </div>
                    <div className='card-base'></div>
                    <pre>Ernest Byrd</pre>
                    <h1>How to become <br /> a powerful speaker</h1>
                    <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson.</p>
                    <a href="#" className='course-card-view'>VIEW MORE<i class="fa-solid fa-chevron-right"></i></a>
                </div>
                <div className='grids-course-card'>
                    <img src={Course5} alt="Course-Card" className='course-card' />
                    <img src={Cardprofil} alt="Card-profil" className='card-profil' />
                    <div className='course-card-price'>
                        <span>$19.99</span>
                    </div>
                    <div className='card-base'></div>
                    <pre>Ernest Byrd</pre>
                    <h1>How to become <br /> a powerful speaker</h1>
                    <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson.</p>
                    <a href="#" className='course-card-view'>VIEW MORE<i class="fa-solid fa-chevron-right"></i></a>
                </div>
                <div className='grids-course-card'>
                    <img src={Course6} alt="Course-Card" className='course-card' />
                    <img src={Cardprofil} alt="Card-profil" className='card-profil' />
                    <div className='course-card-price'>
                        <span>$19.99</span>
                    </div>
                    <div className='card-base'></div>
                    <pre>Ernest Byrd</pre>
                    <h1>How to become <br /> a powerful speaker</h1>
                    <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson.</p>
                    <a href="#" className='course-card-view'>VIEW MORE<i class="fa-solid fa-chevron-right"></i></a>
                </div>
             
            
                <div className='grids-course-card'>
                    <img src={Course7} alt="Course-Card" className='course-card' />
                    <img src={Cardprofil} alt="Card-profil" className='card-profil' />
                    <div className='course-card-price'>
                        <span>$19.99</span>
                    </div>
                    <div className='card-base'></div>
                    <pre>Ernest Byrd</pre>
                    <h1>How to become <br /> a powerful speaker</h1>
                    <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson.</p>
                    <a href="#" className='course-card-view'>VIEW MORE<i class="fa-solid fa-chevron-right"></i></a>
                </div>
                <div className='grids-course-card'>
                    <img src={Course8} alt="Course-Card" className='course-card' />
                    <img src={Cardprofil} alt="Card-profil" className='card-profil' />
                    <div className='course-card-price'>
                        <span>$19.99</span>
                    </div>
                    <div className='card-base'></div>
                    <pre>Ernest Byrd</pre>
                    <h1>How to become <br /> a powerful speaker</h1>
                    <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson.</p>
                    <a href="#" className='course-card-view'>VIEW MORE<i class="fa-solid fa-chevron-right"></i></a>
                </div>
                <div className='grids-course-card'>
                    <img src={Course9} alt="Course-Card" className='course-card' />
                    <img src={Cardprofil} alt="Card-profil" className='card-profil' />
                    <div className='course-card-price'>
                        <span>$19.99</span>
                    </div>
                    <div className='card-base'></div>
                    <pre>Ernest Byrd</pre>
                    <h1>How to become <br /> a powerful speaker</h1>
                    <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson.</p>
                    <a href="#" className='course-card-view'>VIEW MORE<i class="fa-solid fa-chevron-right"></i></a>
                </div>

            </AliceCarousel>
           
           
        </div>
    </div>
  )
}

export default Homecoursecard