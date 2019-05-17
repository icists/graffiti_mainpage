import React, { Component } from 'react'
import timetable from '../../../assets/img/timetable.png'

const StandartPart1 = () => {
  return (
  <div className="part1-standard">
    <h3>1부</h3>
    <div className="icon">
    <i class="fas fa-money-check-alt"></i>
    </div>
    <h3>투자게임</h3>
    <p>창업가들의 ‘Mentality’, 즉 스타트업의 성장 스토리와 고민들을 나누는 시간으로 서바이벌 형식의 투자게임이 진행됩니다. 총 4라운드와 결승으로 구성되어 있으며, 참가자들은 매 라운드마다 기업을 방문합니다. 각 라운드는 주제가 정해져 있으며, 참가자는 이에 해당하는 각 기업의 설명이나 스토리를 듣고 투자 금액과 여부를 결정합니다. 이를 기반으로 기업들의 등급이 매겨지며 높은 등급의 기업에게 투자한 참가자는 높은 배당금을 받게 됩니다. 우승 기업과 참가자에게는 상금이 지급됩니다.</p>
  </div>
  )
}

const HoverPart1 = () => {
  return (
    <div className="part1-hover">
      <p>장소 : </p>
      <p>시간 : </p>
      <h3>구성</h3>
      <h3>활동내용</h3>
      <h3>결승 및 키워드</h3>
    </div>
  )
}

const StandardPart2 = () => {
  return (
    <div className="part2-standard">
      <h3>2부</h3>
      <div className="icon"><i class="fas fa-glass-cheers"></i></div>
      <h3>네트워킹 파티</h3>
      <p>참가자-스타트업, 참가자-VC가 일대일로 만날 수 있는 Matchmaking부터 신나는 분위기 속에서 다같이 즐길 수 있는 High Tension 네트워킹까지 진행됩니다. </p>
    </div>
  )
}

const HoverPart2 = () => {
  return (
    <div className="part2-hov">
      <p>장소 : </p>
      <p>시간 : </p>
      <p>저녁식사 : </p>
    </div>
  )
}

export class Program extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Part1isHover : false,
      Part2isHover : false
    };

    this.Part1onClickHandler = this.Part1onClickHandler.bind(this);
  }

  Part1onClickHandler = () => {
    setTimeout(() => {
      this.setState({
        Part1isHover: !this.state.Part1isHover
      });
    }, 100);
  }

  Part2onClickHandler = () => {
    setTimeout(() => {
      this.setState({
        Part2isHover: !this.state.Part2isHover
      })
    }, 100);
  }

  render() {
    return (
      <section id="program">
        <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
        <h1>Our Program</h1>
          <div className="row program">
            <div className="col-md-6 text-center"
              onClick={this.Part1onClickHandler}
            >
              {
                this.state.Part1isHover ? <HoverPart1 /> : <StandartPart1 />
              }
            </div>
            <div className="col-md-6 text-center"
              onClick={this.Part2onClickHandler}
            >
              {
                this.state.Part2isHover ? <HoverPart2 /> : <StandardPart2 />
              }
            </div>
          </div>
          {/* <div className="row time">
            <div className="col-md-6 text-center align-middle">
              <h3>날짜: 2019년 08월 2일 금요일</h3>
              <h3>장소: 대전 KAIST 본원 류근철 스포츠 컴플렉스(N3) 및 창의학습관(E11)</h3>
            </div>
            <div className="col-md-6 text-center">
              <img src={timetable} alt="timetable"/>
            </div>
          </div> */}
        </div>
        <div className="col-lg-2"></div>
        </div>
      </section>
    )
  }
}

export default Program