import React from "react";
import Img from '../assets/images/recentnews.png'
import Celebrated from '../assets/images/celebrated.png'
import Profil from '../assets/images/card-profil.png'

const Singlepost = () => {
  return (
    <>
      <div className=" course-grids-header">
        <div className="grids-header-img"></div>
        <div className="grid-header-content">
          <h1>NEWS</h1>
          <p>Salvia next level crucifix pickled heirloom synth</p>

          <div>
            <a href="#">Home</a>
            <i class="fa-solid fa-chevron-right"></i>
            <p>Single Post</p>
          </div>
        </div>
      </div>
      <div className="container singlepost-page">
        <div className="singlepost-page-left">
          {/* left page head */}
          <div className="singlepost-page-left-head">
            <img src={Celebrated} alt="Celebrated" className="classicnews-page-letf-logo" />
            <div>
              <p>Posted: <span> 7 Oct 2015 </span></p>
              <p>By: <span> Admin </span></p>
              <p>Comments: <span className="border-none"> 2 </span></p>
            </div>
            <h1>NEW UNIVERSITY FINDER: COMPARE</h1>
            <p>Church-key ugh sriracha slow-carb, +1 you probably haven't heard of them put a bird on it single-origin coffee. Pork belly irony chia, fann pack taxidermy Intelligentsia Pitchfork cliche tote bag stumptown authentic umami asymetrical. Bitters Distillery mixtape 90's Portland Brooklyn. Sriracha selfies gluten-free, wolf 8-bit blog Pinterest occupy Marfa seitan narwhal taxidermy sustainable DIY bespoke. Farm-to-table Odd Future raw denim leggings, Pitchfork actually cray health goth Pinterest hella Intelligentsia. Narwhal pug kogi, 3 wolf moon seitan chambray normcore swag VHS farm-to-table occupy High Life Schlitz. Skateboard Pinterest Vice Shoreditch gentrify fanny pack. Meggings street art fingerstache Neutra Kickstarter. Ennui small batch migas occupy, plaid typewriter jean shorts paleo.</p>
            <p>Sriracha meditation Pitchfork, literally ugh whatever fap actually tote bag gentrify. Next level sartorial single-origin coffee, banjo drinking vinegar Godard meditation McSweeney's beard occupy hella American Apparel letterpress.</p>
            <p>Vice pour-over banjo keffiyeh. Raw denim Kickstarter 8-bit Odd Future street art Carles. Synth cold-pressed master cleanse, next level aesthetic Helvetica Austin banh mi squid pickled. Actually fanny pack slow-carb stumptown pug, blog street art Schlitz Carles. Chambray kitsch biodiesel, cred Schlitz banjo readymade mumblecore.</p>
            <h5>Church key ugh sriracha slow-carb, you probably haven't heard of them put bird single origin coffee ork belly irony chia.</h5>
            <p>Authentic bespoke you probably haven't heard of them, Odd Future Pinterest jean shorts ugh Banksy kitsch shabby chic flannel PBR keffiyeh scenester. Migas cornhole cronut sriracha banh mi Pinterest Helvetica. Pickled taxidermy pop-up fashion axe, kale chips skateboard Blue Bottle. Blue Bottle occupy fanny pack hashtag, cronut brunch PBR Odd Future. Brooklyn cray fap cronut raw denim. Meggings quinoa 8-bit, blog actually roof party master cleanse iPhone four dollar toast. Banjo tofu dreamcatcher 90's letterpress vinyl meggings, health goth readymade McSweeney's raw denim.</p>
            <nav>
              <nav>
                <h1> <i class="fa-solid fa-tags"></i> Tags: <span>School</span>,<span>Students</span>,<span>Classrooms</span> </h1>
              </nav>
              <button>SHARE<i class="fa-solid fa-share-nodes"></i></button>
            </nav>
          </div>
          {/* Comments */}
          <div className="singlepost-page-left-comments">
            <div className="head">
              <nav></nav>
              <h1>comments</h1>
            </div>

            <div className="comments comment-1">
              <img src={Profil} alt="Profil" className="comment-profil-logo" />
              <div className="comment-section">
                <nav className="comment-head">
                  <div>
                   <h1>JOHN SMITH</h1>
                   <p>1 hour ago</p>
                  </div>
                 <span>REPLY</span>
                </nav>
                <h6>Blue Bottle occupy fanny pack hashtag, cronut brunch PBR Odd Future. Brooklyn cray fap Meggings quinoa 8-bit, blog actually roof party master cleanse iPhone four dollar toast.Tofu dreamcatcher 90's letterpress vinyl megging</h6>
              </div>
            </div>

            <div className="comments comment-2">
              <img src={Profil} alt="Profil" className="comment-profil-logo" />
              <div className="comment-section">
                <nav className="comment-head">
                  <div>
                   <h1>JOHN SMITH</h1>
                   <p>1 hour ago</p>
                  </div>
                 <span>REPLY</span>
                </nav>
                <h6>Blue Bottle occupy fanny pack hashtag, cronut brunch PBR Odd Future. Brooklyn cray fap Meggings quinoa 8-bit, blog actually roof party master cleanse iPhone four dollar toast.Tofu dreamcatcher 90's letterpress vinyl megging</h6>
              </div>
            </div>
            <div className="comments comment-3">
              <img src={Profil} alt="Profil" className="comment-profil-logo" />
              <div className="comment-section">
                <nav className="comment-head">
                  <div>
                   <h1>JOHN SMITH</h1>
                   <p>1 hour ago</p>
                  </div>
                 <span>REPLY</span>
                </nav>
                <h6>Blue Bottle occupy fanny pack hashtag, cronut brunch PBR Odd Future. Brooklyn cray fap Meggings quinoa 8-bit, blog actually roof party master cleanse iPhone four dollar toast.Tofu dreamcatcher 90's letterpress vinyl megging</h6>
              </div>
            </div>
            <div className="comments comment-4">
              <img src={Profil} alt="Profil" className="comment-profil-logo" />
              <div className="comment-section">
                <nav className="comment-head">
                  <div>
                   <h1>JOHN SMITH</h1>
                   <p>1 hour ago</p>
                  </div>
                 <span>REPLY</span>
                </nav>
                <h6>Blue Bottle occupy fanny pack hashtag, cronut brunch PBR Odd Future. Brooklyn cray fap Meggings quinoa 8-bit, blog actually roof party master cleanse iPhone four dollar toast.Tofu dreamcatcher 90's letterpress vinyl megging</h6>
              </div>
            </div>
          </div>
          {/* Leave comments */}
          <div className="singlepost-page-left-leave-comment">
            <div className="head">
              <nav></nav>
              <h1>LEAVE A COMMENT</h1>
            </div>
            <form className="singlepost-page-left-leave-comment-form">
              <nav>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="E-mail Address" />
              </nav>
              <input type="text" className="write" placeholder="Write commnet" />
            </form>
            <button className="singlepost-page-left-leave-comment-btn">SUBMIT COMMENT</button>
          </div>
        </div>
        {/* Right page */}
        <div className='classicnews-page-right'>
        <form className='classicnews-page-right-search'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder='Search...' />
        </form>

        <div className='classicnews-page-right-categories'>
          <nav className='header'>
            <nav></nav>
            <h1>CATEGORIES</h1>
          </nav>
          <div>
            <i class="fa-solid fa-chevron-right"></i>
            <p>Design</p>
          </div>
          <div>
            <i class="fa-solid fa-chevron-right"></i>
            <p>International</p>
          </div>
          <div>
            <i class="fa-solid fa-chevron-right"></i>
            <p>Learning</p>
          </div>
          <div>
            <i class="fa-solid fa-chevron-right"></i>
            <p>Read</p>
          </div>
          <div>
            <i class="fa-solid fa-chevron-right"></i>
            <p>Education</p>
          </div>
          <div className='son'>
            <i class="fa-solid fa-chevron-right"></i>
            <p>Finance</p>
          </div>
          
        </div>
        <div className='classicnews-page-right-recentnews'>
          <nav className='header'>
            <nav></nav>
            <h1>RECENT NEWS</h1>
          </nav>

          <div>
            <img src={Img} alt="Img" className='recent-news-logo'/>
            <nav>
              <h1>Visiting Artist: Giles Bailey</h1>
              <p>7 October 2015</p>
            </nav>
          </div>
          <div>
            <img src={Img} alt="Img" className='recent-news-logo' />
            <nav>
              <h1>How students use Rankings?</h1>
              <p>7 October 2015</p>
            </nav>
          </div>
          <div>
            <img src={Img} alt="Img" className='recent-news-logo' />
            <nav>
              <h1>University Finder: Compare</h1>
              <p>7 October 2015</p>
            </nav>
          </div>
        </div>
        <div className='classicnews-page-right-tags'>
          <nav className='header'>
            <nav></nav>
            <h1>TAGS</h1>
          </nav>
          <div>
            <nav>
              <p>Photography</p>
              <p>Design</p>
              <p>Envanto</p>
            </nav>
            <nav>
              <p>Course</p>
              <p>Education</p>
              <p>College</p>
              <p>Teachers</p>
            </nav>
            <nav>
              <p>Read</p>
              <p>Excursions</p>
            </nav>
          </div>
        </div>
        <div className='classicnews-page-right-tweets'>
          <nav className='header'>
            <nav></nav>
            <h1>RECENTS TWEETS</h1>
          </nav>
          <div>
            <i class="fa-brands fa-twitter"></i>
            <nav>
              <h6>Tote bag post-ironic messenger bag bespoke cray wolf moon key ready.</h6>
              <a href="#">https://olark.recruiterbox.com/jobs/fk0h</a>
              <p>21 minutes ago.</p>
            </nav>
          </div>
          <div>
            <i class="fa-brands fa-twitter"></i>
            <nav>
              <h6>Tote bag post-ironic messenger bag bespoke cray wolf moon key ready.</h6>
              <a href="#">https://olark.recruiterbox.com/jobs/fk0h</a>
              <p>21 minutes ago.</p>
            </nav>
          </div>
          
        </div>
        <div className='classicnews-page-right-instagram'>
          <nav className='header'>
            <nav></nav>
            <h1>INSTAGRAM</h1>
          </nav>
          <div>
            <img src={Img} alt="Img" />
            <img src={Img} alt="Img" />
            <img src={Img} alt="Img" />
            <img src={Img} alt="Img" />
            <img src={Img} alt="Img" />
            <img src={Img} alt="Img" />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Singlepost;
