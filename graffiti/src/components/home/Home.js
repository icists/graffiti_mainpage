import React, { Component } from 'react'
import Slider from './Slider'
import About from './About'
import Program from './Program'
import Team from './Team'
import Promo from './Promo'
import Price from './Price'
import Contact from './Contact'
import Footer from './Footer'

class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <Promo />
                <About />
                <Program />
                <Price />
                <Team />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Home