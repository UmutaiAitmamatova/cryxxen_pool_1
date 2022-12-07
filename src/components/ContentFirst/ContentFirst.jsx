import React from 'react'
import './ContentFirst.css';

const ContentFirst = ({ContentImg, title, subtitle, AppleImg, GoogleImg, PlayImg, p, flexDirection }) => {
    return (
        <div className="content">
        <div className="container">
            <div className="content__inner" style={{flexDirection: flexDirection }}>
                <div className="content__l">
                    <div className="content__play">
                        <a href="#"><img src={PlayImg} alt=""/></a>
                        <p>{p}</p>
                    </div>
                    <h1 className="content__title">{title}</h1>
                    <div className="content__subtitle">{subtitle}</div>
                    <div className="content__nav">
                        <a href="#" className="link"><img src={AppleImg} alt=""/></a>
                        <a href="#" className="link"><img src={GoogleImg} alt=""/></a>
                    </div>
                </div>

                <div className="content__r">
                    <img src={ContentImg} alt="IMG_1"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ContentFirst;