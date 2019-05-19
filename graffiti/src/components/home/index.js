import React, { Component } from 'react'
import MainImage from './MainImage'
// import About from './About'
// import Program from './Program'
// import Price from './Price'
import FAQ from './FAQ'
import Contact from './Contact'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <MainImage />
        {/* <About />
        <Program />
        <Price /> */}
        <FAQ />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Home