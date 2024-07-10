
import React from 'react';
import './Footer.css';
import fb from '../images/fb.png'
import twitter from '../images/twitter.png'
import getitonplay from '../images/getitonplay.png'
import appstore from '../images/appstore.png'

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="container">
                <div className="content-container">
                    <div className="inside-content-cotainer">
                        <div className="footer-main__title">iLovePDF</div>
                        <ul className="footer-main__nav">
                            <li><a href="/">Home</a></li>
                            <li><a href="/features">Features</a></li>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/help/documentation">Tools</a></li>
                            <li><a href="/help/faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="inside-content-cotainer">
                        <div className="footer-main__title">Product</div>
                        <ul className="footer-main__nav">
                            <li>MY PDF Desktop</li>
                            <li>MY PDF Mobile</li>
                            <li>Developers</li>
                            <li>Wordpress Plugin</li>
                            <li>My img.com</li>
                        </ul>
                    </div>
                    <div className="inside-content-cotainer">
                        <div className="footer-main__title">Solutions</div>
                        <ul className="footer-main__nav">
                            <li>Business</li>
                            <li>Education</li>
                        </ul>
                    </div>
                    <div className="inside-content-cotainer">
                        <div className="footer-main__title">Company</div>
                        <ul className="footer-main__nav">
                            <li>Our Story</li>
                            <li>Blog</li>
                            <li>Press</li>
                            <li>Legal & Privacy</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <ul className="app__store">
                    <li><img src={getitonplay} alt="Google Play" /></li>
                    <li><img src={appstore} alt="App Store" /></li>
                </ul>
                <div className="separator"></div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-big__lang">
                            <span className="lang__current">
                                <i className="ico ico--world"></i>
                                English <i className="ico ico--down"></i>
                            </span>
                            
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="footer-main__info">
                            <div className="slogan">
                                <p>&copy; MYPDF TOOLS  2024 &reg; - MY PDF Editor</p>
                            </div>
                            <div className="social">
                            <img src={fb} alt='fb'></img>
                            <img src={twitter} alt='twitter'></img>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
