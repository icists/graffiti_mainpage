import React from 'react'
import slide from '../../assets/img/slide2.jpg'

const Slider = () => {
    return (
        
<div id="slider">
  <div id="headerSlider" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#headerSlider" data-slide-to="0" class="active"></li>
      <li data-target="#headerSlider" data-slide-to="1"></li>
      <li data-target="#headerSlider" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      {/* <div class="carousel-item active">
        <img class="d-block img-fluid" src={slide1} />
        <div class="carousel-caption">
          <h5>How to Make Startup</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block img-fluid" src={slide2} />
        <div class="carousel-caption">
          <h5>How to Make Startup</h5>
        </div>
      </div> */}
      <div class="carousel-item active">
        <img class="d-block img-fluid" alt="graffiti" src={slide} />
        <div class="carousel-caption">
          <h4>So what get started!</h4>
          <h4>So what! Start-up!</h4>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
    )
}

export default Slider