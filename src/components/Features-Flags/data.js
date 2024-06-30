const dummyApiResponse = {
  showLightDarkMode: true,
  showModal: false,
  showQrCodeGenerator: true,
  showTicTacToe: true,
  showRatingStar: false,
};

function featureFlagServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) {
      resolve(dummyApiResponse);
    } else {
      reject("error occure try again");
    }
  });
}

export default featureFlagServiceCall;
