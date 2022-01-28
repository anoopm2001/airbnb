import Image from 'next/image'
import React from 'react'

function BigCard({ img, title }) {
  return (
    <div className="transform cursor-pointer transition duration-300 ease-out hover:scale-105">
      <div className="relative h-80 w-80 ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  )
}

export default BigCard
