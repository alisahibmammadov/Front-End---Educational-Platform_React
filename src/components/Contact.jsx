import React from 'react'

const Contact = () => {
  return (
    <>
    <div className=' course-grids-header'>
      <div className='grids-header-img'></div>
      <div className='grid-header-content'>
        
         <h1>CONTACT US</h1>
         <p>Salvia next level crucifix pickled heirloom synth</p>
        
        <div>
          <a href="#">Home</a>
          <i class="fa-solid fa-chevron-right"></i>
          <p>Contact</p>
          
        </div>
      </div>
    </div>
    <div className='container contact-page'>

        <div className='contact-page-header'>
            <div className='contact-page-header-left'>
                <i class="fa-solid fa-location-dot"></i>
                <h1>ADDRESS INFO</h1>
                <p>Bloomfield Way Stockton, Springs ME 04981</p>
            </div>
            <div className='contact-page-header-center'>
                <i class="fa-solid fa-envelope"></i>
                <h1>EMAIL INFO</h1>
                <p>educa@university.com</p>
            </div>
            <div className='contact-page-header-right'>
                <i class="fa-solid fa-phone"></i>
                <h1>PHONE NUMBER</h1>
                <p>+1 (23) 207 0567 2120</p>
            </div>
        </div>

        <div className='contact-page-section'>
            <div className='contact-page-section-map'>
                <div className='contact-page-section-header'>
                    <nav></nav>
                    <h1>LOCATION MAP</h1>
                </div>
                <div className='contact-page-section-map-div'>
                    <h1>Burada Sizin unvanınız olacaq</h1>
                </div>
            </div>
            <div className='contact-page-section-contact'>
                <div className='contact-page-section-header'>
                    <nav></nav>
                    <h1>CONTACT US</h1>
                </div>
                <form className='contact-page-section-contact-form'>
                    <div>
                        <input type="text" placeholder='Full Name' />
                        <input type="text" placeholder='Email Adress' />
                    </div>
                    <input type="text" className='contact-page-section-contact-form-w-msg' placeholder='Write message'/>
                </form>
                <button className='contact-page-section-contact-btn'>SUBMIT MESSAGE</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact