import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Sections/Hero'
import OurTeam from '../components/Sections/OurTeam'
import Services from '../components/Sections/Services'


function Index() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Services />
      <Footer />
    </React.Fragment >
  )
}

export default Index