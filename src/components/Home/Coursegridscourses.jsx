import React from 'react'
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

const Coursegridscourses = () => {
  return (
    <div className='container course-grids-course'>
        <div className='grids-course-navbar'>
            <div><p>SHOWING 1-9 OF 40 COURSES</p></div>
            <nav>
                <select name="payment-data" id="payment-data">
                    <option value="Select">SELECT CATEGORY</option>
                    <option value="free">FREE</option>
                    <option value="timing">TIMING</option>
                    <option value="mostly">MOSTLY</option>
                    <option value="lalest">LATEST</option>
                </select>
                <select name="sorted-by" id="sorted-by">
                    <option value="sorted">SORTED BY</option>
                    <option value="price">PRİCE</option>
                    <option value="useless">USELESS</option>
                    <option value="important">İMPORTANT</option>
                </select>
                <i class="fa-solid fa-bars-staggered"></i>
                <i class="fa-solid fa-grip"></i>
            </nav>
        </div>
        <div className='grids-course-cards'>
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
        </div>
        <div className='grids-course-footer'>
            <div className='grids-course-footer-left'>
                <a href="#" className='footer-number'>1</a>
                <a href="#" className='footer-number two'>2</a>
                <a href="#" className='footer-number'>3</a>
                <a href="#" className='footer-number'>4</a>
            </div>
            <div className='grids-course-footer-right'>
                <button><i className='fa fa-arrow-left'></i></button>
                <button> <i className='fa fa-arrow-right'></i></button>
            </div>
        </div>
    </div>
  )
}

export default Coursegridscourses