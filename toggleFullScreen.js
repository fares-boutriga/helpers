//the statue isInFullscreen used to handel the full screen button in the clint side in react js 
const [isInFullScreen, setIsInFullScreen] = useState(false);

const isInFullScreenFn = () => {
  return (
    (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement &&
      document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement &&
      document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null)
  );
};
const toggleFullScreen = () => {
  const isFS = isInFullScreenFn();

  const docElm = document.documentElement;
  if (!isFS) {
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  setIsInFullScreen(!isFS);
};