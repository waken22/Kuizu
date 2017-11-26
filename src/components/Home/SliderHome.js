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
        <div className="Slider">
          <h1 className="display-3 Phrases">Absolutely free</h1>
          <h1 className="display-5 Phrases">Make your own rooms now!</h1>
        </div>
        <div className="Slider">
          <h1 className="display-3 Phrases">It's Multiplayer</h1>
          <h1 className="display-5 Phrases">Compite now with your friends!</h1>
        </div>
        <div className="Slider">
          <h1 className="display-3 Phrases">It's educative</h1>
          <h1 className="display-5 Phrases">Learn answering questions!</h1>
        </div>
        <div className="Slider">
          <h1 className="display-3 Phrases">Easy Sign Up</h1>
          <h1 className="display-5 Phrases">Just do it! Don't wait more!</h1>
        </div>
      </Slider>
      </div>
    )
  }
}


export default SimpleSlider