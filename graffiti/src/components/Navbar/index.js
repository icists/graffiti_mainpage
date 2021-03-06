import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Navbar = () => {
    return (
    <section id="nav-bar" className="row pl-0 pr-0">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 pl-0 pr-0">
        <nav className="navbar navbar-expand-lg navbar-light" style={{padding: '0'}}>
            <Link to='/' className="navbar-brand"><img style={{marginTop: '7px'}} src={logo} alt="graffiti logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                {/* <li className="nav1-item">
                <Link to='/' className="nav-link">HOME</Link>
                </li> */}
                {/* <li className="nav-item">
                <Link to='#contact' className="nav-link">CONT</Link>
                </li> */}
                <li className="nav-item" style={{textAlign:'right', marginTop: '3px', marginBottom: '3px'}}>
                <a href="http://event-us.kr/7541" target="blank"><button type="button" class="btn btn-info">창업팀 Apply</button></a>
                </li>
                <li className="nav-item" style={{textAlign:'right', marginTop: '3px', marginBottom: '3px'}}>
                <a href="http://event-us.kr/7517" target="blank"><button type="button" class="btn btn-danger">참가자 Apply</button></a>
                </li>
            </ul>
            </div>
        </nav>        
        </div>
        <div className="col-lg-2 pr-0"></div>
    </section>
    )
}

export default Navbar