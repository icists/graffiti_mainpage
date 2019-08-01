import React from 'react';
import SpeakersImage from '../../../assets/img/speakers.jpg';

import './Speakers.css';

const Speakers = () => {
  return (
    <div className="gray-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-3"/>
        <div className="col-lg-6">
          <h1>Speakers</h1>
          <img id="speakers-image" src={SpeakersImage}/>
        </div>
        <div className="col-lg-3"/>
      </div>
    </div>

    </div>
  );
}

export default Speakers;