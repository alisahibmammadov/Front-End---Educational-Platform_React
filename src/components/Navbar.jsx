import React from "react";
import Logo from "../assets/images/logo.png";
import { Link, Outlet } from "react-router-dom";
import Home from './Home'

const Navbar = () => {
  
  return (
    <div className="container navbar">
      <div className="nav-logo">
        <img src={Logo} alt="Website Logo" className="ws-logo" />
      </div>
      <i class="fa-solid fa-bars"></i>

      <div className="nav-right">
        <div className="nav-contact">
          <p>+994 050 685 13 44</p>
          <p>
            <i className="fa-solid fa-envelope"></i> your@website.com
          </p>
          <div>
            <select nameName="Azeri" id="lang" className="lang-select">
              <option value="En">English</option>
              <option value="Az">Azərbaycan</option>
              <option value="Rus">Russian</option>
            </select>
          </div>
          <button type="submit">APPLY NOW</button>
        </div>
        <div className="nav-links">
          <div className="a">
            <Link to='#'>
              HOME
              <i class="fa-solid fa-chevron-down"></i>
              <ul>
                
                <Link className="li" to='home'>HOMEPAGE 1</Link>
                <li className="li">HOMEPAGE 2</li>
              </ul>
            </Link>
          </div>
          <div className="a">
            <Link to="#">
              COURSES
              <i class="fa-solid fa-chevron-down"></i>
              <ul>
                <Link to='course-grids' className="li">COURSES GRIDS</Link>
                <Link to='course-list' className="li">COURSES LIST</Link>
                <Link to='single-course' className="li">SINGLE COURSE</Link>
              </ul>
            </Link>
          </div>
          <div className="a">
            <Link to="#">
              EVENTS
              <i className="fa-solid fa-chevron-down"></i>
              <ul>
                <Link to='classic-events' className="li">CLASSIC EVENTS</Link>
                <Link to='calendar-events' className="li">CALENDAR EVENTS</Link>
                <Link to='single-event' className="li">SINGLE EVENT</Link>
              </ul>
            </Link>
          </div>
          <div className="a">
            <Link to="#">
              PAGES
              <i className="fa-solid fa-chevron-down"></i>
              <ul>
                <Link to='about-us' className="li">ABOUT US</Link>
                <Link to='our-teacher' className="li">OUR TEACHERS</Link>
                <Link to='single-teacher' className="li">SINGLE TEACHER</Link>
                <Link to='gallery-4-columns'  className="li">GALLERY 4 COLUMNS</Link>
                <Link to='gallery-3-columns' className="li">GALLERY 3 COLUMNS</Link>
              </ul>
            </Link>
          </div>
          <div className="a">
            <Link to="#">
              NEWS
              <i className="fa-solid fa-chevron-down"></i>
              <ul>
                <li className="li">CLASSIC NEWS</li>
                <li className="li">GRID NEWS</li>
                <li className="li">SINGLE POST</li>
              </ul>
            </Link>
          </div>
          <div className="a">
            <Link to="#">CONTACT</Link>
          </div>
          <div className="a">
            <Link to="#">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
