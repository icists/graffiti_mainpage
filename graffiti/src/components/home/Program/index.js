import React, { Component } from 'react'
import './style.css'

class Program extends Component {
    render(){
        return (
<div className="Program graffiti-block">
  <div className="row">
    <div className="col-lg-2 pr-0"></div>
    <div className="col-lg-8 pr-0">
      <div className="row">
        <div className="col-lg-3 pr-0">
          <i className="fas fa-chart-line fa-10x icon"></i>
          <h2>투자게임</h2>
          <p>투자 형식의 게임을 통해 창업팀의 스토리, 창업가로서 필요한 역량을 참가자들에게 전달합니다.</p>
        </div>
        <div className="col-lg-3 pr-0">
          <i class="fas fa-microphone-alt fa-10x icon"></i>
          <h2>토크 콘서트</h2>
          <p>사회의 전면에서 활동하고 있는 스타트업 선배들의 진솔한 talk를 들어보는 토크쇼입니다.</p>
        </div>
        <div className="col-lg-3 pr-0">
          <i class="far fa-handshake fa-10x icon"></i>
          <h2>Matchmaking</h2>
          <p>창업팀과 참가자가 면담 형식으로 대화하며 정보 공유와 함께 더 나아가 깊은 관계를 형성하는 시간입니다.</p>
        </div>
        <div className="col-lg-3 pr-0">
          <i class="fas fa-glass-cheers fa-10x icon"></i>
          <h2>After Party</h2>
          <p>신나는 분위기 속에서 주류와 함께 페스티벌의 마지막을 즐길 수 있습니다.</p>
        </div>
      </div>
    </div>
    <div className="col-lg-2 pr-0"></div>
  </div>
</div>
        );
    }
}

export default Program