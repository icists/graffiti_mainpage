import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Navbar = () => {
    return (
    <section id="nav-bar" className="row pl-0 pr-0">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to='/' className="navbar-brand"><img src={logo} /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav1-item">
                <Link to='/' className="nav-link">HOME</Link>
                </li>
                <li className="nav-item">
                <Link to='/apply' className="nav-link">APPLY</Link>
                </li>
                <li className="nav-item">
                <Link to='/contact' className="nav-link">CONTACT</Link>
                </li>
            </ul>
            </div>
        </nav>        
        </div>
        <div className="col-lg-2"></div>
    </section>
    )
}

export default Navbar