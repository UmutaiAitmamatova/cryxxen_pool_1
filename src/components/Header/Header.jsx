import React from "react";
import './Header.css';
import logo from '../../assets/logo.png';
import Menu from "../Menu/Menu";

const Header = () => {
    const [menuActive, setMenuActive] = React.useState(false);
    const menu = [
        { id: 0, value: "Personal", href: "#" },
        { id: 1, value: "Business", href: "#" },
        { id: 2, value: "Zenefits", href: "#" },
        { id: 3, value: "Features", href: "#" },
        { id: 4, value: "Pricing", href: "#" }
    ];
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
                    <div className="menu__btn" onClick={() => setMenuActive(!menuActive)}>
                        <span className="senond" />
                    </div>
                </div>
            </div>
            <Menu
                active={menuActive}
                setActive={setMenuActive}
                header={"Menu"}
                items={menu}
            />
        </div>
    );
};

export default Header;
