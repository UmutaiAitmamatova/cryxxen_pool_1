import React from 'react'

const ContentSecond = ({ ContentImg, title, subtitle, flexDirection }) => {
    return (
        <div className="content">
            <div className="container">
                <div className="content__inner" style={{ flexDirection: flexDirection }}>
                    <div className="content__l">
                        <h1 className="content__title">{title}</h1>
                        <div className="content__subtitle">{subtitle}</div>
                    </div>

                    <div className="content__r">
                        <img width="500px" src={ContentImg} alt="IMG_1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentSecond;