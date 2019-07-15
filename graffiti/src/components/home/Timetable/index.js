import React, { Component } from 'react'
import timetable from '../../../assets/img/timetable.png'
import './style.css'

class Timetable extends Component {
    render(){
        return (
<div className="Timetable white-block">
  <div className="row">
    <div className="col-lg-3"></div>
    <div className="col-lg-6 pr-0">
      <h1>Timetable</h1>
      <img src={timetable} alt="timetable" style={{width:'100%', padding: '0 10px'}} className="Timetable_img"/>
    </div>
    <div className="col-lg-3 pr-0"></div>
  </div>
</div>
        );
    }
}

export default Timetable