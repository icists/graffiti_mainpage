import React, { Component } from 'react'
import MainImage from './MainImage'
import About from './About'
import Program from './Program'
// import Team from './Team'
import Price from './Price'
import Contact from './Contact'
import Footer from './Footer'

class Home extends Component {
    render() {
        return (
            <div>
                <MainImage />
                <About />
                <Program />
                <Price />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Home