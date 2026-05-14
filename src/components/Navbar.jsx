import logo from "../assets/logo.png";
import { useState } from "react";
import "../styles/navbar.css";


function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <nav className="navbar">

            <div className="logo-section">
                <div className="logo-box"><img src={logo} alt="logo" /></div>
                <div className="logo-text">
                    <h2>CODEHATCH</h2>
                    <p>VIRTUAL ACADEMY</p>
                </div>
            </div>

            <ul className={isOpen ? "nav-links active" : "nav-links"}>
                <li><a href="#home" className="current">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#curriculum">Curriculum</a></li>
                <li><a href="#whycodehatch">Why Codehatch</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#pricing">Contact</a></li>
            </ul>

            <button className="join-btn">Join the challenge</button>
            {/*harmburger menu*/}
            <div className="harmburger" onClick={() => setIsOpen(!isOpen)}>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            </div>
        </nav>
    );
}

export default Navbar