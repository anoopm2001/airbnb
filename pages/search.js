import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'
function Search({ searchData }) {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query
  const modifiedStartDate = format(new Date(startDate), 'dd MMM')
  const modifiedEndDate = format(new Date(endDate), 'dd MMM')
  return (
    <div>
      <Header
        placeholder={`${location} | ${modifiedStartDate} - ${modifiedEndDate}| ${noOfGuests} guests`}
      />
      <header>
        <title>Search</title>
        <link rel="icon" href="/favicon.ico" />
      </header>
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays for {noOfGuests} number of guests from{' '}
            {modifiedStartDate} -{modifiedEndDate}
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>
          <div className="mb-5 flex space-x-3  whitespace-nowrap px-2 text-gray-600">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div>
            {searchData.map(
              ({ location, img, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="min-w-[600px]">
          <Map searchData={searchData} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search
export async function getServerSideProps() {
  const searchData = await fetch('https://links.papareact.com/isz').then(
    (response) => response.json()
  )

  return {
    props: {
      searchData,
    },
  }
}
