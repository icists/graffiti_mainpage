import React from 'react';
import poster from '../../../assets/img/poster.jpg'

const About = () => {
    return (
<section id="about" className="row">
  <div className="col-lg-2"></div>
  <div className="col-lg-8">
  <div className="row">
  <div className="col-lg-4 text-center">
    <h2 className="text-info text-center text-uppercase">About Graffiti</h2>
    <hr/>
  </div>
  <div className="col-lg-8">
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
    </div>
  </div>
  </div>
  <div className="row">
  <div className="col-lg-12">
  <h3 className="text-uppercase">vision</h3>
  <h3 className="text-uppercase">mission</h3>
  </div>
  </div>
  <div className="row">
    <div className="col-lg-12 text-center">
    <img src={poster} alt="graffiti poster"/>
    </div>
  </div>
  </div>
  <div className="col-lg-2"></div>
</section>
    )
}

export default About