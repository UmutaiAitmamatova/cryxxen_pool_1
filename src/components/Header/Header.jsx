import React from "react";
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__right">
                        <div className="header__logo">
                            <img src={logo} alt="LOGO" />
                        </div>
                        <div className="right__nav">
                            <a href="#" className="nav__link">
                                Personal
                            </a>
                            <a href="#" className="nav__link">
                                Business
                            </a>
                        </div>
                    </div>
                    <div className="header__left">
                        <div className="left__nav">
                            <a href="#" className="nav__link">
                                Zenefits
                            </a>
                            <a href="#" className="nav__link">
                                Features
                            </a>
                            <a href="#" className="nav__link">
                                Pricing
                            </a>
                        </div>
                        <div className="header__btn">
                            <button className="btn">Get app</button>
                        </div>
                    </div>
                    <a className="icon" href="#" id="menu">
                        &#9776;
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
