import React from 'react'
import Lampa from '../../assets/images/course-6.jpg'
import Profile from '../../assets/images/card-profil.png'
import Card1 from '../../assets/images/course-1.jpg'
import Card2 from '../../assets/images/course-2.jpg'
import Card3 from '../../assets/images/course-3.jpg'

const Singlecoursesection = () => {
  return (
    <div className='container singlecoursesection-page'>



        <div className='course-left-side'>
            <div className='header'>
                <h4>How to become a Powerful Speaker ?</h4>
                <h5>Plaid you probably haven't heard of them fashion axe meditation</h5>
                <img src={Profile} alt="Profile" className='profil' />
                <p>Ernest Byrd</p>
                <img src={Lampa} alt="Lampa" className='lampa'/>
            </div>
            <h6 className='h6'>DESCRIPTION</h6>
            <p className='p'>Banjo fanny pack mixtape austin meh portland fashion axe cardigan freegan 3 wolf moon. pop up viral letterpress next level ethical scenester trust funde chia. Chia tilde williamsburg etsy, craft beer banksy high life deep v fanny pack. Mlks Kickstarter Wes Anderson before they sold out. Health goth seitan hashtag, Thundercats McSweeney's quinoa Pitchfork Tumblr flannel. Gentrify flannel fanny pack retro.</p>
            <p className='p'>McSweeney's Carles squid, Wes Anderson pork belly post-ironic pop-up cardigan tattooed Marfa listiclete small Godard locavore plaid, mlkshk mumblecore viral Pinterest fingerstache four loko ugh Neutra banh mi food truck fap authentic. Whatever ennui McSweeney's forage salvia trust fund.</p>
            <h1>TOPICS INCLUDED</h1>
            <div className='inculide'>
                    <p><i class="fa-solid fa-check"></i>Ennui pickled asymmetrical</p>
                    <p><i class="fa-solid fa-check"></i>Kitsch keffiyeh crucifix ennui</p>
                    <p><i class="fa-solid fa-check"></i>Quinoa dreamcatcher food</p>
                    <p><i class="fa-solid fa-check"></i>Truck skateboard selvage bear</p>
                    <p><i class="fa-solid fa-check"></i>Fitsch keffiyeh crucifix ennui</p>
                    <p><i class="fa-solid fa-check"></i>Ennui pickled asymmetrical</p>
                    <p><i class="fa-solid fa-check"></i>Quinoa dreamcatcher food</p>
                    <p><i class="fa-solid fa-check"></i>Truck skateboard selvage bear</p>
                    <p><i class="fa-solid fa-check"></i>Ennui pickled asymmetrical</p>
                    <p><i class="fa-solid fa-check"></i>Ennui pickled asymmetrical</p>
            </div>
                <span className='span'>ACCORDION</span>
                <div className='dropdown'>
                    <div><h1><i class="fa-solid fa-play"></i><p>Short Courses:</p></h1><h2><span>NEW COURSE</span><p>Master Of Business Administration</p><i class="fa-solid fa-chevron-down"></i></h2></div>
                    <nav><h1><i class="fa-solid fa-play"></i><p>Post Graduated:</p></h1><h2><p>Distance Learning MBA Business Management</p><i class="fa-solid fa-chevron-down"></i></h2></nav>
                    <div><h1><i class="fa-solid fa-play"></i><p>CPD:</p></h1><h2><p>Environmental Science BTEC (HND) Course</p><i class="fa-solid fa-chevron-down"></i></h2></div>
                    <nav><h1><i class="fa-solid fa-play"></i><p>Post Graduated:</p></h1><h2><h6>EXAM</h6><p>Criminal Justice & Criminology</p><i class="fa-solid fa-chevron-down"></i></h2></nav>
                    <div><h1><i class="fa-solid fa-play"></i><p>Short Courses:</p></h1><h2><p className='p'>Higher Level Teaching Assistant & Child Psychology</p><i class="fa-solid fa-chevron-down"></i></h2></div>
                    <nav><h1><i class="fa-solid fa-play"></i><p>Other:</p></h1><h2><p>TAP Training Delivery Skills (For New Trainers)</p><i class="fa-solid fa-chevron-down"></i></h2></nav>
                    <div><h1><i class="fa-solid fa-play"></i><p>CPD:</p></h1><h2><p>Find Courses, Telecourses & Web Courses</p><i class="fa-solid fa-chevron-down"></i></h2></div>
                </div>
        </div>




        <div className='course-right-side'>
            <div className='information en'>
                <div className='header'>
                    <nav></nav>
                    <h6>COURSE INFORMATION</h6>
                </div>
                <div className='center'>
                    <nav><p>Starts:</p> <span>14 November 2015</span></nav>
                    <nav><p>Duration:</p> <span>1 Month / 4 Weeks</span></nav>
                    <nav><p>Study Level:</p> <span>Post Graduate</span></nav>
                    <nav><p>Disipline:</p> <span>Account & Finance</span></nav>
                    <nav className='sil'><p>Price:</p> <span>$45 / month</span></nav>
                </div>
            </div>
            <div className='related en'>
                <div className='header'>
                    <nav></nav>
                    <h6>RELATED COURSES</h6>
                </div>
                <div className='center'>
                    <div>
                        <img src={Card1} alt="Card1" />
                        <nav>
                            <p>John Smith</p>
                            <h6>History of Art Architecture</h6>
                            <span>PRICE: $39.99</span>
                        </nav>
                    </div>
                    <div>
                        <img src={Card2} alt="Card2" />
                        <nav>
                            <p>John Smith</p>
                            <h6>Fashion Buying Managment</h6>
                            <span>PRICE: $29.99</span>
                        </nav>
                    </div>
                    <div>
                        <img src={Card3} alt="Card3" />
                        <nav>
                            <p>John Smith</p>
                            <h6>Electronic Engineering</h6>
                            <span>PRICE: $19.99</span>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='categories en'>
                <div className='header'>
                    <nav></nav>
                    <h6>CATEGORIES</h6>
                </div>
                <div className='center'>
                    <div><i className='fa fa-arrow-right'></i><p>Design</p></div>
                    <div><i className='fa fa-arrow-right'></i><p>International</p></div>
                    <div><i className='fa fa-arrow-right'></i><p>Learning</p></div>
                    <div><i className='fa fa-arrow-right'></i><p>Read</p></div>
                    <div><i className='fa fa-arrow-right'></i><p>Education</p></div>
                    <div className='sil'><i className='fa fa-arrow-right'></i><p>Finance</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Singlecoursesection