import * as React from "react"

import Navbar from '../components/navbar'
import Intro from '../components/intro'
import Footer from '../components/Footer/footer'
import About from '../components/about'
import './index.scss'


const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Footer />
    </div>
  )
}

export default IndexPage
