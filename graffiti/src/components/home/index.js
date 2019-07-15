import React, { Component } from 'react';
import MainImage from './MainImage';
import About from './About';
import FAQ from './FAQ';
import Contact from './Contact';
import Program from './Program';
import Timetable from './Timetable';
import Sponsor from './Sponsor';

class Home extends Component {
  render() {
    return (
      <div>
        <MainImage />
        <About />
        <Program />
        <Timetable />
        <Sponsor />
        <FAQ />
        <Contact />
      </div>
    )
  }
}

export default Home