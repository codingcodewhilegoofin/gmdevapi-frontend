import { useState, useEffect } from "react";

import { ProjectTabs } from './ProjectTabs.js';

export const ProjectBanner = () => {
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

 
  return (
    <>
      {mobileResize ?

        <div className="bg-black mt-5" id="projects">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex-column lg:items-center lg:justify-between lg:py-16 lg:px-8">

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="block mt-2"> </span>
              <span className="block text-white mb-5 text-9xl"> Projects</span>
            </h2>
            

              <ProjectTabs />
           
          </div>
        </div>

        :
        <div className="bg-black mt-5 " id="projects" >
          <div className="mx-auto max-w-7xl py-12 px-1 sm:px-1 lg:flex lg:items-center lg:justify-between lg:py-3 lg:px-3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              <span className="block text-blue-500 text-5xl "> Projects</span>
            </h2>
            <div className="mt-8 flex-column ">

              <ProjectTabs />

            </div>
          </div>
        </div>
      }
    </>
  )
}
