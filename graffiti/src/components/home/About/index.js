import React, { Component } from 'react'
import './style.css'

class About extends Component {
  render(){
    return (
<div className="About white-block">
  <div className="row">
    <div className="col-lg-2"></div>
    <div className="col-lg-8 pr-0">
      <h1>Why is Graffiti special?</h1>
      <div className="About_reason_1">
        <h2>"스타트업의 제품이나 기술, 아이디어가 아닌</h2>
        <h2>스토리와 멘탈리티가 중심이 되는 페스티벌"</h2>
      </div> 
      <div className="About_reason_2">
        <h2>"오직 대학생들의 힘으로 운영되는</h2>
        <h2>열정이 넘치는 페스티벌"</h2>
      </div>
      <div className="About_reason_3">
        <h2>"20대들을 대상으로 한,</h2>
        <h2>창업의 진입 장벽을 낮추는 페스티벌"</h2>
      </div>
    </div>
    <div className="col-lg-2 pr-0"></div>
  </div>
</div>
    );
  }
}

export default About