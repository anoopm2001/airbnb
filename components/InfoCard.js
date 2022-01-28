import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

function InfoCard({ img, title, description, star, price, total, location }) {
  return (
    <div className="flex cursor-pointer border-b py-7 px-2 pr-4 transition duration-200 ease-out first:border-t hover:shadow-lg">
      <div className="relative  ml-1 h-24 w-40 flex-shrink-0 md:h-52 md:w-80">
        <Image
          layout="fill"
          src={img}
          className="rounded-2xl"
          objectFit="cover"
        />
      </div>
      <div className=" relative ml-4 flex flex-grow flex-col md:ml-9 lg:ml-14">
        <div className="flex justify-between">
          <p className=" text-xs text-gray-600">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="w-10 border-b pt-2" />
        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>
        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className=" h-5 text-red-400 " />
            {star}
          </p>
        </div>
        <div>
          <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
          <p className="text-right font-extralight">{total}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
