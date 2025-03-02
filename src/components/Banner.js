import { useState, useEffect } from "react";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["_GMDev", "Antonio Erick", "TeamMember3"];
  const period = 1000;

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
    typingAnimation = 'wrap';
    bannerOffset = 'banner';
    tagline = 'tagline';
    devDescription = 'p';
  }

  

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

        <div className="bg-white mb-5 ">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block mt-20"> </span>
              <span className="block text-black"> A simple multipurpose API powered by <b className="text-5xl"> <em className="text-orange-500"> CloudFlares</em> edge computing technology </b>,  <em className="text-sky-500"> tailwindCSS</em>, and <em className="text-blue-500"> React.js</em></span>
            </h2>
            <div className="mt-8 flex lg:mt-10 lg:flex-shrink-0 lg:flex-col">

              <button class="bg-gradient-to-r from-[#ffffff] to-[#eb5e28] transition-colors rounded-[8px] px-[15px] py-[4px] text-white m-1">
                <a href="https://www.cloudflare.com/" className="text-white no-underline" >
                  CloudFlare Workers?
                </a>
              </button>

              <button class="bg-gradient-to-r from-[#ffffff] to-blue-500 transition-colors rounded-[8px] px-[15px] py-[4px] text-white m-1">
                <a href="https://tailwindcss.com/docs/border-width" className="text-white no-underline" >
                  tailwindCSS ?
                </a>
              </button>

              <button class="bg-gradient-to-r from-[#ffffff] to-[#61DBFB] transition-colors rounded-[8px] px-[15px] py-[4px] text-white m-1">
                <a href="https://reactjs.org/" className="text-white no-underline" >
                  react.js ?
                </a>
              </button>
            </div>
          </div>
        </div>

        :
        <div className="bg-gray-50 ">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block mt-20"> </span>
              <span className="block text-black"> A simple multipurpose API powered by <b className="text-5xl"> <em className="text-orange-500 m-2 text-4xl"> CloudFlares <br /></em>  </b> edge computing technology,  <em className="text-sky-500 m-2"> tailwindCSS</em> & <em className="text-blue-500 m-2"> React.js</em></span>
            </h2>
            <div className="mt-8 flex-column sm:p-5 ">

              <button class="bg-gradient-to-r from-[#ffffff] to-[#eb5e28] transition-colors rounded-[8px] px-[15px] py-[4px] text-white m-2">
                <a href="https://www.cloudflare.com/" className="text-white no-underline" >

                  CloudFlare
                  Workers?
                </a>
              </button>

              <button class="bg-gradient-to-r from-[#ffffff] to-blue-500 transition-colors rounded-[8px] px-[15px] py-[4px] text-white m-2">
                <a href="https://tailwindcss.com/docs/border-width" className="text-white no-underline" >
                  tailwind  CSS ?
                </a>
              </button>

              <button class="bg-gradient-to-r from-[#ffffff] to-[#61DBFB] transition-colors rounded-[8px] px-[15px] py-[4px] text-white m-2">
                <a href="https://reactjs.org/" className="text-white no-underline" >
                  react.js ?
                </a>
              </button>
            </div>
          </div>
        </div>
      }
    </>
  )
}
