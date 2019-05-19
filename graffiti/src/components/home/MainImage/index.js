import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import slide from '../../../assets/img/slideimg.jpg'

export class MainImg extends Component {
  render() {
    return (
      <div id="main-img">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
          <div>
                <p className="font-weight-bold text-uppercase main-img-bottom">Whatever you do, Be Crazy!</p>
                {/* <Link to='/' style={{marginRight : '20px'}}><button type="button" class="btn btn-primary">Apply</button></Link> */}
                <Link to='/'><button type="button" class="btn btn-primary">Contact Us</button></Link>
          </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    )
  }
}

export default MainImg
