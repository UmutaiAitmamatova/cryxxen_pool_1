import React from 'react'
import './ContentFirst.css';

const ContentFirst = ({ContentImg, title, subtitle, AppleImg, GoogleImg, PlayImg, flexDirection }) => {
    return (
        <div class="content">
        <div class="container">
            <div class="content__inner" style={{flexDirection: flexDirection }}>
                <div class="content__l">
                    <div class="content__play">
                        <a href="#"><img src={PlayImg} alt=""/></a>
                        <p>In every beginning, there is chaos.</p>
                    </div>
                    <h1 class="content__title">{title}</h1>
                    <div class="content__subtitle">{subtitle}</div>
                    <div class="content__nav">
                        <a href="#" class="link"><img width="160px" src={AppleImg} alt=""/></a>
                        <a href="#" class="link"><img width="160px" src={GoogleImg} alt=""/></a>
                    </div>
                </div>

                <div class="content__r">
                    <img src={ContentImg} alt="IMG_1"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ContentFirst;