import React from 'react'
import Teach from '../assets/images/2teach.png'

const Singleteacherpage = () => {
  return (
    <>
    <div className=' course-grids-header'>
      <div className='grids-header-img'></div>
      <div className='grid-header-content'>
        
         <h1>SINGLE TEACHER</h1>
         <p>Salvia next level crucifix pickled heirloom synth</p>
        
        <div>
          <a href="#">Home</a>
          <i class="fa-solid fa-chevron-right"></i>
          <p>Page</p>
          <i class="fa-solid fa-chevron-right"></i>
          <p>Single Teachers</p>
        </div>
      </div>
    </div>

    
    <div className='container singleteacher-page'>
      <div className='singleteacher'>
        <div className='singleteacher-left'>
          <img src={Teach} alt="singleteach" className='singleteach-logo' />
          <h6>Contact Me</h6>
          <form className='singleteacher-form'>
            <input type="text" placeholder='Full Name' />
            <input type="text" placeholder='E-mail Address' />
            <input type="text" placeholder='Write message' className='singleteacher-msg' />
          </form>
          <button className='singleteacher-btn'>SEND MESSAGE</button>
        </div>



        <div className='singleteacher-right'>
          <div className='singleteacher-right-head'>
            <h1>Samuel Delossantos</h1>
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-solid fa-globe"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <p>Math Teacher</p>
          <nav></nav>
          <h5>Vinyl keffiyeh gluten-free, health goth stumptown chambray typewriter ugh. McSweeney gastropub cardigan, banjo Thundercats bitters health goth tofu freegan. Pop-up Pinter 90's farm-to-table locavore seitan McSweeney's.</h5>
          <span>BIOGRAPHY</span>
          <h4>Food truck four loko swag, try-hard Williamsburg you probably haven heard of them pork belly bitters.</h4>
          <h2>Vinyl keffiyeh gluten-free, health goth stumptown chambray typewriter ugh. McSweeney gastropub cardigan, banjo Thundercats bitters health goth tofu freegan. Pop-up Pinter 90's farm-to-table locavore seitan McSweeney's.</h2>
          <h3>Thundercats Shoreditch polaroid biodiesel put a bird on it. McSweeney's stumptown blog vinyl, pop-up crucifix Tumblr messenger bag hella fap disrupt meh. Cred butcher gluten-free twee Pinterest tofu banh mi, mustache typewriter chia.</h3>
          <div className='singleteacher-right-footer'>
            <a href="#">
            <i class="fa-solid fa-phone"></i>
            910-213-7890
            </a>
            <a href="#">
            <i class="fa-solid fa-envelope"></i>
            samuel@delossantos.com
            </a>
            <a href="#">
            <i class="fa-brands fa-skype"></i>
            samueldelossantos1
            </a>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Singleteacherpage