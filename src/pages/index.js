import React from "react"
import "@fontsource/quicksand/400.css"

import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import ProjectContainer from '../components/ProjectContainer'
import Footer from '../components/Footer'
import About from '../components/About'
import Head from '../components/Head'
import './index.scss'

const IndexPage = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Intro />
      <ProjectContainer title="Projects" />
      <About title="About" />
      <Footer />
    </>
  )
}

export default IndexPage
