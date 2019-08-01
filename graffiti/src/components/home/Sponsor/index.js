import React, { Component } from 'react'
import './style.css';

import BluepointLogo from '../../../assets/logos/logo_bluepoint.svg';
import BuzzvilLogo from '../../../assets/logos/logo_buzzvil.svg';
import Class101Logo from '../../../assets/logos/logo_class101.svg';
import EventusLogo from '../../../assets/logos/logo_eventus.svg';
import FripLogo from '../../../assets/logos/logo_frip.svg';
import HelloddLogo from '../../../assets/logos/logo_hellodd.svg';
import InbodyLogo from '../../../assets/logos/logo_inbody.svg';
import MiraeholdingsLogo from '../../../assets/logos/logo_miraeholdings.svg';
import NcsoftLogo from '../../../assets/logos/logo_nc.svg';
import KaistStartupLogo from '../../../assets/logos/logo_startup2.png';
import SoftbankLogo from '../../../assets/logos/logo_sb.svg';
import KisdeLogo from '../../../assets/logos/logo_kisde.svg';

const SponsorLogo = src => (
  <div className="sponsor-logo">
    <img src={src}/>
  </div>
)

class Sponsor extends Component {
    render(){
      return (
        <div className="Sponsor">
          <h1>Sponsors</h1>
          <div className="sponsorship-board">
            <div className="container">
              <div className="row">
                <div className="col">
                  <img className="sponsorship-logo" src={BluepointLogo} alt="" />
                </div>
                <div className="col">
                  <img className="sponsorship-logo" src={BuzzvilLogo} alt="" />
                </div>
                <div className="col">
                  <img className="sponsorship-logo" src={Class101Logo} alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img className="sponsorship-logo" src={EventusLogo} alt="" />
                </div>
                <div className="col">
                  <img className="sponsorship-logo" src={FripLogo} alt="" />
                </div>
                <div className="col">
                  <img className="sponsorship-logo" src={HelloddLogo} alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img className="sponsorship-logo" src={InbodyLogo} alt="" />
                </div>
                <div className="col">
                  <img className="sponsorship-logo" src={MiraeholdingsLogo} alt="" />
                </div>
                <div className="col">
                  <img className="sponsorship-logo" src={NcsoftLogo} alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img className="sponsorship-logo" src={KaistStartupLogo} alt="" />
                </div>
                <div className="col">
                  <img className="sponsorship-logo" src={SoftbankLogo} alt="" />
                </div>
                <div className="col">
                  <img className="sponsorship-logo" src={KisdeLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default Sponsor;