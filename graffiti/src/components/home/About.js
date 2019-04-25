import React from 'react'
// import { Link } from 'react-router-dom'

const About = () => {
    return (
<section id="about">
<div className="container">
<div className="row">
<div className="col-md-6">
<h2>About Us</h2>
<div className="about-content">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</div>
  <button type="button" className="btn btn-primary">Read more</button>
</div>  
<div className="col-md-6 skills-bar">
  <p>CP</p>
  <div className="progress">
    <div className="progress-bar" style={{ width: '80%' }}>80%</div>
  </div>
  <p>PR</p>
  <div className="progress">
    <div className="progress-bar" style={{ width: '85%' }}>85%</div>
  </div>
  <p>GP</p>
  <div className="progress">
    <div className="progress-bar" style={{ width: '75%' }}>75%</div>
  </div>
  <p>FI</p>
  <div className="progress">
    <div className="progress-bar" style={{ width: '50%' }}>50%</div>
  </div>
  <p>TD</p>
  <div className="progress">
    <div className="progress-bar" style={{ width: '100%' }}>100%</div>
  </div>
</div>  
</div>
</div>
</section>
    )
}

export default About