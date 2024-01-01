import { useState, useEffect } from "react";


export const AdBanner = () => {
 
  let mobileResize;
  let typingAnimation;;
  let bannerOffset;
  let tagline;
  let devDescription;

  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    //Initialize
    const mq = window.matchMedia("(max-width: 1000px)");
    setWindowSize(mq.matches);

    //Update
    function updateSize(e) {
      setWindowSize(e.matches);
      console.log(mq.matches);
    }

    mq.addEventListener("change", updateSize);

    return function clean() {
      mq.removeEventListener("change", updateSize);
    };
  }, []);

  if (windowSize) {
    mobileResize = false;
    typingAnimation = 'wrap-mobile';
    bannerOffset = 'banner-mobile';
    tagline = 'tagline-mobile';
    devDescription = 'p-mobile';
  }
  else {
    mobileResize = true;
  }

  
  return (
    <>
      {mobileResize ?

        <div className=" text-center bg-white mb-5 mt-5" >

          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl" >
              Need help with web design or development ? 
              <a href='https://linktr.ee/_GMDev' className="no-underline m-10" style={{ color: 'lightgreen' }}>
               https://linktr.ee/codedumpsterfire
              </a>
            
          </h2>

        </div>

        :
        <div className="bg-white mt-5 mb-2 " style={{ border: '1px solid black', padding: '5px', margin: '5px' }}>

          <h2 className="text-xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            <span className="block text-gray-300  text-center">  Need help with web design or development ? 
              <a href='https://linktr.ee/_GMDev' className="no-underline " style={{ color: 'lightgreen' }}>
               <br/> https://linktr.ee/codedumpsterfire
              </a>
            </span>
          </h2>

        </div>
      }
    </>
  )
}
