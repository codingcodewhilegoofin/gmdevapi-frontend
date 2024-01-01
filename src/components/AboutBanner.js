import { useState, useEffect } from "react";
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'What does this API do ?',
    description:
      "The api is a multipurpose demonstration of backend development. It connects to other 3rd party API's via HTTP and provides functionality to my other applications",
    icon: GlobeAltIcon,
  },
  {
    name: 'Is this a public API ?',
    description:
      'It is a public api with restrictions set to limit useage. The usage limitation is also capped due to 3rd party librarys. All 3rd party API Keys have been securely stored',
    icon: GlobeAltIcon,
  },
  {
    name: 'What powers this api?',
    description:
      'React.js , CloudFlare, TailwindCSS, Material-UI, MongoDB, Polygon.io, Spotify,OpenAI,ArduinoIOTcloud,OpenSea, and UsTreasury. I am not affiliated with any 3rd party APIs just using their pubic API ',
    icon: BoltIcon,
  },
  {
    name: 'Can I power my application with it?',
    description:
      'Yes, anyone can call the gmdevapi via HTTP requests. It is limited to 100,000 requests total a day. If you would like to use it please contact me',
    icon: BoltIcon,
  },
]

const featuresMobile = [
  {
    name: 'What does this API do ?',
    description:
      "The api is a multipurpose demonstration of backend development. It connects to other 3rd party API's via HTTP and provides functionality to my other applications",
    icon: GlobeAltIcon,
  },
  {
    name: 'Is this a public API ?',
    description:
      'It is a public api with restrictions set to limit useage. The usage limitation is also capped due to 3rd party librarys. All 3rd party API Keys have been securly stored',
    icon: GlobeAltIcon,
  },
  {
    name: 'What powers this api?',
    description:
      'React.js , CloudFlare, TailwindCSS, Material-UI, MongoDB, Polygon.io,Spotify,OpenAI, ArduinoIOTcloud, OpenSea , and UsTreasury.',
    icon: BoltIcon,
  },
  {
    name: 'Use my application with it?',
    description:
      'Yes, anyone can call the gmdevapi via HTTP requests. It is limited to 100,000 requests total a day. If you would like to use it please contact me',
    icon: BoltIcon,
  },
]


export const AboutBanner = () => {
  
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

        <>
          <div className="bg-black mt-5" id="about">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex-column lg:items-center lg:justify-between lg:py-16 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
                <span className="block text-white text-9xl  m-5">
                  About
                </span>
              </h2>


              <div className="bg-white py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="lg:text-center">

                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                      About this api
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                      More detialed information on each project/endpoint can be found above this is about the developers and overall project goal
                    </p>
                  </div>

                  <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative">
                          <dt>
                            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                              <feature.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                          </dt>
                          <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </>

        :
        <>

          <div className="bg-black mt-1 " id="about">

            <h2 className=" mt-5 text-5xl  text-blue-500 font-bold tracking-tight text-blue-500 sm:text-4xl " style={{ textAlign: 'center' }}>

              About

            </h2>

            <div className=" mt-1 bg-black py-12 w-fit " style={{ border: '1px solid black' }}>

              <p className="text-center text-2xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
                About this api 
              </p>
              <p className="text-center mt-4 max-w-2xl text-xl text-blue-300 lg:mx-auto">
                More detialed information on each project/endpoint can be found above

              </p>

            </div>

            <div className="" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
              <div className="m-5" style={{ border: '1px solid white', width: '95%' }}>
                <dl className=" ">
                  {featuresMobile.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt>
                        <p className="ml-1  font-medium leading-6 text-white">{feature.name}</p>
                      </dt>
                      <dd className="ml-1   text-sm text-blue-500">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>


          </div>
        </>
      }
    </>
  )
}
