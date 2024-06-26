// import { useState } from 'react'

import "./App.css";
import Accordion from "./components/Accordion";
import ImageSlider from "./components/Image-Slider";
import LoadMoreProducts from "./components/Load-More-Products";
import RandomColor from "./components/Random-color";
import TicTacToe from "./components/Tic-Tac-Toe";
import LightDarkTheme from "./components/ligth-dark-mode";
import QRCodeGenerator from "./components/qr-code-generator";
import RatingStar from "./components/rating-star";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* accordion */}
      {/* <Accordion /> */}

      {/* random colors generator */}
      {/* <RandomColor /> */}

      {/* star rating */}
      {/* <RatingStar noOfStars={10} /> */}

      {/* image slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load  more products*/}
      {/* <LoadMoreProducts /> */}

      {/* tic tac toe */}
      {/* <TicTacToe /> */}

      {/* tree view */}
      {/* <TreeView menu={menus} /> */}

      {/* qr code */}
      {/* <QRCodeGenerator /> */}

      {/* light  dark theme */}
      <LightDarkTheme />
    </>
  );
}

export default App;
