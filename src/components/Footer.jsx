import React from 'react';
import "./css/Footer.css";
import { logonav } from "../assets";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="logo-row">
                <img src={logonav} alt="Company Logo" className="logo" />
                <span className="company-name">Open Lake</span>
            </div>
            <hr className="footer-hr" />
            <div className="social-icons-row">
                <a href="https://www.facebook.com" className="social-icon-link">
                    <i className="fab fa-linkedin-in social-icon"></i>
                </a>
                <a href="https://www.twitter.com" className="social-icon-link">
                    <i className="fab fa-github social-icon"></i>

                </a>
                <a href="https://www.instagram.com" className="social-icon-link">
                    <i className="far fa-envelope social-icon"></i>
                </a>
                <a href="https://www.linkedin.com" className="social-icon-link">
                    <i className="fab fa-instagram social-icon"></i>
                </a>
            </div>
            <hr className="footer-hr" />
            <div className="section-links-row">
                <a href="#top" className="section-link">
                    Back to Top
                </a>
                <a href="/" className="section-link">
                    Home
                </a>
                <a href="/projects" className="section-link">
                    Projects
                </a>
                <a href="/community" className="section-link">
                    Community
                </a>

                <a href="/events" className="section-link">
                    Events
                </a>
            </div>
        </footer>
    );
};

export default Footer;
