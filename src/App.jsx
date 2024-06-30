// import { useState } from 'react'

import "./App.css";
import Accordion from "./components/Accordion";
import FeaturesFlag from "./components/Features-Flags";
import FeaturesFlagGlobalState from "./components/Features-Flags/context";
import GithubProfileFinder from "./components/Github-Profile-Finder";
import ImageSlider from "./components/Image-Slider";
import LoadMoreProducts from "./components/Load-More-Products";
import MoalParent from "./components/Modal/MoalParent";
import RandomColor from "./components/Random-color";
import ScrollIndicator from "./components/Scroll-indicator";
import SearchAutocomplete from "./components/Search-Autocomplete";
import TabsParent from "./components/Tabs";
import TicTacToe from "./components/Tic-Tac-Toe";
import UseOutsideClickHookExample from "./components/Use-Outside-Click-Hook";
import UseFetchHookExample from "./components/UseFetchHook";
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
      {/* <LightDarkTheme /> */}

      {/* scroll indicator */}
      {/* <ScrollIndicator url="https://dummyjson.com/products?limit=100" /> */}

      {/* tabs */}
      {/* <TabsParent /> */}

      {/* modal */}
      {/* <MoalParent /> */}

      {/* github profile finder  */}
      {/* <GithubProfileFinder /> */}

      {/* autocomplete search */}
      {/* <SearchAutocomplete /> */}

      {/* features flag */}
      {/* <FeaturesFlagGlobalState>
        <FeaturesFlag />
      </FeaturesFlagGlobalState> */}

      {/* useFetch hook */}
      {/* <UseFetchHookExample /> */}

      {/* use outside click custom hook */}
      <UseOutsideClickHookExample />
    </>
  );
}

export default App;
