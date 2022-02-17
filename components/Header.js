import Image from 'next/image'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/router'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'
function Header({ placeholder }) {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [searchInput, setSearchInput] = useState('')
  const [numberOfGuests, setnumberOfGuests] = useState(1)
  const router = useRouter()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-1 bg-white p-5 shadow-md md:grid-cols-3 md:px-10">
      <div
        onClick={() => router.push('/')}
        className="relative my-auto hidden h-10 cursor-pointer items-center md:inline-flex"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center rounded-full border-2  py-2 px-3 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow bg-transparent pl-5 text-sm text-gray-600 focus:outline-none"
          placeholder={placeholder}
        ></input>
        <SearchIcon className="  h-6 cursor-pointer rounded-full bg-red-400 p-1 text-white lg:h-8 lg:p-2 " />
      </div>
      <div className=" hidden items-center justify-end space-x-4 text-gray-500 md:inline-flex ">
        <p className="sm:hidden lg:inline-flex">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer " />
        <div className="flex  items-center space-x-2 rounded-full border-2 p-2 ">
          <MenuIcon className="h-6 cursor-pointer" />

          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="col-span-3 mx-auto flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="mb-4 flex items-center border-b">
            <h2 className="flex-grow text-2xl font-semibold">
              Number Of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg text-red-400 focus:outline-none"
              value={numberOfGuests}
              onChange={(e) => setnumberOfGuests(e.target.value)}
            />
          </div>
          <div className="flex justify-evenly">
            <button
              className="text-gray-600"
              onClick={() => setSearchInput('')} //doubt
            >
              Cancel
            </button>
            <button
              onClick={() =>
                router.push({
                  pathname: '/search',
                  query: {
                    location: searchInput,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noOfGuests: numberOfGuests,
                  },
                })
              }
              className="text-red-400"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
