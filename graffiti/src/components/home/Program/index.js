import React from 'react'
// import { Link } from 'react-router-dom'
import timetable from '../../../assets/img/timetable.png'

const Program = () => {
    return (
<section id="program">
  <div className="container">
    <h1>Our Program</h1>
    <div className="row program">
      <div className="col-md-6 text-center">
        <h3>1부</h3>
        <div className="icon">
        <i class="fas fa-money-check-alt"></i>
        </div>
        <h3>투자게임</h3>
        <p>창업가들의 ‘Mentality’, 즉 스타트업의 성장 스토리와 고민들을 나누는 시간으로 서바이벌 형식의 투자게임이 진행됩니다. 총 4라운드와 결승으로 구성되어 있으며, 참가자들은 매 라운드마다 기업을 방문합니다. 각 라운드는 주제가 정해져 있으며, 참가자는 이에 해당하는 각 기업의 설명이나 스토리를 듣고 투자 금액과 여부를 결정합니다. 이를 기반으로 기업들의 등급이 매겨지며 높은 등급의 기업에게 투자한 참가자는 높은 배당금을 받게 됩니다. 우승 기업과 참가자에게는 상금이 지급됩니다.</p>
      </div>
      <div className="col-md-6 text-center">
        <h3>2부</h3>
        <div className="icon"><i class="fas fa-glass-cheers"></i></div>
        <h3>네트워킹 파티</h3>
        <p>참가하는 모든 사람들 사이의 네트워킹 파티로 대전 시내에서 진행됩니다. 1부 활동 중 선택을 통해 참가기업과 참가자간의 대화 기회가 주어지며, 서로간의 네트워크를 구축할 수 있습니다. 또한, 참가한 모든 사람들은 하루의 일정을 마무리하고 파티를 즐기며 춤을 추거나 새로운 사람들을 만날 수 있습니다.</p>
      </div>
    </div>
    <div className="row time">
      <div className="col-md-6 text-center align-middle">
        <h3>날짜: 2019년 08월 2일 금요일</h3>
        <h3>장소: 대전 KAIST 본원 류근철 스포츠 컴플렉스(N3) 및 창의학습관(E11)</h3>
      </div>
      <div className="col-md-6 text-center">
        <img src={timetable} alt="timetable"/>
      </div>
    </div>
  </div>
</section>
    )
}

export default Program