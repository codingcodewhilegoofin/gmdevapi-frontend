import { useState, useEffect } from "react";


export const AdBanner = () => {
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



  return (
    <>
      {mobileResize ?

        <div className=" text-center bg-white mb-5">

          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-black "> Need help building a web-app ? <br />
              <a href='https://linktr.ee/_GMDev' className="no-underline m-10" style={{ color: 'lightgreen' }}>
                https://linktr.ee/_GMDev
              </a>
            </span>
          </h2>

        </div>

        :
        <div className="bg-white mt-5 mb-2 " style={{ border: '1px solid black', padding: '5px', margin: '5px' }}>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-black text-center"> Need help building <br /> a web-app ?
              <a href='https://linktr.ee/_GMDev' className="no-underline " style={{ color: 'lightgreen' }}>
                https://linktr.ee/_GMDev
              </a>
            </span>
          </h2>


        </div>
      }
    </>
  )
}
