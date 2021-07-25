import React from "react"
import "@fontsource/quicksand/400.css"

import Navbar from '../components/Navbar'
import Intro from '../components/Intro/intro'
import ProjectContainer from '../components/ProjectContainer'
import Footer from '../components/Footer'
import About from '../components/about'
import './index.scss'

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <ProjectContainer />
      <About />
      <Footer />
    </>
  )
}

export default IndexPage
