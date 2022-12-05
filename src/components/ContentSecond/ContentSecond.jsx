import React from 'react'
import img from '../../assets/content/2.png';

const ContentSecond = ({ContentImg, title, subtitle, flexDirection }) => {
  return (
    <div class="content">
    <div class="container">
        <div class="content__inner" style={{flexDirection: flexDirection }}>
            <div class="content__l">
                <h1 class="content__title">1-year warranty boost</h1>
                <div class="content__subtitle">ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.  When you buy any electronics with your ZEN shopping Mastercard®, their warranty gets extended by one year. How does it work? It simply does. Automatically.</div>
            </div>

            <div class="content__r">
                <img width="500px" src={img} alt="IMG_1"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default ContentSecond;