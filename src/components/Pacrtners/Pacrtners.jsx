import React from "react";
import "./Pacrtners.css";
import {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
} from "../../assets/partners/index";

const Pacrtners = () => {
    return (
        <div className="partners">
            <div className="container">
                <div className="partner__inner">
                    <div className="partners__logo-top">
                        <div className="partners__logos">
                            <img src={img1} alt="11" />
                        </div>
                        <div className="partners__logos">
                            <img src={img2} alt="11" />
                        </div>
                        <div className="partners__logos">
                            <img src={img3} alt="11" />
                        </div>
                        <div className="partners__logos">
                            <img src={img4} alt="11" />
                        </div>
                    </div>

                    <div className="partners__logo-bottom">
                        <div className="partners__logos">
                            <img src={img5} alt="11" />
                        </div>
                        <div className="partners__logos">
                            <img src={img6} alt="11" />
                        </div>
                        <div className="partners__logos">
                            <img src={img7} alt="11" />
                        </div>
                        <div className="partners__logos">
                            <img src={img8} alt="11" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pacrtners;
