import React from 'react'
import { images } from '../utils/image'

const Hero = () => {
  return (
    <>
      <div className="flex xl:items-end lg:h-[45rem]">
        <div className="relative items-center xl:items-start w-full flex flex-col min-h-[26rem] xl:border-r-[1px] xl:border-linesColor xl:w-[50%] bottom-0">
          <span className="absolute hidden xl:inline-flex h-[1px] w-1/3 right-0 bg-linesColor"></span>
          <span className="font-['Bebas_Neue'] text-4xl lg:text-7xl font-normal">
            Find movies
          </span>
          <span className="font-['Bebas_Neue'] text-5xl text-center lg:text-start lg:text-8xl font-normal top-grad">
            TV shows and more
          </span>
          <p className="py-8 lg:px-0 text-center xl:text-start px-4 text-lg line-clamp-4 lg:line-clamp-none">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            nisi nesciunt, exercitationem voluptatibus dolores ea consequuntur,
            incidunt commodi odio minima alias voluptas itaque eaque, aliquid
            et. Explicabo deserunt non necessitatibus.
          </p>
          <button>
            Watch tutorial
          </button>
        </div>

        <div className="relative hidden xl:flex flex-col p-2 h-[45rem] w-[50%] bottom-0 right-0 xl:border-b-[1px] xl:border-linesColor">
          <div className="relative flex w-full h-full items-center justify-center">
            <div className="absolute w-[28rem] bottom-0 left-0 z-10">
              <div className="relative w-full h-full">
                <img
                  className="absolute top-0 bottom-0 my-auto right-0 left-0 mx-auto w-30 h-30 object-cover"
                  src={images.playIc}
                  alt=""
                />
                <img
                  className="w-full h-full object-cover"
                  src={images.topFrontImg}
                  alt=""
                />
              </div>
            </div>
            <img
              className="absolute w-[28rem] top-0 right-0"
              src={images.topBackImg}
              alt=""
            />
          </div>
          <div className="absolute bottom-0 right-0 w-2 h-2 -mb-1 rounded-full inline-flex bg-linesColor"></div>
        </div>
      </div>
    </>
  )
}

export default Hero