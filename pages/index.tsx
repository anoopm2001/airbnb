import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import BigCard from "../components/BigCard"
import HugeCard from "../components/HugeCard"
import Footer from "../components/Footer"
import { Calendar } from 'react-date-range';
import { useState } from 'react'


export default function Home({ exploreData,bigCards }) {
 
  
  return (
    <div >
      <Head>
        <title>Airbnb-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header placeholder="Start your Search"/>
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 ">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map(({ img, distance, location })=>(<SmallCard
            key={img} img={img} distance={distance} location={location} />))}
          </div>
          <h2 className="text-4xl font-semibold py-8 ">Live Anywhere</h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3" >
            {bigCards.map(({ img, title }) => (<BigCard img={img} title={title} key={img }/>))}
          </div>
        </section>
        
        <HugeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="Wishlists curated by Airbnb" buttonText="Get Inspired" />
      </main>

      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then((response) => response.json());
  const bigCards = await fetch("https://links.papareact.com/zp1").then((response) => { return response.json() } );
  return {
    props: {
      exploreData,
      bigCards
    }
  }
}


//if use curly braces in arrow functions u have to use return keyword but if u use round brackets it is automatically returned