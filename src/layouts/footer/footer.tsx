/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router";

// import { useState } from "react"
export const Footer = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  return (
    <>
      <footer className="site_footer bg_grey_dark">
        <div className="conta_iner">
          <div className="footer_nav hd_6 uh_spc">
            <div className="single">
              <a onClick={() => navigate("/")} className="site_logo">
                <figure>
                  <img src={`/static/images/camly-health-logo.png`} alt="Camly Health Logo" />
                </figure>
              </a>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="single">
              <h2>Quick Links</h2>
              <ul className="menu_list">
                <li>
                  <a href="javascript:void(0)" onClick={() => navigate("/")}>Home</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Bookings</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Articles</a>
                </li>
                <li>
                  <a href="javascript:void(0)">About Us</a>
                </li>
              </ul>
            </div>
            <div className="single">
              <h2>Our Services</h2>
              <ul className="menu_list">
                <li>
                  <a href="javascript:void(0)">Make Appointment</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Virtual Consultation</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Visit Doctor Clinic</a>
                </li>
              </ul>
            </div>
            <div className="single">
              <h2>Subscribe</h2>
              <form className="form">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <button className="btnn btn_primary">Subscribe</button>
              </form>
              <ul className="social_links">
                <li>
                  <a href="javascript:void(0)">
                    <img src="/static/images/instagram_icon.svg" alt="Icon" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <img src="/static/images/twitter_icon.svg" alt="Icon" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <img src="/static/images/facebook_icon.svg" alt="Icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copywrite">
          <div className="conta_iner">
            <p>© Copyright 2024 Camly Health, All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
