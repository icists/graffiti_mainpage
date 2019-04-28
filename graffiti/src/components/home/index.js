import React, { Component } from 'react'
import MainImage from './MainImage'
import About from './About'
import Program from './Program'
import Team from './Team'
import Price from './Price'
import Contact from './Contact'
import Footer from './Footer'

class Home extends Component {
    render() {
        return (
            <div>
                <MainImage />
                <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                <About />
                <Program />
                <Price />
                <Team />
                <Contact />
                <Footer />
                </div>
                <div className="col-lg-2"></div>
                </div>
            </div>
        )
    }
}

export default Home