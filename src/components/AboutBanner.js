import { useState, useEffect } from "react";
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [


  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]


export const AboutBanner = () => {
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

        <>
          <div className="bg-black mt-5">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex-column lg:items-center lg:justify-between lg:py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
            <span className="block text-white text-9xl  m-5">
              About
            </span>
          </h2>


              <div className="bg-white py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="lg:text-center">
                    <h2 className="text-lg font-semibold text-indigo-600">Transactions</h2>
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                      A better way to send money
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                      Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                      accusamus quisquam.
                    </p>
                  </div>

                  <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                      {features.map((feature) => (
                        <div key={feature.name} className="relative">
                          <dt>
                            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
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
          
          <div className="bg-black mt-5 ">
            <div className="mx-auto max-w-7xl py-12 px-1 sm:px-1 lg:flex lg:items-center lg:justify-between lg:py-3 lg:px-3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
            <span className="block text-white text-5xl  m-0">
              About
            </span>
          </h2>

              <div className="mt-8 flex sm:p-5 ">

                <div className="bg-white py-12">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                      <h2 className="text-lg font-semibold text-indigo-600">Transactions</h2>
                      <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        A better way to send money
                      </p>
                      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                        accusamus quisquam.
                      </p>
                    </div>

                    <div className="mt-10">
                      <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        {features.map((feature) => (
                          <div key={feature.name} className="relative">
                            <dt>
                              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
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
          </div>
        </>
      }
    </>
  )
}
