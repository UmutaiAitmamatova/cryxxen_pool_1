import React from 'react';

import { Header, Cashback, Pacrtners, Footer, ContentFirst } from './components';
import { One, two, Thee, Four, Five, Six, Seven, Apple, Google, Play } from './assets/content';
import ContentSecond from './components/ContentSecond/ContentSecond';

const oneItems = [
  {
    contentImg: One,
    GoogleImg: Google,
    PlayImg: Play,
    AppleImg: Apple,
    title: 'Hello',
    subtitle: "unut."
  },
];
const twoItems = [
  {
    contentImg: One,
    GoogleImg: Google,
    PlayImg: Play,
    AppleImg: Apple,
    title: 'Hello',
    subtitle: "unut."
  },
];

export default function App() {
  return (
    <div className='wrapper'>
      <Header />
      {
        oneItems.map((item) => {
          return (
            <ContentFirst
              ContentImg={item.contentImg}
              GoogleImg={item.GoogleImg}
              PlayImg={item.PlayImg}
              AppleImg={item.AppleImg}
              title={item.title}
              subtitle={item.subtitle}
            />
          )
        })
      }

      <ContentSecond/>

      {/* {
        items.map((item, index) => {
          const reverse = index % 2 === 0;
          return (
            <ContentFirst
              ContentImg={item.contentImg}
              GoogleImg={item.GoogleImg}
              PlayImg={item.PlayImg}
              AppleImg={item.AppleImg}
              title={item.title}
              subtitle={item.subtitle}
              flexDirection={reverse ? 'row-reverse' : 'row'}
            />
          )
        })
      } */}



      {
        oneItems.map((item, index) => {
          const reverse = index % 2 === 0;
          return (
            <ContentFirst
              ContentImg={item.contentImg}
              GoogleImg={item.GoogleImg}
              PlayImg={item.PlayImg}
              AppleImg={item.AppleImg}
              title={item.title}
              subtitle={item.subtitle}
              // flexDirection={reverse ? 'row-reverse' : 'row'}
            />
          )
        })
      }

      <Cashback />
      <Pacrtners />
      <Footer />
    </div>
  );
}

