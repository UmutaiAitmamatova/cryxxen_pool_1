import React from "react";

import {
    Cashback,
    Pacrtners,
    ContentFirst,
    ContentSecond,
} from "../components";

const Home = ({ firstBlock, secondBlock, thirdBlock, fourthBlock, fifthBlock, sixthBlock, seventhBlock }) => {
    return (
        <div className="home">

            {
                firstBlock.map((item) => {
                    return (
                        <ContentFirst
                            key={item.id}
                            ContentImg={item.contentImg}
                            GoogleImg={item.GoogleImg}
                            PlayImg={item.PlayImg}
                            AppleImg={item.AppleImg}
                            p={item.p}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    )
                })
            }

            {
            secondBlock.map((item, index) => {
                    const reverse = index % 2 === 0;
                    return (
                        <ContentSecond
                            key={item.id}
                            ContentImg={item.contentImg}
                            title={item.title}
                            subtitle={item.subtitle}
                            flexDirection={reverse ? 'row-reverse' : 'row'}
                        />
                    )
                })
            }

            {
            thirdBlock.map((item) => {
                    return (
                        <ContentSecond
                            key={item.id}
                            ContentImg={item.contentImg}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    )
                })
            }

            <Cashback />

            <Pacrtners />

            {
                fourthBlock.map((item) => {
                    return (
                        <ContentFirst
                            ContentImg={item.contentImg}
                            GoogleImg={item.GoogleImg}
                            AppleImg={item.AppleImg}
                            title={item.title}
                            subtitle={item.subtitle}
                            key={item.id}
                        />
                    )
                })
            }

            {
            fifthBlock.map((item, index) => {
                    const reverse = index % 2 === 0;
                    return (
                        <ContentSecond
                            ContentImg={item.contentImg}
                            title={item.title}
                            subtitle={item.subtitle}
                            flexDirection={reverse ? 'row-reverse' : 'row'}
                            key={item.id}
                        />
                    )
                })
            }

            {
            sixthBlock.map((item) => {
                    return (
                        <ContentSecond
                            ContentImg={item.contentImg}
                            title={item.title}
                            subtitle={item.subtitle}
                            key={item.id}
                        />
                    )
                })
            }

            {
                seventhBlock.map((item, index) => {
                    const reverse = index % 2 === 0;
                    return (
                        <ContentFirst
                            ContentImg={item.contentImg}
                            GoogleImg={item.GoogleImg}
                            PlayImg={item.PlayImg}
                            AppleImg={item.AppleImg}
                            p={item.p}
                            title={item.title}
                            subtitle={item.subtitle}
                            flexDirection={reverse ? 'row-reverse' : 'row'}
                            key={item.id}
                        />
                    )
                })
            }

        </div>
    );
};

export default Home;
