// import { Carousel } from 'bootstrap'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card1 from '../../assets/images/news-classic-5.jpg'
import Card2 from '../../assets/images/news-classic-6.jpg'
import Profile from '../../assets/images/card-profil.png'
import Profile1 from '../../assets/images/3teach.png'

const homecomment = () => {
  return (
    <div className='container homecomment-page'>
        <div className='homecomment-page-left'>
            <nav className='homecomment-page-left-head'>
                <h1>What Our Students Say</h1>
                <nav></nav>
            </nav>
            <div className='homecomment-page-left-center'>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <div className='left-center-page'>
                            <div className='left-center-comment'>
                                <p>Stumptown polaroid skateboard single-origin coffee. Farm-to-table Vice authentic Truffaut put a bird on it, pug ethical tousled photo booth gluten-free cliche bicycle rights four dollar toast single-origin coffee taxidermy.</p>
                                <span>"</span>
                            </div>
                            <div className='left-center-name'>
                                <img src={Profile1} alt="Profil" className='left-center-card-profil1'/>
                                <h5>PETER J.SMITH <span>Web Designer</span></h5>
                                <div className='icon'>
                                    <i className='fa fa-arrow-left'></i>
                                    <i className='fa fa-arrow-right'></i>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <div className='left-center-page'>
                            <div className='left-center-comment'>
                                <p>Stumptown polaroid skateboard single-origin coffee. Farm-to-table Vice authentic Truffaut put a bird on it, pug ethical tousled photo booth gluten-free cliche bicycle rights four dollar toast single-origin coffee taxidermy.</p>
                                <span>"</span>
                            </div>
                            <div className='left-center-name'>
                                <img src={Profile} alt="Profil" className='left-center-card-profil'/>
                                <h5>CAROLL M.DAVIS <span>Web Designer</span></h5>
                                <div className='icon'>
                                    <i className='fa fa-arrow-left'></i>
                                    <i className='fa fa-arrow-right'></i>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                 </Carousel>
            </div>
        </div>


        <div className='homecomment-page-right'>
            <nav className='homecomment-page-right-head'>
                <h1>University News</h1>
                <nav></nav>
            </nav>
            <div className='homecomment-page-right-center'>
                <div className='top'>
                    <img src={Card1} alt="Card-1" />
                    <div>
                        <p><span>7 Oct 2015</span><span>By Admin</span> <span className='sil'>2 Comments</span></p>
                        <h6>NEW UNIVERSITY FINDER: COMPARE</h6>
                        <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic.</p>
                    </div>
                </div>
                <div className='bottom'>
                <img src={Card2} alt="Card-2" />
                    <div>
                        <p><span>7 Oct 2015</span><span>By Admin</span> <span className='sil'>2 Comments</span></p>
                        <h6>HOW DO STUDENTS USE RANKINGS?</h6>
                        <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default homecomment