import React from 'react'
import Card from '../assets/images/classiceventscard.jpg'

const Classicevents = () => {
  return (
    <div>
      <div className=' course-grids-header'>
      <div className='grids-header-img'></div>
        <div className='grid-header-content'>
          
           <h1>EVENTS</h1>
           <p>Salvia next level crucifix pickled heirloom synth</p>
          
          <div>
            <a href="#">Home</a>
            <i class="fa-solid fa-chevron-right"></i>
            <p>Courses Categories</p>
          </div>
        
        </div>
      </div>
      <div className='container classicevent'>
        <div>
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
        </div>


        <div className='classicevents-cards'>
          <div className='classicevents-card'>
            <img src={Card} alt="Card" className='events-card-logo' />
            <div className='events-card-date'>
              <div className='card-date-left'>
                <span><i class="fa-solid fa-location-dot"></i>Johnny Lane Milwaukee WI 532</span>
              </div>
              <div className='card-date-right'>
                <span><i class="fa-solid fa-clock"></i>Dec 18 - Dec 28 Monday 8am - 12am</span>
              </div>
            </div>
              <div className='event-card-day'>18 <br /> Dec</div>
            <div className='event-card-head'>
              <span>The name of a great band</span>
            </div>
            <div className='event-card-paragraf'>
              <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</span>
            </div>
            <div className='card-stars'>
              <a href="#">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p>5 stars</p>
              </a>
              <span><i class="fa-solid fa-thumbs-up"></i>68</span>
            </div>
          </div>
          <div className='classicevents-card'>
            <img src={Card} alt="Card" className='events-card-logo' />
            <div className='events-card-date'>
              <div className='card-date-left'>
                <span><i class="fa-solid fa-location-dot"></i>Johnny Lane Milwaukee WI 532</span>
              </div>
              <div className='card-date-right'>
                <span><i class="fa-solid fa-clock"></i>Dec 18 - Dec 28 Monday 8am - 12am</span>
              </div>
            </div>
              <div className='event-card-day'>18 <br /> Dec</div>
            <div className='event-card-head'>
              <span>The name of a great band</span>
            </div>
            <div className='event-card-paragraf'>
              <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</span>
            </div>
            <div className='card-stars'>
              <a href="#">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p>5 stars</p>
              </a>
              <span><i class="fa-solid fa-thumbs-up"></i>68</span>
            </div>
          </div>
          <div className='classicevents-card'>
            <img src={Card} alt="Card" className='events-card-logo' />
            <div className='events-card-date'>
              <div className='card-date-left'>
                <span><i class="fa-solid fa-location-dot"></i>Johnny Lane Milwaukee WI 532</span>
              </div>
              <div className='card-date-right'>
                <span><i class="fa-solid fa-clock"></i>Dec 18 - Dec 28 Monday 8am - 12am</span>
              </div>
            </div>
              <div className='event-card-day'>18 <br /> Dec</div>
            <div className='event-card-head'>
              <span>The name of a great band</span>
            </div>
            <div className='event-card-paragraf'>
              <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</span>
            </div>
            <div className='card-stars'>
              <a href="#">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p>5 stars</p>
              </a>
              <span><i class="fa-solid fa-thumbs-up"></i>68</span>
            </div>
          </div>
          <div className='classicevents-card'>
            <img src={Card} alt="Card" className='events-card-logo' />
            <div className='events-card-date'>
              <div className='card-date-left'>
                <span><i class="fa-solid fa-location-dot"></i>Johnny Lane Milwaukee WI 532</span>
              </div>
              <div className='card-date-right'>
                <span><i class="fa-solid fa-clock"></i>Dec 18 - Dec 28 Monday 8am - 12am</span>
              </div>
            </div>
              <div className='event-card-day'>18 <br /> Dec</div>
            <div className='event-card-head'>
              <span>The name of a great band</span>
            </div>
            <div className='event-card-paragraf'>
              <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</span>
            </div>
            <div className='card-stars'>
              <a href="#">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p>5 stars</p>
              </a>
              <span><i class="fa-solid fa-thumbs-up"></i>68</span>
            </div>
          </div>
          <div className='classicevents-card'>
            <img src={Card} alt="Card" className='events-card-logo' />
            <div className='events-card-date'>
              <div className='card-date-left'>
                <span><i class="fa-solid fa-location-dot"></i>Johnny Lane Milwaukee WI 532</span>
              </div>
              <div className='card-date-right'>
                <span><i class="fa-solid fa-clock"></i>Dec 18 - Dec 28 Monday 8am - 12am</span>
              </div>
            </div>
              <div className='event-card-day'>18 <br /> Dec</div>
            <div className='event-card-head'>
              <span>The name of a great band</span>
            </div>
            <div className='event-card-paragraf'>
              <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</span>
            </div>
            <div className='card-stars'>
              <a href="#">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p>5 stars</p>
              </a>
              <span><i class="fa-solid fa-thumbs-up"></i>68</span>
            </div>
          </div>
          <div className='classicevents-card'>
            <img src={Card} alt="Card" className='events-card-logo' />
            <div className='events-card-date'>
              <div className='card-date-left'>
                <span><i class="fa-solid fa-location-dot"></i>Johnny Lane Milwaukee WI 532</span>
              </div>
              <div className='card-date-right'>
                <span><i class="fa-solid fa-clock"></i>Dec 18 - Dec 28 Monday 8am - 12am</span>
              </div>
            </div>
              <div className='event-card-day'>18 <br /> Dec</div>
            <div className='event-card-head'>
              <span>The name of a great band</span>
            </div>
            <div className='event-card-paragraf'>
              <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</span>
            </div>
            <div className='card-stars'>
              <a href="#">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p>5 stars</p>
              </a>
              <span><i class="fa-solid fa-thumbs-up"></i>68</span>
            </div>
          </div>
          <div className='classicevents-card'>
            <img src={Card} alt="Card" className='events-card-logo' />
            <div className='events-card-date'>
              <div className='card-date-left'>
                <span><i class="fa-solid fa-location-dot"></i>Johnny Lane Milwaukee WI 532</span>
              </div>
              <div className='card-date-right'>
                <span><i class="fa-solid fa-clock"></i>Dec 18 - Dec 28 Monday 8am - 12am</span>
              </div>
            </div>
              <div className='event-card-day'>18 <br /> Dec</div>
            <div className='event-card-head'>
              <span>The name of a great band</span>
            </div>
            <div className='event-card-paragraf'>
              <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</span>
            </div>
            <div className='card-stars'>
              <a href="#">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p>5 stars</p>
              </a>
              <span><i class="fa-solid fa-thumbs-up"></i>68</span>
            </div>
          </div>
          <div className='classicevents-card'>
            <img src={Card} alt="Card" className='events-card-logo' />
            <div className='events-card-date'>
              <div className='card-date-left'>
                <span><i class="fa-solid fa-location-dot"></i>Johnny Lane Milwaukee WI 532</span>
              </div>
              <div className='card-date-right'>
                <span><i class="fa-solid fa-clock"></i>Dec 18 - Dec 28 Monday 8am - 12am</span>
              </div>
            </div>
              <div className='event-card-day'>18 <br /> Dec</div>
            <div className='event-card-head'>
              <span>The name of a great band</span>
            </div>
            <div className='event-card-paragraf'>
              <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</span>
            </div>
            <div className='card-stars'>
              <a href="#">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p>5 stars</p>
              </a>
              <span><i class="fa-solid fa-thumbs-up"></i>68</span>
            </div>
          </div>
          <div className='classicevents-card'>
            <img src={Card} alt="Card" className='events-card-logo' />
            <div className='events-card-date'>
              <div className='card-date-left'>
                <span><i class="fa-solid fa-location-dot"></i>Johnny Lane Milwaukee WI 532</span>
              </div>
              <div className='card-date-right'>
                <span><i class="fa-solid fa-clock"></i>Dec 18 - Dec 28 Monday 8am - 12am</span>
              </div>
            </div>
              <div className='event-card-day'>18 <br /> Dec</div>
            <div className='event-card-head'>
              <span>The name of a great band</span>
            </div>
            <div className='event-card-paragraf'>
              <span>Ugh chambray lumbersexual food truc artisan meditation sartorial post-ironic Wes Anderson fap tattooed.</span>
            </div>
            <div className='card-stars'>
              <a href="#">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <p>5 stars</p>
              </a>
              <span><i class="fa-solid fa-thumbs-up"></i>68</span>
            </div>
          </div>
        </div>





        <div>
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
      </div>
    
    </div>
  )
}

export default Classicevents