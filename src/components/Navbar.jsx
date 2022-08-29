import React, { useTransition } from "react";
import Logo from "../assets/images/logo.png";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false)
  
  const [isMenu, setIsMenu] = useState(false)
    
  
  
  return (
    <div className="container navbar">
      <div className="nav-logo">
        <img src={Logo} alt="Website Logo" className="ws-logo" />
      </div>
      <div onClick={()=>  setIsMenu(true) }>
      <i class="fa-solid fa-bars"></i></div>

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
            <a to='#'>
              HOME
              <i class="fa-solid fa-chevron-down"></i>
              <ul>
                
                <Link className="li" to='home'>HOMEPAGE 1</Link>
              </ul>
            </a>
          </div>
          <div className="a">
            <Link to="#">
              COURSES
              <i class="fa-solid fa-chevron-down"></i>
              <ul>
                <Link to='course-grids' className="li">COURSES GRIDS</Link>
                <Link to='course-list-page' className="li">COURSES LIST</Link>
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
              </ul>
            </Link>
          </div>
          <div className="a">
            <Link to="#">
              NEWS
              <i className="fa-solid fa-chevron-down"></i>
              <ul>
                <Link to='classic-news' className="li">CLASSIC NEWS</Link>
                <Link to='grid-news' className="li">GRID NEWS</Link>
                <Link to='single-post' className="li">SINGLE POST</Link>
              </ul>
            </Link>
          </div>
          <div className="a">
            <Link to='contact'>CONTACT</Link>
          </div>
          <div className="a" onClick={()=> setIsSearch(true)}>
            <Link to="#">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>
        </div>
      </div>
      {/* seacrh with useState */}
      { 
      isSearch?
      <div className='search-icon-page' >
        <div className="close" onClick={() => setIsSearch(false)} ><i class="fa-solid fa-xmark"></i></div>
        <form className="search-input"><input type="search" placeholder="type keyword(s) here" /></form>
        <button className="search-btn">SEARCH</button>
      </div>:null}



      {/* qamburger iconuna clicklemekle navbar menunun acilmasi with useState */}
      {isMenu?
      <div className="left-navbar-menu">
        <div className="left-link">
          <a href="#">
            home 
            <i className="fa-solid fa-arrow-right"></i>
            <Link className="link" to='home'>Homepage 1</Link>
          </a>
          <a href="#">
            Courses
            <i className="fa-solid fa-arrow-right"></i>
            <Link className="link"  to='course-grids'>Courses grids</Link>
            <Link className="link" to='course-list-page'>Courses list</Link>
            <Link className="link" to='single-course'>Single course</Link>
          </a>
          <a href="#">
            Events
            <i className="fa-solid fa-arrow-right"></i>
            <Link className="link" to='classic-events'>Classic events</Link>
            <Link className="link" to='calendar-events'>Calendar events</Link>
            <Link className="link" to='single-event'>Single event</Link>
          </a>
          <a href="#">
            Pages
            <i className="fa-solid fa-arrow-right"></i>
            <Link className="link" to='about-us'>About us</Link>
            <Link className="link" to='our-teacher'>Our teacher</Link>
            <Link className="link" to='single-teacher'>Single teacher</Link>
            <Link className="link" to='gallery-4-columns'>Gallery 4 columns</Link>
          </a>
          <a href="#">
            News
            <i className="fa-solid fa-arrow-right"></i>
            <Link className="link" to='classic-news'>Classc news</Link>
            <Link className="link" to='grid-news'>Grid news</Link>
            <Link className="link" to='single-post'>Single post</Link>
          </a>
          <Link className="link-contact" to='contact'>Contact</Link>
          <h1 onClick={()=> setIsMenu(false)}>X</h1>

        </div>
      </div>:null}

    </div>
  );
};

export default Navbar;
