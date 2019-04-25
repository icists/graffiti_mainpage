import React, { Component } from 'react'
import Slider from './Slider'
import About from './About'
import Program from './Program'
import Team from './Team'
import Promo from './Promo'
import Price from './Price'

class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <About />
                <Program />
                <Team />
                <Promo />
                <Price />
            </div>
        )
    }
}

export default Home