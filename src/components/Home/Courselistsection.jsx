import React from 'react'
import Card from '../../assets/images/art.jpeg'
import Profil from '../../assets/images/card-profil.png'
const Courselistsection = () => {
  return (
    <>
    <div className='container course-list'>
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
        <div className='courselist-section'>
          <div className='cards'>
            <div className='card'>
              <img src={Card} alt="Card" className='list-card-logo' />
              <img src={Profil} alt="Card-profil" className='list-card-profil-img' />
              <nav>
                <h5>Ernest Byrd</h5>
                <h1>HOW TO BECOME <br /> A POWERFUL SPEAKER</h1>
                <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</p>
                <a href="#">VIEW MORE <i className='fa fa-arrow-right'></i></a>
                <div className='course-card-price courselist-card-price'>
                  <span>$19.99</span>
                </div>
                <div className='card-base'></div>
              </nav>
            </div>
            <div className='card'>
              <img src={Card} alt="Card" className='list-card-logo' />
              <img src={Profil} alt="Card-profil" className='list-card-profil-img' />
              <nav>
                <h5>Ernest Byrd</h5>
                <h1>HOW TO BECOME <br /> A POWERFUL SPEAKER</h1>
                <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</p>
                <a href="#">VIEW MORE <i className='fa fa-arrow-right'></i></a>
                <div className='course-card-price courselist-card-price'>
                  <span>$19.99</span>
                </div>
                <div className='card-base'></div>
              </nav>
            </div>
            <div className='card'>
              <img src={Card} alt="Card" className='list-card-logo' />
              <img src={Profil} alt="Card-profil" className='list-card-profil-img' />
              <nav>
                <h5>Ernest Byrd</h5>
                <h1>HOW TO BECOME <br /> A POWERFUL SPEAKER</h1>
                <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</p>
                <a href="#">VIEW MORE <i className='fa fa-arrow-right'></i></a>
                <div className='course-card-price courselist-card-price'>
                  <span>$19.99</span>
                </div>
                <div className='card-base'></div>
              </nav>
            </div>
            <div className='card'>
              <img src={Card} alt="Card" className='list-card-logo' />
              <img src={Profil} alt="Card-profil" className='list-card-profil-img' />
              <nav>
                <h5>Ernest Byrd</h5>
                <h1>HOW TO BECOME <br /> A POWERFUL SPEAKER</h1>
                <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</p>
                <a href="#">VIEW MORE <i className='fa fa-arrow-right'></i></a>
                <div className='course-card-price courselist-card-price'>
                  <span>$19.99</span>
                </div>
                <div className='card-base'></div>
              </nav>
            </div>
            <div className='card'>
              <img src={Card} alt="Card" className='list-card-logo' />
              <img src={Profil} alt="Card-profil" className='list-card-profil-img' />
              <nav>
                <h5>Ernest Byrd</h5>
                <h1>HOW TO BECOME <br /> A POWERFUL SPEAKER</h1>
                <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</p>
                <a href="#">VIEW MORE <i className='fa fa-arrow-right'></i></a>
                <div className='course-card-price courselist-card-price'>
                  <span>$19.99</span>
                </div>
                <div className='card-base'></div>
              </nav>
            </div>
            <div className='card'>
              <img src={Card} alt="Card" className='list-card-logo' />
              <img src={Profil} alt="Card-profil" className='list-card-profil-img' />
              <nav>
                <h5>Ernest Byrd</h5>
                <h1>HOW TO BECOME <br /> A POWERFUL SPEAKER</h1>
                <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</p>
                <a href="#">VIEW MORE <i className='fa fa-arrow-right'></i></a>
                <div className='course-card-price courselist-card-price'>
                  <span>$19.99</span>
                </div>
                <div className='card-base'></div>
              </nav>
            </div>
            <div className='card'>
              <img src={Card} alt="Card" className='list-card-logo' />
              <img src={Profil} alt="Card-profil" className='list-card-profil-img' />
              <nav>
                <h5>Ernest Byrd</h5>
                <h1>HOW TO BECOME <br /> A POWERFUL SPEAKER</h1>
                <p>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</p>
                <a href="#">VIEW MORE <i className='fa fa-arrow-right'></i></a>
                <div className='course-card-price courselist-card-price'>
                  <span>$19.99</span>
                </div>
                <div className='card-base'></div>
              </nav>
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


          <div className='form'>
            <div className="educa-right">
              <form className="right-form">
            <div className="right-form-head">
                <div></div>
                <h4> REQUEST INFORMATION</h4>
            </div>
            <div className="input-div">
              <input
                type="text"
                id="username"
                placeholder="Full Name"
                className="input"
              />
              {/* <small>Error Message</small> */}
            </div>
            <div className="input-div">
              <input
                type="email"
                id="email"
                placeholder="E-mail Address"
                className="input"
              />
              {/* <small>Error Message</small> */}
            </div>
            <div className="selects">
              <select name="Azeri" id="lang" className="select-select">
                <option value="En">Nearby</option>
                <option value="Az">Campus of Interests</option>
                <option value="Rus">High Classes</option>
                <option value="Rus">Short Time</option>
                <option value="Rus">Long Time</option>
              </select>
            </div>
            <div className="selects">
              <select name="Azeri" id="lang" className="select-select">
                <option value="En">Program of Interests</option>
                <option value="Az">Working Process</option>
                <option value="Rus">Archivements</option>
                <option value="Rus">Social</option>
                <option value="Rus">Profits</option>
              </select>
            </div>
            <button>Submit Request</button>
              </form>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Courselistsection