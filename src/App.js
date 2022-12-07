import React from 'react';

import { Header, Footer} from './components';
import Home from './pages/Home';

export default function App() {
  const [firstContents, setFirstContents] = React.useState([]);
  const [secondBlock, setSecondBlock] = React.useState([]);
  const [thirdBlock, setThirdBlock] = React.useState([]);
  const [fourthBlock, setFourthBlock] = React.useState([]);
  const [fifthBlock, setFifthBlock] = React.useState([]);
  const [sixthBlock, setSixthBlock] = React.useState([]);
  const [seventhBlock, setSeventhBlock] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then((json) => {
      setFirstContents(json.firstBlock);
      setSecondBlock(json.secondBlock);
      setThirdBlock(json.thirdBlock);
      setFourthBlock(json.fourthBlock);
      setFifthBlock(json.fifthBlock);
      setSixthBlock(json.sixthBlock);
      setSeventhBlock(json.seventhBlock);
      
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Home
        firstBlock={firstContents}
        secondBlock={secondBlock}
        thirdBlock={thirdBlock}
        fourthBlock={fourthBlock}
        fifthBlock={fifthBlock}
        sixthBlock={sixthBlock}
        seventhBlock={seventhBlock}
      />
      <Footer />
    </div>
  );
}

