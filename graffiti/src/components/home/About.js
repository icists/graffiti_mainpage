import React from 'react'
import poster from '../../assets/img/poster.jpg'

const About = () => {
    return (
<section id="about">
<div className="container">
  <div className="row">
    <div className="col-md-6 text-center">
      <img src={poster} alt="graffiti poster"/>
    </div>
    <div className="col-md-6">
    <h2 className="text-info text-center text-uppercase">About Graffiti</h2>
    <hr/>
    <div className="about-content">
      <h3 className="text-uppercase">Graffiti</h3>
      <p>
      <h6>
      [명사]자유로운 영혼을 가진 예술가들이 캔버스와 같은 제약을 뛰어넘어 자신이 원하는 장소에, 자신이 원하는 바를 표현한 그림
      </h6>
      <h6>
      NEW!! [명사] 참가자가 목표하는 분야에서 원하는 것을 해나가는 스타트업 창업가의 도전적이고 진취적인 마인드를 배울 수 있는 장
      </h6>
      </p>
      <h3 className="text-uppercase">Vision & Mission</h3>
      <p>
        <ul>
          <li>
          비전:창업의 과정과 그 속에서 마주하는 고민, 그리고 깨달음을 전달하여, 창업에 대한 불확실성에 확신을 심어준다.
          </li>
          <li>미션:</li>
            <ol>
              <li>창업가의 멘탈리티가 담긴 스토리를 '재미있게' 전달하는 GRAFFITI 스타트업 페스티벌을 매년 개최한다.</li>
              <li>지속적인 창업 생태계의 네트워크를 형성한다.</li>
              <li>참가자가 미래에 창업가로 참가하는 창업 선순화 구조를 형성한다.</li>
            </ol>
        </ul>
      </p>
      
    </div>
      {/* <button type="button" className="btn btn-primary">Read more</button> */}
    </div>
  </div>
</div>
</section>
    )
}

export default About