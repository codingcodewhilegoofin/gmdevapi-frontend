import { useState, useEffect } from "react";


export const AboutBanner = () => {
 

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


  return (
    <>
      {mobileResize ?

        <>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
            <span className="block text-black text-5xl text-center mt-5">
              About
            </span>
          </h2>

          <div className="bg-grey-900 mt-5">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex-column lg:items-center lg:justify-between lg:py-16 lg:px-8">

              
            <h1> hi </h1>


            </div>
          </div>
        </>

        :
        <>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
            <span className="block text-black text-5xl text-center m-5">
            About
            </span>
          </h2>

          <div className="bg-white mt-5 ">
            <div className="mx-auto max-w-7xl py-12 px-1 sm:px-1 lg:flex lg:items-center lg:justify-between lg:py-3 lg:px-3">

              <div className="mt-8 flex sm:p-5 ">

                <h1> hi </h1>

              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}
