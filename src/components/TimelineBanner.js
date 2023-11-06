import { useState, useEffect } from "react";

import { TimelineComponent } from './TimelineComponent.js';

export const TimelineBanner = () => {
  

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
    //console.log(windowSizeX[0]);

    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, [windowSizeX])

  useEffect(() => {
    window.scrollTo(0, 0)
    setwindowSizeX([window.innerWidth, window.innerHeight]);

  }, [])

  return (
    <>
      {mobileResize ?

          <>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl h-fit ">
            <span className="block text-gray-500 text-5xl text-center mt-2"> Projects and 3rd party open source API's<br/> involved with gmdevapi</span>
          </h2>

          <div className="bg-grey-900 mt-5">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex-column lg:items-center lg:justify-between lg:py-16 lg:px-8">

              <TimelineComponent />

            </div>
          </div>
          </>

          :
          <>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-5">
              <span className="block text-gray-500 text-3xl text-center"> Projects and 3rd party open source API's <br/>involved with gmdevapi</span>
            </h2>

            <div className="bg-white mt-5 mb-10" style={{ height: '100%'}}>
              
                  <TimelineComponent />

            </div>
          </>
      }
    </>
  )
}
