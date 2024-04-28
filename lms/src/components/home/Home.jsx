import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Testimonal from "./testimonal/Testimonal"
import Hprice from "./Hprice"
import Hblog from "./Hblog"

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutCard />
        <HAbout/>
        <Testimonal />
        <Hblog />
        <Hprice />
    </div>
  )
}

export default Home
