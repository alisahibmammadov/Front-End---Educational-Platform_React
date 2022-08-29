import React from 'react'
import Hat from "../../assets/images/eduhat.png";
import Earth from "../../assets/images/earth.png";
import Clock from "../../assets/images/clock.png";
import Book from "../../assets/images/book.png";
import Logo1 from '../../assets/images/2.jpeg'
import Logo2 from '../../assets/images/classiceventscard.jpg'
import Logo3 from '../../assets/images/crsl-4.jpg'

const Aboutuseduca = () => {
  return (
    <div className='container aboutuseduca-page'>
        <div className='left-side left'>
          <img src={Logo1} alt="Logo1" />
          <nav className='nav'>
            <img src={Logo2} alt="Logo2" />
            <img src={Logo3} alt="Logo3" />
          </nav>
        </div>

        <div className='right-side right'>
        <div className="educa-left">
          <h1>Welcome to educa</h1>
          <p>Twee Vice synth stumptown</p>
          <div className="row"></div>
          <p className="educa-left-2p">
            Twee Vice synth stumptown, distillery aesthetic slow-carb
            Intelligentsia bitters taxidermy McSweeney's, flexitarian actually
            iPhone mlkshk brunch.
          </p>
          <div className="educa-wrapper col-ms-8 col-mx-12">
            <div className="child">
              <div>
                <img src={Hat} alt="Hat" />
              </div>
              <div>
                <h4>GRADUATED STEPS</h4>
                <i></i>
                <p>
                  Photo booth Banksy YOLO mixtape post-ironic they sold out all.
                </p>
              </div>
            </div>
            <div className="child">
              <div>
                <img src={Earth} alt="Earth" />
              </div>
              <div>
                <h4>GLOBAL INTERESTED</h4>
                <i></i>
                <p>
                  Photo booth Banksy YOLO mixtape post-ironic they sold out all.
                </p>
              </div>
            </div>
            <div className="child">
              <div>
                <img src={Clock} alt="Clock" />
              </div>
              <div>
                <h4>CIRCULAR CLOCK</h4>
                <i></i>
                <p>
                  Photo booth Banksy YOLO mixtape post-ironic they sold out all.
                </p>
              </div>
            </div>
            <div className="child">
              <div>
                <img src={Book} alt="Book" />
              </div>
              <div>
                <h4>OPEN BOOK</h4>
                <i></i>
                <p>
                  Photo booth Banksy YOLO mixtape post-ironic they sold out all.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Aboutuseduca