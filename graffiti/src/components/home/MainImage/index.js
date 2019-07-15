import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import mainimg from '../../../assets/img/graffiti_main.png'
import './style.css'

export class MainImg extends Component {
  render() {
    return (
      <div className="MainImg">
        <div className="row">
          <img src={mainimg} alt=""/>
        </div>
      </div>
    )
  }
}

export default MainImg
