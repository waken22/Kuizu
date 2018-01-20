import React, { Component } from 'react'

import Slider from 'react-slick'

class SimpleSlider extends Component {
  render() {
    var settings = {
      autoplay: true,
      infinite: true,
      autoplaySpeed: 3900,
      speed: 1100,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase:'linear',
      draggable:false,
      arrows:false,
      useCSS: true
    }
    return (
      <div>
      <Slider {...settings}>
        <div className="slider">
          <h1 className="display-3 phrases">Absolutely free</h1>
          <h1 className="display-5 phrases">Make your own rooms now!</h1>
        </div>
        <div className="slider">
          <h1 className="display-3 phrases">It's in Real Time</h1>
          <h1 className="display-5 phrases">Compite now with your friends!</h1>
        </div>
        <div className="slider">
          <h1 className="display-3 phrases">Easy Sign Up</h1>
          <h1 className="display-5 phrases">Just do it! Don't wait more!</h1>
        </div>
      </Slider>
      </div>
    )
  }
}


export default SimpleSlider