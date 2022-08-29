import React from 'react'
import Logo1 from '../assets/images/classiceventscard.jpg'
import Logo2 from '../assets/images/news-classic-6.jpg'
import Logo3 from '../assets/images/3teach.png'
import Logo4 from '../assets/images/4teach.png'
import Logo5 from '../assets/images/course-1.jpg'
import Logo6 from '../assets/images/course-2.jpg'
import Logo7 from '../assets/images/course-3.jpg'
import Logo8 from '../assets/images/course-4.jpg'

const Gallery4columnspage = () => {
  return (
    <>
     <div className=' course-grids-header'>
      <div className='grids-header-img'></div>
        <div className='grid-header-content'>
          
           <h1>GALLERY</h1>
           <p>Salvia next level crucifix pickled heirloom synth</p>
          
          <div>
            <a href="#">Home</a>
            <i class="fa-solid fa-chevron-right"></i>
            <p>Pages</p>
            <i class="fa-solid fa-chevron-right"></i>
            <p>Gallery</p>
          </div>
        
        </div>
    </div>
    <div className='container gallery4-pages'>
      <div className='gallery4-pages-head'>
        <a className='a' href="#">ALL</a>
        <a href="#">OFFICE</a>
        <a href="#">SCHOOL</a>
        <a href="#">STUDENTS</a>
        <a href="#">CLASSROOM</a>
      </div>
      <div className='gallery4-pages-center'>
        <div>
          <img src={Logo1} alt="Logo1" />
          <h6>UNIVERSITY GALLERY</h6>
          <p>Classrooms</p>
          <a className='iteqi' href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
        <div>
          <img src={Logo2} alt="Logo1" />
          <h6>UNIVERSITY GALLERY</h6>
          <p>Classrooms</p>
          <a className='iteqi' href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
        <div>
          <img src={Logo3} alt="Logo1" />
          <h6>UNIVERSITY GALLERY</h6>
          <p>Classrooms</p>
          <a className='iteqi' href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
        <div>
          <img src={Logo4} alt="Logo1" />
          <h6>UNIVERSITY GALLERY</h6>
          <p>Classrooms</p>
          <a className='iteqi' href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
        <div>
          <img src={Logo5} alt="Logo1" />
          <h6>UNIVERSITY GALLERY</h6>
          <p>Classrooms</p>
          <a className='iteqi' href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
        <div>
          <img src={Logo6} alt="Logo1" />
          <h6>UNIVERSITY GALLERY</h6>
          <p>Classrooms</p>
          <a className='iteqi' href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
        <div>
          <img src={Logo7} alt="Logo1" />
          <h6>UNIVERSITY GALLERY</h6>
          <p>Classrooms</p>
          <a className='iteqi' href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
        <div>
          <img src={Logo8} alt="Logo1" />
          <h6>UNIVERSITY GALLERY</h6>
          <p>Classrooms</p>
          <a className='iteqi' href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
      </div>



      <div className='gallery4-pages-footer'>
      <div className='container ourteach-footer gallery4-footer'>
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
    </div>
    </>
  )
}

export default Gallery4columnspage