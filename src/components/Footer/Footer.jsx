import React from "react";
import './Footer.css';
import {zen, psi, inpng } from '../../assets/footer';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__navs">
                        <div className="footer__links">
                            <p className="links__title">Learn</p>
                            <div className="nav__link">
                                <a href="#" className="link">
                                    Help center
                                </a>
                                <a href="#" className="link">
                                    Join ZEN team
                                </a>
                                <a href="#" className="link">
                                    Privacy Policy
                                </a>
                                <a href="#" className="link">
                                    Cookies
                                </a>
                                <a href="#" className="link">
                                    Terms of use
                                </a>
                            </div>
                        </div>
                        <div className="footer__links">
                            <p className="links__title">Discover</p>
                            <div className="nav__link">
                                <a href="#" className="link">
                                    For developers
                                </a>
                                <a href="#" className="link">
                                    Apple Pay
                                </a>
                                <a href="#" className="link">
                                    Google Pay
                                </a>
                            </div>
                        </div>
                        <div className="footer__links">
                            <p className="links__title">Offer</p>
                            <div className="nav__link">
                                <a href="#" className="link">
                                    Business
                                </a>
                                <a href="#" className="link">
                                    Personal
                                </a>
                            </div>
                        </div>
                        <div className="footer__links">
                            <p className="links__title">Language</p>
                            <div className="nav__link">
                                <a href="#" className="link">
                                    English
                                </a>
                                <a href="#" className="link">
                                    Polish
                                </a>
                            </div>
                        </div>
                        <div className="footer__links">
                            <p className="links__title">Follow us</p>
                            <img src={inpng} alt="LOGO" />
                        </div>
                        <div className="footer__links">
                            <p className="links__title">Contact</p>
                            <a href="#" className="link">
                                hello@zen.com
                            </a>
                        </div>
                    </div>

                    <div className="footer__zen">
                        <img src={zen} alt="ZEN" />
                    </div>

                    <div className="footer__psi">
                        <div className="psi__title">
                            ZEN.COM is a licensed financial institution under the supervision
                            of the Central Bank of Lithuania approved by European Banking
                            Authority for 31 countries. Registration number of the company
                            304749651, VAT ID LT100011714916. License of electronic money
                            institutions number LB000457. Share capital 2.185.000,00 EUR.
                            Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania. Sales
                            Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.
                        </div>
                        <div className="psi__logo">
                            <img src={psi} alt="PSI" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
