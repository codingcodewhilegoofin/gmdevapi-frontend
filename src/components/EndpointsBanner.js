import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { EndpointsComponent } from './EndpointsComponent';

export const EndpointsBanner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const toRotate = ["_GMDev", "Antonio Erick", "TeamMember3"];

  const period = 1000;

  const [windowSizeX, setwindowSizeX] = useState(window.innerWidth);

  let mobileResize;
  let typingAnimation;;
  let bannerOffset;
  let tagline;
  let devDescription;

  if (windowSizeX[0] < 700) {
    mobileResize = false;
    typingAnimation = 'wrap-mobile';
    bannerOffset = 'banner-mobile';
    tagline = 'tagline-mobile';
    devDescription = 'p-mobile';
  }
  else {
    mobileResize = true;
    typingAnimation = 'wrap';
    bannerOffset = 'banner';
    tagline = 'tagline';
    devDescription = 'p';
  }

  useEffect(() => {

    function updateSize() {
      setwindowSizeX([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    console.log(windowSizeX[0]);

    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, [windowSizeX])

  useEffect(() => {
    window.scrollTo(0, 0)
    setwindowSizeX([window.innerWidth, window.innerHeight]);

  }, [])

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <>
      {mobileResize ?

        <>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl " id="endpoints">
            <span className="block text-black text-5xl text-center mt-5">
              Endpoints
            </span>
          </h2>

          <span className="block text-black text-5xl text-center mt-5">
              Current list of endpoints available to call
          </span>

          <div className="bg-grey-900 mt-5">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex-column lg:items-center lg:justify-between lg:py-16 lg:px-8">

              <EndpointsComponent />

            </div>
          </div>

          <span className="block text-black text-5xl text-center mb-5">
              More to come!
          </span>
          
        </>

        :
        <>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl " id="endpoints">
            <span className="block text-black text-5xl text-center mt-5">
              Endpoints
            </span>
          </h2>

          <span className="block text-black text-5xl text-center mt-5">
              Current list of endpoints available to call
          </span>

          <div className="flex-column bg-white mt-5 ">
            <div className="flex-column mx-auto max-w-6xl py-12 px-1 sm:px-1 lg:flex lg:items-center lg:justify-between lg:py-3 lg:px-3">

              <div className=" flex-column mt-8  p-2 ">

                <EndpointsComponent />

              </div>
            </div>
          </div>

          <span className="block text-black text-5xl text-center mb-5">
              More to come!
          </span>
        </>
      }
    </>
  )
}
