import '../styles/footer.css'
import logo from '../assets/logo.png'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from 'react-icons/fa'

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">

          <div className="footer-logo">

            <img
              src={logo}
              alt="Codehatch"
            />

          </div>

          <p>
            Empowering the next generation
            of developers in Africa and beyond.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">

          <h4>Quick Links</h4>

          <a href="#about">About Us</a>

          <a href="#curriculum">Curriculum</a>

          <a href="#why">Why Codehatch</a>

          <a href="#contact">Contact Us</a>

        </div>

        {/* SOCIALS */}
        <div className="footer-socials">

          <h4>Connect With Us</h4>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-copy">

          <p>
            © 2026 Codehatch.
            <br />
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer