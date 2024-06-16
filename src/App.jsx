// import { useState } from 'react'

import "./App.css";
import Accordion from "./components/Accordion";
import RandomColor from "./components/Random-color";
import RatingStar from "./components/rating-star";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* accordion */}
      {/* <Accordion /> */}

      {/* random colors generator */}
      {/* <RandomColor /> */}

      {/* star rating */}
      <RatingStar noOfStars={10} />
    </>
  );
}

export default App;
