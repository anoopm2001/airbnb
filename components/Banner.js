import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg md:text-lg">
          Not sure where to go?Perfect.
        </p>
        <button className="my-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90 md:px-10 md:py-4">
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
