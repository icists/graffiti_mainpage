import React, { Component } from 'react';
import './style.css';

import { Programs } from './data';


const ProgramCard = Icon => (title, intro) => (
  <div className="col-lg-3 pr-0" key={title}>
    <i className={Icon}/>
    <h2>{title}</h2>
    <p>{intro}</p>
  </div>
);

class Program extends Component {
  render() {
    return (
      <div className="Program graffiti-block">
        <div className="row">
          <div className="col-lg-2 pr-0"></div>
          <div className="col-lg-8 pr-0">
            <div className="row">
              {Programs.map(p => ProgramCard(p.icon)(p.title, p.intro))}
            </div>
          </div>
          <div className="col-lg-2 pr-0"></div>
        </div>
      </div>
    );
  }
}

export default Program;