import React from "react";
import first from "../../StoreAssets/images/newsletter.png";

import { Link } from "react-router-dom";
import { BsLinkedin, BsYoutube, BsInstagram, BsFacebook,BsTwitter,BsGithub } from "react-icons/bs";

function Footer() {



  return (
    <>
      <footer className="p-5">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={first} alt="NewsLetter" />
                <p className="mb-0 text-white">Sign Up For Newsletter</p>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text p-2-3 text-white"
                  id="basic-addon2"
                >
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white">
                  Office#9 Mall#9 G-9 Markaz Islambad<br />
                  Zipcode:44090
                </address>
                <a className="a text-white mt-4 d-block mb-3" href="tel:+923079517458">
                  +923079517458
                </a>
                <a className="a text-white mt-4 d-block mb-3" href="mailto:ibtisamkhalid103@gmail">
                  Ibtisamkhalid103@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-15 ">
                  <a href="#" className=""><BsLinkedin /></a>
                  <a href="#" className=""><BsGithub /></a>
                  <a href="#" className=""><BsYoutube /></a>
                  <a href="#" className=""><BsFacebook /></a>
                  <a href="#" className=""><BsInstagram /></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="Links">Privacy Policy</Link>
                <Link className="Links">Refund Policy</Link>
                <Link className="Links">Shipping Policy</Link>
                <Link className="Links">Terms Of Service</Link>
                <Link className="Links">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="Links">Search</Link>
                <Link className="Links">About Us</Link>
                <Link className="Links">Faq</Link>
                <Link className="Links">Contact</Link>
                <Link className="Links">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="Links">Accessories</Link>
                <Link className="Links">Laptops</Link>
                <Link className="Links">Headphones</Link>
                <Link className="Links">Tablets</Link>
                <Link className="Links">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}: Made By Ibtisam Khalid
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
