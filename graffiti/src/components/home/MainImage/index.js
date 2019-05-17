import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import slide from '../../../assets/img/slideimg.jpg'

export class MainImg extends Component {
  render() {
    return (
      <div id="main-img">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
          <div>
                <p className="font-weight-bold text-uppercase main-img-top">So what get started!</p>
                <p className="font-weight-bold text-uppercase main-img-bottom">So what! Start-up!</p>
                <Link to='/' style={{marginRight : '20px'}}><button type="button" class="btn btn-primary">Apply</button></Link>
                <Link to='/'><button type="button" class="btn btn-primary">Contact Us</button></Link>
          </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    )
  }
}

export default MainImg
