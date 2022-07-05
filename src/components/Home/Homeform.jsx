import React from "react";
import Hat from "../../assets/images/eduhat.png";
import Earth from "../../assets/images/earth.png";
import Clock from "../../assets/images/clock.png";
import Book from "../../assets/images/book.png";

const Homeform = () => {
  return (
    <div className="container">
      <div className="welcome-educa">
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
              <select name="Azeri" id="lang" className="select1">
                <option value="En">Nearby</option>
                <option value="Az">Campus of Interests</option>
                <option value="Rus">High Classes</option>
                <option value="Rus">Short Time</option>
                <option value="Rus">Long Time</option>
              </select>
            </div>
            <div className="selects">
              <select name="Azeri" id="lang" className="select1">
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
  );
};

export default Homeform;
