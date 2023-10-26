import HeroSection from "../HeroSection";

import React from 'react'
import MySkils from "../MySkils";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonials from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MySkils />
      <AboutMe />
      <MyPortfolio />
      <Testimonials />
      <ContactMe />
      <Footer />
    </>
  )
}

export default Home
