import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Navbar = () => {
    return (
        <section id="nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img src={logo} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav1-item">
                    <a className="nav-link" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#about">ABOUT US</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#program">PROGRAMS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#price">PRICE PLANS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#apply">APPLY</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#team">OUR TEAM</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#promo">ICISTS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contact">CONTACT</a>
                    </li>
                </ul>
                </div>
            </nav>
        </section>
    )
}

export default Navbar