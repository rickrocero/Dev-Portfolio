import React from "react"
import "@fontsource/quicksand/400.css"

// import Navbar from '../components/Navbar'
import Navbar from '../components/Navbar/navbar'
import NavMenu from "../components/NavMenu"
import Intro from '../components/Intro'
import ProjectContainer from '../components/ProjectContainer'
import Footer from '../components/Footer'
import About from '../components/about'
import './index.scss'

const IndexPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      {/* <NavMenu /> */}
      <Intro />
      <ProjectContainer title="Projects"/>
      <About title="About" />
      <Footer />
    </>
  )
}

export default IndexPage
