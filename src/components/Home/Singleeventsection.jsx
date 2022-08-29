import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Logo2 from '../../assets/images/2.jpeg'
import Logo3 from '../../assets/images/card-profil.png'
import { useState } from "react";

const Singleeventsection = () => {
  
  return (
      <div className='container singleeventsection-page single'>
        <div className='carousel cr'>
          <img src={Logo2} alt="Logo2" />
        </div>
        <div className='filming fl'>
          <div className='header'>
            <nav>
              <img src={Logo3} alt="Logo3" />
              <p>John Smith</p>
            </nav>
            <div>
            <i class="fa-light fa-comment">4</i>
            <i class="fa-light fa-star">18</i>
            </div>
          </div>
          <h1>Filming Objects and Sculpture</h1>
          <p>Ethical 90's flannel fingerstache small batch, Carles Blue Bottle banh mi. Try it sustainable pickled. Fashion axe selvage art party wolf moon four dollar toast tilde church-key bicycle rights swag Schlitz messenger bag fingerstache tote bag retro.</p>
          <div className='date'>
            <h1><p>08:00 AM</p><span></span><h6>Public And Patient Involvment In Health Research <i className='fa-solid fa-arrow-down'></i></h6></h1>
            <h1><p>09:00 AM</p><span></span><h6>Balancing Economic And Transforming <i className='fa-solid fa-arrow-down'></i></h6></h1>
            <h1><p>10:30 AM</p><span></span><h6>Flu Shots For Employees: Manhattanville <i className='fa-solid fa-arrow-down'></i></h6></h1>
            <h1><p>12:45 AM</p><span></span><h6>Suad Amiry And Susan Abulhawa In Conversation <i className='fa-solid fa-arrow-down'></i></h6></h1>
          </div>
        </div>
        <div className='event-details dt'>
          <div className='header'>
            <nav></nav>
            <h1>EVENT DETAILS</h1>
          </div>
          <div className='center'>
            <nav><p>Starts:</p><span>14 November 2015</span></nav>
            <nav><p>Time:</p><span>08:00 AM - 09:00 AM</span></nav>
            <nav><p>Organizer:</p><span>John Smith</span></nav>
            <nav><p>Phone:</p><span>+1 (23) 321 299 7629</span></nav>
            <nav className='sil'><p>Email:</p><span>educa@university.com</span></nav>
          </div>
        </div>
        <div className='location lc'>
          <div className='header'>
            <nav></nav>
            <h1>LOCATION MAP</h1>
          </div>
          <div className='center'>bosdur</div>
        </div>
      </div>
  )
}

export default Singleeventsection