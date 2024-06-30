import React, { useContext } from "react";
import { featuresFlagContext } from "./context";
import LightDarkTheme from "../ligth-dark-mode";
import MoalParent from "../Modal/MoalParent";
import RatingStar from "../rating-star";
import QRCodeGenerator from "../qr-code-generator";
import TicTacToe from "../Tic-Tac-Toe";
// showLightDarkMode: true,
//   showModal: true,
//   showQrCodeGenerator: true,
//   showTicTacToe: true,
//   showRatingStar: false,

function FeaturesFlag() {
  const { loading, enabledFlags } = useContext(featuresFlagContext);
  const componentsToRender = [
    {
      key: "showLightDarkMode",
      component: <LightDarkTheme />,
    },
    {
      key: "showModal",
      component: <MoalParent />,
    },
    {
      key: "showRatingStar",
      component: <RatingStar />,
    },
    {
      key: "showQrCodeGenerator",
      component: <QRCodeGenerator />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
  ];
  console.log(loading, enabledFlags);
  return (
    <div>
      <h1>FeaturesFlag</h1>
      {componentsToRender.map((componentItem) =>
        enabledFlags[componentItem.key] ? componentItem.component : null
      )}
    </div>
  );
}

export default FeaturesFlag;
