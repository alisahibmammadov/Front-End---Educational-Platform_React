import React from 'react'
import Nick from '../../assets/images/1teach.png'
import Jhon from '../../assets/images/2teach.png'
import Maria from '../../assets/images/3teach.png'
import Samuel from '../../assets/images/4teach.png'

const Ourteachers = () => {
  return (
    <div className='container ourteacher'>
        <div className='ourteacher-head'>
          <h1>Our Teachers</h1>
          <div></div>
          <p>High Life squid literally scenester fap Helvetica quinoa church-key</p>
        </div>
        <div className='teacher-cards'>
          <div className='teach-card'>
            <img src={Nick} alt="Nick-teacher" className='teach-img' />
            <h1>NICK SMITH</h1>
            <h3>Physic Teacher</h3>
            <p>Ugh chambray lumbersexual food artisan meditation sartorial well post-ironic wes</p>
            <div className='card-icons'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-solid fa-earth-americas"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className='teach-card'>
            <img src={Jhon} alt="Nick-teacher" className='teach-img' />
            <h1>NICK SMITH</h1>
            <h3>Physic Teacher</h3>
            <p>Ugh chambray lumbersexual food artisan meditation sartorial well post-ironic wes</p>
            <div className='card-icons'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-solid fa-earth-americas"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className='teach-card'>
            <img src={Maria} alt="Nick-teacher" className='teach-img' />
            <h1>NICK SMITH</h1>
            <h3>Physic Teacher</h3>
            <p>Ugh chambray lumbersexual food artisan meditation sartorial well post-ironic wes</p>
            <div className='card-icons'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-solid fa-earth-americas"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className='teach-card'>
            <img src={Samuel} alt="Nick-teacher" className='teach-img img4' />
            <h1>NICK SMITH</h1>
            <h3>Physic Teacher</h3>
            <p>Ugh chambray lumbersexual food artisan meditation sartorial well post-ironic wes</p>
            <div className='card-icons'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-solid fa-earth-americas"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Ourteachers