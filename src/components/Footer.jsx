import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer-view container-fluid">
        <div className="footer-p">
          <p>
            Young people have been 'mis-sold' <i>path to success,</i> business
            leaders warn.
          </p>
        </div>
        <div className="button-view">
          <button className="btn-view">VIEW COURSES</button>
        </div>
        </div>

      
      <div className="container footer-end">
        <div className="footer-cont">
          <div className="cont-read">
            <div className="border-line"></div>
            <p>
              Viral megings photo booth farm tab McSweeney's Thundercats til
              typewrite PBR food truck Kickstarter mumb ennui Tumblr. Jean
              shorts hoodiele.
            </p>
            <a href="#">READ MORE</a>
          </div>
          <div className="cont-links">
          <div className="cont-content">
          <div className="border-line"></div>
            <li>Graduation</li>
            <li>Admissions</li>
            <li>International</li>
            <li>FAQs</li>
          </div>
          <div className="cont-link">
            <li>Courses</li>
            <li>About Us</li>
            <li>Bookstore</li>
            <li>Alumni</li>
          </div>
          </div>
          
          <div className="cont-contact">
          <div className="border-line"></div>
            <p>1107 Wood Street Saginaw, MI New York 48607</p>
            <p> +12 (34) 214 280 2000</p>
            <p> support@educa.com</p>
          </div>
          <div className="cont-email">
          <div className="border-line"></div>
            <p>Subsrcibe to our newsletter for latest updates about our site for universe.</p>
            <input type="text" placeholder="Email Address..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>


        <div className="footer-link">
            <div className="footer-mh">
                <p>&copy; COPYRIGHT 2015 EDUCA. ALL RIGHTS RESERVED</p>
            </div>


            <div className="footer-links">
                <a href="#">HOME</a>
                <a href="#">COURSES</a>
                <a href="#">FUTURE STUDENTS</a>
                <a href="#">NEWS</a>
                <a href="#">PAGES</a>
                <a href="#">CONTACT</a>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
